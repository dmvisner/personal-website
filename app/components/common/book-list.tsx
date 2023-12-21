import React from "react";

import WithClassName from "~/types/props/with-classname";
import StarRating from "./star-rating";
import Book, {UnfinishedBook, FinishedBook} from "~/types/model/book";

type BookListProps = {
    books: Book[];
} & WithClassName;

const BookList: React.FC<BookListProps> = ({ books, className }) => {
    return (
        <ul className={"flex flex-col divide-y divide-solid" + (className || "")}>
            {books.map(x => 
                <li key={x.title}>
                    { x.status === "reading"
                        ? <UnfinishedBookListItem book={x} />
                        : <FinishedBookListItem book={x} />
                    }
                </li>
            )}
        </ul>
    );
};

type UnfinishedBookListItemProps = {
    book: UnfinishedBook;
}

const UnfinishedBookListItem: React.FC<UnfinishedBookListItemProps> = ({ book }) => {
    return (
        <div className="py-8 my-1 px-2 grid grid-cols-4 gap-4 bg-red-50">
            <div className="col-span-2 text-2xl">{book.title}</div>
            <div className="flex text-gray-500">
                <div>Started:</div>
                <div className="pl-2">start date</div>
            </div>
            <div className="col-span-3 text-gray-500 text-xl">{book.author}</div>
        </div>
    )
}

type FinishedBookListItemProps = {
    book: FinishedBook;
}

const FinishedBookListItem: React.FC<FinishedBookListItemProps> = ({ book }) => {
    return (
        <div className="py-8 my-1 px-2 grid grid-cols-4 gap-4 bg-green-50">
            <div className="col-span-2 text-2xl">{book.title}</div>
            <div>
                <StarRating size="small" length={5} rating={book.rating}/>
            </div>
            <div className="flex text-gray-500">
                <div>Started:</div>
                <div className="pl-2">start date</div>
            </div>
            <div className="col-span-3 text-gray-500 text-xl">{book.author}</div>
            <div className="flex text-gray-500">
                <div>Ended:</div>
                <div className="pl-2">start date</div>
            </div>
        </div>
    )
}

export default BookList