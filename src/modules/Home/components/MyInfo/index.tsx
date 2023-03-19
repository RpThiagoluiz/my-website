import { useTypedWords } from '../../hooks/useTypedWords';
import avatar from '../../../../assets/images/avatar.png';
import {
  Typography,
  TypographyHighLight,
} from '../../../../components/Typography';
import { WrapperFlex } from '../../../../layout/Containers/Wrappers/WrapperFlex';
import { HorizontalDivider } from '../../../../components/Divider/Horizontal';
import { Tooltip } from '../../../../components/Tooltip';
import * as Styles from './styles';

const stacks = ['ReactJs', 'NextJs', 'React native', 'NodeJs'];

export const MyInfo = () => {
  const { typedWord } = useTypedWords(stacks);

  return (
    <Styles.Container>
      <Styles.Wrapper>
        <Styles.WrapperDescriptionAndImage>
          <div>
            <Typography fontSize={20}>HI THERE! I&apos;M </Typography>
            <WrapperFlex alignItems='center'>
              <TypographyHighLight
                fontSize={40}
                highLightColor='CIANO'
                marginRight={10}
              >
                Thiago
              </TypographyHighLight>
              <Typography fontSize={30}> Luiz Gonçalves</Typography>
            </WrapperFlex>
            <Typography fontSize={25}>A fullstack developer</Typography>
            <WrapperFlex alignItems='center'>
              <Typography fontSize={25}>Techs</Typography>
              <TypographyHighLight
                fontSize={25}
                highLightColor='CIANO'
                marginLeft={10}
              >
                {typedWord}
              </TypographyHighLight>
              <Styles.Typing />
            </WrapperFlex>
            <HorizontalDivider widthPercentage={80} />
            <TypographyHighLight fontSize={15} highLightColor='PINK'>
              Plus
            </TypographyHighLight>
            <Typography fontSize={16} marginTop={10}>
              Redux | ReduxTK | Typescript | Jest | Sass | Styled-components |
              TailwindCss
            </Typography>
          </div>

          <Styles.GeometricWrapper>
            <Styles.Image src={avatar} alt='Image of me, using a suit' />
          </Styles.GeometricWrapper>
        </Styles.WrapperDescriptionAndImage>
        <TypographyHighLight
          fontSize={25}
          marginBottom={25}
          highLightColor='PINK'
        >
          Contacts
        </TypographyHighLight>

        <WrapperFlex gap={25}>
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
            <a
              href='https://drive.google.com/file/d/18nLo_s96ezbSHlmaOFphiAK2h6uGfYpU/view'
              target='_blank'
              referrerPolicy='no-referrer'
              rel='noreferrer'
            >
              <Styles.DownloadIcon />
            </a>
          </Tooltip>
        </WrapperFlex>
      </Styles.Wrapper>
    </Styles.Container>
  );
};
