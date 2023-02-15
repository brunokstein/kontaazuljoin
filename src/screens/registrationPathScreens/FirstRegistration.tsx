import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Center, HStack, Heading, Pressable, Progress, ScrollView, Text, VStack } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from 'react-native'
import * as yup from "yup";
import { MagnifyingGlass } from "phosphor-react-native";

type FormDataProps = {
    cpf: string;
    rg: string;
    orgaoExpedidor: string;
    state: string;
    dateOfBirth: string;
    nationality: string;
}

const firstRegistrationSchema = yup.object({
    cpf: yup.string().required('Informe o cpf.'),
    rg: yup.string().required('Informe o rg.'),
    orgaoExpedidor: yup.string().required('Informe o Orgao Expedidor do RG'),
    state: yup.string().required('Informe o estado do RG.'),
    dateOfBirth: yup.string().required('Informe a data de nascimento'),
    nationality: yup.string().required('Informe a nacionalidade')
});

export function FirstRegistration() {

    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        resolver: yupResolver(firstRegistrationSchema)
    });

    const navigation = useNavigation<AppNavigatorRoutesProps>()

    function handleFirstRegister() {
        navigation.navigate('secondregistration');
    }

    function handleGoHome() {
        navigation.navigate('toptabroutes');
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <VStack p={8} flex={1}>
                    <Progress bg="gray.100" mt={8} _filledTrack={{
                        bg: "green.500"
                    }} value={20}
                    />
                    <Text
                        color="white"
                        alignSelf="center"
                        mt={2}
                    >
                        20% do perfil preenchido
                    </Text>

                    <Heading
                        color="gray.100"
                        fontSize="lg"
                        fontFamily="heading"
                        my={6}
                    >
                        Preencha os dados e libere serviços
                    </Heading>
                    <Center flex={1}>
                        <Controller
                            control={control}
                            name="cpf"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    placeholder="CPF"
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.cpf?.message}
                                    InputRightElement={<Pressable><MagnifyingGlass size={20} color="white" style={{marginRight: 8}} /></Pressable>}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="rg"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    placeholder="RG"
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.rg?.message}
                                />
                            )}
                        />
                        <HStack justifyContent="space-between" w='100%'>
                            <Center w="145" rounded="md" shadow={3} >
                                <Controller
                                    control={control}
                                    name="orgaoExpedidor"
                                    render={({ field: { onChange, value } }) => (
                                        <Input
                                            placeholder="Orgao Expedidor"
                                            fontSize="sm"
                                            onChangeText={onChange}
                                            value={value}
                                            errorMessage={errors.orgaoExpedidor?.message}
                                            w={145}
                                        />
                                    )}
                                />
                            </Center>

                            <Center w="145" rounded="md"  >
                                <Controller
                                    control={control}
                                    name="state"
                                    render={({ field: { onChange, value } }) => (
                                        <Input
                                            placeholder="Estado do RG"
                                            onChangeText={onChange}
                                            value={value}
                                            errorMessage={errors.state?.message}
                                            w={145}
                                        />
                                    )}
                                />
                            </Center>
                        </HStack>

                        <Controller
                            control={control}
                            name="dateOfBirth"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    placeholder="Data de nascimento"
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.dateOfBirth?.message}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="nationality"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    placeholder="Nacionalidade"
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.nationality?.message}
                                />
                            )}
                        />
                    </Center>

                    <Button
                        title="Continue para desbloquear mais serviços"
                        onPress={handleFirstRegister}
                    />
                    <TouchableOpacity onPress={handleGoHome}>
                        <Text
                            color="white"
                            alignSelf="center"
                            mt={2}
                        >
                            Ir para home
                        </Text>
                    </TouchableOpacity>
                </VStack>

            </ScrollView>
        </SafeAreaView>
    )
}