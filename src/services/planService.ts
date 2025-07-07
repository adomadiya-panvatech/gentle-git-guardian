
import axios from 'axios';
const API_URL = 'http://localhost:3000/api/plan';

export const getPlans = async (token: string) =>
  (await axios.get(API_URL, { headers: { Authorization: `Bearer ${token}` } })).data;

export const getPlan = async (id: string, token: string) =>
  (await axios.get(`${API_URL}/${id}`, { headers: { Authorization: `Bearer ${token}` } })).data;

export const createPlan = async (plan: any, token: string) =>
  (await axios.post(API_URL, plan, { headers: { Authorization: `Bearer ${token}` } })).data;

export const updatePlan = async (id: string, plan: any, token: string) =>
  (await axios.put(`${API_URL}/${id}`, plan, { headers: { Authorization: `Bearer ${token}` } })).data;

export const getActivePlans = async (token: string) =>
  (await axios.get(`${API_URL}/active`, { headers: { Authorization: `Bearer ${token}` } })).data;

export const getActivePlansByGoalActivity = async (token: string) =>
  (await axios.get(`${API_URL}/active-by-goal-activity`, { headers: { Authorization: `Bearer ${token}` } })).data;

export const getPlansByActivityType = async (token: string) =>
  (await axios.get(`${API_URL}/by-activity-type`, { headers: { Authorization: `Bearer ${token}` } })).data;

export const getPlansByGoal = async (token: string) =>
  (await axios.get(`${API_URL}/by-goal`, { headers: { Authorization: `Bearer ${token}` } })).data;

export const getPlansOwnedBy = async (ownedById: string, token: string) =>
  (await axios.get(`${API_URL}/owned-by/${ownedById}`, { headers: { Authorization: `Bearer ${token}` } })).data;
