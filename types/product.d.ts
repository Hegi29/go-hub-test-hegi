export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    thumbnail: string;
    images: string[];
    stock: number;
}

export interface FilterState {
    category: string;
    sortOrder: 'asc' | 'desc';
}
