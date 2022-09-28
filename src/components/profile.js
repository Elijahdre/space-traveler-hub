import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllRockets } from '../Redux/rocket/rocketSlice';
import Setter from './setter';

const Profile = () => {
  const { rockets } = useSelector(selectAllRockets);
  const { values, setValues } = Setter([]);

  React.useEffect(() => {
    const data = rockets.filter((x) => x.booked === true);
    setValues(data);
  }, [rockets]);
  return (
    <div className="w-full lg:flex justify-between px-8 gap-4">
      <div className="lg:w-1/2 flex flex-col gap-4">
        <table>
          <thead>
            <tr>
              <td className="text-4xl">My Rockets</td>
            </tr>
          </thead>
          <tbody>
            <tr className="flex flex-col border rounded">
              {values.length > 0 ? values.map((x) => (
                <td className="py-2 border px-1" key={x.id}>
                  {x.rocket_name}
                </td>
              )) : <td className="py-2 border px-1">You do not have any rocket reservations yet</td>}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="lg:w-1/2 flex flex-col gap-4">
        <table>
          <thead>
            <tr>
              <td className="text-4xl">My Rockets</td>
            </tr>
          </thead>
          <tbody>
            <tr className="flex flex-col border rounded">
              <td className="py-2 border px-1">Falcon 1</td>
              <td className="py-2 border px-1">Falcon 2</td>
              <td className="py-2 border px-1">Falcon 3</td>
              <td className="py-2 border px-1">Falcon 4</td>
              <td className="py-2 border px-1">Falcon 5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
