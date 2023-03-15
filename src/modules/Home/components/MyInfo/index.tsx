import { HorizontalDivider } from '../../../../layout/Divider/Horizontal';
import { Typography, TypographyHighLight } from '../../../../layout/Typography';
import { useTypedWords } from '../../hooks/useTypedWords';
import * as Styles from './styles';

const stacks = ['Web', 'Mobile'];

export const MyInfo = () => {
  const { typedWord } = useTypedWords(stacks);

  return (
    <Styles.Wrapper>
      <Typography fontSize={20}>HI THERE! I&apos;M </Typography>

      <Styles.WrapperFlexCenter>
        <TypographyHighLight fontSize={40}>Thiago </TypographyHighLight>
        <Typography fontSize={30}> Luiz Gonçalves</Typography>
      </Styles.WrapperFlexCenter>

      <Styles.WrapperFlexCenter>
        <Typography fontSize={25}>A Front-End</Typography>
        <TypographyHighLight fontSize={25}>{typedWord}</TypographyHighLight>
        <Styles.Typing />
      </Styles.WrapperFlexCenter>
      <HorizontalDivider widthPercentage={40} />

      <Typography fontSize={16} marginTop={10}>
        React | React Native (Expo) | ... (TODO)
      </Typography>
    </Styles.Wrapper>
  );
};
