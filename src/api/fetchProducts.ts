import { ProductApiResponse } from '../types';
import { get } from './apiClient';

interface ProductsResponse {
  results: Array<ProductApiResponse>;
}

export const fetchProducts = async (filters: string) => {
  const response = await (<Promise<ProductsResponse>>get({
    path: 'sites/MLA/search',
    queryParams: { q: filters },
  }));

  return response;
};
