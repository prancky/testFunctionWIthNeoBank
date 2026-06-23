import React from 'react';
import { SvgXml } from 'react-native-svg';

const rawSvg = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0001 3.33325L6.66675 8.33325V18.4833C6.66675 26.8999 12.3501 34.7499 20.0001 36.6666C27.6501 34.7499 33.3334 26.8999 33.3334 18.4833V8.33325L20.0001 3.33325ZM30.0001 18.4833C30.0001 25.1499 25.7501 31.3166 20.0001 33.1999C14.2501 31.3166 10.0001 25.1666 10.0001 18.4833V10.5166L20.0001 6.98325L30.0001 10.5166V18.4833ZM14.7001 17.6499L12.3334 19.9999L18.2334 25.8999L27.6667 16.4666L25.3167 14.1166L18.2501 21.1833L14.7001 17.6499Z" fill="#999999"/>
</svg>
`;

interface SvgImageProps {
  width?: number;
  height?: number;
  color?: string;
  style?: object;
}

const SvgImage_rdeob = ({ width, height, color, style }: SvgImageProps) => {
  const svgString = color
    ? rawSvg
        .replaceAll('currentColor', color)
        .replaceAll(/fill="(?!none)[^"]*"/g, `fill="${color}"`)
        .replaceAll(/stroke="(?!none)[^"]*"/g, `stroke="${color}"`)
    : rawSvg;
  return <SvgXml xml={svgString} width={width} height={height} style={style} />;
};

export default SvgImage_rdeob;
export { SvgImage_rdeob };
