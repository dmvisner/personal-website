import React, { PropsWithChildren } from 'react';

import Book from '~/types/model/book';
import WithClassName from '~/types/props/with-classname';
import Card from './card';

type BookGridProps = {
    books: Book[];
} & WithClassName & PropsWithChildren;

const BookGrid: React.FC<BookGridProps> = ({ books }) => {
    return (
        <div>
            {books.map((book) => (
                <Card
            ))}
        </div>
    );
};

export default BookGrid;
