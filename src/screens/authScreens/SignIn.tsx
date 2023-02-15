import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { VStack, Image, Text, Center, Heading, ScrollView, useToast } from 'native-base';

import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

//import { useAuth } from '@hooks/useAuth';

import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { At, Lock, User } from 'phosphor-react-native';
//import { AppError } from '@utils/AppError';

type FormData = {
    email: string;
    password: string;
}

export function SignIn() {

    const [isLoading, setIsLoading] = useState(false);

    //const { signIn } = useAuth();
    const navigation = useNavigation<AuthNavigatorRoutesProps>();
    const toast = useToast();

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

    function handleNewAccount() {
        navigation.navigate('signUp');
    }

    /*  async function handleSignIn({ email, password }: FormData) {
         try {
             setIsLoading(true);
             await signIn(email, password);
             
         } catch (error) {
             const isAppError = error instanceof AppError;
             const title = isAppError ? error.message : 'Nao foi possivel entrar. Tente novamente mais tarde.'
 
             setIsLoading(false);
 
             toast.show({
                 title,
                 placement: 'top',
                 bgColor: 'red.500'
             });
         } 
     } */

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <VStack flex={1} px={10} pb={16}>
                    <Center mt={8}>
                        <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading" >
                            Login
                        </Heading>
                        <Controller
                            control={control}
                            name="email"
                            rules={{ required: 'Informe o e-mail' }}
                            render={({ field: { onChange } }) => (
                                <Input
                                    title='Nome'
                                    keyboardType="email-address"
                                    onChangeText={onChange}
                                    errorMessage={errors.email?.message}
                                    autoCapitalize="none"
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="password"
                            rules={{ required: 'Informe a senha' }}
                            render={({ field: { onChange } }) => (
                                <Input
                                    title='Senha'
                                    secureTextEntry
                                    onChangeText={onChange}
                                    errorMessage={errors.password?.message}
                                />
                            )}
                        />

                        <Button
                            title="Acessar"
                        //onPress={handleSubmit(handleSignIn)} 
                        //isLoading={isLoading}
                        />
                    </Center>

                    <Center>
                        <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
                            Ainda nao tem acesso?
                        </Text>

                        <Button
                            title="Criar conta"
                            variant="outline"
                            onPress={handleNewAccount}
                        />
                    </Center>
                </VStack>
            </ScrollView>
        </SafeAreaView>
    );
}
