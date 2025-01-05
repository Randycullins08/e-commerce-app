interface ProductCardProps {
  title: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image }) => {
  return (
    <div className="border p-4 rounded shadow">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="mt-2 text-lg font-semibold">{title}</h2>
      <p className="text-green-600">${price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
