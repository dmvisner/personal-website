import prisma from "~/types/prisma";
import { Book as PrismaBook } from "@prisma/client"; 

import Repository from "~/types/repository";
import Book from "~/types/model/book";
import DistributiveOmit from "~/types/utility/distributive-omit";

const BookRepository: Repository<Book> = {
    getAll: async () => {
        const books = await prisma.book.findMany();
        return books.map(convertPrismaToBook);
    },
    getById: async (id: number) => {
        const book = await prisma.book.findUnique({
            where: {
                id: id
            }
        });

        return book ? convertPrismaToBook(book) : null;
    },
    create: async (newBook: DistributiveOmit<Book, 'id'>): Promise<Book> => {
        const additionalData = newBook.status === 'finished'
            ? {
                end_date: newBook.endDate,
                rating: newBook.rating,
                thoughts: newBook.thoughts
            }
            : {};

        const createdBook = await prisma.book.create({
            data: {
                title: newBook.title,
                author: newBook.author,
                start_date: newBook.startDate,
                ...additionalData
            }
        });

        return convertPrismaToBook(createdBook);
    },
    update: function (id: number, data: Partial<Book>): Promise<Book | null> {
        throw new Error("Function not implemented.");
    },
    delete: function (id: number): Promise<Book | null> {
        throw new Error("Function not implemented.");
    }
}

function convertPrismaToBook(prismaBook: PrismaBook): Book {
    return prismaBook.end_date
        ? {
            id: prismaBook.id,
            title: prismaBook.title,
            author: prismaBook.author,
            startDate: prismaBook.start_date,
            status: "finished",
            endDate: prismaBook.end_date,
            rating: prismaBook.rating || 0,
            thoughts: prismaBook.thoughts || ""
        }
        : {
            id: prismaBook.id,
            title: prismaBook.title,
            author: prismaBook.author,
            startDate: prismaBook.start_date,
            status: "reading"
        }
}

function convertBookToPrisma(book: Book): PrismaBook {
    const prismaBook = {
        id: book.id,
        title: book.title,
        start_date: book.startDate,
        author: book.author,
    }

    switch(book.status) {
        case "reading":
            return {
                ...prismaBook,
                end_date: null,
                thoughts: null,
                rating: null,     
            };
        case "finished":
            return {
                ...prismaBook,
                end_date: book.endDate,
                thoughts: book.thoughts,
                rating: book.rating,
            }
    }
}

export default BookRepository;