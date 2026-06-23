import React from 'react';
import { SvgXml } from 'react-native-svg';

const rawSvg = `<svg width="528" height="332" viewBox="0 0 528 332" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_0_313" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="528" height="332">
<rect width="528" height="332" fill="#D9D9D9"/>
</mask>
<g mask="url(#mask0_0_313)">
<g style="mix-blend-mode:color-burn">
<line y1="-0.5" x2="196.815" y2="-0.5" transform="matrix(1.42266 1.40572 -1.42266 1.40572 254 -118.571)" stroke="#231F20"/>
<line y1="-0.5" x2="196.815" y2="-0.5" transform="matrix(1.42266 1.40572 -1.42266 1.40572 270 -118.571)" stroke="#231F20"/>
<line y1="-0.5" x2="196.815" y2="-0.5" transform="matrix(1.42266 1.40572 -1.42266 1.40572 286 -118.571)" stroke="#231F20"/>
<line y1="-0.5" x2="196.815" y2="-0.5" transform="matrix(1.42266 1.40572 -1.42266 1.40572 302 -118.571)" stroke="#231F20"/>
<line y1="-0.5" x2="196.815" y2="-0.5" transform="matrix(1.42266 1.40572 -1.42266 1.40572 318 -118.571)" stroke="#231F20"/>
<line y1="-0.5" x2="196.815" y2="-0.5" transform="matrix(1.42266 1.40572 -1.42266 1.40572 334 -118.571)" stroke="#231F20"/>
<line y1="-0.5" x2="196.815" y2="-0.5" transform="matrix(1.42266 1.40572 -1.42266 1.40572 350 -118.571)" stroke="#231F20"/>
<line y1="-0.5" x2="196.815" y2="-0.5" transform="matrix(1.42266 1.40572 -1.42266 1.40572 366 -118.571)" stroke="#231F20"/>
<line y1="-0.5" x2="196.815" y2="-0.5" transform="matrix(1.42266 1.40572 -1.42266 1.40572 382 -118.571)" stroke="#231F20"/>
<line y1="-0.5" x2="196.815" y2="-0.5" transform="matrix(1.42266 1.40572 -1.42266 1.40572 398 -118.571)" stroke="#231F20"/>
<line y1="-0.5" x2="196.815" y2="-0.5" transform="matrix(1.42266 1.40572 -1.42266 1.40572 414 -118.571)" stroke="#231F20"/>
</g>
</g>
</svg>
`;

interface SvgImageProps {
  width?: number;
  height?: number;
  color?: string;
  style?: object;
}

const SvgImage_6lrli = ({ width, height, color, style }: SvgImageProps) => {
  const svgString = color
    ? rawSvg
        .replaceAll('currentColor', color)
        .replaceAll(/fill="(?!none)[^"]*"/g, `fill="${color}"`)
        .replaceAll(/stroke="(?!none)[^"]*"/g, `stroke="${color}"`)
    : rawSvg;
  return <SvgXml xml={svgString} width={width} height={height} style={style} />;
};

export default SvgImage_6lrli;
export { SvgImage_6lrli };
