import { generateClient } from "aws-amplify/api";
import { z } from "zod";
import {
  createProductAction,
  deleteImage,
  deleteProductAction,
  updateProductAction,
  uploadAndGetURL,
} from "./data";
import { Product } from "./definitions";
import { StyledString } from "next/dist/build/swc";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const client = generateClient();

const ProductSchema = z.object({
  id: z.string(),
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  price: z.coerce.number().gt(0, { message: "Price should be greater than 0" }),
  quantity: z.coerce
    .number()
    .gte(0, { message: "Quantity should be greater than or equal to 0" }),
  image: z.string(),
  /*image: z
    .instanceof(File)
    .refine((file: File) => file.size !== 0, "Image is required")
    .refine((file) => {
      return !file || file.size <= 1024 * 1024 * 3;
    }, "File size must be less than 3MB"),*/
});

export type ProductState = {
  errors?: {
    image?: string[];
    name?: string[];
    description?: string[];
    price?: string[];
    quantity?: string[];
  };
  message?: string | null;
  success: boolean;
};

const CreateProductSchema = ProductSchema.omit({ id: true });
const UpdateProductSchema = ProductSchema.omit({ id: true });

export async function createProduct(
  prevState: ProductState,
  formData: FormData
) {
  const validatedFields = CreateProductSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    price: formData.get("price"),
    quantity: formData.get("quantity"),
    image: formData.get("image"),
  });

  if (!validatedFields.success) {
    return <ProductState>{
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missed fields, failed to create product.",
      success: false,
    };
  }

  try {
    const { name, description, price, quantity, image } = validatedFields.data;

    let file = await fetch(image)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], "image", { type: blob.type });
        return file;
      });

    let url = await uploadAndGetURL(file);
    if (url) {
      await createProductAction(
        name,
        description,
        price,
        quantity,
        url.toString()
      );

      return <ProductState>{
        success: true,
      };
    } else {
      throw new Error("Failed to get image URL");
    }
  } catch (error) {
    return <ProductState>{
      message: "Error from our side! :(",
      success: false,
    };
  }
}

export async function updateProduct(
  product: Product,
  prevState: ProductState,
  formData: FormData
) {
  const updatedFields = UpdateProductSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    price: formData.get("price"),
    quantity: formData.get("quantity"),
    image: formData.get("image"),
  });

  if (!updatedFields.success) {
    return <ProductState>{
      errors: updatedFields.error.flatten().fieldErrors,
      message: "Missed fields, failed to create product.",
      success: false,
    };
  }

  try {
    const { name, description, price, quantity, image } = updatedFields.data;

    let url: URL | undefined | null;
    if (!image.startsWith("https")) {
      //Replacement
      const imageKey = product.image.split("/").pop();
      await deleteImage(imageKey ?? "");

      let file = await fetch(image)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], "image", { type: blob.type });
          return file;
        });

      url = await uploadAndGetURL(file);
      if (url) {
        await updateProductAction(
          product.id,
          name,
          description,
          price,
          quantity,
          url?.toString()
        );
      } else {
        throw new Error("Failed to get URL");
      }
    } else {
      updateProductAction(
        product.id,
        name,
        description,
        price,
        quantity,
        image
      );
    }

    return <ProductState>{
      success: true,
    };
  } catch (error) {
    return <ProductState>{
      message: "Error from our side! :(",
      success: false,
    };
  }
}

export async function deleteProduct(id: string, image: string) {
  try {
    const imageKey = image.split("/").pop();
    await deleteImage(imageKey ?? "");

    await deleteProductAction(id);

    return <ProductState>{
      success: true,
    };
  } catch (error) {
    return <ProductState>{
      message: "Error from our side! :(",
      success: false,
    };
  }
}
