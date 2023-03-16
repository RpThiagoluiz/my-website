import { ContainerPage } from '../../layout/Containers/Page/ContainerPage';
import { AboutMe } from './components/AboutMe';
import { MyInfo } from './components/MyInfo';
import { Projects } from './components/Projects';
import * as Styles from './styles';

export const HomePage = () => {
  return (
    <ContainerPage>
      <Styles.Wrapper>Portfolio. </Styles.Wrapper>
      <MyInfo />
      <AboutMe />
      <Projects />
    </ContainerPage>
  );
};
