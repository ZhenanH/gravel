import { configure } from '@storybook/react';
import React from 'react';
import { load, addDecorator } from '@storybook/react';

addDecorator(storyFn => <div style={{ margin: '24px' }}>{storyFn()}</div>);

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
//load(require.context('../src', true, /\.stories\.js$/), module);