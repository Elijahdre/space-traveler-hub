import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, missionStatus, selectAllMissions } from './missionSlice';

const Mission = () => {
  const { mission } = useSelector(selectAllMissions);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchMissions());
  }, []);

  const handleClick = (id) => {
    dispatch(missionStatus(id));
  };
  return (
    <div className="w-full px-2 md:px-8">
      <table className="w-full border">
        <thead>
          <tr>
            <th className="font-bold capitalize text-left px-2 border py-1">
              Mission
            </th>
            <th className="font-bold capitalize text-left px-2 border py-1">
              Description
            </th>
            <th className="font-bold capitalize text-left px-2 border py-1">
              Status
            </th>
            <th className="font-bold capitalize text-left px-2 border py-1">
              {' '}
            </th>
          </tr>
        </thead>
        <tbody>
          {mission.map((x) => (
            <tr className="even:bg-slate-400" key={x.mission_id}>
              <td className="font-bold text-left px-2 border">
                {x.mission_name}
              </td>
              <td className="text-left px-2 border w-6/12">{x.description}</td>
              <td className=" border my-2 px-2">
                <span className="text-xs bg-slate-600 rounded-md font-semibold flex justify-center items-center mx-auto uppercase">
                  {x.joined ? 'Active Member' : 'Not a member'}
                </span>
              </td>
              <td className=" border my-2">
                <button
                  type="button"
                  className="border p-1 rounded w-28 flex justify-center items-center mx-auto"
                  onClick={() => handleClick(x.mission_id)}
                >
                  {x.joined ? 'Leave mission' : 'Join Mission'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mission;
