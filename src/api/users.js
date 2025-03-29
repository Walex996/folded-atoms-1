import axios from 'axios';

// const API_URL = 'http://localhost:3001/api/users';
const API_URL = 'http://localhost:3001/users';

export const fetchUsers = () => axios.get(API_URL).then(res => res.data);
export const addUser = (user) => axios.post(API_URL, user).then(res => res.data);
export const updateUser = ({id, user}) => axios.put(`${API_URL}/${id}`, user).then(res => res.data);
export const deleteUser = (id) => axios.delete(`${API_URL}/${id}`);
