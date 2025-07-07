import axios from 'axios';
const API_URL = 'http://localhost:5000/api/goal-categories';

export const getGoalCategories = async (token: string) =>
  (await axios.get(API_URL, { headers: { Authorization: `Bearer ${token}` } })).data;

export const createGoalCategory = async (category: any, token: string) =>
  (await axios.post(API_URL, category, { headers: { Authorization: `Bearer ${token}` } })).data;

export const updateGoalCategory = async (id: string, category: any, token: string) =>
  (await axios.patch(`${API_URL}/${id}`, category, { headers: { Authorization: `Bearer ${token}` } })).data;

export const deleteGoalCategory = async (id: string, token: string) =>
  (await axios.delete(`${API_URL}/${id}`, { headers: { Authorization: `Bearer ${token}` } })).data; 