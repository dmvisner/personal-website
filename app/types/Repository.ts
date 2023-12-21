import DistributiveOmit from "./utility/distributive-omit";

interface Repository<T extends { id: number }> {
    getAll(): Promise<T[]>;
    getById(id: number): Promise<T | null>;
    create(data: Partial<T>): Promise<T>;
    update(id: number, data: Partial<T>): Promise<T | null>;
    delete(id: number): Promise<T | null>;
}

export default Repository;

