import React, {
  createContext,
  useMemo,
  useState,
  ReactNode,
  useContext,
} from 'react';

import {
  component,
  radius,
  color,
  space,
  border,
  typography,
  text,
  effect,
} from '../assets';

import { defaultsDeep } from 'lodash';

// Build theme data object with all token categories
const themeData = {
  component,

  radius,

  color,

  space,

  border,

  typography,

  text,

  effect,
};

// Helper function to get token values by path
const getToken = (tokenPath: string): unknown => {
  const parts = tokenPath.split('.');
  let current: unknown = themeData;
  for (const part of parts) {
    current = (current as Record<string, unknown> | undefined)?.[part];
    if (current === undefined) return undefined;
  }
  return current;
};

export const defaultTheme = (
  tokenOverrides?: Partial<
    Pick<
      ThemeProps,
      | 'component'
      | 'radius'
      | 'color'
      | 'space'
      | 'border'
      | 'typography'
      | 'text'
      | 'effect'
    >
  >,
): ThemeProps => {
  return {
    component: tokenOverrides?.component ?? component,

    radius: tokenOverrides?.radius ?? radius,

    color: tokenOverrides?.color ?? color,

    space: tokenOverrides?.space ?? space,

    border: tokenOverrides?.border ?? border,

    typography: tokenOverrides?.typography ?? typography,

    text: tokenOverrides?.text ?? text,

    effect: tokenOverrides?.effect ?? effect,

    colors: tokenOverrides?.color ?? color, // backward compatibility alias

    getToken,
  };
};

export type ThemeContextData = {
  component?: typeof component;

  radius?: typeof radius;

  color?: typeof color;

  space?: typeof space;

  border?: typeof border;

  typography?: typeof typography;

  text?: typeof text;

  effect?: typeof effect;

  colors?: typeof color; // backward compatibility alias for 'color'

  getToken?: (tokenPath: string) => unknown;
};

export type ThemeProps = {
  component?: typeof component;

  radius?: typeof radius;

  color?: typeof color;

  space?: typeof space;

  border?: typeof border;

  typography?: typeof typography;

  text?: typeof text;

  effect?: typeof effect;

  colors?: typeof color; // backward compatibility alias for 'color'

  getToken?: (tokenPath: string) => unknown;
};

export const themeDefaultValue: ThemeContextData = {
  component: component,

  radius: radius,

  color: color,

  space: space,

  border: border,

  typography: typography,

  text: text,

  effect: effect,

  colors: color, // backward compatibility alias

  getToken,
};

export const ThemeContext = createContext<ThemeContextData>(themeDefaultValue);

export const useThemeContextValue = (
  initial: ThemeProps,
  initI18n?: unknown,
): ThemeContextData => {
  const [component] = useState<typeof component>(
    initial.component ?? component,
  );

  const [radius] = useState<typeof radius>(initial.radius ?? radius);

  const [color] = useState<typeof color>(initial.color ?? color);

  const [space] = useState<typeof space>(initial.space ?? space);

  const [border] = useState<typeof border>(initial.border ?? border);

  const [typography] = useState<typeof typography>(
    initial.typography ?? typography,
  );

  const [text] = useState<typeof text>(initial.text ?? text);

  const [effect] = useState<typeof effect>(initial.effect ?? effect);

  return useMemo(
    () => ({
      component,

      radius,

      color,

      space,

      border,

      typography,

      text,

      effect,

      colors: color, // backward compatibility alias

      getToken,
    }),
    [component, radius, color, space, border, typography, text, effect],
  );
};

export type ProviderProps = {
  children: ReactNode;
  theme: ThemeProps;
  i18n?: unknown;
};

export const createThemeData = (theme: ThemeProps): ThemeContextData => {
  const _component = defaultsDeep(theme.component, component);

  const _radius = defaultsDeep(theme.radius, radius);

  const _color = defaultsDeep(theme.color, color);

  const _space = defaultsDeep(theme.space, space);

  const _border = defaultsDeep(theme.border, border);

  const _typography = defaultsDeep(theme.typography, typography);

  const _text = defaultsDeep(theme.text, text);

  const _effect = defaultsDeep(theme.effect, effect);

  return defaultsDeep(
    theme,
    defaultTheme({
      component: _component,

      radius: _radius,

      color: _color,

      space: _space,

      border: _border,

      typography: _typography,

      text: _text,

      effect: _effect,
    }),
  );
};

export const ThemeProvider = (props: ProviderProps) => {
  const { children, theme, i18n } = props;
  const themeContextData = useThemeContextValue(theme, i18n);

  return (
    <ThemeContext.Provider value={themeContextData}>
      {children}
    </ThemeContext.Provider>
  );
};

// Backward-compatible hook: useThemeColors accesses the 'color' token
export const useThemeColors = () => useContext(ThemeContext).color;

export const useThemeComponent = () => useContext(ThemeContext).component;

export const useThemeRadius = () => useContext(ThemeContext).radius;

export const useThemeSpace = () => useContext(ThemeContext).space;

export const useThemeBorder = () => useContext(ThemeContext).border;

export const useThemeTypography = () => useContext(ThemeContext).typography;

export const useThemeText = () => useContext(ThemeContext).text;

export const useThemeEffect = () => useContext(ThemeContext).effect;

export const useThemeToken = () => useContext(ThemeContext).getToken;
