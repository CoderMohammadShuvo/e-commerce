import p1 from '../../components/Images/products/1.jpeg';
import p2 from '../../components/Images/products/2.jpeg';
import p3 from '../../components/Images/products/3.jpeg';
import p4 from '../../components/Images/products/4.jpeg';
import p5 from '../../components/Images/products/5.jpeg';
import p6 from '../../components/Images/products/6.jpeg';
import p7 from '../../components/Images/products/7.jpeg';
import p8 from '../../components/Images/products/8.jpeg';
import p9 from '../../components/Images/products/9.jpeg';
import Image from 'next/image';

const products = [
  { id: 1, name: "2025 Special Polo Shirt For Men", price: 850.00, image: p1, discount: 32 },
  { id: 2, name: "2025 Special Polo Shirt For Men", price: 850.00, image: p2, discount: 32 },
  { id: 3, name: "2025 Special Polo Shirt For Men", price: 850.00, image: p3, discount: 32 },
  { id: 4, name: "2025 Special Polo Shirt For Men", price: 850.00, image: p4, discount: 32 },
  { id: 5, name: "2025 Special Polo Shirt For Men", price: 850.00, image: p5, discount: 32 },
  { id: 6, name: "2025 Special Polo Shirt For Men", price: 850.00, image: p6, discount: 32 },
  { id: 7, name: "2025 Special Polo Shirt For Men", price: 850.00, image: p7, discount: 32 },
  { id: 8, name: "2025 Special Polo Shirt For Men", price: 850.00, image: p8, discount: 32 },
  { id: 9, name: "2025 Special Polo Shirt For Men", price: 850.00, image: p9, discount: 32 },
];

export default function ProductSet1() {
  return (
    <main className="text-black lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {products.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative"> 
              <Image src={item.image} alt='product-image' className="w-full h-64 object-cover" layout="responsive" /> 
              <span className='absolute bottom-4 left-4 bg-red-500 py-1 px-3 rounded-full text-white font-semibold text-xs'>
                -{item.discount}% OFF
              </span>
            </div>
            <div className='p-4'>
              <p className="text-lg font-semibold">{item.name}</p>
              <p className='text-gray-600 pb-1'>Tk {item.price} BDT</p>
              <button className='w-full py-2 text-white bg-black hover:bg-gray-800 transition rounded-md'>Choose options</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
