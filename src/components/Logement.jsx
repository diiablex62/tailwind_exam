import React from "react";
import Image_logement from "./Image_logement";
import listeMaison from "./Liste_maison";

export default function Logement() {
  return (
    <div className='ml-6 mt-6'>
      <h1 className='text-2xl font-bold'>Logements disponibles</h1>
      <div className='flex flex-row overflow-x-auto gap-6 mt-6 p-4 cursor-pointer'>
        {listeMaison.map((listing) => (
          <Image_logement key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
}
