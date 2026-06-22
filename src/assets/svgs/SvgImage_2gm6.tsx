import React from 'react';
import { SvgXml } from 'react-native-svg';

const rawSvg = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9956 38.655V28.655H27.9956V38.655C27.9956 39.755 28.8956 40.655 29.9956 40.655H35.9956C37.0956 40.655 37.9956 39.755 37.9956 38.655V24.655H41.3956C42.3156 24.655 42.7556 23.515 42.0556 22.915L25.3356 7.85497C24.5756 7.17497 23.4156 7.17497 22.6556 7.85497L5.93556 22.915C5.25556 23.515 5.67556 24.655 6.59556 24.655H9.99556V38.655C9.99556 39.755 10.8956 40.655 11.9956 40.655H17.9956C19.0956 40.655 19.9956 39.755 19.9956 38.655Z" fill="#FBBF2D"/>
</svg>
`;

interface SvgImageProps {
  width?: number;
  height?: number;
  color?: string;
  style?: object;
}

const SvgImage_2gm6 = ({ width, height, color, style }: SvgImageProps) => {
  const svgString = color
    ? rawSvg
        .replaceAll('currentColor', color)
        .replaceAll(/fill="(?!none)[^"]*"/g, `fill="${color}"`)
        .replaceAll(/stroke="(?!none)[^"]*"/g, `stroke="${color}"`)
    : rawSvg;
  return <SvgXml xml={svgString} width={width} height={height} style={style} />;
};

export default SvgImage_2gm6;
export { SvgImage_2gm6 };
