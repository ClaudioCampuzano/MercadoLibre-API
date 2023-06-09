import { fetchProductCategory } from '../api/fetchProductCategory';

const getMostRepeatCategory = (categoryCounters: Record<string, number>) => {
  const keys = Object.keys(categoryCounters);
  const values = Object.values(categoryCounters);
  const maxValue = Math.max(...values);
  const maxIndex = values.findIndex((i) => i === maxValue);

  return keys[maxIndex];
};

const getPathFromRootOfCategory = async (categoryId: string) => {
  const { path_from_root: arrayOfCategory } = await fetchProductCategory(categoryId);
  return arrayOfCategory.map((c) => c.name);
};

export { getMostRepeatCategory, getPathFromRootOfCategory };
