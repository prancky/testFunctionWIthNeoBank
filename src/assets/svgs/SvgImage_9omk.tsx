import React from 'react';
import { SvgXml } from 'react-native-svg';

const rawSvg = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26 32H22C20.9 32 20 31.1 20 30H6.02V38C6.02 40.2 7.82 42 10.02 42H38C40.2 42 42 40.2 42 38V30H28C28 31.1 27.1 32 26 32ZM40 14H32C32 9.58 28.42 6 24 6C19.58 6 16 9.58 16 14H8C5.8 14 4 15.8 4 18V24C4 26.22 5.78 28 8 28H20V26C20 24.9 20.9 24 22 24H26C27.1 24 28 24.9 28 26V28H40C42.2 28 44 26.2 44 24V18C44 15.8 42.2 14 40 14ZM20 14C20 11.8 21.8 10 24 10C26.2 10 28 11.8 28 14H19.98H20Z" fill="#FBBF2D"/>
</svg>
`;

interface SvgImageProps {
  width?: number;
  height?: number;
  color?: string;
  style?: object;
}

const SvgImage_9omk = ({ width, height, color, style }: SvgImageProps) => {
  const svgString = color
    ? rawSvg
        .replaceAll('currentColor', color)
        .replaceAll(/fill="(?!none)[^"]*"/g, `fill="${color}"`)
        .replaceAll(/stroke="(?!none)[^"]*"/g, `stroke="${color}"`)
    : rawSvg;
  return <SvgXml xml={svgString} width={width} height={height} style={style} />;
};

export default SvgImage_9omk;
export { SvgImage_9omk };
