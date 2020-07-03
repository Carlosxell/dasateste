import { url } from './API';
import axios from 'axios';

export function getRepos(name) {
  return axios.get(url(`search/repositories?q=${name}`)).then(res => res.data);
}

export function getReposByUrl(URL) {
  return axios.get(URL).then(res => res.data);
}
