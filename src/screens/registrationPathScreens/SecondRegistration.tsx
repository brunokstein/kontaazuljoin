import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Center, HStack, Heading, Pressable, Progress, ScrollView, Text, VStack } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import * as yup from "yup";
import { MagnifyingGlass } from "phosphor-react-native";

type FormDataProps = {
    cep: string;
    street: string;
    streetNumber: string;
    district: string;
    city: string;
    state: string;
    complement: string;
}

const secondRegistrationSchema = yup.object({
    cep: yup.string().required('Informe o CEP.'),
    street: yup.string().required('Informe a rua.'),
    streetNumber: yup.string().required('Informe o numero da casa.'),
    district: yup.string().required('Informe o bairro.'),
    city: yup.string().required('Informe a cidade.'),
    state: yup.string().required('Informe o estado.'),
    complement: yup.string().required('Informe o complemento.'),
});


export function SecondRegistration() {

    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        resolver: yupResolver(secondRegistrationSchema)
    });

    const navigation = useNavigation<AppNavigatorRoutesProps>()

    function handleSecondRegister() {
        navigation.navigate('thirdregistration');
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
                    }} value={40}
                    />
                    <Text
                        color="white"
                        alignSelf="center"
                        mt={2}
                    >
                        40% do perfil preenchido
                    </Text>

                    <Heading
                        color="gray.100"
                        fontSize="lg"
                        fontFamily="heading"
                        my={4}
                    >
                        Preencha os dados e libere novos serviços condizentes ao seu perfil!
                    </Heading>
                    <Center flex={1}>
                        <Controller
                            control={control}
                            name="cep"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    placeholder="CEP"
                                    keyboardType="number-pad"
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.cep?.message}
                                    InputRightElement={<Pressable><MagnifyingGlass size={20} color="white" style={{ marginRight: 8 }} /></Pressable>}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="street"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    placeholder="Endereço"
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.street?.message}
                                />
                            )}
                        />
                        <HStack justifyContent="space-between" w='100%'>
                            <Center w="145" rounded="md" shadow={3} >
                                <Controller
                                    control={control}
                                    name="streetNumber"
                                    render={({ field: { onChange, value } }) => (
                                        <Input
                                            placeholder="Número"
                                            onChangeText={onChange}
                                            keyboardType="number-pad"
                                            value={value}
                                            errorMessage={errors.district?.message}
                                            w={145}
                                        />
                                    )}
                                />
                            </Center>

                            <Center w="145" rounded="md"  >
                                <Controller
                                    control={control}
                                    name="complement"
                                    render={({ field: { onChange, value } }) => (
                                        <Input
                                            placeholder="Complemento"
                                            onChangeText={onChange}
                                            value={value}
                                            errorMessage={errors.complement?.message}
                                            w={145}
                                        />
                                    )}
                                />
                            </Center>
                        </HStack>

                        <Controller
                            control={control}
                            name="district"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    placeholder="Bairro"
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.district?.message}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="city"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    placeholder="Cidade"
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.city?.message}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="state"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    placeholder="Estado"
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.state?.message}
                                />
                            )}
                        />
                    </Center>

                    <Button
                        title="Continue para desbloquear mais serviços"
                        onPress={handleSecondRegister}
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