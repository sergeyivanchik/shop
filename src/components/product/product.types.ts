import { IProduct } from '@/types';

interface IProductProps extends Pick<IProduct, 'id' | 'title' | 'price'> {
  category: string;
  image: string;
  oldPrice?: number;
  purchased: number;
}

interface IImageStyledProps {
  url: string;
}

export { IProductProps, IImageStyledProps };
