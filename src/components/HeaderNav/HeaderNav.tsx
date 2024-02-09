import React from "react";
import Link from "next/link";
import { routerLinks } from "@/src/data/navigation";
import { makeCn } from "@/src/utils";
import './HeaderNav.scss';

const cn = makeCn('header-nav');


export const HeaderNav: React.FC = () => {
  console.log('here')

  return (
    <nav className={cn('')}>
      {Object.entries(routerLinks).map(([_, elem]) =>
        <Link key={elem.path} className={cn('link', { active: true })}
              href={elem.path}>{elem.label}</Link>
      )}
    </nav>
  )
};