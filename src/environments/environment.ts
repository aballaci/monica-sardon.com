// environment.ts
export const environment = {
  production: false,
  contentful: {
    spaceId: 'h1xiyqvoqryq',
    accessToken:
      '46zzw3Gcv4slK1x2eoMBttFAnXJO_TGtva0Wetkeq_g', // CDA token
    contentTypeIds: {
      event:  'event',
    },
    environmentId: 'master' // defaults to 'master' if not set
  }
};
