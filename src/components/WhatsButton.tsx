import { Box } from '@chakra-ui/react'
import Link from 'next/link'
import { BsWhatsapp } from 'react-icons/bs'

export function WhatsButton() {
    return (
        <Link href={`https://api.whatsapp.com/send?phone=${process.env.CONTACT_PHONE_NUMBER}`} passHref>
            <Box
                as="a"
                target="_blank"
                position="fixed"
                right="4vw"
                top="90vh"
                zIndex={1000}
                bg="#25d366"
                p={3}
                borderRadius={40}
                boxShadow="2xl"
                cursor="pointer"
            >
                <BsWhatsapp size={30} color="white" />
            </Box>
        </Link>
    )
}