import React from 'react';
import { SvgXml } from 'react-native-svg';

const rawSvg = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0003 3.33325L6.66699 8.33325V18.4833C6.66699 26.8999 12.3503 34.7499 20.0003 36.6666C27.6503 34.7499 33.3337 26.8999 33.3337 18.4833V8.33325L20.0003 3.33325ZM30.0003 18.4833C30.0003 25.1499 25.7503 31.3166 20.0003 33.1999C14.2503 31.3166 10.0003 25.1666 10.0003 18.4833V10.5166L20.0003 6.98325L30.0003 10.5166V18.4833ZM14.7003 17.6499L12.3337 19.9999L18.2337 25.8999L27.667 16.4666L25.317 14.1166L18.2503 21.1833L14.7003 17.6499Z" fill="#999999"/>
</svg>
`;

interface SvgImageProps {
  width?: number;
  height?: number;
  color?: string;
  style?: object;
}

const SvgImage_4g7xl = ({ width, height, color, style }: SvgImageProps) => {
  const svgString = color
    ? rawSvg
        .replaceAll('currentColor', color)
        .replaceAll(/fill="(?!none)[^"]*"/g, `fill="${color}"`)
        .replaceAll(/stroke="(?!none)[^"]*"/g, `stroke="${color}"`)
    : rawSvg;
  return <SvgXml xml={svgString} width={width} height={height} style={style} />;
};

export default SvgImage_4g7xl;
export { SvgImage_4g7xl };
