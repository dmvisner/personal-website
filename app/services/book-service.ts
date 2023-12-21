import Book from "~/types/model/book";
import Repository from "~/types/repository";
import BookService from "~/types/services/book-service";
import DistributiveOmit from "~/types/utility/distributive-omit";

export function getBookService(repository: Repository<Book>): BookService {
    return {
        getAllBooks: () => repository.getAll(),
        getBookById: (id: number) => repository.getById(id),
        createBook: (book: DistributiveOmit<Book, "id">) => repository.create(book),
    }
}