import { ProductApiResponse } from '../types';
import { get } from './apiClient';

export const fetchProductDetail = async (id: string) => {
  const response = await (<Promise<ProductApiResponse>>get({
    path: `items/${id}`,
  }));

  return response;
};
