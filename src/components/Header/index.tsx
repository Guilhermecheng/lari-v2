import { Flex, Text, Container, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';

import { MenuOptions } from './MenuOptions'

export function Header() {
    const  breakpoint = useBreakpointValue({ base: 40, md: 55 })

    return (
        <Flex
			minH={"80px"}
			backgroundColor="brand.bg"
			w="100%"
			justifyContent="center"
			alignItems="center"
		>
            <Container
                // w="100%"
                maxW={1200}
                display={{base: "block", md: "flex"}}
                justifyContent="space-between"
                flexDirection={{base: "column", md: "row"}}// mobile orientation
            >
                <Flex
                    mt={{base: 5, md: 0 }}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Image 
                        src="/ls.svg"
                        height={ breakpoint }
                        width={ breakpoint }
                    
                    />
                    <Text
                        color="brand.title_bg_black"
                        fontSize={{base: "xl", md: "2xl"}}
                    >
                        Dra. Larissa Silvestre
                    </Text>
                </Flex>

                <MenuOptions />
                
            </Container>
      	</Flex>

    )
}