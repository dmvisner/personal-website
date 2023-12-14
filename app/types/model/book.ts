type AnyBook = {
    id: number;
    title: string;
    author: string;
    startDate: string;
}

type UnfinishedBook = {
    status: "reading";
} & AnyBook

type Stars = number;

type FinishedBook = {
    status: "finished";
    endDate: string;
    thoughts: string;
    rating: Stars;
} & AnyBook

type Book = UnfinishedBook | FinishedBook

export default Book;

