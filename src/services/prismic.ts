import * as prismic from '@prismicio/client';

export const PrismicClient = prismic.createClient(
    process.env.PRISMIC_ENDPOINT as string, 
    {
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,

    //   routes: [
    //     {
    //       type: 'homepage',
    //       path: '/',
    //     },
    //   ],
    }
)