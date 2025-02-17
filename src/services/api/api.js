import axios from "axios";

console.log("api");
let api;
const ip = sessionStorage.getItem('IP');
const porta = sessionStorage.getItem('Porta');
if (typeof window !== 'undefined') {
  const token = sessionStorage?.getItem('token');
  api = axios.create({
    baseURL: `http://${ip}:${porta}`,
    headers: {
      ...(token && {'Authorization': `Bearer ${token}`}),
      'Content-Type': 'application/json',
      "Cache-Control": "no-cache",
    }
  });
}

export default api;