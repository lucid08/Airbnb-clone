import Image from "next/image";
import React from "react";

const MyReservationPage = () => {
  return (
    <div className="max-w-[1500] mx-auto px-6 pb-6">
      <h1 className="mb-6 text-2xl">MyReservationPage</h1>
      <div className="space-y-4">
        <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4 rounded-xl border border-gray-300 shadow-xl">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                fill
                src="/beachhouse.jpg"
                alt="Sample 1"
                className="hover:scale-110 object-cover transition h-full w-full "
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-3 space-y-2">
            <h1 className="mb-4 text-xl">Properties</h1>
            <p>
              <strong>Check in Date: </strong>22/22/22
            </p>
            <p>
              <strong>Check out Date: </strong>22/22/22
            </p>
            <p>
              <strong>No of Nights: </strong>5
            </p>
            <p>
              <strong>Total price: </strong>840
            </p>
          </div>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4 rounded-xl border border-gray-300 shadow-xl">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                fill
                src="/beachhouse.jpg"
                alt="Sample 1"
                className="hover:scale-110 object-cover transition h-full w-full "
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-3 space-y-2">
            <h1 className="mb-4 text-xl">Properties</h1>
            <p>
              <strong>Check in Date: </strong>22/22/22
            </p>
            <p>
              <strong>Check out Date: </strong>22/22/22
            </p>
            <p>
              <strong>No of Nights: </strong>5
            </p>
            <p>
              <strong>Total price: </strong>840
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReservationPage;
