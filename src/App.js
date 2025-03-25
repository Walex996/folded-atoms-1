import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Maybe from "components/Maybe";
import { TableContent } from "components/TableContent";
import { Pagination } from "components/Pagination";


const queryClient = new QueryClient();


function Users() {
  const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  };

  const { data: users, error, isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers
  });

  console.log("data", users);
  console.log("error", error);
  console.log("isError", isError);
  
  
  return (
    <QueryClientProvider client={queryClient}>
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

              <TableContent loading={isLoading} data={users} isError={isError} colspan={5} />

              <Maybe condition={!isLoading}>
                {users?.map((user, index) =>
                  <tr key={index}>
                    <td>
                      {user?.id}
                    </td>
                    <td>
                      {user?.name}
                    </td>
                    <td>
                      {user?.id ? user?.id + 20 : "-"}
                    </td>
                    <td>
                      Long: 0.00000
                      <br />
                      Lat:0.00000
                    </td>
                    <td>
                      <div className="flex">
                        <button type="button" className="btn btn-primary btn-sm mr-2">
                          Edit
                        </button>
                        <button type="button" className="btn bg-red-700 btn-sm text-white">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </Maybe>
            
            </tbody>
          </table>


          {/* <Maybe condition={!isLoading && users?.length > 20}> */}
            <Pagination data={users} />
          {/* </Maybe> */}


        </div>
      </div>
    </QueryClientProvider>
  );
}


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  );
}

export default App;
