import React from 'react';
import { SvgXml } from 'react-native-svg';

const rawSvg = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 44C26.2 44 28 42.2 28 40H20C20 42.2 21.8 44 24 44Z" fill="#FBBF2D"/>
<path d="M18 38H30C31.1 38 32 37.1 32 36C32 34.9 31.1 34 30 34H18C16.9 34 16 34.9 16 36C16 37.1 16.9 38 18 38Z" fill="#FBBF2D"/>
<path d="M24 4C15.72 4 9 10.72 9 19C9 26.64 14.32 30.72 16.54 32H31.46C33.68 30.72 39 26.64 39 19C39 10.72 32.28 4 24 4Z" fill="#FBBF2D"/>
</svg>
`;

interface SvgImageProps {
  width?: number;
  height?: number;
  color?: string;
  style?: object;
}

const SvgImage_hzd1 = ({ width, height, color, style }: SvgImageProps) => {
  const svgString = color
    ? rawSvg
        .replaceAll('currentColor', color)
        .replaceAll(/fill="(?!none)[^"]*"/g, `fill="${color}"`)
        .replaceAll(/stroke="(?!none)[^"]*"/g, `stroke="${color}"`)
    : rawSvg;
  return <SvgXml xml={svgString} width={width} height={height} style={style} />;
};

export default SvgImage_hzd1;
export { SvgImage_hzd1 };
