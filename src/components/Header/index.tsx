import { Flex, Text, Container, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import { MenuOptions } from './MenuOptions'

export function Header() {
    const  heightBreakpoint = useBreakpointValue({ base: 40, lg: 80 }) // 55 antes
    const  widthBreakpoint = useBreakpointValue({ base: 200, lg: 260 })

    return (
        <Flex
            zIndex={1000}
			minH={{ base: "60px", md: "80px" }}
			backgroundColor="brand.bg"
			w="100%"
			justifyContent="center"
			alignItems="center"
            position="fixed"
            boxShadow="2xl"
		>
            <Container
                // w="100%"
                maxW={1200}
                px={{ base: "5", lg: "10" }}
                display={{base: "block", lg: "flex"}}
                justifyContent="space-between"
                flexDirection={{base: "column", lg: "row"}}// mobile orientation
            >
                <Flex
                    mt={{base: 3, lg: 0 }}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Link href='/'>
                        <Flex
                            justifyContent="center"
                            alignItems="center"
                            _hover={{ cursor: 'pointer' }}
                        >
                            <Image 
                                src="/ls2.svg"
                                height={ heightBreakpoint } // 80 grande, 50, mobile
                                width={ widthBreakpoint }
                                alt="Logo Cabeçalho LS Advocacia e Acessoria"
                            />
                            {/* <Text
                                color="brand.title_bg_black"
                                // fontFamily="Georgia, 'Times New Roman', Times, serif"
                                fontSize={{base: "xl", lg: "2xl"}}
                                // fontWeight="light"
                            >
                                Larissa Silvestre
                            </Text> */}
                        </Flex>
                    </Link>
                    </Flex>

                <MenuOptions />
                
            </Container>
      	</Flex>

    )
}