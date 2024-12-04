import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products';

export const fetchProducts = async () => {
    const { data } = await axios.get(BASE_URL);
    return data.products;
};

export const fetchProductById = async (id: string) => {
    const { data } = await axios.get(`${BASE_URL}/${id}`);
    return data;
};
