import { 
    Box,
    Button,
    Container,
    FormControl, 
    FormLabel, 
    Grid, 
    GridItem, 
    Input, 
    Select, 
    Text, 
    Textarea, 
    useBreakpointValue 
} from "@chakra-ui/react"

import { useForm } from "react-hook-form"
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import { PageHeading } from "../../components/PageHeading"
import { InputError } from "../../components/InputError";

interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

const schema = Yup.object({
    name: Yup.string().required('Preenchimento obrigatório'),
    email: Yup.string().email().required('Preenchimento obrigatório'),
    phone: Yup.string().required('Preenchimento obrigatório'),
    subject: Yup.string().required('Preenchimento obrigatório'),
    message: Yup.string().required('Preenchimento obrigatório'),
});

export default function Contact() {
    const gridTemplateColumns = useBreakpointValue({ base: '1fr', lg: 'repeat(2, 1fr)' })

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    function formSubmit( formData: FormData ) {
        window.alert(JSON.stringify(formData, null, 2))
    }

    function onError(error: any) {
        console.log(error)
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

                        <form onSubmit={handleSubmit(formSubmit, onError)}>
                            <FormControl>
                                <FormLabel htmlFor="name" fontSize='xl' >Nome { errors?.name?.type && <InputError type={errors.name.type} field="name" /> }</FormLabel>
                                <Input
                                    id='name'
                                    placeholder="Nome"
                                    border='1px solid'
                                    borderColor='gray.300'
                                    mb={{ base: 3, md: 4 }}
                                    _focus={{ border: '2px solid', borderColor: 'brand.title_bg_black' }}
                                    { ...register("name") }
                                />

                                <FormLabel htmlFor="email" fontSize='xl' >E-mail { errors?.email?.type && <InputError  type={errors.email.type} field="email" /> }</FormLabel>
                                <Input
                                    id='email'
                                    placeholder="E-mail"
                                    border='1px solid'
                                    borderColor='gray.300'
                                    mb={{ base: 3, md: 4 }}
                                    _focus={{ border: '2px solid', borderColor: 'brand.title_bg_black' }}
                                    { ...register("email") }
                                />
                
                                <FormLabel htmlFor="phone" fontSize='xl' >Telefone { errors?.phone?.type && <InputError  type={errors.phone.type} field="phone" /> }</FormLabel>
                                <Input
                                    id='phone'
                                    placeholder="Telefone"
                                    border='1px solid'
                                    borderColor='gray.300'
                                    mb={{ base: 3, md: 4 }}
                                    _focus={{ border: '2px solid', borderColor: 'brand.title_bg_black' }}
                                    { ...register("phone") }
                                />

                                <FormLabel htmlFor="subject" fontSize='xl'>Assunto { errors?.subject?.type && <InputError  type={errors.subject.type} field="subject" /> }</FormLabel>
                                <Select
                                    id='subject'
                                    placeholder="Selecione um assunto"
                                    border='1px solid'
                                    borderColor='gray.300'
                                    mb={{ base: 3, md: 4 }}
                                    _focus={{ border: '2px solid', borderColor: 'brand.title_bg_black' }}
                                    { ...register("subject") }
                                >
                                    <option value='civil'>Civil</option>
                                    <option value='trabalhista'>Trabalhista</option>
                                    <option value='familia_e_sucessao'>Família e sucessão</option>
                                </Select>

                                <FormLabel htmlFor="message" fontSize='xl' >Mensagem { errors?.message?.type && <InputError  type={errors.message.type} field="message" /> }</FormLabel> 
                                <Textarea
                                    id="message"
                                    placeholder="Deixe aqui sua mensagem!"
                                    size='md'
                                    minH={160}
                                    border='1px
                                    solid'
                                    borderColor='gray.300'
                                    mb={{ base: 3, md: 4 }}
                                    _focus={{ border: '2px solid', borderColor: 'brand.title_bg_black' }}
                                    { ...register("message") }
                                />

                                <Button
                                    display="block"
                                    mt={{ base: 1, md: 2 }}
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