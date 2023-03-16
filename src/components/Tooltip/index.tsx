import * as Styles from './styles';

interface Props {
  children: React.ReactNode;
  toolTipContainer: React.ReactNode | string;
}

export const Tooltip = ({ children, toolTipContainer }: Props) => {
  return (
    <>
      <Styles.TooltipCard>
        <Styles.TooltipContainer>{children}</Styles.TooltipContainer>
        <Styles.TooltipBox>{toolTipContainer}</Styles.TooltipBox>
      </Styles.TooltipCard>
    </>
  );
};
