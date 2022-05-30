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
                pt='20px'
                px={{base: 5, md: 0}}
            >
                <Grid 
                    maxW={1200}
                    w="100%"
                    templateColumns={ gridTemplateColumns }
                    gap={6}
                    mx="10"
                    pb="8"
                >
                    <GridItem color="white" display="flex" justifyContent="center" alignItems="flex-start">
                        <Image 
                            src="/logo-footer.svg"
                            height={ footerLogoHeightBreakPoint }
                            width={ footerLogoWidthBreakPoint }
                        />
                    </GridItem>

                    <GridItem>
                        <PageHeading isBgDark={true}>
                            Entre em contato
                        </PageHeading>
                            
                            <Box
                                color="brand.title_bg_black"
                                fontSize="lg"
                            >
                                <Text mb="6">Telefone: 11 9 1234 1234</Text>
                                <Text mb="6">E-mail: larissacarvalho.adv@gmail.com</Text>
                                <Text>Endereço: Rua Pedro Alvares Cabral 123 - CEP 042123-123</Text>
                            </Box>

                            <Box mt="4">
                                <PageHeading isBgDark={true}>Nossas redes sociais</PageHeading>

                                <Flex>
                                    <Link href="">
                                        <Image src="/linkedin.svg" height={24} width={24} />
                                    </Link>
                                    <Link href="">b</Link>
                                    <Link href="">c</Link>
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
                fontSize="0.8em"
            >
                © Larissa Carvalho 2022. Todos os direitos reservados.
            </Flex>
        </>
    )
}