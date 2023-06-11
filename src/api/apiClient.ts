import axios from 'axios';
import { BASE_URL } from '../config';

interface Props {
  path: string;
  queryParams?: Record<string, string>;
}

const api = axios.create({
  headers: {
    Accept: 'application/json',
  },
  baseURL: BASE_URL,
});

export const get = async ({ path, queryParams }: Props) => {
  const { data } = await api.get(path, { params: queryParams });

  return data;
};
