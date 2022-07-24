import { Box, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { BsWhatsapp } from 'react-icons/bs'

export function WhatsButton() {
    return (
        <Flex
            position="fixed"
            right="4vw"
            bottom="4vh"
            zIndex={1000}
        >
            <Link href={`https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_CONTACT_PHONE_NUMBER}`} passHref>
                <Box
                    as="a"
                    target="_blank" 
                    bg="#25d366"
                    p={3}
                    borderRadius={40}
                    boxShadow="2xl"
                    cursor="pointer"
                    _hover={{ backgroundColor: "#22c148" }}
                >
                    <BsWhatsapp size={30} color="white" />
                </Box>
            </Link>
        </Flex>
    )
}