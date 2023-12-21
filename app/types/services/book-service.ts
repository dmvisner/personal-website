import Book from "../model/book";
import DistributiveOmit from "../utility/distributive-omit";

interface BookService {
    getBookById(id: number): Promise<Book | null>;
    getAllBooks(): Promise<Book[]>;
    createBook(book: DistributiveOmit<Book, "id">): Promise<Book>;
}

export default BookService;