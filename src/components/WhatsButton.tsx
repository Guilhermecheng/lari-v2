import { Box } from '@chakra-ui/react'
import { BsWhatsapp } from 'react-icons/bs'

export function WhatsButton() {
    return (
        <Box
            as="span"
            position="fixed"
            right="200px"
            top="90vh"
        >
            <BsWhatsapp size={40} color="#25d366" />
        </Box>
    )
}