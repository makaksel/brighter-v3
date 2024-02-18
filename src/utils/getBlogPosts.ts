import { createClient } from 'contentful';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const spaceId: string = process.env.CONTENTFUL_SPACE_ID;
const token: string = process.env.CONTENTFUL_ACCESS_TOKEN;


const client = createClient({
  space: 'q4fexnx03u6s',
  accessToken: 'Y-8v3o-pAhxkIVMfkIVEayXu03t_LRJJdxesfsaeMmQ',
  // accessToken: 'XjO2KYyNbbIIqeDxnJA_mc_IckH3lxSPRpoMB0b6GJg', // preview API key for the space
  // host: 'preview.contentful.com',
});

export interface CaseFields {
  title: string,
  rating: number,
  about: string,
  subtitle: string,
  task: string,
  result: string,
  link: string;
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
  const response = await client.getEntries<{ contentTypeId: string, fields: CaseFields }>({
    content_type: 'case',
  })

  return response.items.map((elem) => ({
    ...elem,
      fields: {
        ...elem.fields,
        about: documentToHtmlString(elem.fields.about),
        task: documentToHtmlString(elem.fields.task),
        result: documentToHtmlString(elem.fields.result),
      }
  }));
};

export default getCases;
