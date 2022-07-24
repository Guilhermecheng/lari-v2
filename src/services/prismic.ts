import * as prismic from '@prismicio/client';

export const PrismicClient = prismic.createClient(
    process.env.NEXT_PUBLIC_PRISMIC_ENDPOINT as string, 
    {
        accessToken: process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN,
    }
)