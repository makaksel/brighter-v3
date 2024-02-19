import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { contentfulClient } from '@/src/utils/contentfulClient';


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
  task: string,
  result: string,
  link: string;
  imgs: MediaObject[];
  cardImg: MediaObject;
  caseCardImgs: MediaObject[];
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


// Retrieve the list of blog posts from Contentful
const getCases = async () => {
  const response = await contentfulClient.getEntries<{ contentTypeId: string, fields: CaseFields }>({
    content_type: 'case',
  }).then((response) => {
    return response.items.map((elem) => ({
      ...elem,
      fields: {
        ...elem.fields,
        about: documentToHtmlString(elem.fields.about),
      },
    }));
  });

  return response;
};

export default getCases;
