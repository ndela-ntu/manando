import { getUrl, remove, uploadData } from "aws-amplify/storage";
import { generateClient } from "aws-amplify/api";
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "../../graphql/mutations";
import { v4 as uuidv4 } from "uuid";
import { listProducts } from "@/graphql/queries";

const client = generateClient();

export async function uploadAndGetURL(file: File) {
  try {
    const type = file.type.split("/")[1];
    const result = await uploadData({
      key: `${uuidv4()}.${type}`,
      data: file,
      options: {
        accessLevel: "guest",
      },
    }).result;

    if (result) {
      let getUrlResult = await getUrl({ key: result.key });

      return getUrlResult.url;
    }

    return null;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function updateProductAction(
  id: string,
  name: string,
  description: string,
  price: number,
  quantity: number,
  image_url: string
) {
  try {
    const updatedProduct = await client.graphql({
      query: updateProduct,
      variables: {
        input: {
          id,
          name,
          description,
          price,
          quantity,
          image: image_url.split("?")[0],
        },
      },
    });
  } catch (error) {
    console.log("Error:", error);
  }
}

export async function createProductAction(
  name: string,
  description: string,
  price: number,
  quantity: number,
  image_url: string
) {
  try {
    const newProduct = await client.graphql({
      query: createProduct,
      variables: {
        input: {
          name,
          description,
          price,
          quantity,
          image: image_url.split("?")[0],
        },
      },
    });
  } catch (error) {
    console.log("Error:", error);
  }
}

export async function deleteProductAction(id: string) {
  try {
    const result = await client.graphql({
      query: deleteProduct,
      variables: {
        input: {
          id,
        },
      },
    });
  } catch (error) {
    console.error("Error: ", error);
  }
}

export async function deleteImage(imageKey: string) {
  try {
    await remove({ key: imageKey });
  } catch (error) {
    console.error("Error:", error);
  }
}
