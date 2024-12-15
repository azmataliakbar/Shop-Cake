import Image from 'next/image';

interface ProductCardProps {
  product: { id: number; name: string; price: number; image: string };
  addToCart: (product: { id: number; name: string; price: number; image: string }) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out">
      <Image
        src={product.image}
        alt={product.name}
        width={150}
        height={150}
        className="w-full h-auto object-cover rounded-md mb-4"
      />
      <h3 className="name  text-xl font-semibold mb-2">{product.name}</h3>
      <p className="price  text-gray-700 mb-4 font-bold">Rs. {product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="btn1  w-full bg-blue-500 text-white font-bold py-2 rounded-md transition duration-200 hover:bg-red-400"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

