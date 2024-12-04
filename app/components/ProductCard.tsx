import Link from 'next/link';
import Image from 'next/image';

import { Product } from '~/types/product';

interface Props {
    product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl p-4 bg-white w-full sm:w-72 md:w-80 lg:w-96">
            <div className="relative w-full h-48 mb-4">
                <Image
                    src={product.thumbnail}
                    alt={product.title}
                    layout="fill"
                    objectFit="contain"
                    className="absolute top-0 left-0"
                />
            </div>

            <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                <p className="font-bold text-lg text-green-600 mb-4">${product.price}</p>
                <Link href={`/${product.id}`}>
                    <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
