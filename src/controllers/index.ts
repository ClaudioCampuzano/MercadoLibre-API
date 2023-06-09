import { Request, Response } from 'express';
import { fetchProducts } from '../api/fetchProducts';
import { ProductSend } from '../types';
import { fetchProductDetail } from '../api/fetchProductDetail';
import { fetchProductDescription } from '../api/fetchProductDescription';
import { getMostRepeatCategory, getPathFromRootOfCategory } from '../utils';

const getItem = async (req: Request, res: Response) => {
  const itemId = req.params.id;

  try {
    const {
      id,
      title,
      price: amount,
      currency_id: currency,
      thumbnail: picture,
      condition,
      shipping: { free_shipping },
      sold_quantity,
      category_id,
    } = await fetchProductDetail(itemId);
    const { plain_text: description } = await fetchProductDescription(itemId);
    const categories = await getPathFromRootOfCategory(category_id);

    const item: ProductSend = {
      id,
      title,
      price: { currency, amount, decimals: 0 },
      picture,
      condition,
      free_shipping,
      sold_quantity,
      description,
    };


    return res.status(200).json({
      author: res.locals.author,
      categories,
      item,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response?.data) return res.status(error.response?.status).json({ message: error.response.data?.error });

    return res.status(409).json({ message: 'Internal error' });
  }
};

const getItems = async (req: Request, res: Response) => {
  const filters = req.query.q;
  if (!filters || typeof filters !== 'string') return res.status(400).json({ error: 'Invalid query params' });

  try {
    const { results } = await fetchProducts(filters);
    const categoryCounters: Record<string, number> = {};
    let items: ProductSend[] = [];
    let categories: Array<string> = [];

    if (results) {
      items = results.map((p) => {
        const { id, title, currency_id: currency, price: amount, thumbnail, condition, shipping, category_id } = p;
        categoryCounters[category_id] = (categoryCounters[category_id] ?? 0) + 1;

        return {
          id,
          title,
          price: {
            currency,
            amount,
            decimals: 0,
          },
          picture: thumbnail,
          condition,
          free_shipping: shipping.free_shipping,
        };
      });

      const categoryId = getMostRepeatCategory(categoryCounters);
      categories = await getPathFromRootOfCategory(categoryId);
    }

    return res.status(200).json({
      author: res.locals.author,
      categories,
      items,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response?.data) return res.status(error.response?.status).json({ message: error.response.data?.error });

    return res.status(409).json({ message: 'Internal error' });
  }
};

export { getItem, getItems };
