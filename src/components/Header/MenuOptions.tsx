import { ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, Text, Collapse, useDisclosure, useBreakpointValue, Button } from '@chakra-ui/react';
import NextLink from "next/link";

import styled from '@emotion/styled'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const CustomFlexBox = styled(ChevronDownIcon)`
    transform: rotate(0deg);
    transition: all 0.3s ease-out;
    transform: ${(props) => (props.isOpen ? `rotate(180deg)` : '')};
`

const pages = [
    {
        pageName: "pag_inicial",
        pageTitle: "Início",
        pageHref: "/",
    },
    {
        pageName: "pag_areas_atuacao",
        pageTitle: "Áreas de atuação",
        pageHref: "/areas",
    },
    {
        pageName: "pag_contato",
        pageTitle: "Contato",
        pageHref: "/contact",
    },
    // {
    //     pageName: "pag_blog",
    //     pageTitle: "blog",
    //     pageHref: "/blog",
    // }
]

export function MenuOptions() {
    const router = useRouter()
    const currentRoute = router.pathname

    const { isOpen, onToggle } = useDisclosure()
    const  breakpoint = useBreakpointValue({ base: false, lg: true })

    useEffect(() => {
        if(isOpen) {
            onToggle()
        }
    }, [router.asPath])

    return (
        <Flex
            justifyContent={{base: "center", lg: "flex-end"}}
            direction={{base: "column", lg: "row"}} // mobile orientation
            alignItems="center"
            mt={{base: "4", lg: "0"}}
            zIndex="100"
            color="brand.title_bg_black"
        >
            <CustomFlexBox
                display={{base: "block", lg: "none"}}
                position="absolute"
                top={{ base: "5", md: '6' }}
                right="28px"
                textAlign="center"
                fontSize="30"
                onClick={onToggle}
                isOpen={isOpen}
                _hover={{ cursor: "pointer", color: "bisque" }}
            />
            <Collapse
                in={!breakpoint ? isOpen : true }                
            >
                <Flex
                    direction={{base: "column", lg: "row"}}
                    textColor="brand.title_bg_black"
                    fontSize={{base: "16", md: "16"}}
                    alignItems="center"
                >
                    { pages.map(page => {
                    return (
                        <NextLink  key={ page.pageName } href={ page.pageHref } passHref>
                            <Text
                                mr={{base: "0", lg: "4"}}
                                mt={{base: "4", lg: "0"}}
                                textAlign="center"
                                color={ currentRoute === page.pageHref ? "bisque" : "brand.title_bg_black" }
                                fontWeight="medium"
                                _hover={{ cursor: "pointer", color: "bisque" }}
                            >
                                { page.pageTitle.toUpperCase() }
                            </Text>
                        </NextLink>
                    )
                }) }

                    {/* <Text
                        mr="0"
                        mt={{base: "4", lg: "0"}}
                        mb={{base: "4", lg: "0"}}
                        textAlign="center"
                        _hover={{ cursor: "pointer", color: "bisque" }}
                    >
                        11 1234 1234
                    </Text> */}
                    <Button my={{ base: "20px", lg: 0 }} colorScheme="yellow">
                        Chame no whats!
                    </Button>
                </Flex>
            </Collapse>
        </Flex>
    )
}