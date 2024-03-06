import { contentfulClient } from '@/src/contentfulApi/contentfulClient';

export interface ServiceFaq {
  title: string;
  about: string;
  days?: string;
}


export interface ServicesFields {
  title: string,
  about: number,
  number: string,
  addition?: string,
  cost?: string,
  faq?: ServiceFaq[] | null,
}

export interface Service {
  sys: {
    id: string,
  };
  fields: ServicesFields;
}

export interface ServicesResponse {
  items: Service[];
}

export const getServices = async (isShort?: boolean) => {

  const select = isShort ? ['fields.title', 'fields.about', 'fields.number'].join(',') : null

  const response = await contentfulClient.getEntries<{ contentTypeId: string, fields: ServicesFields }>({
    content_type: 'services',
    // @ts-ignore
    order: 'fields.number',
    // @ts-ignore
    select
  }).then((response) => {

    return response.items.map((elem) => ({
      ...elem
    }));
  });

  return response;
};
