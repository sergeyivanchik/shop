import { ICategory } from './categories';

interface IProduct {
  iD: number;
  title: string;
  price: number;
  description: string;
  category: ICategory;
  images: string[];
}

export { IProduct };
