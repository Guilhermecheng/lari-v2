import type { GetStaticProps, NextPage } from 'next'
import { Box, Container, Flex, Heading, Text, Image, useBreakpointValue, Tabs, TabList, TabPanels, Tab, TabPanel, Grid, Divider } from '@chakra-ui/react'
import Head from 'next/head'

import { IoDiamondSharp } from 'react-icons/io5'
import { GiBullseye } from 'react-icons/gi'
import { ImEye } from 'react-icons/im'
import { HiCheck } from 'react-icons/hi';

import { MainBanner } from '../components/MainBanner';
import { PageHeading } from '../components/PageHeading';
import { PrismicClient } from '../services/prismic'

interface HomeProps {
	prismicTreadedResponse: {
		banner_section: {
			bannner_image_url: string;
			banner_logo_url: string;
			banner_quote: {
				type: string;
				text: string;
			}[],
		},
		homepage_info_data: {
			about_us_description: {
				type: string;
				url: string | undefined; // if not null, image
				text: string | null;
			}[];
			acting_areas: {
				area_name: string;
				area_description: {
					type: string;
					text: string;
				}[];
			}[];
			principles: {
				type: string;
				text: string;
			}[];
		},
	} | null;
}


const Home: NextPage = ({ prismicTreadedResponse }: any) => {
	const iconSizes = useBreakpointValue({ base: 60, md: 80 })
    const gridTemplate = useBreakpointValue({ base: '1fr', lg: 'repeat(2, 1fr)' })
    const fadeAnimation = useBreakpointValue({ base: "animate__animated animate__fadeIn", lg: "animate__animated animate__fadeInLeft" });



	// if(!prismicTreadedResponse) {
	// 	return (
	// 		<>Carregando</>
	// 	)
	// }

	function reduceToChunks(descriptionArray) {
		let newChunks = new Array();
		var pointType = 'heading2';

		let index = 0;
		for(let i = 0; i < descriptionArray.length; i++) {
			
			if(descriptionArray[i].type != "paragraph") {
				if(descriptionArray[i].type === pointType) {
					index = index + 1;
					newChunks[index] = new Array();
				}

				newChunks[index]?.push(descriptionArray[i])
			}
		}
		var filteredChunks = newChunks.filter(function (el) {
			return el != [];
		});

		// console.log(filteredChunks)
		return filteredChunks;
	}

	return (
		<>
			<Head>
				<title>LS Advocacia e Assessoria</title>
			</Head>
			<MainBanner />
			<Container
				maxW={1200}
				px={{ base: "5", lg: "10" }}
				mb={{ base: 4, md: 8 }}
				minH="20vh"
                display={{base: "block", md: "flex"}}
                justifyContent="space-between"
                flexDirection={{base: "column", md: "row"}}
				className={fadeAnimation}
			>
				<Box>
					<PageHeading isBgDark={false}>Sobre o escritório</PageHeading>

					<Text
						fontSize={{ base: 'lg', md: 'xl' }}
						textAlign='justify'
						mb={5}
					>
						{ prismicTreadedResponse.homepage_info_data.about_us_description[0].text }
					</Text>

					<Flex
						display={{ base: 'block', lg: 'flex' }}
					>
						<Flex
							display={{ base: 'flex', lg: 'block' }}
							justifyContent='center'
							minW={300}
						>
							{/* <Image src='/profile.jpeg' width={400} borderRadius='md' alt='Dra Larissa Silvestre; foto de perfil' /> */}
							<Image
								src={ prismicTreadedResponse.homepage_info_data.about_us_description[2].url }
								width={340} borderRadius='md'
								alt='Dra Larissa Silvestre; foto de perfil'
								boxShadow='xl'
							/>
						</Flex>

						<Box
							maxW={{ base: '100%' }}
							pt={{ base: 5, lg: 0 }}
							ml={{ base: 0, lg: '2em' }}
						>
							{ prismicTreadedResponse.homepage_info_data.about_us_description.map((desc, index) => {
								if (index > 2) {
									return (
										<Text
										key={index}
											fontSize={{ base: 'lg', md: 'xl' }}
											textAlign='justify'
											pb={{ base: 3, lg: 5 }}
										>
											{ desc.text }
										</Text>
									)
								}
							}) }
						</Box>
					</Flex>
				</Box>
			</Container>

			<Flex
				w="100%"
				backgroundImage="url('/fundo-1.png')"
				backgroundPosition="center"
				backgroundRepeat="no-repeat"
				backgroundSize="cover"
			>
				<Container
					maxW={1200}
					px={{ base: "5", md: "10" }}
					mb={{ base: 8, md: 12 }}
					display={{base: "block", md: "flex"}}
					justifyContent="space-between"
					flexDirection={{base: "column", md: "row"}}
					className={fadeAnimation}
					color="brand.title_bg_black"
				>
					<Box w="100%">
						<PageHeading isBgDark={true}>Áreas de atuação</PageHeading>

						<Text
							fontSize={{ base: 'lg', md: 'xl' }}
							fontWeight="medium"
							textAlign='justify'
							letterSpacing={0.5}
							mt={{ base: 4, md: 0 }}
						>
							Clique no assunto de interesse para saber mais:
						</Text>
						<Box  width="100%"  cursor="pointer"  mt={{ base: 8, md: 8 }}>
							{/* <Slides /> */}

							<Tabs variant='unstyled' bg="#e1e1e1b2" isFitted borderRadius="10px" >
								<TabList h={{ base: '72px', md: '80px' }} >
								{  prismicTreadedResponse.homepage_info_data.acting_areas.map((acting_area, index) => {
									const isFair = index % 2;
									return (
										<Tab
											key={index}
											w="100%"
											bg="#4E4E4E"
											color="#E8C548"
											fontSize="xl"
											fontWeight="bold"
											_selected={{ color: '#4E4E4E', bg: '#e1e1e1b2' }}
											_focus={{ outline: 'none' }}
											borderRadius={ isFair ? "0 10px 0 0" : "10px 0 0 0" }
											letterSpacing={2}
										>
											{ acting_area.area_name[0].text }
										</Tab>
									)
								})}
								</TabList>
								
								<TabPanels 
									color="#181818" 
									fontSize={{ base: 'lg', md: 'xl' }}
									px={{ base: 2}}
									pb={{ base: 4, lg: 6 }}
								>
								{  prismicTreadedResponse.homepage_info_data.acting_areas.map((acting_area, index) => {

									return (
										<TabPanel p={4} key={index} minH={300} className="tabpanel">
											<Flex direction="column">

												{ acting_area.area_description.map((description_item, descIndex) => {

													switch (description_item.type) {
														case "paragraph":
															return (
																<Text 
																	key={descIndex}
																	w="100%"
																	pt={{ base: 2, lg: 4 }}
																	textAlign="justify"
																>
																	{ description_item.text }
																</Text>
															)
													}
												}) }

												<Grid gridTemplateColumns={gridTemplate} mt={{ base: 0, lg: 12 }}>
													
														{ reduceToChunks(acting_area.area_description).map((description_chunk, index) => {
															return (
																<Flex key={index} direction="column" mt={{ base: 8, lg: 0 }}>
																	{description_chunk.map((description_item, itemIndex) => {
																		switch (description_item.type) {
																			case "heading2":
																				return (
																					<Flex key={itemIndex}  w="100%" direction="column" alignItems="center" mb={6}>
																						<Text 
																							as="h2"
																							fontSize={{ base: 'xl', large: '2xl' }}
																							fontWeight="bold"
																							letterSpacing={2}
																						>
																							{ description_item.text }
																						</Text>
																						<Divider
																							display="flex" 
																							borderColor="#181818"
																							borderBottomWidth="5px" 
																							width={{ base: "80px", lg: "40px"}}
																							mt="8px" 
																							opacity="1"
																						/>
																					</Flex>
																				)
																			case "list-item":
																				return (
																					<Flex key={itemIndex} direction="row"  alignItems="center">
																						<HiCheck size={20} color="#181818"  />
																						<Text pl={2}>  { description_item.text }</Text>
																					</Flex>
																				)
																		}
																	})}
																</Flex>
															)

															
														}) }
													
												</Grid>
											</Flex>
										</TabPanel>
									)
								})}
								</TabPanels>
							</Tabs>

						</Box>
					</Box>
				</Container>
			</Flex>

			<Container
				maxW={1200}
				px={{ base: "5", md: "10" }}
				// mb={{ base: 0, md: 12 }}
				minH="20vh"
                display={{base: "block", md: "flex"}}
                justifyContent="space-between"
                flexDirection={{base: "column", md: "row"}}
				className={fadeAnimation}
			>
				<Box w='100%'>
					<PageHeading isBgDark={false}>Princípios</PageHeading>

					<Flex
						w='100%'
						direction={{ base: "column", lg: "row" }}
						gap={{ base: 6, lg: 8 }}
					>
						<Flex
							w="100%"
							p={{ base: 5, md: 10 }}
							direction="column"
							alignItems="center"
							textAlign="center"
							border="1px solid"
							borderColor="gray.200"
							boxShadow=" 0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05);"
							borderRadius={8}
						>
							<GiBullseye  size={ iconSizes } color="#181818" />
							<Heading
								fontFamily="Georgia, 'Times New Roman', Times, serif"
								color="brand.title_bg_black"
								p={{ base: 3, lg: 5 }}
							>
								Missão
							</Heading>

							<Text
								fontSize={{ base: "md", md: "lg" }}
							>
								Ajudar nossos clientes a solucionar seus problemas e obter soluções legais de forma efetiva
							</Text>
						</Flex>
						<Flex
							w="100%"
							p={{ base: 5, md: 10 }}
							direction="column"
							alignItems="center"
							textAlign="center"
							border="1px solid"
							borderColor="gray.200"
							boxShadow=" 0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05);"
							borderRadius={8}
						>
							<ImEye  size={ iconSizes } color="#181818" />
							<Heading
								fontFamily="Georgia, 'Times New Roman', Times, serif"
								color="brand.title_bg_black"
								p={{ base: 3, lg: 5 }}
							>
								Visão
							</Heading>

							<Text
								fontSize={{ base: "md", md: "lg" }}
							>
								Ser referência em resolução de problemas e burocracias legais
							</Text>
						</Flex>
						<Flex
							w="100%"
							p={{ base: 5, md: 10 }}
							direction="column"
							alignItems="center"
							textAlign="center"
							border="1px solid"
							borderColor="gray.200"
							boxShadow=" 0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05);"
							borderRadius={8}
						>
							<IoDiamondSharp  size={ iconSizes } color="#181818" />
							<Heading
								fontFamily="Georgia, 'Times New Roman', Times, serif"
								color="brand.title_bg_black"
								p={{ base: 3, lg: 5 }}
							>
								Valores
							</Heading>

							<Text
								fontSize={{ base: "md", md: "lg" }}
							>
								Agir com honra, ética e excelência, sempre com transparência e confiança de nosso cliente
							</Text>
						</Flex>
					</Flex>
				</Box>
			</Container>
		</>
	)
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
	try {
		const prismicRawResponse = await PrismicClient.getByUID('homepage', 'homepage_data');

		// console.log(prismicRawResponse)
		// console.log(prismicRawResponse.data?.acting_areas[1].area_description)

		const prismicTreadedResponse = {
			banner_section: {
				bannner_image_url: prismicRawResponse.data.banner_image.url, //string
				banner_logo_url: prismicRawResponse.data.banner_logo.url, // string
				banner_quote: prismicRawResponse.data.banner_quote, // array
			},
			homepage_info_data: {
				about_us_description: prismicRawResponse.data.about_us_description, // array
				acting_areas: prismicRawResponse.data.acting_areas, // array
				principles: prismicRawResponse.data.principles, // array
			},
		}


		return {
			props: {
				prismicTreadedResponse
			}
		}
	} catch (err) {
		return {
			props: {
				error: err,
			}
		}
	}

}