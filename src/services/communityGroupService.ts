
import axios from 'axios';
const API_URL = 'http://localhost:3000/api/community-groups';

export const getCommunityGroups = async (token: string) =>
  (await axios.get(API_URL, { headers: { Authorization: `Bearer ${token}` } })).data;

export const createCommunityGroup = async (group: any, token: string) =>
  (await axios.post(API_URL, group, { headers: { Authorization: `Bearer ${token}` } })).data;

export const updateCommunityGroup = async (id: string, group: any, token: string) =>
  (await axios.put(`${API_URL}/${id}`, group, { headers: { Authorization: `Bearer ${token}` } })).data;

export const deleteCommunityGroup = async (id: string, token: string) =>
  (await axios.delete(`${API_URL}/${id}`, { headers: { Authorization: `Bearer ${token}` } })).data;

export const bulkUpdateReceivers = async (communityGroupId: string, receivers: any[], token: string) =>
  (await axios.patch(`${API_URL}/${communityGroupId}/receivers/bulk`, { receivers }, { headers: { Authorization: `Bearer ${token}` } })).data; 
