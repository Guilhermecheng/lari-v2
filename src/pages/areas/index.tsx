import { Box, Flex, Grid, Text, useBreakpointValue, Heading, Image } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from 'next/head'
import { RiArrowRightSFill } from "react-icons/ri";
import { PageHeading } from "../../components/PageHeading";
import { PrismicClient } from "../../services/prismic";

interface ActingAreasProp {
    actingAreas: {
        bgImage: string;
        areaTitle: string;
        areaFullDescription: {
            type: string;
            text: string;
        }[];
    }[]
}

export default function Areas({ actingAreas }: ActingAreasProp) {
    const  isMobileBreakpoint = useBreakpointValue({ base: true, lg: false });

    if(!actingAreas) {
        return <Text>Carregando...</Text>
    }

    if(!isMobileBreakpoint) {
        return (
            <>
                <Head>
                    <title>Atuação | LS Advocacia e Acessoria</title>
                </Head>
            
                <Box display="block">

                    { actingAreas.map((area, index: number) => {
    
                        if(index % 2 == 0) {
                            return (
                                <Box key={index}>
                                    
                                    <Grid gridTemplateColumns="45% 55%" >
                                        <Box 
                                            minH={300} 
                                            backgroundImage={ area.bgImage } 
                                            backgroundPosition="center"
                                            backgroundRepeat="no-repeat"
                                            backgroundSize="cover">
                                        </Box>
    
                                        <Flex flexDirection="column" alignItems="center" paddingLeft='5vw' paddingRight='10vw'>
                                            <PageHeading isBgDark={false} > { area.areaTitle } </PageHeading>
                                            
                                            <Box pb={10}>
                                                { area.areaFullDescription.map((paragraph, index: number) => {
                                                        return (
                                                            <Flex key={ index } alignItems='center' mb={4} gap={2}>
                                                                { paragraph.type === 'list-item' && <RiArrowRightSFill size={40} /> }
                                                                <Text 
                                                                    
                                                                    as={ paragraph.type === 'list-item' ? 'h2' : 'p' }
                                                                    fontSize={ paragraph.type === 'list-item' ? 'xl' : 'lg' }
                                                                    fontWeight={ paragraph.type === 'list-item' ? 'bold' : 'normal' }
                                                                    textAlign="justify"
                                                                >
                                                                    { paragraph.text }
                                                                </Text>
                                                            </Flex>
                                                        )
                                                }) }
                                            </Box>
                                        </Flex>
                                    </Grid>
                                </Box>
                            )
                        } else {
                            return (
                                <Box key={index}>

                                    <Grid gridTemplateColumns="55% 45%" backgroundColor="brand.bg">
        
                                        <Flex flexDirection="column" alignItems="center" paddingRight='5vw' paddingLeft='10vw'>
                                            <PageHeading isBgDark={true} > { area.areaTitle } </PageHeading>
    
                                            <Box pb={10}>
                                                { area.areaFullDescription.map((paragraph, index: number) => {
                                                        return (
                                                            <Flex key={ index } alignItems='center' color="brand.title_bg_black" mb={4} gap={2}>
                                                                { paragraph.type === 'list-item' && <RiArrowRightSFill size={40} /> }
                                                                <Text 
                                                                    
                                                                    as={ paragraph.type === 'list-item' ? 'h2' : 'p' }
                                                                    fontSize={ paragraph.type === 'list-item' ? 'xl' : 'lg' }
                                                                    fontWeight={ paragraph.type === 'list-item' ? 'bold' : 'normal' }
                                                                    textAlign="justify"
                                                                >
                                                                    { paragraph.text }
                                                                </Text>
                                                            </Flex>
                                                        )
                                                }) }
                                            </Box>
                                        </Flex>
                                        <Box 
                                            minH={300} 
                                            backgroundImage={ area.bgImage } 
                                            backgroundPosition="center"
                                            backgroundRepeat="no-repeat"
                                            backgroundSize="cover">
                                        </Box>
                                    </Grid>
                                </Box>
                            )
                        }
                    }) 
                    }
    
                </Box>
            </>
        )
    } else {
        return (
            <>
                <Head>
                    <title>Atuação | LS Advocacia e Acessoria</title>
                </Head>

                <Flex
                    flexDirection="column"
                    alignItems="center"
                    minH="50vh"
                >
                { actingAreas.map((area, index: number) => {
                    const isBgNotBlack = index % 2 == 0;

                        return (
                            <Flex
                                key={ index }
                                flexDirection="column"
                                alignItems="center"
                                backgroundColor={ isBgNotBlack ? '#fff' : 'brand.bg' }
                            >
                                <PageHeading 
                                    isBgDark={ index % 2 === 0 ? false : true}
                                >
                                    { area.areaTitle }
                                </PageHeading>

                                <Flex
                                    alignItems="center"
                                    w='85vw'
                                    h='20vh'
                                    bg={`url(${ area.bgImage })`}
                                    backgroundPosition="center"
                                    backgroundRepeat="no-repeat"
                                    backgroundSize="cover"
                                    justifyContent='center'
                                    borderRadius={8}
                                    mt={2}
                                    boxShadow='lg'
                                >
                                </Flex>
                                {/* <Flex
                                    w='100%'
                                    h='20vh'
                                    bg={`linear-gradient(0deg, rgba(51, 51,51, 0.8), rgba(51, 51,51, 0.8)), url(${ area.bgImage })`}
                                    backgroundPosition="center"
                                    backgroundRepeat="no-repeat"
                                    backgroundSize="cover"
                                    alignItems='center'
                                    justifyContent='center'
                                    
                                >
                                    <Heading 
                                        color="brand.title_bg_black"
                                        fontFamily="Georgia, 'Times New Roman', Times, serif"
                                        fontWeight="medium"
                                    >
                                        { area.areaTitle }
                                    </Heading>
                                </Flex> */}

                                <Box mb={4} pt={8}>
                                    { area.areaFullDescription.map((paragraph, index: number) => {
                                        return (
                                            <Flex key={ index } color={isBgNotBlack ? '#1A202C' : 'brand.title_bg_black' } mx={{ base: "5", lg: "10" }} mb={6} alignItems='center'>
                                                { paragraph.type === 'list-item' && <RiArrowRightSFill size={30} style={{ marginRight: "4px" }} /> }
                                                <Text 
                                                    as={ paragraph.type === 'list-item' ? 'h2' : 'p' }
                                                    fontSize={ paragraph.type === 'list-item' ? 'lg' : 'lg' }
                                                    fontWeight={ paragraph.type === 'list-item' ? 'bold' : 'normal' }
                                                    textAlign="justify"
                                                >
                                                    { paragraph.text }
                                                </Text>
                                            </Flex>
                                        )
                                    })}
                                </Box>
                            </Flex>
                        )
                    })
                }

                </Flex>
            </>
        
        )
    }

    
}

export const getStaticProps: GetStaticProps = async () => {
	const response = await PrismicClient.getByUID('acting_areas', 'acting_areas');

	// console.log(response.data.acting_areas)
	const responseData = response.data.acting_areas;

    const actingAreas = responseData.map((obj) => {
        const bgImage = obj.area_page_image.url;
        const areaTitle = obj.area_name[0].text;
        const areaFullDescription = obj.area_full_description.map((desc) => {
            // console.log(desc)
            const newStr =  {
                type: desc.type,
                text: desc.text
            }
            return newStr
        });

        return {
            bgImage,
            areaTitle,
            areaFullDescription
        }
    })
	
	return {
		props: {
			actingAreas
		}
	}
}