import { Box, Flex, Grid, GridItem, Text, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { PageHeading } from '../PageHeading';


export function Footer() {
    const gridTemplateColumns = useBreakpointValue({ base: '1fr', md: 'repeat(2, 1fr)' })

    const  footerLogoHeightBreakPoint = useBreakpointValue({ base: "147px", md: "160px" })
    const  footerLogoWidthBreakPoint = useBreakpointValue({ base: "290px", md: "300px" })


    return (
        <>
            <Flex
                flexDirection="column"
                minH={200}
                backgroundColor="brand.bg"
                w="100%"
                justifyContent="center"
                alignItems="center"
                mt={{ base: "68px", md: "80px" }} // heading compensation
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
                            alt="Logo alternativo LS Advocacia e Acessoria"
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
                                <Text mb="6">Telefone: 11 9 1234 1234</Text>
                                <Text mb="6">E-mail: larissacarvalho.adv@gmail.com</Text>
                                <Text>Endereço: Rua Pedro Alvares Cabral 123 - CEP 042123-123</Text>
                            </Box>

                            <Box mt={8}>
                                <PageHeading isBgDark={true}  fontSize='h2'>Nossas redes sociais</PageHeading>

                                <Flex
                                    mt={8}
                                >
                                    <Link href="">
                                        <Box mr={4}>
                                            <Image src="/linkedin.svg" height={24} width={24} alt="LinkedIn" />
                                        </Box>
                                    </Link>
                                    <Link href="">
                                        <Box mr={4}>
                                            <Image src="/insta.svg" height={24} width={24} alt="Instagram" />
                                        </Box>
                                    </Link>
                                    <Link href="">
                                        <Box mr={4}>
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
                © LS Advocacia e Acessoria 2022. Todos os direitos reservados.
            </Flex>
        </>
    )
}