import { useEffect, useState } from "react";
import { TableContent } from "components/TableContent";
import Maybe from "components/Maybe";


function App() {
  const [users, setUsers] = useState([]);
  const [usersLoading, setUsersLoading] = useState(true);

  useEffect(() => {
    // dispatch(companyAction.getCompany(companyId));
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <div className="p-4 bg-white">


        <div className="w-full flex justify-between items-center">
          <div className="text-3xl font-bold">
            Customers
          </div>
          <div>
            <button type="button" className="btn btn-primary">
              Add user
            </button>
          </div>
        </div>


        <table className="mt-10 table table-auto table-rounded table-border border">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Location</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            <TableContent loading={usersLoading} data={users} colspan={5} />

            <Maybe condition={!usersLoading}>
              <tr>
                <td>
                  dw
                </td>
                <td>
                  rtrt
                </td>
                <td>
                  ewfwef
                </td>
                <td>
                  fewfew
                </td>
                <td>
                  fewfew
                </td>
              </tr>
            </Maybe>
          
          </tbody>
        </table>


        {/* <Pagination data={users} /> */}


      </div>
    </div>
  );
}

export default App;
