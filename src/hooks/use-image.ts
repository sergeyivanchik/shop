import { useState, useEffect } from 'react';

import defaultImage from '@/assets/images/no-photo.png';

type StateType = {
  src: string;
  status: {
    pending: boolean;
    loaded: boolean;
    error: boolean;
  };
};

const useImage = (img = '', defaultImg = defaultImage) => {
  const [{ src, status }, setState] = useState<StateType>({
    src: defaultImg,
    status: {
      pending: true,
      loaded: false,
      error: false,
    },
  });

  useEffect(() => {
    const image = new Image();
    image.src = img;

    image.onload = () => {
      setState({
        src: img,
        status: { ...status, pending: false, loaded: true },
      });
    };

    image.onerror = () => {
      setState({ src, status: { ...status, pending: false, error: true } });
    };

    return () => {
      image.onload = () => undefined;
      image.onerror = () => undefined;
    };
  }, []);

  return { src, status };
};

export { useImage };
