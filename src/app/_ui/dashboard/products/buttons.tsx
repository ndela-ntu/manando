import { Icon } from "@aws-amplify/ui-react";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { ProductState, deleteProduct } from "@/app/_lib/actions";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function UpdateProduct({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/products/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <Icon ariaLabel="edit" as={CiEdit} size={10} />
    </Link>
  );
}

export function DeleteProduct({ id, image }: { id: string; image: string }) {
  const router = useRouter();

  const initialState = { message: null, errors: {}, success: false };
  const deleteProductWithIdAndImage = deleteProduct.bind(null, id, image);
  const [state, dispatch] = useFormState<ProductState, FormData>(
    deleteProductWithIdAndImage,
    initialState
  );

  useEffect(() => {
    if (state.success) {
      router.refresh();
    }
  }, [state]);

  return (
    <form action={dispatch}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <Icon ariaLabel="delete" as={MdDelete} size={10} />
      </button>
    </form>
  );
}
