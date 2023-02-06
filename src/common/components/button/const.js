import { colors } from '../const/colors';

export const buttonSize = {
  md: {
    height: 47,
    fontSize: 14,
    lineHeight: 24,
    radius: 30,
    letterSpacing: 1.9,
    padding: [12, 26],
  },
};

export const buttonVariant = {
  solid: {
    border: true,
    primary: {
      bg: colors.white,
      color: colors.primary,
      borderColor: colors.primary,
      borderWidth: 1,
      hover: {
        bg: colors.white,
        color: colors.primary,
        borderColor: colors.primary,
        borderWidth: 2,
      },
      focus: {
        bg: colors.white,
        color: colors.primary,
        borderColor: colors.primary,
        borderWidth: 3,
      },
      disabled: {
        bg: colors.grayMedium,
        color: colors.white,
        borderColor: colors.grayMedium,
        borderWidth: 1,
      },
    },
    red: {
      bg: colors.white,
      color: colors.red,
      borderColor: colors.red,
      borderWidth: 1,
      hover: {
        bg: colors.white,
        color: colors.red,
        borderColor: colors.red,
        borderWidth: 2,
      },
      focus: {
        bg: colors.white,
        color: colors.red,
        borderColor: colors.red,
        borderWidth: 3,
      },
      disabled: {
        bg: colors.grayMedium,
        color: colors.white,
        borderColor: colors.grayMedium,
        borderWidth: 1,
      },
    },
  },
};
