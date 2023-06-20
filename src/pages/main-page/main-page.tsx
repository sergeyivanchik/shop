import { ContainerLayout } from '@/layouts';

import { BigSale } from '@/components';

const MainPage = () => {
  return (
    <ContainerLayout topComponent={BigSale}>
      <div>Main Page</div>
    </ContainerLayout>
  );
};

export { MainPage };
