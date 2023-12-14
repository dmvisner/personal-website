interface Repository<T> {
    getAll(): Promise<T[]>;
    getById(id: number): Promise<T | null>;
    // create(data: { title: string; author: string }): Promise<T>;
    // update(id: number, data: { title?: string; author?: string }): Promise<T | null>;
    // delete(id: number): Promise<T | null>;
}

export default Repository;

