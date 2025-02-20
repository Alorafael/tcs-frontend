import axios from "axios";

console.log("api");
let api
const ip = sessionStorage?.getItem('IP');
const porta = sessionStorage?.getItem('Porta');
console.log(ip)
console.log(porta)
if (typeof window !== 'undefined') {
  console.log("api");
  const token = sessionStorage?.getItem('token');
  api = axios.create({
    baseURL: `http://${ip}:${porta}`,
    headers: {
      ...(token && {'Authorization': `Bearer ${token}`}),
      'Content-Type': 'application/json',
    },
  });
}

export default api;