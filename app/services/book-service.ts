import Repository from "~/types/Repository";
import Book from "~/types/model/book";
import BookService from "~/types/services/BookService";

export function getBookService(repository: Repository<Book>): BookService {
    return {
        getAllBooks: () => repository.getAll(),
        getBookById: (id: number) => repository.getById(id)
    }
}