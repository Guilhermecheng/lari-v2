import { Flex, Text, Container, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {useRouter} from 'next/router';

import { MenuOptions } from './MenuOptions'

export function Header() {
    const  heightBreakpoint = useBreakpointValue({ base: 40, lg: 80 }) // 55 antes
    const  widthBreakpoint = useBreakpointValue({ base: 200, lg: 260 })

    const [scrollYMoreThanZero, setscrollYMoreThanZero] = useState(true);

    const router = useRouter()

    function listenScrollEvent(event) {
        if (window.scrollY < 73 && window.innerWidth > 990  && router.pathname === '/') {
            setscrollYMoreThanZero(false);
        } else {
            setscrollYMoreThanZero(true);
        }
    }

    useEffect(() => {
        if (window.scrollY < 73 && window.innerWidth > 990  && router.pathname === '/') {
            setscrollYMoreThanZero(false);
        } else {
            setscrollYMoreThanZero(true);
        }
        window.addEventListener('scroll', listenScrollEvent)
        window.addEventListener('resize', listenScrollEvent)
    }, [router.pathname])
    

    return (
        <Flex
            zIndex={1000}
			minH={{ base: "60px", md: "80px" }}
			backgroundColor={ scrollYMoreThanZero ? "brand.bg" : "" }
			w="100%"
			justifyContent="center"
			alignItems="center"
            position="fixed"
            boxShadow={scrollYMoreThanZero ? "2xl" : ""}
            transition="all 0.2s ease"
		>
            <Container
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
                            { scrollYMoreThanZero && (
                                <Image 
                                    src="/ls2.svg"
                                    height={ heightBreakpoint } // 80 grande, 50, mobile
                                    width={ widthBreakpoint }
                                    alt="Logo Cabeçalho LS Advocacia e Acessoria"
                                />
                            )}
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