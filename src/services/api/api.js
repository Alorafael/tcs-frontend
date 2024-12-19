import axios from "axios";

console.log("aqui")
let api;
const ip = sessionStorage.getItem('IP');
const porta = sessionStorage.getItem('Porta');

if (typeof window !== 'undefined') {
  api = axios.create({
    baseURL: `http://${ip}:${porta}`
  });
}

export default api;