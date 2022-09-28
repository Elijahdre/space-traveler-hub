import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rocketStatus, selectAllRockets } from './rocketSlice';

const Rocket = () => {
  const { rockets } = useSelector(selectAllRockets);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(rocketStatus(id));
  };

  return (
    <div className="flex flex-col w-full gap-2 px-2 md:px-8">
      {rockets.map((x) => (
        <div className="lg:flex gap-2 lg:w-full w-10/12 mx-auto" key={x.id}>
          <div className="md:w-8/12 md:mx-auto lg:w-4/12">
            <img
              src={x.flickr_images[0]}
              alt={x.rocket_name}
              className="object-cover w-full h-44"
            />
          </div>
          <div className="flex flex-col mx-auto lg:mx-0 gap-3 mt-2 lg:mt-0 w-2/3">
            <span className="font-semibold text-lg lg:text-left text-center">
              {x.rocket_name}
            </span>
            <p className="text-justify">
              {x.booked && (
                <span className="bg-blue-600 rounded-md text-white p-1 mx-2">
                  reserved
                </span>
              )}
              {x.description}
            </p>
            <button
              type="button"
              className={
                x.booked
                  ? 'bg-white text-black font-thin px-3 py-2 w-44 rounded-md mx-auto lg:mx-0 border'
                  : 'bg-blue-600 text-white font-thin px-3 py-2 w-44 rounded-md mx-auto lg:mx-0'
              }
              onClick={() => handleClick(x.id)}
            >
              {x.booked ? 'Cancel reservation' : ' Reserve Rocket'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rocket;
