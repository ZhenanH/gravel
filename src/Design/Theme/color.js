// This file contains our approved color palette for a variety of use-cases throughout the application.
// Loosely based on:https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
const ColorPalette = {
  primary: '#1b2ccc',
  info: '#1b2ccc',
  processing: '#1b2ccc',
  success: '#52c41a',
  error: '#f5222d',
  highlight: '#f5222d',
  warning: '#faad14',
  caution: '#f9d515',
  normal: '#d9d9d9',
  disabled: 'rgba(0, 0, 0, 0.25)',
};

const HoverColors = {
  default: 'rgba(0, 0, 0, 0.025)',
  secondary: 'rgba(0, 0, 0, 0.05)',
};

const ShadowColors = {
  default: 'rgba(0, 21, 41, 0.35)',
  lightest: 'rgba(0, 0, 0, 0.025)',
  light: 'rgba(0, 21, 41, 0.08)',
  medium: 'rgba(0, 21, 41, 0.15)',
};

const BorderColors = {
  default: '#e8e8e8',
};

module.exports = {
  ColorPalette,
  HoverColors,
  ShadowColors,
  BorderColors,
};
