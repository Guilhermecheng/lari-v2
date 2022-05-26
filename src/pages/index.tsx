import type { NextPage } from 'next'
import { Container } from '@chakra-ui/react'

import { MainBanner } from '../components/MainBanner';


const Home: NextPage = () => {
	return (
		<>
			<MainBanner />
			<Container
				maxW={1200}
                display={{base: "block", md: "flex"}}
                justifyContent="space-between"
                flexDirection={{base: "column", md: "row"}}
			>
				blob
			</Container>
		</>
	)
}

export default Home
