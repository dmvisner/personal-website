type AnyBook = {
    id: number;
    title: string;
    author: string;
    startDate: Date;
}

export type UnfinishedBook = {
    status: "reading";
} & AnyBook

type Stars = number;

export type FinishedBook = {
    status: "finished";
    endDate: Date;
    thoughts: string;
    rating: Stars;
} & AnyBook

type Book = UnfinishedBook | FinishedBook

export default Book;

