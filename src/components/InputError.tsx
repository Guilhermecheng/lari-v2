import { Text } from "@chakra-ui/react";

interface InputErrorProps {
    type: string;
    field: string;
}

const validations:  { [key: string]: any } = {
    name: {
        required: "Nome obrigatório"
    },
    email: {
        required: "E-mail obrigatório",
        email: "O e-mail informado é inválido",
    },
    phone: {
        required: "Telefone obrigatório",
    },
    subject: {
        required: "Selecione um assunto",
    },
    message: {
        required: "Digite sua mensagem"
    }
}

export function InputError({ type, field }: InputErrorProps) {
    return (
        
        <Text
            as="span"
            fontSize={{ base: 14, md: 16 }}
            color="#FF6961"
            ml={1}
        >
            
            { validations[field][type] }
            </Text>
    )
}