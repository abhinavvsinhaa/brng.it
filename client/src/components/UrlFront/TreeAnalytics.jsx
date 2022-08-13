import React from "react";
import useAuth from "../../hooks/useAuth";

const SubTable = ({ original }) => {
  return (
    <table class="text-sm text-gray-500 bg-gray-500 w-[400px]">
      <tbody>
        {original.map((url) => {
          return (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-2 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {url.title}
              </th>
              <td class="px-2">{url.link}</td>
              <td class="px-2">{url.visits}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const TreeAnalytics = () => {
  const { setAuth, auth } = useAuth();
  console.clear();
  console.log(auth.user.urlGroup);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-3 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-3 py-4 text-left"
                  >
                    Link
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 text-left"
                  >
                    <thead class="text-xs text-gray-700 uppercase ">
                      <tr>
                        <th scope="col" class="px-2">
                          Title
                        </th>
                        <th scope="col" class="px-2">
                          Links
                        </th>
                        <th scope="col" class="px-2">
                          Visits
                        </th>
                      </tr>
                    </thead>
                  </th>
                </tr>
              </thead>
              <tbody>
                {auth.user.urlGroup.map((tree, index) => {
                  return (
                    <>
                      <tr className=" border-b bg-white" key={index}>
                        <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap">
                          {tree.name}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap">
                          {tree.description}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap">
                          {tree.short}
                        </td>
                        <td>
                          <SubTable original={tree.original} />
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default TreeAnalytics;
