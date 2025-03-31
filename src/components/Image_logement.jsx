import React from "react";

export default function Image_logement({ listing }) {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 w-64'>
      <img
        src={listing.image}
        alt={listing.title}
        className='w-full h-48 object-cover'
      />
      <div className='p-4'>
        <h2 className='font-bold text-lg'>{listing.title}</h2>
        <p className='text-gray-600'>{listing.location}</p>
        <p className='mt-2 text-red-500 font-semibold'>
          {listing.price}€ / nuit
        </p>
      </div>
    </div>
  );
}
