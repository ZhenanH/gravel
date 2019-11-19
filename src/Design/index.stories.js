import React from 'react';
//import { linkTo } from '@storybook/addon-links';
import Intro  from './Intro';
import Color  from './Color';
import Text  from './Text';

export default {
  title: 'Design | Guideline',
};

export const intro = () => <Intro/>;

intro.story = {
  name: 'Intro',
};

export const color = () => <Color/>;

color.story = {
  name: 'Color',
};

export const text = () => <Text/>;

text.story = {
  name: 'Text',
};