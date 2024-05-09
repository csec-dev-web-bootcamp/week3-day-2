const products = [
  {
    id: 1,
    name: "Smartphone",
    brand: "Apple",
    price: 999.99,
  },
  {
    id: 2,
    name: "Laptop",
    brand: "Dell",
    price: 1299.99,
  },
  {
    id: 3,
    name: "Headphones",
    brand: "Sony",
    price: 199.99,
  },
  {
    id: 4,
    name: "Smart TV",
    brand: "Samsung",
    price: 1499.99,
  },
  {
    id: 5,
    name: "Fitness Tracker",
    brand: "Fitbit",
    price: 99.99,
  },
];

import ProductCard from "./product-card";
export default async function ProductsList() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
