import { FC, useState } from 'react';

import { useImage } from '@/hooks';

import { IPreviewProps } from './preview.types';

import { SmallImage } from './components';

import { PreviewStyled, ImageStyled, ImagesStyled } from './preview.styles';

const Preview: FC<IPreviewProps> = ({ images }) => {
  const [currentImg, setCurrentImg] = useState(images[0]);
  const { src } = useImage(currentImg);

  const hasImages = [...images, ...images, ...images].map((i) => (
    <SmallImage
      key={i}
      image={i}
      onClick={() => setCurrentImg(i)}
      active={currentImg === i}
    />
  ));

  return (
    <PreviewStyled>
      <ImageStyled url={src} />
      <ImagesStyled>{hasImages}</ImagesStyled>
    </PreviewStyled>
  );
};

export { Preview };
