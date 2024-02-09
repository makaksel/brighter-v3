'use client';

import React from "react";
import Link from "next/link";
import { navigation } from "@/src/data/navigation";
import { makeCn } from "@/src/utils";
import './HeaderNav.scss';
import { usePathname } from "next/navigation";

const cn = makeCn('header-nav');


export const HeaderNav: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className={cn('')}>
      {Object.entries(navigation).map(([_, elem]) =>
        <Link key={elem.path} className={cn('link', { active: pathname === elem.path })}
              href={elem.path}>{elem.label}</Link>
      )}
    </nav>
  )
};