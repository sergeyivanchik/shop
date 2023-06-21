import { IProduct } from '@/types';

interface IProductsProps {
  title: string;
  link: string;
  products: IProduct[];
  loading: boolean;
}

export { IProductsProps };
