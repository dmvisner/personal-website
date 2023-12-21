import { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import BookList from "~/components/common/book-list";

export const meta: MetaFunction = () => {
    return [
        { title: "Derek's Reading Progress" },
        { name: "description", content: "Derek's Reading Progress" },
    ];
};

export async function loader({
    request,
    context
}: LoaderFunctionArgs) {
    return await context.BookService.getAllBooks();
}

export default function Reading() {
   const books = useLoaderData<typeof loader>();
    return (
        <div className="w-1/2">
        </div>
    );
}