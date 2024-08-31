import React, { useContext } from "react";
import { PriceContext } from "../context/context";  
import { useNavigate } from "react-router-dom";

const Courses = [
  {
    name: "React - The Complete Guide",
    price: 10.99,
    details:
      "Courses are structured learning programs designed to teach specific skills or knowledge in a particular subject area. They can range from short, focused lessons to comprehensive programs,",
    imgUrl: 'https://images.pexels.com/photos/1990166/pexels-photo-1990166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  { 
    name: "Angular - The Complete Guide", 
    price: 9.99,
    details:
      "Courses are structured learning programs designed to teach specific skills or knowledge in a particular subject area. They can range from short, focused lessons to comprehensive programs,",
    imgUrl: 'https://images.pexels.com/photos/1990166/pexels-photo-1990166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  { 
    name: "Vue.js - The Complete Guide", 
    price: 8.99,
    details:
      "Courses are structured learning programs designed to teach specific skills or knowledge in a particular subject area. They can range from short, focused lessons to comprehensive programs,",
    imgUrl: 'https://images.pexels.com/photos/1990166/pexels-photo-1990166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

function Product() {
  const navigate = useNavigate();
  const { price, setPrice, img, setImg, setProductName } = useContext(PriceContext);

  const handlePrice = (price, url, course) => {
    setPrice(price);
    setImg(url);
    setProductName(course);
    navigate('/course/checkout');
  };

  return (
    <div className="bg-slate-700 p-4">
      <h1 className="text-center text-4xl text-white mb-8">Courses</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {Courses.map((course) => (
          <div key={course.name} className="flex flex-col items-center bg-slate-950 text-white rounded-lg p-4 max-w-xs shadow-md">
            <h2 className="font-bold text-lg mb-2">{course.name}</h2>
            <img src={course.imgUrl} alt={course.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <p className="text-center mb-4">{course.details}</p>
            <button 
              onClick={() => handlePrice(course.price, course.imgUrl, course.name)}
              className="bg-white text-black rounded-md p-2"
            >
              {`Price: $${course.price}`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
