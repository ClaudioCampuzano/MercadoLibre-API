import { Router } from 'express';
import { addAuthorInfo } from '../middleware';
import { getItems, getItem } from '../controllers';

const router = Router({ caseSensitive: true });

router.get('/api/items', addAuthorInfo, getItems);
router.get('/api/items/:id', addAuthorInfo, getItem);

export { router };
