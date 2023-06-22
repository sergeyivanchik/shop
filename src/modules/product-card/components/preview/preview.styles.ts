import styled from 'styled-components';

import { colors } from '@/constants';

import { IImageStyledProps } from './preview.types';

const PreviewStyled = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;

const ImageStyled = styled.div<IImageStyledProps>`
  border-radius: 12px;
  height: 380px;
  width: 380px;
  background: url(${({ url }) => url}) center / cover no-repeat;
`;

const ImagesStyled = styled.div`
  max-height: 380px;
  height: 100%;
  overflow-x: auto;
  padding-right: 5px;

  & {
    ::-webkit-scrollbar-thumb {
      background-color: ${colors.gray700};
      border: 4px solid ${colors.black500};
      border-radius: 2px;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 2px;
    }
    ::-webkit-scrollbar-track-piece {
      background-color: transparent;
      border-radius: 2px;
    }
  }

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    border-radius: 2px;
  }

  & > *:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export { PreviewStyled, ImageStyled, ImagesStyled };
