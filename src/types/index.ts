interface ProductSend {
  id: string;
  title: string;
  price: { currency: string; amount: number; decimals: number };
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity?: number;
  description?: string;
}

interface ProductApiResponse {
  id: string;
  title: string;
  price: number;
  currency_id: string;
  thumbnail: string;
  condition: string;
  shipping: { free_shipping: boolean };
  sold_quantity: number;
  category_id: string;
}

export { ProductSend, ProductApiResponse };
