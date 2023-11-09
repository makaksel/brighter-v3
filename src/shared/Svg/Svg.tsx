'use client';

import React from 'react';

interface SvgProps extends React.SVGAttributes<HTMLOrSVGElement> {
  name: string;
  className?: string;
  height?: number;
  title?: string;
  width?: number;
}

export const Svg = ({
  name,
  className,
  height,
  title,
  width,
  ...props
}: SvgProps) => {
  return (
    <svg {...props} className={className} height={height} width={width}>
      {title && <title>{title}</title>}
      <use href={`#${name}`} />
    </svg>
  );
};
