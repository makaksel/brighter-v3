import { contentfulClient } from '@/src/contentfulApi/contentfulClient';
import { CaseFields } from '@/src/contentfulApi/getCases';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


const getCaseById = async ({ id }: { id: string }) => {
  const response = await contentfulClient.getEntry<{
    contentTypeId: string,
    fields: CaseFields
  }>(id).then((response) => {
    return {
      ...response,
      fields: {
        ...response.fields,
        about: documentToHtmlString(response.fields.about),
        task: documentToHtmlString(response.fields.task),
        result: documentToHtmlString(response.fields.result),
      },
    };
  });

  return response as { fields: CaseFields };
};

export default getCaseById;
