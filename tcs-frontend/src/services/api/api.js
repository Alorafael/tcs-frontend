import axios from "axios";

let api;
const ip = sessionStorage.getItem('IP');
const porta = sessionStorage.getItem('Porta');

if (typeof window !== 'undefined') {
  console.log(ip, porta)
  const token = sessionStorage?.getItem('userToken');

  api = axios.create({
    baseURL: `http://${ip}:${porta}`,
    headers: {
      ...(token && {'Authorization': `Bearer ${token}`}),
      'Content-Type': 'application/json',
    },
    withCredentials: false,
  });
}

export default api;