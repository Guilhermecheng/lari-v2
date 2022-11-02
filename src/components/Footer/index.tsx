import { Box, Flex, Grid, GridItem, Text, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeading } from '../PageHeading';


export function Footer() {
    const gridTemplateColumns = useBreakpointValue({ base: '1fr', md: 'repeat(2, 1fr)' })

    const  footerLogoHeightBreakPoint = useBreakpointValue({ base: "147px", md: "160px" })
    const  footerLogoWidthBreakPoint = useBreakpointValue({ base: "290px", md: "300px" })

    function formatNumber(notFormattedNumber: string) {
        var cleaned = ('' + notFormattedNumber).replace(/\D/g, '')
        let phoneFormatRegex = cleaned.match(/^(\d{2})(\d{2})(\d{1})(\d{4})(\d{4})$/);
        if(phoneFormatRegex) {
            return '(' + phoneFormatRegex[2] + ') ' + phoneFormatRegex[3] + ' ' + phoneFormatRegex[4] + '-' + phoneFormatRegex[5]
        } else {
            return null
        }
    }
    const phoneNum = process.env.NEXT_PUBLIC_CONTACT_PHONE_NUMBER as string;
    let formatted = formatNumber(phoneNum);

    return (
        <>
            <Flex
                flexDirection="column"
                minH={200}
                backgroundColor="brand.bg"
                w="100%"
                justifyContent="center"
                alignItems="center"
                mt={{ base: 10, md: 16 }} // heading compensation
                pt='20px'
                px={{base: 5, md: 0}}
            >
                <Grid 
                    maxW={1200}
                    w="100%"
                    templateColumns={ gridTemplateColumns }
                    gap={{ base: 4, md: 6 }}
                    mx="10"
                    pb="8"
                >
                    <GridItem color="white" display="flex" justifyContent="center" alignItems="flex-start">
                        <Image 
                            src="/logo-footer.svg"
                            height={ footerLogoHeightBreakPoint }
                            width={ footerLogoWidthBreakPoint }
                            alt="Logo alternativo LS Advocacia e Assessoria"
                        />
                    </GridItem>

                    <GridItem>
                        <PageHeading isBgDark={true} isMarginYNotNecessary>
                            Entre em contato
                        </PageHeading>
                            <Box
                                color="brand.title_bg_black"
                                fontSize="lg"
                                mt={8}
                            >
                                <Text mb="3">Telefone: {formatted}</Text>
                                <Text mb="6">E-mail: larissasilvestre.advocacia@gmail.com</Text>
                            </Box>

                            <Box mt={8}>
                                <PageHeading isBgDark={true}  fontSize='h2'>Nossas redes sociais</PageHeading>

                                <Flex
                                    mt={8}
                                >
                                    <Link href="https://www.linkedin.com/in/larissacsilvestre/" passHref>
                                        <Box mr={4} as="a" target="_blank">
                                            <Image src="/linkedin.svg" height={24} width={24} alt="LinkedIn" />
                                        </Box>
                                    </Link>
                                    <Link href="https://www.instagram.com/larissasilvestre.adv/" passHref>
                                        <Box mr={4} as="a" target="_blank">
                                            <Image src="/insta.svg" height={24} width={24} alt="Instagram" />
                                        </Box>
                                    </Link>
                                    <Link href={`https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_CONTACT_PHONE_NUMBER}`} passHref>
                                        <Box mr={4} as="a" target="_blank">
                                            <Image src="/whats.svg" height={24} width={24} alt="Whatsapp" />
                                        </Box>
                                    </Link>
                                </Flex>
                            </Box>

                    </GridItem>

                </Grid>

                
            </Flex>
            <Flex
                bg="#222"
                h={10}
                alignItems="center"
                justifyContent="center"
                color="brand.title_bg_black"
                fontSize="0.7em"
            >
                © LS Advocacia e Assessoria 2022. Todos os direitos reservados.
            </Flex>
        </>
    )
}