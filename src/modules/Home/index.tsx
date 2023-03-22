import { ContainerPage } from '../../layout/Containers/Page/ContainerPage';
import { AboutMe } from './components/AboutMe';
import { MyInfo } from './components/MyInfo';
import * as Styles from './styles';

export const HomePage = () => {
  return (
    <ContainerPage>
      {/* <Styles.Wrapper>Portfolio. </Styles.Wrapper> */}
      <MyInfo />
      <AboutMe />
    </ContainerPage>
  );
};
