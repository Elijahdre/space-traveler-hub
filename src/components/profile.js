import React from 'react'

const Profile = () => {
  return (
    <div className="w-full lg:flex justify-between px-8 gap-4">
      <div className="lg:w-1/2 flex flex-col gap-4">
        <p className="text-4xl">My Rockets</p>
        <table>
          <tr className="flex flex-col border rounded">
            <td className="py-2 border px-1">Falcon 1</td>
            <td className="py-2 border px-1">Falcon 2</td>
            <td className="py-2 border px-1">Falcon 3</td>
            <td className="py-2 border px-1">Falcon 4</td>
            <td className="py-2 border px-1">Falcon 5</td>
          </tr>
        </table>
      </div>
      <div className="lg:w-1/2 flex flex-col gap-4">
        <p className="text-4xl">My Rockets</p>
        <table>
          <tr className="flex flex-col border rounded">
            <td className="py-2 border px-1">Falcon 1</td>
            <td className="py-2 border px-1">Falcon 2</td>
            <td className="py-2 border px-1">Falcon 3</td>
            <td className="py-2 border px-1">Falcon 4</td>
            <td className="py-2 border px-1">Falcon 5</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Profile;