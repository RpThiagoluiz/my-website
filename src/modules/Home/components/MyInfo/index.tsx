import { HorizontalDivider } from '../../../../layout/Divider/Horizontal';
import { Typography, TypographyHighLight } from '../../../../layout/Typography';
import { useTypedWords } from '../../hooks/useTypedWords';
import avatar from '../../../../assets/images/avatar.png';
import * as Styles from './styles';

const stacks = ['Web Developer', 'Mobile Developer'];

export const MyInfo = () => {
  const { typedWord } = useTypedWords(stacks);

  return (
    <Styles.Wrapper>
      <Styles.WrapperDescriptionAndImage>
        <div>
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
          <HorizontalDivider widthPercentage={80} />

          <Typography fontSize={16} marginTop={10}>
            React | NextJs | React Native | NodeJs | Typescript
          </Typography>
        </div>

        <Styles.Square>
          <Styles.Image src={avatar} alt='Image of me, using a suit' />
        </Styles.Square>
      </Styles.WrapperDescriptionAndImage>
    </Styles.Wrapper>
  );
};
