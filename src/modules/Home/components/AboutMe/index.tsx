import { Typography } from '../../../../components/Typography';
import reactIcon from '../../../../assets/images/react-icons.svg';
import { WrapperFlex } from '../../../../layout/Containers/Wrappers/WrapperFlex';
import { WrapperIcon } from '../../../../layout/Containers/Wrappers/WrapperIcon';
import * as Styles from './styles';

export const AboutMe = () => {
  return (
    <Styles.Container>
      <Styles.IconsWrapper>
        <WrapperIcon src={reactIcon} size={40} />
      </Styles.IconsWrapper>
      <Styles.Title>About me</Styles.Title>
      <WrapperFlex alignItems='center' justifyContent='center'>
        <Styles.TextBox>
          <Typography fontSize={20} color='PRIMARY_REVERT' bold>
            I&apos;m Fullstack developer who loves frontend.I live in Brazil, my
            passion is create intuitive and current applications that solve
            everyday problems. I study constantly to update myself and improve
            my skills more and more.
          </Typography>
        </Styles.TextBox>
      </WrapperFlex>
    </Styles.Container>
  );
};
