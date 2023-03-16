import { Typography } from '../../../../components/Typography';
import * as Styles from './styles';

export const AboutMe = () => {
  return (
    <Styles.Container>
      <Typography fontSize={40} marginBottom={50} bold>
        About me
      </Typography>
      <Styles.Wrapper>
        <Typography fontSize={20}>
          I&apos;m Fullstack developer who loves frontend. My passion is to
          create intuitive and current applications that solve everyday
          problems. I study constantly to update myself and improve my skills
          more and more.
        </Typography>
      </Styles.Wrapper>
    </Styles.Container>
  );
};
