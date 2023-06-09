import { get } from './apiClient';

interface ProductDescriptionApiResponse {
  plain_text: string;
}

export const fetchProductDescription = async (id: string) => {
  const response = await (<Promise<ProductDescriptionApiResponse>>get({
    path: `items/${id}/description`,
  }));

  return response;
};
