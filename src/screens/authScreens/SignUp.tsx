import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { VStack, Image, Text, Center, Heading, ScrollView, useToast } from 'native-base';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

/* import { api } from '@services/api';
import { useAuth } from '@hooks/useAuth'; */

//import { AppError } from '@utils/AppError';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

type FormDataProps = {
    name: string;
    email: string;
    phone: string;
    password: string;
    password_confirm: string;
}

const signUpSchema = yup.object({
    name: yup.string().required('Informe o nome.'),
    email: yup.string().required('Informe o e-mail.').email('E-mail invalido.'),
    phone: yup.string()
        .required("Informe o número de celular.")
        .length(11, "Número inexistente."),
    password: yup.string().required('Informe a senha.').min(6, 'A senha deve ter pelo menos 6 digitos.'),
    password_confirm: yup.string().required('Confirme a senha.').oneOf([yup.ref('password'), null], 'A confirmacao da senha nao confere.')
});

export function SignUp() {

    const [isLoading, setIsLoading] = useState(false);

    const toast = useToast();
    //const { signIn } = useAuth();

    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        resolver: yupResolver(signUpSchema)
    });

    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    function handleGoBack() {
        navigation.goBack();
    }

    function handleSignUp() {
    }

    /*   async function handleSignUp({ name, email, phone, password }: FormDataProps) {
          try {
              setIsLoading(true);
  
              await api.post('/users', { name, email, password });
              await signIn(email, password);
  
          } catch (error) {
  
              setIsLoading(false);
  
              const isAppError = error instanceof AppError;
              const title = isAppError ? error.message : 'Nao foi possivel criar a conta. Tente novamente mais tarde.'
  
              toast.show({
                  title,
                  placement: 'top',
                  bgColor: 'red.500'
              });
          }
      } */

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <VStack flex={1} px={10} pb={16}>

                <Center>
                    <Heading color="gray.100" fontSize="xl" mt={10} mb={6} fontFamily="heading">
                        Crie sua conta
                    </Heading>

                    <Controller
                        control={control}
                        name="name"
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="Nome completo"
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.name?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="E-mail"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.email?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="phone"
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="Celular - Ex: 45998764539"
                                keyboardType="number-pad"
                                autoCapitalize="none"
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.phone?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange, value } }) => (

                            <Input
                                placeholder='Senha'
                                secureTextEntry
                                onChangeText={onChange}
                                value={value}
                                errorMessage={errors.password?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="password_confirm"
                        render={({ field: { onChange, value } }) => (

                            <Input
                                placeholder='Confirme a senha'
                                secureTextEntry
                                onChangeText={onChange}
                                value={value}
                                onSubmitEditing={handleSubmit(handleSignUp)}
                                returnKeyType="send"
                                errorMessage={errors.password_confirm?.message}
                            />
                        )}
                    />

                    <Button
                        title="Criar e acessar"
                        onPress={handleSignUp}
                        //isLoading={isLoading}
                    />
                </Center>
            </VStack>
        </ScrollView>
    );
}