import React, { useState } from 'react';
import {
  useQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import {
  fetchUsers,
  addUser,
  updateUser,
  deleteUser,
} from '../api/users';

export default function EditableTable() {
  const queryClient = useQueryClient();
  const [editRowId, setEditRowId] = useState("");
  const [addUserUi, setAddUserUi] = useState(false);
  const [formData, setFormData] = useState({ name: '', age: '' });

//   const { data: users, isLoading, isError } = useQuery(['users'], fetchUsers);
  const { data: users, isLoading, isError } = useQuery({ queryKey: ['users'], queryFn: fetchUsers });

//   const addMutation = useMutation(addUser, {
//     onSuccess: () => queryClient.invalidateQueries(['users']),
//   });

//   const updateMutation = useMutation(({ id, data }) => updateUser(id, data), {
//     onSuccess: () => queryClient.invalidateQueries(['users']),
//   });

//   const deleteMutation = useMutation(deleteUser, {
//     onSuccess: () => queryClient.invalidateQueries(['users']),
//   });

  const addMutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handleSave = (user) => {
    if (!formData.name || !formData.age) {
      alert("Name and Age are required");
      return;
    }

    updateMutation.mutate({
      id: user.id,
      user: { ...user, ...formData },
    });

    setEditRowId("");
    setFormData({ name: '', age: '' });
  };

  const toggleAddUser = () => {
    setAddUserUi(addUserUi => !addUserUi);
    setFormData({ name: '', age: '' });
  };

  const handleAdd = () => {
    // const newUser = { id: (parseInt(users[users.length - 1]?.id) + 1).toString() ?? "0", name: 'New User', age: 0 };
    
    if (!formData.name || !formData.age) {
      alert("Name and Age are required");
      return;
    }

    const newUser = {
      id: (parseInt(users[users.length - 1]?.id) + 1).toString() ?? "0",
      name: formData.name,
      age: formData.age
    };
    addMutation.mutate(newUser);
    toggleAddUser();
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading users</p>;

  return (
    <div>
      {!addUserUi && 
        <button onClick={toggleAddUser}>Add User</button>
      }

      {addUserUi &&
        <div>
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          &nbsp; &nbsp; &nbsp;
          <input
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
          />
          &nbsp; &nbsp; &nbsp;
          <button onClick={handleAdd}>Add</button> &nbsp;
          <button onClick={toggleAddUser}>Cancel</button>
        </div>
      }

      <table border="1" cellPadding="8" style={{ marginTop: '1rem' }}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Age</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) =>
            editRowId === user.id ? (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <input
                    name="age"
                    type="number"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <button onClick={() => handleSave(user)}>Save</button>
                  &nbsp; 
                  <button onClick={() => setEditRowId("")}>Cancel</button>
                </td>
              </tr>
            ) : (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>
                  <button
                    onClick={() => {
                      setEditRowId(user.id);
                      setFormData({ name: user.name, age: user.age });
                    }}
                  >
                    Edit
                  </button>
                  &nbsp; 
                  <button onClick={() => deleteMutation.mutate(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
