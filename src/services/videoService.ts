
import axios from 'axios';
const API_URL = 'http://localhost:3000/api/videos';

export const getVideos = async (token: string) =>
  (await axios.get(API_URL, { headers: { Authorization: `Bearer ${token}` } })).data;

export const getVideo = async (videoId: string, token: string) =>
  (await axios.get(`${API_URL}/${videoId}`, { headers: { Authorization: `Bearer ${token}` } })).data;

export const getVimeoVideo = async (vimeoId: string, token: string) =>
  (await axios.get(`${API_URL}/vimeo/${vimeoId}`, { headers: { Authorization: `Bearer ${token}` } })).data;

export const createVideo = async (video: any, token: string) =>
  (await axios.post(API_URL, video, { headers: { Authorization: `Bearer ${token}` } })).data;

export const updateVideo = async (videoId: string, video: any, token: string) =>
  (await axios.put(`${API_URL}/${videoId}`, video, { headers: { Authorization: `Bearer ${token}` } })).data;
