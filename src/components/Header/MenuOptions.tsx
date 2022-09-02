import { ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, Text, Collapse, useDisclosure, useBreakpointValue, Button, Box } from '@chakra-ui/react';
import NextLink from "next/link";

import styled from '@emotion/styled'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link';

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
    // {
    //     pageName: "pag_areas_atuacao",
    //     pageTitle: "Áreas de atuação",
    //     pageHref: "/areas",
    // },
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
                    
                    <Link href={`https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_CONTACT_PHONE_NUMBER}`} passHref>
                        <Box as="a" target="_blank">
                            <Button 
                                my={{ base: "20px", lg: 0 }} 
                                colorScheme="yellow" 
                                _hover={{ color: "#f0f0f0", backgroundColor: "#1dad52" }}
                            >
                                Chame no whats!
                            </Button>
                        </Box>
                    </Link>
                </Flex>
            </Collapse>
        </Flex>
    )
}