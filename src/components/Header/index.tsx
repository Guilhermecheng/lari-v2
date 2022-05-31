import { Flex, Text, Container, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

import { MenuOptions } from './MenuOptions'

export function Header() {
    const  breakpoint = useBreakpointValue({ base: 40, lg: 55 })

    return (
        <Flex
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
                                src="/ls.svg"
                                height={ breakpoint }
                                width={ breakpoint }
                                alt="Logo Cabeçalho LS Advocacia e Acessoria"
                            />
                            <Text
                                color="brand.title_bg_black"
                                fontSize={{base: "xl", lg: "2xl"}}
                            >
                                Dra. Larissa Silvestre
                            </Text>
                        </Flex>
                    </Link>
                    </Flex>

                <MenuOptions />
                
            </Container>
      	</Flex>

    )
}