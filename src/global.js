import styledNormalize from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

export function fontFace(
  name,
  src,
  fontWeight = 'normal',
  fontStyle = 'normal'
) {
  /* eslint-disable */
  return `
    @font-face{
        font-family: "${name}";
        src: url(${require('./assets/fonts/' + src + '.eot')});
        src: url(${require('./assets/fonts/' + src + '.eot')}?#iefix) format("embedded-opentype"),
             url(${require('./assets/fonts/' + src + '.woff')}) format("woff"),
             url(${require('./assets/fonts/' + src + '.ttf')}) format("truetype"),
             url(${require('./assets/fonts/' + src + '.svg')}#${name}) format("svg");

        font-style: ${fontStyle};
        font-weight: ${fontWeight};
    }
`;
}

export const GlobalStyle = createGlobalStyle`
  ${fontFace('HelveticaNeue', 'HelveticaNeueCyr-Thin', 100, 'normal')}
  ${fontFace('HelveticaNeue', 'HelveticaNeueCyr-Light', 300, 'normal')}
  ${fontFace('HelveticaNeue', 'HelveticaNeueCyr-Roman', 'normal', 'normal')}
  ${fontFace('HelveticaNeue', 'HelveticaNeueCyr-Medium', 500, 'normal')}
  ${fontFace('HelveticaNeue', 'HelveticaNeueCyr-Bold', 600, 'normal')}
  
  ${styledNormalize}
  
  *{
    box-sizing: border-box;
  }

  button {
    border: 0
  }

  body {
    font-family: 'HelveticaNeue', sans-serif;
    font-weight: 500;
    font-size: 14px;
    overflow-y: scroll;
    ${props => ({...props.bodyProps || {}})}
    min-width: ${props => props.bodyWidth || '1600px'};
  }
`;