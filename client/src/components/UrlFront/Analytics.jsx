import React from "react";
import useAuth from "../../hooks/useAuth";

const Analytics = () => {
  const { setAuth, auth } = useAuth();
  console.log(auth);
  return (
    <div class="overflow-x-auto relative">
      <table class=" text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              URL
            </th>
            <th scope="col" class="py-3 px-6">
              Sort
            </th>
            <th scope="col" class="py-3 px-6">
              Clicks
            </th>
            <th>QR code</th>
          </tr>
        </thead>
        <tbody>
          {auth?.user?.url?.map((url) => {
            return (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {url.original}
                </th>
                <td class="py-4 px-6">{url.short}</td>
                <td class="py-4 px-6">{url.visits}</td>
                <td>
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${url.short}`}
                    alt="QR"
                    className="p-3"
                  ></img>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Analytics;
