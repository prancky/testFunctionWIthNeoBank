import React from 'react';
import { SvgXml } from 'react-native-svg';

const rawSvg = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9998 3.33325L6.6665 8.33325V18.4833C6.6665 26.8999 12.3498 34.7499 19.9998 36.6666C27.6498 34.7499 33.3332 26.8999 33.3332 18.4833V8.33325L19.9998 3.33325ZM29.9998 18.4833C29.9998 25.1499 25.7498 31.3166 19.9998 33.1999C14.2498 31.3166 9.99984 25.1666 9.99984 18.4833V10.5166L19.9998 6.98325L29.9998 10.5166V18.4833ZM14.6998 17.6499L12.3332 19.9999L18.2332 25.8999L27.6665 16.4666L25.3165 14.1166L18.2498 21.1833L14.6998 17.6499Z" fill="#999999"/>
</svg>
`;

interface SvgImageProps {
  width?: number;
  height?: number;
  color?: string;
  style?: object;
}

const SvgImage_i4dx = ({ width, height, color, style }: SvgImageProps) => {
  const svgString = color
    ? rawSvg
        .replaceAll('currentColor', color)
        .replaceAll(/fill="(?!none)[^"]*"/g, `fill="${color}"`)
        .replaceAll(/stroke="(?!none)[^"]*"/g, `stroke="${color}"`)
    : rawSvg;
  return <SvgXml xml={svgString} width={width} height={height} style={style} />;
};

export default SvgImage_i4dx;
export { SvgImage_i4dx };
