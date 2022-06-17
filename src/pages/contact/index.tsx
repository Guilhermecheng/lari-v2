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

import { useForm, SubmitHandler } from "react-hook-form"
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import { PageHeading } from "../../components/PageHeading"
import { InputError } from "../../components/InputError";
import axios from "axios";
import { useEffect, useState } from "react";
import { ImSpinner2 } from "react-icons/im";

interface FormCustomerData {
    name: string;
    email: string;
    phone: string;
    category: string;
    message: string;
    subject?: string;
}

const phoneNumberRegex = /^\(?(?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/

const schema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    phone: Yup.string().matches(phoneNumberRegex).required(),
    category: Yup.string().required(),
    message: Yup.string().required(),
});

export default function Contact() {
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const gridTemplateColumns = useBreakpointValue({ base: '1fr', lg: 'repeat(2, 1fr)' })

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormCustomerData>({
        resolver: yupResolver(schema)
    });

    const formSubmit: SubmitHandler<FormCustomerData> = formData => {
        formData.subject = `Nova mensagem de ${formData.name} em seu site!`;

        axios({
            method: 'post',
            url: `https://formspree.io/f/${process.env.FORMSPREE_API_URL}`,
            data: formData,
            headers: {
          "Content-Type": "application/json",
        },
        }).then(response => {
            if(response.status === 200) {
                setSubmitSuccess(true);
            }
        })
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
                                    type="email"
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
                                    type="number"
                                    placeholder='(00) 00000-0000'
                                    border='1px solid'
                                    borderColor='gray.300'
                                    mb={{ base: 3, md: 4 }}
                                    _focus={{ border: '2px solid', borderColor: 'brand.title_bg_black' }}
                                    { ...register("phone") }
                                />

                                <FormLabel htmlFor="category" fontSize='xl'>Assunto { errors?.category?.type && <InputError  type={errors.category.type} field="category" /> }</FormLabel>
                                <Select
                                    id='category'
                                    placeholder="Selecione um assunto"
                                    border='1px solid'
                                    borderColor='gray.300'
                                    mb={{ base: 3, md: 4 }}
                                    _focus={{ border: '2px solid', borderColor: 'brand.title_bg_black' }}
                                    { ...register("category") }
                                >
                                    <option value='Civil'>Civil</option>
                                    <option value='Trabalhista'>Trabalhista</option>
                                    <option value='Família e sucessão'>Família e sucessão</option>
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

                                { submitSuccess ? (
                                    <Button
                                        display="block"
                                        mt={{ base: 1, md: 2 }}
                                        type="button"
                                        size='md'
                                        w={{ base: '100%', md: 120 }}
                                        bg='brand.success'
                                        color='white'
                                        _hover={{ cursor: 'default', backgroundColor: 'brand.success'  }}
                                    >
                                        Enviado!
                                    </Button>
                                ) : (
                                    <>
                                        { isSubmitting ? (
                                            <Button
                                                display="flex"
                                                mt={{ base: 1, md: 2 }}
                                                isLoading
                                                size='md'
                                                w={{ base: '100%', md: 120 }}
                                                bg='brand.title_bg_black'
                                                _hover={{ backgroundColor: 'brand.title_bg_black' }}
                                            >
                                                
                                            </Button>
                                        ) : (
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
                                        )}
                                    </>
                                ) }
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