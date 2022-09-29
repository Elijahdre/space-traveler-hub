import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllMissions } from '../Redux/mission/missionSlice';
import { selectAllRockets } from '../Redux/rocket/rocketSlice';
import Setter from './setter';

const Profile = () => {
  const { rockets } = useSelector(selectAllRockets);
  const { mission } = useSelector(selectAllMissions);
  const { values, setValues } = Setter({
    mission: [],
    rockets: [],
  });
  React.useEffect(() => {
    const data = rockets.filter((x) => x.booked === true);
    const joinMission = mission.filter((x) => x.joined === true);
    setValues({ ...values, rockets: data, mission: joinMission });
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
              {values.rockets.length > 0 ? values.rockets.map((x) => (
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
              <td className="text-4xl">My Missions</td>
            </tr>
          </thead>
          <tbody>
            <tr className="flex flex-col border rounded">
              {values.mission.length > 0 ? values.mission.map((x) => (
                <td className="py-2 border px-1" key={x.mission_id}>
                  {x.mission_name}
                </td>
              )) : <td className="py-2 border px-1">You have not joined any missions yet</td>}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
