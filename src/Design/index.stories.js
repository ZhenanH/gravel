import React from 'react';
import { linkTo } from '@storybook/addon-links';
import Intro  from './Intro';
import Color  from './Color';

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

