import { StaticImageData } from "next/image";

export interface IPageProps {
  params: Partial<any>;
  searchParams: Partial<any>;
}

interface CEO {
  img: StaticImageData;
  title: string;
  subtitle: string;
  text?: string;
}

export interface CaseCard {
  id: number;
  logo: StaticImageData;
  headerText: string;
  media?: React.ReactNode | React.ReactNode[];
  ceo?: CEO;
}

export interface MeshCard {
  id: number;
  link: string;
  media: React.ReactNode | React.ReactNode[];
  ceo: CEO;
}
