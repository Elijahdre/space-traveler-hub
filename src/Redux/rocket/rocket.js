import React from 'react'

const Rocket = () => {
  return (
    <div className="flex flex-col w-full gap-2 px-2 md:px-8">
      <div className="lg:flex gap-2 lg:w-full w-10/12 mx-auto">
        <div className="bg-blue-400 md:w-8/12 md:mx-auto h-44"></div>
        <div className="flex flex-col gap-3 mt-2 lg:mt-0">
          <span className="font-semibold text-lg lg:text-left text-center">
            Falcon 2
          </span>
          <p className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            nisi maiores temporibus molestiae porro. Perferendis natus est non
            laudantium saepe sapiente quod deleniti, molestiae quis distinctio
            voluptate dolorum eaque delectus earum voluptatibus ullam ipsam.
          </p>
          <button
            type="button"
            className="bg-blue-600 text-white font-thin px-3 py-2 w-44 rounded-md mx-auto lg:mx-0"
          >
            Reserve Rocket
          </button>
        </div>
      </div>
      <div className="lg:flex gap-2 lg:w-full w-10/12 mx-auto">
        <div className="bg-blue-400 md:w-8/12 md:mx-auto h-44"></div>
        <div className="flex flex-col gap-3 mt-2 lg:mt-0">
          <span className="font-semibold text-lg lg:text-left text-center">
            Falcon 2
          </span>
          <p className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            nisi maiores temporibus molestiae porro. Perferendis natus est non
            laudantium saepe sapiente quod deleniti, molestiae quis distinctio
            voluptate dolorum eaque delectus earum voluptatibus ullam ipsam.
          </p>
          <button
            type="button"
            className="bg-blue-600 text-white font-thin px-3 py-2 w-44 rounded-md mx-auto lg:mx-0"
          >
            Reserve Rocket
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rocket