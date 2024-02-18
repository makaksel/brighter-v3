declare global {
  namespace NodeJS {
    interface ProcessEnv {
      YANDEX_METRICA_ACCOUNT: number;
      EMAIL_USERNAME: string;
      EMAIL_PASSWORD: string;
      CONTENTFUL_SPACE_ID: string;
      CONTENTFUL_ACCESS_TOKEN: string;
    }
  }
}


export {};