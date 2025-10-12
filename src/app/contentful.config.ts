// src/app/contentful.config.ts
export interface ContentfulConfig {
  space: string;
  accessToken: string;
  contentTypeIds: {
    product: string;
    category: string;
    brand: string;
  };
}
