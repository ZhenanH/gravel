const { ColorPalette, BorderColors, ShadowColors, HoverColors } = require('./color');
const { ScreenSize, Spacing, Header, Sidebar, Footer, Body } = require('./layout');
const { FontSize, TextColor } = require('./font');

// This theme object contains all of the values that should be shared across our styled-components.
export const theme = {
  colors: {
    border: BorderColors,
    shadow: ShadowColors,
    hover: HoverColors,
    ...ColorPalette,
  },
  font: {
    size: FontSize,
    color: TextColor,
  },
  layout: {
    screenSize: ScreenSize,
    spacing: Spacing,
    header: Header,
    sidebar: Sidebar,
    footer: Footer,
    body: Body,
  },
};


