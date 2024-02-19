import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: 'q4fexnx03u6s',
  accessToken: 'Y-8v3o-pAhxkIVMfkIVEayXu03t_LRJJdxesfsaeMmQ',
  // accessToken: 'XjO2KYyNbbIIqeDxnJA_mc_IckH3lxSPRpoMB0b6GJg', // preview API key for the space
  // host: 'preview.contentful.com',
});