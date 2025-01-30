import p10 from '../../components/Images/products/10.jpeg';
import p11 from '../../components/Images/products/11.jpeg';
import p12 from '../../components/Images/products/12.jpeg';
import p13 from '../../components/Images/products/13.jpeg';
import p14 from '../../components/Images/products/14.jpeg';
import p15 from '../../components/Images/products/15.jpeg';
import p16 from '../../components/Images/products/16.jpeg';
import p17 from '../../components/Images/products/17.jpeg';
import Image from 'next/image';

const products = [
  { id: 1, name: "2025 Special Polo Shirt For Men", price: 850.00, image: p10, discount: 32 },
  { id: 2, name: "2025 Special Polo Shirt For Men", price: 850.00, image: p11, discount: 32 },
  { id: 3, name: "2025 Special Polo Shirt For Men", price: 850.00, image: p12, discount: 32 },
  { id: 4, name: "2025 Special Polo Shirt For Men", price: 850.00, image: p13, discount: 32 },
  { id: 5, name: "2025 Special Polo Shirt For Men", price: 850.00, image: p14, discount: 32 },
  { id: 6, name: "2025 Special Polo Shirt For Men", price: 850.00, image: p15, discount: 32 },
  { id: 7, name: "2025 Special Polo Shirt For Men", price: 850.00, image: p16, discount: 32 },
  { id: 8, name: "2025 Special Polo Shirt For Men", price: 850.00, image: p17, discount: 32 },
];

export default function NewArrival() {
  return (
    <main className="text-black lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold my-6 text-center">New Arrival</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item) => (
          <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
              <Image 
                src={item.image} 
                alt="product-image" 
                className="w-full h-64 object-cover" 
                layout="responsive"
              />
              <span className="absolute bottom-4 left-4 bg-red-500 py-1 px-3 rounded-full text-white text-xs font-semibold">
                -{item.discount}% OFF
              </span>
            </div>
            <div className="p-4">
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-gray-600">Tk {item.price} BDT</p>
              <button className="w-full mt-3 py-2 text-white bg-black hover:bg-gray-800 transition rounded-md">
                Choose Options
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
