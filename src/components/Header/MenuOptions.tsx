import { ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, Text, Collapse, useDisclosure, useBreakpointValue } from '@chakra-ui/react';
import NextLink from "next/link";

// import styled from '@emotion/styled'

// const CustomFlexBox = styled(Flex)`
//     * {
//         margin-right: 20px;
//     }

//     *:last-child {
//         margin-right: 0;
//     }
// `

const pages = [
    {
        pageName: "pag_inicial",
        pageTitle: "Início",
        pageHref: "/",
    },
    {
        pageName: "pag_areas_atuacao",
        pageTitle: "Áreas de atuação",
        pageHref: "areas",
    },
    {
        pageName: "pag_contato",
        pageTitle: "Contato",
        pageHref: "/contact",
    }
]

export function MenuOptions() {
    const { isOpen, onToggle } = useDisclosure()
    const  breakpoint = useBreakpointValue({ base: false, md: true })

    return (
        <Flex
            justifyContent={{base: "center", md: "flex-end"}}
            direction={{base: "column", md: "row"}} // mobile orientation
            alignItems="center"
            mt={{base: "4", md: "0"}}
        >
            <ChevronDownIcon 
                display={{base: "block", md: "none"}}
                position="absolute"
                top="7"
                right="50px"
                textAlign="center"
                color="brand.title_bg_black"
                fontSize="30"
                onClick={onToggle}
                _hover={{ cursor: "pointer", color: "bisque" }}
            />
            <Collapse
                in={!breakpoint ? isOpen : true }                
            >
                <Flex
                    direction={{base: "column", md: "row"}}
                    textColor="brand.title_bg_black"
                    fontSize={{base: "18", md: "20"}}
                    alignItems="center"
                >
                    { pages.map(page => {
                    return (
                        <NextLink  key={ page.pageName } href={ page.pageHref } passHref>
                            <Text
                                mr={{base: "0", md: "4"}}
                                mt={{base: "4", md: "0"}}
                                textAlign="center"
                                _hover={{ cursor: "pointer", color: "bisque" }}
                            >
                                { page.pageTitle }
                            </Text>
                        </NextLink>
                    )
                }) }

                    <Text
                        mr="0"
                        mt={{base: "4", md: "0"}}
                        mb={{base: "4", md: "0"}}
                        textAlign="center"
                        _hover={{ cursor: "pointer", color: "bisque" }}
                    >
                        Whats
                    </Text>
                </Flex>
            </Collapse>
        </Flex>
    )
}