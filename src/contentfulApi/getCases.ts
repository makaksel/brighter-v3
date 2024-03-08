import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { contentfulClient } from '@/src/contentfulApi/contentfulClient';


export interface MediaObject {
  fields: {
    title: string,
    file: {
      url: string,
      fileName: string,
      details: {
        image: {
          width: number;
          height: number;
        };
      },
      contentType: string
    }
  };
}

export interface CaseFields {
  title: string,
  rating: number,
  about: string,
  subtitle: string,
  order: number,
  task: string,
  result: string,
  link: string;
  imgs: MediaObject[];
  cardImg: MediaObject;
  caseCardImgs: MediaObject[];
  caseImgOrder: number,
  behanceLink?: string;
}

export interface Case {
  sys: {
    id: string,
  };
  fields: CaseFields;
}

export interface CaseResponse {
  items: Case[];
}

const getCases = async (isMainPage?: boolean) => {

  const response = await contentfulClient.getEntries<{ contentTypeId: string, fields: CaseFields }>({
    content_type: 'case',
    // @ts-ignore
    order: isMainPage ? 'fields.order' : '',
    // @ts-ignore
    // select: ['fields.title'].join(',')
  }).then((response) => {
    return response.items.map((elem) => ({
      ...elem,
      fields: {
        ...elem.fields,
        about: documentToHtmlString(elem.fields.about),
      },
    }));
  });

  if (isMainPage) {
    return response.filter((item) => !!item.fields.order).slice(0, 6);
  }

  return response;
};

export default getCases;
