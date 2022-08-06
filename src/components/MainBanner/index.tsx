import { Box, Container, Flex, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";


export function MainBanner() {
    const  logoHeightBreakPoint = useBreakpointValue({ base: "180px", md: "224px" })
    const  logoWidthBreakPoint = useBreakpointValue({ base: "265px", md: "485px" })

    return (
        <Flex
            h={{ base: "40", md: "300" }}
            w="100%"
            backgroundImage="url('/fundo_banner.png')"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                maxW={1200}
                px={{ base: "5", md: "10" }}
                w="100%"
                display="flex"
                justifyContent={{ base: "center", lg: "flex-end" }}
            >
                <Image
                    // src="/logo_full_banner.svg"
                    src="/logo_banner_2.svg"
                    height={ logoHeightBreakPoint }
                    width={ logoWidthBreakPoint }
                    alt="Logo principal da LS Advocacia e Acessoria"
                />
            </Box>
        </Flex>
    )
}