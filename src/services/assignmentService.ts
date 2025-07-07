import axios from 'axios';
const API_URL = 'http://localhost:5000/api/assignments';

export const getAssignments = async (token: string) =>
  (await axios.get(API_URL, { headers: { Authorization: `Bearer ${token}` } })).data;

export const createAssignment = async (assignment: any, token: string) =>
  (await axios.post(API_URL, assignment, { headers: { Authorization: `Bearer ${token}` } })).data;

export const updateAssignment = async (id: string, assignment: any, token: string) =>
  (await axios.patch(`${API_URL}/${id}`, assignment, { headers: { Authorization: `Bearer ${token}` } })).data;

export const deleteAssignment = async (id: string, token: string) =>
  (await axios.delete(`${API_URL}/${id}`, { headers: { Authorization: `Bearer ${token}` } })).data; 