import { url } from './API';
import axios from 'axios';

export function getUser(name) {
  return axios.get(url(`users/${name}`)).then(res => res.data);
}
