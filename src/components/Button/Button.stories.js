import React from 'react';
//import { action } from '@storybook/addon-actions';
import {Button} from './Button';
import '../../App.css';


// export default {
//   title: 'Components | Button',
//   parameters: {
//     component: Button,
//     componentSubtitle: 'An input to trigger an operation.',
//   },
// };


export const button = () => <div class="demo">
  <Button>Normal</Button>
  <Button type="primary">Primary</Button>
  <Button type="disabled">Disabled</Button>
  </div>;