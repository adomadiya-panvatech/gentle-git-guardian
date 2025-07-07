
import axios from 'axios';
const API_URL = 'http://localhost:3000/api/audio-files';

export const getAudioFiles = async (token: string) =>
  (await axios.get(API_URL, { headers: { Authorization: `Bearer ${token}` } })).data;

export const createAudioFile = async (audioFile: any, token: string) =>
  (await axios.post(API_URL, audioFile, { headers: { Authorization: `Bearer ${token}` } })).data;

export const updateAudioFile = async (id: string, audioFile: any, token: string) =>
  (await axios.patch(`${API_URL}/${id}`, audioFile, { headers: { Authorization: `Bearer ${token}` } })).data;

export const deleteAudioFile = async (id: string, token: string) =>
  (await axios.delete(`${API_URL}/${id}`, { headers: { Authorization: `Bearer ${token}` } })).data; 
