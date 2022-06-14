import { Box, Button, Container, Flex, FormControl, FormLabel, Grid, GridItem, Heading, Input, Select, Text, Textarea, useBreakpointValue } from "@chakra-ui/react"
import { FormEvent, useState } from "react"
import { useForm } from "react-hook-form"
import { ImSleepy2 } from "react-icons/im"
import { PageHeading } from "../../components/PageHeading"



export default function Contact() {
    const gridTemplateColumns = useBreakpointValue({ base: '1fr', lg: 'repeat(2, 1fr)' })

    // const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [nameData, setNameData] = useState('')
    const [ emailData, setEmailData ] = useState('')
    const [ phoneData, setPhoneData ] = useState('')
    const [ subjectData, setSubjectDate ] = useState('')
    const [ messageData, setMessageData ] = useState('')

    const formValues = {
        name: nameData,
        email: emailData,
        phone: phoneData,
        subject: subjectData,
        message: messageData,
    }

    async function formSubmit( event: FormEvent ) {
        event.preventDefault();
        window.alert(JSON.stringify(formValues, null, 2));
    }

    return (
        <>
            <Container
                maxW={1200}
                w='100%'
                mb={{ base: 10 }}
                display={{base: "block"}}
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
                        <Box  mb={{ base: 4, md: 6 }} fontSize={{ base: 'md', md: 'lg' }}>
                            <Text mb={3}>Agradecemos a sua visita!</Text>
                            <Text>Para saber mais informações, utilize o formulário para entrar em contato. Estaremos a disposicão para atendê-lo!</Text>

                        </Box>

                        <form onSubmit={formSubmit}>
                            <FormControl>
                                <FormLabel htmlFor="name" fontSize='xl' >Nome</FormLabel>
                                <Input
                                    id='name'
                                    placeholder="Nome"
                                    border='1px solid'
                                    borderColor='gray.300'
                                    mb={{ base: 3, md: 4 }}
                                    _focus={{ border: '2px solid', borderColor: 'brand.title_bg_black' }}
                                    onChange={ event => setNameData(event.currentTarget.value) }
                                />
                
                                <FormLabel htmlFor="email" fontSize='xl' >E-mail</FormLabel>
                                <Input
                                    id='email'
                                    placeholder="E-mail"
                                    border='1px solid'
                                    borderColor='gray.300'
                                    mb={{ base: 3, md: 4 }}
                                    _focus={{ border: '2px solid', borderColor: 'brand.title_bg_black' }}
                                    onChange={ event => setEmailData(event.currentTarget.value) }
                                />
                
                                <FormLabel htmlFor="phone" fontSize='xl' >Telefone</FormLabel>
                                <Input
                                    id='phone'
                                    placeholder="Telefone"
                                    border='1px solid'
                                    borderColor='gray.300'
                                    mb={{ base: 3, md: 4 }}
                                    _focus={{ border: '2px solid', borderColor: 'brand.title_bg_black' }}
                                    onChange={ event => setPhoneData(event.currentTarget.value) }
                                />

                                <FormLabel htmlFor="subject" fontSize='xl'>Assunto</FormLabel>
                                <Select
                                    id='subject'
                                    placeholder="Selecione um assunto"
                                    border='1px solid'
                                    borderColor='gray.300'
                                    mb={{ base: 3, md: 4 }}
                                    _focus={{ border: '2px solid', borderColor: 'brand.title_bg_black' }}
                                    onChange={ event => setSubjectDate(event.currentTarget.value) }
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
                                    onChange={ event => setMessageData(event.currentTarget.value) }
                                />
                                <Button
                                    type="submit"
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
                        </form>
                    </GridItem>

                    <GridItem
                        display={{ base: 'none', lg: 'flex' }}
                        bg='url(/images/contact.jpg)'
                        w='100%'
                        borderRadius='20px'
                    >
                        {/* <Heading
                            fontFamily='Georgia'
                            fontSize='2em'
                            fontWeight='medium'

                        >
                            Siga-nos nas redes sociais
                        </Heading> */}
                    </GridItem>
                </Grid>
            </Container>
        </>
    )
}