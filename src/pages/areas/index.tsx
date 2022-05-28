import { Container } from "@chakra-ui/react";


export default function Areas() {

    return (
        <Container
            maxW={1200}
            h="100vh"
            display={{base: "block", md: "flex"}}
            justifyContent="space-between"
            flexDirection={{base: "column", md: "row"}}
        >
            Areas de atu
        </Container>
    )
}