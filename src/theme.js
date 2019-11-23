export {
  ThemeProvider
} from 'styled-components';

/**
 * Преобразует цвет (16) в rgba
 *
 * param {string} color цвет(16)
 * param {string|number} opacity прозрачность
 *
 * returns {string} строка в формате rgba
 */
export const colorToRgba = (color, opacity) => {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity || 1});`;
};

/** Общие цвета */
export const colors = {
  primary: '#3b424c',

  lightGray: 'hsl(195, 7%, 89%)',
  mediumGray: '#a8b4c4',
  gray: '#7e8999',
  bgDark: '#cfe2ee',
  UIOrange: '#fbad3a',

  green: '#a2d628',
  grays: {
    0: 'hsla(203, 48%, 87%, 0.77)',
    1: 'hsl(0, 0%, 15%)',
    2: 'hsl(211, 10%, 58%)',
    3: 'hsl(0, 0%, 20%)',
    4: 'hsl(0, 0%, 90%)',
    5: 'hsla(0, 0%, 0%, 0.25)',

  },
  blues: {
    0: 'hsl(197, 80%, 49%)',
    1: 'hsl(211, 100%, 33%)',
    2: 'hsla(197, 80%, 49%,0.3);',
    3: 'hsl(203, 81%, 61%)',
    4: 'hsla(212, 72%, 59%, 0.7)',
    5: 'hsla(203, 48%, 87%, 0.77)',
  },
  reds: {
    0: 'hsl(340, 60%, 96%)',
    1: 'hsla(340, 99%, 41%, 0.5)',
    2: 'hsla(353, 98%, 41%, 0.7)',
  },
  UIDanube: {
    0: 'hsl(212, 39%, 56%)',
    1: 'hsl(212, 39%, 56%)',
    2: 'hsl(212, 39%, 56%)',
  },
  UISaffron: {
    0: 'hsl(45, 85%, 56%)',
    1: 'hsl(45, 85%, 56%)',
    2: 'hsl(45, 85%, 56%)',
  },
  UIWildWillow: {
    0: 'hsl(76, 57%, 62%)',
    1: 'hsl(76, 57%, 62%)',
    2: 'hsl(76, 57%, 62%)',
  },
  UIAquamarine: {
    0: 'hsl(165, 47%, 60%)',
    1: 'hsl(165, 47%, 60%)',
    2: 'hsl(165, 47%, 60%)',
  },
  UIDarkGray: {
    0: 'hsl(0, 0%, 65%)',
    1: 'hsl(0, 0%, 65%)',
    2: 'hsl(0, 0%, 65%)',
  },
  UITransparent: {
    0: 'hsla(0, 0%, 0%, 0)',
    1: 'hsla(0, 0%, 0%, 0)',
    2: 'hsla(0, 0%, 0%, 0)',
  },
  orange: '#fbad3a',

  red: 'rgba(208, 2, 27, 0.7)',
  lightRed: 'rgba(209, 1, 72, 0.5)',
  white: 'hsl(0, 0%, 100%)',
  black: '#000000',

  transparent: 'transparent'
};

export const globalRounding = '5px';
export const inputHeights = [0, 48];

const breakpoints = ['40em', '52em', '64em', '80em'];

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

/* ------------------------- Тема -------------------------- */
export const theme = {
  colors,
  breakpoints,
  /** Размеры кнопок */
  buttonSizes: {
    default: {
      height: 48,
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 0,
      paddingBottom: 0,
      // padding: '0 30',
      fontSize: 16,
    },
    small: {
      height: 30,
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 0,
      paddingBottom: 0,
      // padding: '0 30',
      fontSize: 16,
    },
    login: {
      height: 56,
      width: 341,
    }
  },
  states: {
    disabled: {
      opacity: 0.3,
      backgroundColor: colors.gray,
      cursor: 'not-allowed',
      borderColor: 'red',
      // borderColor: colors.grays[4],
    }
  },
  inputStates: {
    error: {
      backgroundColor: colors.reds[0],
      borderColor: colors.reds[1],
      '&:focus': {
        borderColor: `${colors.reds[1]} !important`,
        boxShadow: `0 0 4px 0 ${colors.reds[2]} !important`,
        backgroundColor: `${colors.reds[0]} !important`,
      }
    },
    disabled: {
      opacity: 0.7,
      borderColor: colors.grays[4],
      boxShadow: 'none',
    }
  },
  /** Цвета кнопок */
  buttonColors: {
    default: {
      backgroundColor: colors.blues[1],
      color: colors.white,
    },
    blue: {
      backgroundColor: colors.blues[1],
      color: colors.white,
    },
    lightBlue: {
      backgroundColor: colors.blues[0],
      color: colorToRgba('#10aee7', 0.5),
    },
  },
  hoverStyles: {
    UITab: {
      '&:hover': {
        backgroundColor: 'red',
        color: 'white'
      }
    },
    UIGroupButton: {
      '&:hover span': {
        color: 'white'
      }
    },
    UITabActive: {
      '&:hover': {
        backgroundColor: '#10aee7'
      }
    },
    UITrigger: {
      '&:hover': {
        backgroundColor: '#00a9f6',
        borderColor: '#00a9f6'
      }
    },
    UIRadioButton: {
      '&:hover': {
        borderColor: '#10aee7'
      }
    },
    green: {
      '&:hover': {
        borderColor: '#a2d628'
      }
    },
    UIPaginationArrow: {
      '&:hover': {
        backgroundColor: colorToRgba('#cccccc', 0.1)
      }
    },
    UIPaginationPage: {
      '&:hover': {
        background: colorToRgba('#cccccc', 0.1)
      }
    },
    tel: {
      default: {
        '&:hover': {
          color: 'rgba(255, 255, 255, 0.8)'
        }
      }
    }
  },
  space: [0, 5, 8, 10, 15, 20, 30, 64, 128, 256, 512],
  radii: [0, 5, 15],
  fontWeights: [0, 100, 300, 'normal', 500, 600],
  fontSizes: [0, 12, 14, 16, 18, 24, 26, 32, 36, 48],
};
