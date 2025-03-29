import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Users from 'pages/users';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1 style={{fontWeight: "bold"}}>Editable Users Table</h1>
      <br />
      <Users />
    </QueryClientProvider>
  );
}

export default App;
