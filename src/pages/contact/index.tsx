import { Box, Button, Container, Flex, FormControl, FormLabel, Grid, GridItem, Heading, Input, Select, Text, Textarea, useBreakpointValue } from "@chakra-ui/react"
import { useState } from "react"
import { PageHeading } from "../../components/PageHeading"



export default function Contact() {
    const gridTemplateColumns = useBreakpointValue({ base: '1fr', lg: 'repeat(2, 1fr)' })

    const [nameInput, setNameInput] = useState('')
    const isError = nameInput === ''

    return (
        <>
            <Container
                maxW={1200}
                w='100%'
                mb={{ base: 10 }}
                // minH="93vh"
                display={{base: "block"}}
                
                // flexDirection={{base: "column", md: "row"}}
            >
                
                <PageHeading isBgDark={false}>
                    Deixe sua mensagem
                </PageHeading>
                <Grid 
                    maxW={1200}
                    w="100%"
                    templateColumns={ gridTemplateColumns }
                    gap={{ base: 4, md: 20 }}
                >
                    <GridItem
                        w='100%'
                        display='flex'
                        flexDirection='column'
                        justifyContent="flex-start"
                    >
                        <Box  mb={{ base: 4, md: 6 }}>
                            <Text mb={3}>Agradecemos a sua visita!</Text>
                            <Text>Para saber mais informações, utilize o formulário para entrar em contato. Estaremos a disposicão para atendê-lo!</Text>

                        </Box>


                        <FormControl>
                            <FormLabel htmlFor="name" fontSize='xl' >Nome</FormLabel>
                            <Input
                                id='name'
                                placeholder="Nome"
                                border='1px solid'
                                borderColor='gray.300'
                                mb={{ base: 3, md: 4 }}
                                _focus={{ border: '2px solid', borderColor: 'brand.title_bg_black' }}
                            />
            
                            <FormLabel htmlFor="email" fontSize='xl' >E-mail</FormLabel>
                            <Input
                                id='email'
                                placeholder="E-mail"
                                border='1px solid'
                                borderColor='gray.300'
                                mb={{ base: 3, md: 4 }}
                                _focus={{ border: '2px solid', borderColor: 'brand.title_bg_black' }}
                            />
            
                            <FormLabel htmlFor="phone" fontSize='xl' >Telefone</FormLabel>
                            <Input
                                id='phone'
                                placeholder="Telefone"
                                border='1px solid'
                                borderColor='gray.300'
                                mb={{ base: 3, md: 4 }}
                                _focus={{ border: '2px solid', borderColor: 'brand.title_bg_black' }}
                            />

                            <FormLabel htmlFor="subject" fontSize='xl'>Assunto</FormLabel>
                            <Select
                                id='subject'
                                placeholder="Selecione um assunto"
                                border='1px solid'
                                borderColor='gray.300'
                                mb={{ base: 3, md: 4 }}
                                _focus={{ border: '2px solid', borderColor: 'brand.title_bg_black' }}
                            >
                                <option value='civil'>Civil</option>
                                <option value='trabalhista'>Trabalhista</option>
                                <option value='familia_e_sucessao'>Família e sucessão</option>
                            </Select>

                            <FormLabel htmlFor="message" fontSize='xl' >Mensagem</FormLabel>
                            <Textarea
                                id="message"
                                placeholder="Deixe aqui sua mensagem!"
                                size='md'
                                minH={160}
                                border='1px
                                solid'
                                borderColor='gray.300'
                                mb={{ base: 4, md: 6 }}
                                _focus={{ border: '2px solid', borderColor: 'brand.title_bg_black' }}
                            />
                            <Button
                                size='md'
                                w={{ base: '100%', md: 120 }}
                                bg='brand.bg'
                                color='brand.title_bg_black'
                                _hover={{ backgroundColor: 'brand.title_bg_black', color: 'brand.bg' }}
                                alignSelf='right'
                            >
                                Enviar
                            </Button>
                        </FormControl>
                    </GridItem>

                    <GridItem
                        display={{ base: 'none', lg: 'flex' }}
                        bg='url(/images/contact.jpg)'
                        w='100%'
                        borderRadius='20px'
                    >
                        <Heading
                            fontFamily='Georgia'
                            fontSize='2em'
                            fontWeight='medium'

                        >
                            {/* Siga-nos nas redes sociais */}
                        </Heading>
                    </GridItem>
                </Grid>
            </Container>

            
        </>
    )
}