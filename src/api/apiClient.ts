import axios from 'axios';

interface Props {
  path: string;
  queryParams?: Record<string, string>;
}

const baseURL = 'https://api.mercadolibre.com/';

const api = axios.create({
  headers: {
    Accept: 'application/json',
  },
  baseURL,
});

export const get = async ({ path, queryParams }: Props) => {
  const { data } = await api.get(path, { params: queryParams });

  return data;
};
