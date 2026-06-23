import React from 'react';
import { SvgXml } from 'react-native-svg';

const rawSvg = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40 14H30V8C30 5.8 28.2 4 26 4H22C19.8 4 18 5.8 18 8V14H8C5.8 14 4 15.8 4 18V40C4 42.2 5.8 44 8 44H40C42.2 44 44 42.2 44 40V18C44 15.8 42.2 14 40 14ZM18 24C19.66 24 21 25.34 21 27C21 28.66 19.66 30 18 30C16.34 30 15 28.66 15 27C15 25.34 16.34 24 18 24ZM24 36H12V35.14C12 33.94 12.72 32.84 13.84 32.36C15.12 31.8 16.52 31.5 18 31.5C19.48 31.5 20.88 31.8 22.16 32.36C23.26 32.84 24 33.92 24 35.14V36ZM26 18H22V8H26V18ZM34.5 33H29.5C28.68 33 28 32.32 28 31.5C28 30.68 28.68 30 29.5 30H34.5C35.32 30 36 30.68 36 31.5C36 32.32 35.32 33 34.5 33ZM34.5 27H29.5C28.68 27 28 26.32 28 25.5C28 24.68 28.68 24 29.5 24H34.5C35.32 24 36 24.68 36 25.5C36 26.32 35.32 27 34.5 27Z" fill="#FBBF2D"/>
</svg>
`;

interface SvgImageProps {
  width?: number;
  height?: number;
  color?: string;
  style?: object;
}

const SvgImage_aghec = ({ width, height, color, style }: SvgImageProps) => {
  const svgString = color
    ? rawSvg
        .replaceAll('currentColor', color)
        .replaceAll(/fill="(?!none)[^"]*"/g, `fill="${color}"`)
        .replaceAll(/stroke="(?!none)[^"]*"/g, `stroke="${color}"`)
    : rawSvg;
  return <SvgXml xml={svgString} width={width} height={height} style={style} />;
};

export default SvgImage_aghec;
export { SvgImage_aghec };
