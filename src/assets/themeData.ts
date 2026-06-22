import { createThemeData } from '../context';

import { component } from './component';

import { radius } from './radius';

import { color } from './color';

import { space } from './space';

import { border } from './border';

import { typography } from './typography';

import { text } from './text';

import { effect } from './effect';

const themeData = createThemeData({
  component: component,

  radius: radius,

  color: color,

  space: space,

  border: border,

  typography: typography,

  text: text,

  effect: effect,
});

export default themeData;
