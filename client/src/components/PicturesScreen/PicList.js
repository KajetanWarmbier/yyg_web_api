const PicList = () => {
  return (
    <div className="bg-slate-100 min-w-max mx-10 rounded-md">
      <div className="flex justify-center mx-auto">
        <div className="flex flex-col">
          <div className="border-b border-gray-200">
            <table className="divide-y divide-gray-300">
              <thead>
                <tr>
                  <th className="px-20 py-2 text-md">ID</th>
                  <th className="px-20 py-2 text-md">Name</th>
                  <th className="px-20 py-2 text-md">Type</th>
                  <th className="px-20 py-2 text-md">Description</th>
                  <th className="px-20 py-2 text-md">Info</th>
                  <th className="px-20 py-2 text-md">Delete</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                <tr>
                  <td className="px-20 py-2 text-md">123</td>
                  <td className="px-20 py-2 text-md">Cat</td>
                  <td className="px-20 py-2 text-md">catImg</td>
                  <td className="px-20 py-2 text-md">cat cat cat</td>
                  <td className="px-20 py-2 text-md">I.BUTTON</td>
                  <td className="px-20 py-2 text-md">D.BUTTON</td>
                </tr>
                <tr>
                  <td className="px-20 py-2 text-md">123</td>
                  <td className="px-20 py-2 text-md">Cat</td>
                  <td className="px-20 py-2 text-md">catImg</td>
                  <td className="px-20 py-2 text-md">cat cat cat</td>
                  <td className="px-20 py-2 text-md">I.BUTTON</td>
                  <td className="px-20 py-2 text-md">D.BUTTON</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PicList;
