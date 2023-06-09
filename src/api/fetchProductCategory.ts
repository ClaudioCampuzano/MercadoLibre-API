import { get } from './apiClient';

interface Category {
  id: string;
  name: string;
}

interface ProductCategoryApiResponse {
  path_from_root: Array<Category>;
}

export const fetchProductCategory = async (categoryId: string) => {
  const response = await (<Promise<ProductCategoryApiResponse>>get({
    path: `categories/${categoryId}`,
  }));

  return response;
};
