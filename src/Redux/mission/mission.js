import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMissions, selectAllMissions } from "./missionSlice";

const Mission = () => {
  const { missions } = useSelector(selectAllMissions);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchMissions());
  }, []);
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
            <th className="font-bold capitalize text-left px-2 border py-1"></th>
          </tr>
        </thead>
        <tbody>
          {missions.map((x) => {
            return (
              <tr className="even:bg-slate-400" key={x.mission_id}>
                <td className="font-bold text-left px-2 border">
                  {x.mission_name}
                </td>
                <td className="text-left px-2 border w-6/12">
                  {x.description}
                </td>
                <td className=" border my-2 px-2">
                  <span className="text-xs bg-slate-600 rounded-md font-semibold flex justify-center items-center mx-auto uppercase">
                    Not a member
                  </span>
                </td>
                <td className=" border my-2">
                  <span className="border p-1 rounded w-28 flex justify-center items-center mx-auto">
                    Join Mission
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Mission;
