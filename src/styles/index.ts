export * from './theme-type-definitions'
export { themeVariablesMap } from './themes'

export const fontWeights = {
  thin: '100',
  normal: '400',
  bold: '700',
  heavy: '900',
}

const fontSizeLargest = '28px'
const fontSizeLarge = '24px'
const fontSizeMedium = '19px'
const fontSizeRegular = '15px'
const fontSizeSmall = '13px'
const fontSizeSmallest = '11px'

export const fontSizes = {
  title: fontSizeLargest,
  heading: fontSizeLarge,
  subheading: fontSizeMedium,
  text: fontSizeRegular,
  subtext: fontSizeSmall,
  microtext: fontSizeSmallest,

  largest: fontSizeLargest,
  large: fontSizeLarge,
  medium: fontSizeMedium,
  regular: fontSizeRegular,
  small: fontSizeSmall,
  smallest: fontSizeSmallest,
}

//inclusive sizes
export const breakpoints = {
  smallMobile: {
    maxWidth: '480px',
  },
  mobile: {
    minWidth: '481px',
    maxWidth: '600px',
  },
  tablet: {
    minWidth: '601px',
    maxWidth: '768px',
  },
  largeTablet: {
    minWidth: '769px',
    maxWidth: '1024px',
  },
  smallDesktop: { minWidth: '1025px', maxWidth: '1200px' },
  desktop: { minWidth: '1201px' },
}
