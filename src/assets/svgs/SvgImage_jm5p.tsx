import React from 'react';
import { SvgXml } from 'react-native-svg';

const rawSvg = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 20C8 19.6022 8.15804 19.2206 8.43934 18.9393C8.72064 18.658 9.10218 18.5 9.5 18.5H30.5C30.8978 18.5 31.2794 18.658 31.5607 18.9393C31.842 19.2206 32 19.6022 32 20C32 20.3978 31.842 20.7794 31.5607 21.0607C31.2794 21.342 30.8978 21.5 30.5 21.5H9.5C9.10218 21.5 8.72064 21.342 8.43934 21.0607C8.15804 20.7794 8 20.3978 8 20Z" fill="#FBBF2D"/>
</svg>
`;

interface SvgImageProps {
  width?: number;
  height?: number;
  color?: string;
  style?: object;
}

const SvgImage_jm5p = ({ width, height, color, style }: SvgImageProps) => {
  const svgString = color
    ? rawSvg
        .replaceAll('currentColor', color)
        .replaceAll(/fill="(?!none)[^"]*"/g, `fill="${color}"`)
        .replaceAll(/stroke="(?!none)[^"]*"/g, `stroke="${color}"`)
    : rawSvg;
  return <SvgXml xml={svgString} width={width} height={height} style={style} />;
};

export default SvgImage_jm5p;
export { SvgImage_jm5p };
