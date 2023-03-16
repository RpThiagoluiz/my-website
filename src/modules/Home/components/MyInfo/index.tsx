import { useTypedWords } from '../../hooks/useTypedWords';
import avatar from '../../../../assets/images/avatar.png';
import * as Styles from './styles';
import {
  Typography,
  TypographyHighLight,
} from '../../../../components/Typography';
import { HorizontalDivider } from '../../../../components/Divider/Horizontal';
import { Tooltip } from '../../../../components/Tooltip';

const stacks = ['Web Developer', 'Mobile Developer'];

export const MyInfo = () => {
  const { typedWord } = useTypedWords(stacks);

  return (
    <Styles.Wrapper>
      <Styles.WrapperDescriptionAndImage>
        <div>
          <Typography fontSize={20}>HI THERE! I&apos;M </Typography>
          <Styles.WrapperFlex alignItems='center'>
            <TypographyHighLight fontSize={40} highLightColor='CIANO'>
              Thiago{' '}
            </TypographyHighLight>
            <Typography fontSize={30}> Luiz Gonçalves</Typography>
          </Styles.WrapperFlex>
          <Styles.WrapperFlex alignItems='center'>
            <Typography fontSize={25}>A Front-End</Typography>
            <TypographyHighLight fontSize={25} highLightColor='CIANO'>
              {typedWord}
            </TypographyHighLight>
            <Styles.Typing />
          </Styles.WrapperFlex>
          <HorizontalDivider widthPercentage={80} />

          <Typography fontSize={16} marginTop={10}>
            React | NextJs | React Native | NodeJs | Typescript
          </Typography>
        </div>

        <Styles.Square>
          <Styles.Image src={avatar} alt='Image of me, using a suit' />
        </Styles.Square>
      </Styles.WrapperDescriptionAndImage>
      <TypographyHighLight
        fontSize={25}
        marginBottom={25}
        highLightColor='PINK'
      >
        Highlights
      </TypographyHighLight>

      <Styles.WrapperFlex gap={25}>
        <a
          href='https://github.com/RpThiagoluiz'
          target='_blank'
          referrerPolicy='no-referrer'
          rel='noreferrer'
        >
          <Styles.GithubIcon />
        </a>
        <a
          href='https://www.linkedin.com/in/thiago-luiz-0984191a7/'
          target='_blank'
          referrerPolicy='no-referrer'
          rel='noreferrer'
        >
          <Styles.LinkedInIcon />
        </a>
        <Tooltip toolTipContainer='resume'>
          <Styles.DownloadIcon />
        </Tooltip>
      </Styles.WrapperFlex>
    </Styles.Wrapper>
  );
};
