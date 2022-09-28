import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllRockets } from './rocketSlice';

const Rocket = () => {
  const { rockets } = useSelector(selectAllRockets);

  return (
    <div className="flex flex-col w-full gap-2 px-2 md:px-8">
      {rockets.map((x) => (
        <div className="lg:flex gap-2 lg:w-full w-10/12 mx-auto" key={x.id}>
          <div className="bg-blue-400 md:w-8/12 md:mx-auto h-44">
            <img src={x.flickr_images[0]} alt={x.rocket_name} className="object-contain" />
          </div>
          <div className="flex flex-col gap-3 mt-2 lg:mt-0">
            <span className="font-semibold text-lg lg:text-left text-center">
              {x.rocket_name}
            </span>
            <p className="text-justify">
              {x.description}
            </p>
            <button
              type="button"
              className="bg-blue-600 text-white font-thin px-3 py-2 w-44 rounded-md mx-auto lg:mx-0"
            >
              Reserve Rocket
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rocket;
