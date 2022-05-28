import { Flex, Grid, GridItem, Text, useBreakpointValue } from '@chakra-ui/react';
import { PageHeading } from '../PageHeading';


export function Footer() {
    const gridTemplateColumns = useBreakpointValue({ base: '1fr', md: 'repeat(2, 1fr)' })


    return (
        <Flex
			h={200}
			backgroundColor="brand.bg"
			w="100%"
			justifyContent="center"
			alignItems="center"
		>
            <Grid 
                maxW={1200}
                w="100%"
                templateColumns={ gridTemplateColumns }
                gap={6}
                mx="10"
            >
                <GridItem color="white" >
                    Lari
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