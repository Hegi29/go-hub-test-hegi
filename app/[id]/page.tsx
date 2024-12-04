'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

import Carousel from '~/app/components/Carousel';
import { fetchProductById } from '~/services/api';
import { Product } from '~/types/product';

const ProductDetails = () => {
    const params = useParams();
    const router = useRouter();
    const id = params?.id as string;

    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) {
            setError('Product ID is missing');
            setLoading(false);
            return;
        }

        const fetchData = async () => {
            try {
                const productData = await fetchProductById(id);
                setProduct(productData);
            } catch (error) {
                console.error("🚀 ~ fetchData ~ error:", error)
                setError('Failed to fetch product details');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-50">
                <div className="text-xl font-semibold text-gray-600">Loading...</div>
            </div>
        );
    }

    if (error) {
        return <div className="text-center text-red-500">{error}</div>;
    }

    if (!product) {
        return <div className="text-center text-gray-500">Product not found</div>;
    }

    return (
        <div className="container mx-auto p-8">
            <nav className="mb-6">
                <ol className="flex space-x-3 text-gray-700 text-sm font-medium">
                    <li
                        className="cursor-pointer hover:text-blue-600"
                        onClick={() => router.push('/')}
                    >
                        Home
                    </li>
                    <li className="text-gray-400">/</li>
                    <li className="text-blue-600">{product.title}</li>
                </ol>
            </nav>

            <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2">
                    <Carousel images={product.images} />
                </div>

                <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 text-center md:text-left">
                    <h1 className="text-3xl font-extrabold text-gray-800">{product.title}</h1>
                    <p className="text-lg text-gray-600">{product.description}</p>

                    <div className="flex justify-between items-center">
                        <span className="text-2xl font-semibold text-gray-800">${product.price}</span>
                        <span
                            className={`text-sm font-semibold px-3 py-1 rounded-full 
                            ${product.stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                        >
                            {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                        </span>
                    </div>

                    <div className="flex justify-between items-center">
                        <button
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onClick={() => console.log('Add to cart functionality here')}
                        >
                            Add to Cart
                        </button>
                        <button
                            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            onClick={() => router.push('/')}
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
