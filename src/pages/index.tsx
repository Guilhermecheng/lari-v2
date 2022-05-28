import type { NextPage } from 'next'
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'

import { MainBanner } from '../components/MainBanner';


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
					<Heading>Quem é Dra. Larissa</Heading>

					{/* <Image /> */}
					<Text>
						"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque<br/>
						ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
					</Text>
				</Box>
			</Container>

			<Container
				maxW={1200}
				px={{ base: "5", md: "10" }}
				minH="20vh"
                display={{base: "block", md: "flex"}}
                justifyContent="space-between"
                flexDirection={{base: "column", md: "row"}}
				bg="brand.bg"
				color="brand.title_bg_black"
			>
				<Box>
					<Heading>Áreas de atuação</Heading>

					{/* <Image /> */}
					<Text>
						"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque<br/>
						ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
					</Text>
				</Box>
			</Container>

			<Container
				maxW={1200}
				px={{ base: "5", md: "10" }}
				minH="20vh"
                display={{base: "block", md: "flex"}}
                justifyContent="space-between"
                flexDirection={{base: "column", md: "row"}}
			>
				<Box>
					<Heading>Princípios</Heading>

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
