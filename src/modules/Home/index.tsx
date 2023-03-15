import { ContainerPage } from '../../layout/Containers/Page/ContainerPage';
import { MyInfo } from './components/MyInfo';
import * as Styles from './styles';

export const HomePage = () => {
  return (
    <ContainerPage>
      <Styles.Wrapper>Portfolio. </Styles.Wrapper>
      <MyInfo />
    </ContainerPage>
  );
};
