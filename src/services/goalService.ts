import axios from 'axios';
const API_URL = 'http://localhost:5000/api/goals';

export const getGoals = async (token: string) =>
  (await axios.get(API_URL, { headers: { Authorization: `Bearer ${token}` } })).data;

export const createGoal = async (goal: any, token: string) =>
  (await axios.post(API_URL, goal, { headers: { Authorization: `Bearer ${token}` } })).data;

export const updateGoal = async (id: string, goal: any, token: string) =>
  (await axios.patch(`${API_URL}/${id}`, goal, { headers: { Authorization: `Bearer ${token}` } })).data;

export const deleteGoal = async (id: string, token: string) =>
  (await axios.delete(`${API_URL}/${id}`, { headers: { Authorization: `Bearer ${token}` } })).data; 