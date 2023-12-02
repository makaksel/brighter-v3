'use client';

import React, { useMemo } from 'react';
// Import a necessary function in the ES6 way (recommended):
import { sanitize } from 'isomorphic-dompurify';

import { svgIcons } from '@/src/shared/Svg/SvgIcons';

export const SvgSprite = () => {
  // console.log(isSupported, 'isSupported')
  const processed = useMemo(() => {
    const result = svgIcons
      .map(({ name, dom }) => {

        const sanitized = sanitize(dom, {
          USE_PROFILES: { svg: true, svgFilters: true },
          RETURN_DOM: true,
        });

        // console.log(sanitized)
        return sanitized;

        /* sanitized.querySelectorAll("svg").forEach((svg: SVGElement) => {
           const attrs = Array.from(svg.attributes);
           const symbol = document.createElement("symbol");

           for (const attr of attrs) {
             symbol.setAttribute(attr.nodeName, `${attr.nodeValue}`);
           }

           symbol.removeAttribute("xmlns");
           symbol.removeAttribute("height");
           symbol.removeAttribute("width");

           symbol.setAttribute("id", name);

           symbol.innerHTML = svg.innerHTML;

           svg.replaceWith(symbol);
         });

         return sanitized.innerHTML;
 */
      })
      .join('');

    return result;
  }, []);

  return (
    <svg style={{ display: 'none' }} xmlns='http://www.w3.org/2000/svg'>
      <defs
        dangerouslySetInnerHTML={{
          __html: processed,
        }}
      />
    </svg>
  );
};