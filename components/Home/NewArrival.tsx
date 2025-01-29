import p10 from '../../components/Images/products/10.jpeg';
import p11 from '../../components/Images/products/11.jpeg';
import p12 from '../../components/Images/products/12.jpeg';
import p13 from '../../components/Images/products/13.jpeg';
import p14 from '../../components/Images/products/14.jpeg';
import p15 from '../../components/Images/products/15.jpeg';
import p16 from '../../components/Images/products/16.jpeg';
import p17 from '../../components/Images/products/17.jpeg';
import p18 from '../../components/Images/products/18.jpeg';
import p19 from '../../components/Images/products/19.jpeg';
import p20 from '../../components/Images/products/20.jpeg';
import Image from 'next/image';
const products = [
    {
      id: 1,
      name: "2025 Special Polo Shirt For Men",
      price: 850.00,
      image: p10,
      discount: 32,
    },
    {
      id: 2,
      name: "2025 Special Polo Shirt For Men",
      price: 850.00,
      image: p11,
      discount: 32,
    },
    {
      id: 3,
      name: "2025 Special Polo Shirt For Men",
      price: 850.00,
      image: p12,
      discount: 32,
    },
    {
      id: 4,
      name: "2025 Special Polo Shirt For Men",
      price: 850.00,
      image: p13,
      discount: 32,
    },
    {
      id: 5,
      name: "2025 Special Polo Shirt For Men",
      price: 850.00,
      image: p14,
      discount: 32,
    },
    {
      id: 6,
      name: "2025 Special Polo Shirt For Men",
      price: 850.00,
      image: p15,
      discount: 32,
    },
    {
      id: 7,
      name: "2025 Special Polo Shirt For Men",
      price: 850.00,
      image: p16,
      discount: 32,
    },
    {
      id: 8,
      name: "2025 Special Polo Shirt For Men",
      price: 850.00,
      image: p17,
      discount: 32,
    },
  ];

export default function NewArrival() {
    return (
      <main className="text-black w-[80%] mx-auto">
        <h1 className='text-3xl font-bold my-6'>New Arrival</h1>
          <div className="grid grid-cols-4 gap-2 ">
            {products.map((item)=>(
                <div key={item.id} className=''>
                    <div className='relative'> 
                        <Image src={item.image} alt='product-image' /> 
                        <span className=' absolute bottom-4 left-4 bg-red-500 py-2 px-4 rounded-full text-white font-semibold text-xs'> - {item.discount} % OFF</span>
                    </div>
                    <div className='my-2'>
                        <p>{item.name} </p>
                        <p className='pb-1'> Tk {item.price} BDT </p>
                        <button className='border-2 border-black w-full p-3' >Choose options</button>
                    </div>
                </div>
            ))}
          </div>
      </main>
    );
  }