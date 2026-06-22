import { color } from './color';
import { radius } from './radius';
import { space } from './space';

export const component = {
  dropdown: {
    selectedText: {
      color: '#EAEAEA',
    },
  },
  input: {
    background: color.surface.default,
    text: color.text.primary,
    placeholder: color.text.tertiary,
    border: {
      focus: color.border.strong,
      disabled: color.border.disabled,
      default: color.border.default,
      error: color.status.danger,
    },
    height: 44,
    radius: radius.sm,
    padding: {
      x: space['3'],
      y: space['3'],
    },
  },
  button: {
    text: {
      color: color.brand.onPrimary,
      disabled: color.text.disabled,
    },
    background: {
      color: color.brand.primary,
      disabled: color.surface.disabled,
    },
    border: color.border.default,
    radius: radius.md,
    height: 44,
  },
  icon: {
    size: {
      sm: 16,
      md: 20,
      lg: 24,
    },
  },
};
