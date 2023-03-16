export type HighlightColors = {
  CIANO: string;
  PINK: string;
};

export type InfoColors = {
  WARNING: string;
  ALERT: string;
  SUCCESS: string;
};

export type themeType = {
  COLORS: {
    BACKGROUND_PRIMARY: string;
    BACKGROUND_SECONDARY: string;
    WHITE: string;

    FONT_PRIMARY: string;

    HIGHLIGHT: HighlightColors;
    INFO: InfoColors;
  };
};
