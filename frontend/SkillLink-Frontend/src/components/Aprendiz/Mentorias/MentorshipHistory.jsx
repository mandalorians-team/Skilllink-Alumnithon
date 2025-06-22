import React from "react";

export default function MentorshipHistory({ history }) {
  return (
    <div>
      <h3 className="text-2xl font-bold font-orbitron text-black mb-4">
        Histórico de Mentorías
      </h3>
      <div className="overflow-x-auto bg-gray-200 rounded-lg shadow">
        <table className="min-w-full text-sm text-black">
          <thead className="bg-gray-200">
            <tr>
              {Object.keys(history[0]).map((key) => (
                <th key={key} className="p-3 text-left font-semibold ">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {history.map((item) => (
              <tr key={item.id} className="border-b">
                {Object.values(item).map((value, index) => (
                  <td key={index} className="p-3">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
