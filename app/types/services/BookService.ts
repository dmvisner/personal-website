import Book from "../model/book";

interface BookService {
    getBookById(id: number): Promise<Book | null>;
    getAllBooks(): Promise<Book[]>
}

export default BookService;