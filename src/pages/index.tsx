import type { NextPage } from 'next'
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'

import { MainBanner } from '../components/MainBanner';
import { PageHeading } from '../components/PageHeading';


const Home: NextPage = () => {
	return (
		<>
			<MainBanner />
			<Container
				maxW={1200}
				px={{ base: "5", md: "10" }}
				minH="20vh"
                display={{base: "block", md: "flex"}}
                justifyContent="space-between"
                flexDirection={{base: "column", md: "row"}}
			>
				<Box>
					<PageHeading isBgDark={false}>Quem é Dra. Larissa</PageHeading>

					{/* <Image /> */}
					<Text>
						"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque<br/>
						ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
					</Text>
				</Box>
			</Container>

			<Flex w="100%" bg="brand.bg">
				<Container
					maxW={1200}
					px={{ base: "5", md: "10" }}
					minH="20vh"
					display={{base: "block", md: "flex"}}
					justifyContent="space-between"
					flexDirection={{base: "column", md: "row"}}
					
					color="brand.title_bg_black"
				>
					<Box>
						<PageHeading isBgDark={true}>Áreas de atuação</PageHeading>

						{/* <Image /> */}
						<Text>
							"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque<br/>
							ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
						</Text>
					</Box>
				</Container>
			</Flex>

			<Container
				maxW={1200}
				px={{ base: "5", md: "10" }}
				minH="20vh"
                display={{base: "block", md: "flex"}}
                justifyContent="space-between"
                flexDirection={{base: "column", md: "row"}}
			>
				<Box>
					<PageHeading isBgDark={false}>Princípios</PageHeading>

					{/* <Image /> */}
					<Text>
						"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque<br/>
						ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
					</Text>
				</Box>
			</Container>
		</>
	)
}

export default Home
