import React from "react";

export default function ProductCard(item) {
  console.log('item=>', item)
  const {thumbnail , category ,title ,price} = item ;
  return (
 <> 
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src="https://images.unsplash.com/photo-1727141195776-595b67abb4d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D"
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
          {title}
          </h2>
          <p className="mt-1">{price}</p>
        </div>
      </div>
    </>
  );
}
