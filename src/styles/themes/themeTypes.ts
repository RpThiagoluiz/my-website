export type BackgroundColors = {
  PRIMARY: string;
  SECONDARY: string;
};

export type HighlightColors = {
  CIANO: string;
  PINK: string;
};

export type InfoColors = {
  WARNING: string;
  ALERT: string;
  SUCCESS: string;
};

export type FontColors = {
  PRIMARY: string;
  PRIMARY_REVERT: string;
};

export type themeType = {
  COLORS: {
    BACKGROUND: BackgroundColors;

    WHITE: string;
    FONT: FontColors;
    HIGHLIGHT: HighlightColors;
    INFO: InfoColors;
  };
};
