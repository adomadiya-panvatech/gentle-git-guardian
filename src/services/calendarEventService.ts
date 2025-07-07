import axios from 'axios';

export const getCalendarEventById = async (id: string, token: string) =>
  (await axios.get(`http://localhost:5000/api/calendar-events/${id}`, { headers: { Authorization: `Bearer ${token}` } })).data; 