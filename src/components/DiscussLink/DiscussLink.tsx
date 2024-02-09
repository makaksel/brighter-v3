import Link from "next/link";
import ArrowRight from "@/src/resources/icons/ArrowRight.svg";
import React from "react";
import { makeCn } from "@/src/utils";
import { routerLinks } from "@/src/data/navigation";
import './DiscussLink.scss'

const cn = makeCn('discuss-link')

export const DiscussLink = () => <Link className={cn('')} href={routerLinks.brif}>
  <span>обсудить проект</span>
  <ArrowRight className={cn('icon')}/>
</Link>