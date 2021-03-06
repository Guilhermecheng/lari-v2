import type { GetStaticProps, NextPage } from 'next'
import { Box, Container, Flex, Heading, Text, Image, useBreakpointValue } from '@chakra-ui/react'
import Head from 'next/head'

import { IoDiamondSharp } from 'react-icons/io5'
import { GiBullseye } from 'react-icons/gi'
import { ImEye } from 'react-icons/im'

import { MainBanner } from '../components/MainBanner';
import { PageHeading } from '../components/PageHeading';
import { Slides } from '../components/Slides';
import { ViewIcon } from '@chakra-ui/icons';
import { PrismicClient } from '../services/prismic'


const Home: NextPage = () => {
	const iconSizes = useBreakpointValue({ base: 60, md: 80 })

	return (
		<>
			<Head>
				<title>LS Advocacia e Acessoria</title>
			</Head>
			<MainBanner />
			<Container
				maxW={1200}
				px={{ base: "5", lg: "10" }}
				mb={{ base: 0, md: 12 }}
				minH="20vh"
                display={{base: "block", md: "flex"}}
                justifyContent="space-between"
                flexDirection={{base: "column", md: "row"}}
			>
				<Box>
					<PageHeading isBgDark={false}>Quem é Dra. Larissa</PageHeading>

					<Flex 
						display={{ base: 'block', lg: 'flex' }}
					>
						<Flex
							display={{ base: 'flex', lg: 'block' }}
							justifyContent='center'
							minW={300}
						>
							<Image src='/profile.jpeg' width={400} borderRadius='md' alt='Dra Larissa Silvestre; foto de perfil' />
						</Flex>

						<Text
							maxW={{ base: '100%', lg: '60%' }}
							py={{ base: 10, lg: 0 }}
							fontSize={{ base: 'md', md: 'xl' }}
							textAlign='justify'
							ml={{ base: 0, lg: '2em' }}
						>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
							ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
							
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
							ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
						</Text>
					</Flex>
				</Box>
			</Container>

			<Flex w="100%" bg="brand.bg">
				<Container
					maxW={1200}
					px={{ base: "5", md: "10" }}
					mb={{ base: 8, md: 12 }}
					minH="20vh"
					display={{base: "block", md: "flex"}}
					justifyContent="space-between"
					flexDirection={{base: "column", md: "row"}}
					
					color="brand.title_bg_black"
				>
					<Box w="100%">
						<PageHeading isBgDark={true}>Áreas de atuação</PageHeading>

						{/* <Image /> */}
						{/* <Text
							fontSize={{ base: 'md', md: 'xl' }}
						>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
							ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
						</Text> */}
						<Box  width="100%" cursor="pointer"  mt={{ base: 8, md: 8 }}>
							<Slides />
						</Box>
					</Box>
				</Container>
			</Flex>

			<Container
				maxW={1200}
				px={{ base: "5", md: "10" }}
				mb={{ base: 8, md: 12 }}
				minH="20vh"
                display={{base: "block", md: "flex"}}
                justifyContent="space-between"
                flexDirection={{base: "column", md: "row"}}
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
	const response = await PrismicClient.getAllByType('principles');

	console.log(response)
	const principles = response.map((rep) => {
		const title = rep.data.principle_title[0].text;
		const description = rep.data.principle_description[0].text;

		return {
			title,
			description
		}
	})
	
	return {
		props: {
			principles
		}
	}
}