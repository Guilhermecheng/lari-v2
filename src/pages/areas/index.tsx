import { Container } from "@chakra-ui/react";
import Head from 'next/head'


export default function Areas() {

    return (
        <>
            <Head>
				<title>LS Advocacia e Acessoria | Áreas de atuação</title>
			</Head>
        
            <Container
                maxW={1200}
                minH="93vh"
                display={{base: "block", md: "flex"}}
                justifyContent="space-between"
                flexDirection={{base: "column", md: "row"}}
            >
                Areas de atu
            </Container>
        </>
    )
}