import { Box, Container, Flex, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";


export function MainBanner() {
    const  logoHeightBreakPoint = useBreakpointValue({ base: "180px", md: "224px" })
    const  logoWidthBreakPoint = useBreakpointValue({ base: "265px", md: "485px" })
    const fadeAnimation = useBreakpointValue({ base: "animate__animated animate__fadeIn", lg: "animate__animated animate__fadeInLeft" });


    return (
        <Flex
            h={{ base: "270", md: "470" }}
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
                pt={{ base: "68px", md: "80px" }}
                px={{ base: "5", md: "10" }}
                w="100%"
                display="flex"
                justifyContent={{ base: "center", lg: "flex-end" }}
                className={fadeAnimation}
            >
                <Image
                    src="/logo_banner.svg"
                    height={ logoHeightBreakPoint }
                    width={ logoWidthBreakPoint }
                    alt="Logo principal da LS Advocacia e Acessoria"
                />
            </Box>
        </Flex>
    )
}