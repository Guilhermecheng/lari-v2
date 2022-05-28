import { Flex, Grid, GridItem, Text, useBreakpointValue } from '@chakra-ui/react';
import Image from 'next/image';
import { PageHeading } from '../PageHeading';


export function Footer() {
    const gridTemplateColumns = useBreakpointValue({ base: '1fr', md: 'repeat(2, 1fr)' })

    const  footerLogoHeightBreakPoint = useBreakpointValue({ base: "147px", md: "132px" })
    const  footerLogoWidthBreakPoint = useBreakpointValue({ base: "290px", md: "300px" })


    return (
        <Flex
			minH={200}
			backgroundColor="brand.bg"
			w="100%"
			justifyContent="center"
			// alignItems="center"
            pt='20px'
		>
            <Grid 
                maxW={1200}
                w="100%"
                templateColumns={ gridTemplateColumns }
                gap={6}
                mx="10"
            >
                <GridItem color="white" display="flex" justifyContent="center">
                    <Image 
                        src="/logo-footer.svg"
                        height={ footerLogoHeightBreakPoint }
                        width={ footerLogoWidthBreakPoint }
                    />
                </GridItem>

                <GridItem color="white" border='1px solid blue'>
                    <PageHeading isBgDark={true}>
                        Entre em contato
                    </PageHeading>
                        Mais informações
                </GridItem>

            </Grid>
      	</Flex>

    )
}