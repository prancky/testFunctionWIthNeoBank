import React from 'react';
import { SvgXml } from 'react-native-svg';

const rawSvg = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0007 10.8333C13.684 10.8333 8.05065 14.3833 5.30065 20C8.05065 25.6167 13.684 29.1667 20.0007 29.1667C26.3173 29.1667 31.9507 25.6167 34.7007 20C31.9507 14.3833 26.3173 10.8333 20.0007 10.8333ZM20.0007 7.5C28.334 7.5 35.4507 12.6833 38.334 20C35.4507 27.3167 28.334 32.5 20.0007 32.5C11.6673 32.5 4.55065 27.3167 1.66732 20C4.55065 12.6833 11.6673 7.5 20.0007 7.5ZM20.0007 15.8333C17.7006 15.8333 15.834 17.7 15.834 20C15.834 22.3 17.7006 24.1667 20.0007 24.1667C22.3006 24.1667 24.1673 22.3 24.1673 20C24.1673 17.7 22.3006 15.8333 20.0007 15.8333ZM20.0007 12.5C24.134 12.5 27.5007 15.8667 27.5007 20C27.5007 24.1333 24.134 27.5 20.0007 27.5C15.8673 27.5 12.5007 24.1333 12.5007 20C12.5007 15.8667 15.8673 12.5 20.0007 12.5Z" fill="black"/>
</svg>
`;

interface SvgImageProps {
  width?: number;
  height?: number;
  color?: string;
  style?: object;
}

const SvgImage_g9z4 = ({ width, height, color, style }: SvgImageProps) => {
  const svgString = color
    ? rawSvg
        .replaceAll('currentColor', color)
        .replaceAll(/fill="(?!none)[^"]*"/g, `fill="${color}"`)
        .replaceAll(/stroke="(?!none)[^"]*"/g, `stroke="${color}"`)
    : rawSvg;
  return <SvgXml xml={svgString} width={width} height={height} style={style} />;
};

export default SvgImage_g9z4;
export { SvgImage_g9z4 };
