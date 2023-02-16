import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Center, HStack, Heading, Modal, Pressable, Progress, ScrollView, Text, VStack, useTheme } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import * as yup from "yup";
import { Car, MagnifyingGlass } from "phosphor-react-native";
import { useState } from "react";

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
    const { colors } = useTheme()
    const [showModal, setShowModal] = useState(false);
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
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <VStack p={8} flex={1}>
                    <Progress bg="gray.100" mt={8} _filledTrack={{
                        bg: "blue.500"
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
                                    title="CEP"
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
                                    title="Endereço"
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
                                            title="Número"
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
                                            title="Complemento"
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
                                    title="Bairro"
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
                                    title="Cidade"
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
                                    title="Estado"
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.state?.message}
                                />
                            )}
                        />
                    </Center>

                    <Button
                        textSize="md"
                        title="Continue para desbloquear mais serviços"
                        onPress={() => setShowModal(true)}
                    />
                    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                        <Modal.Content maxWidth="400px">
                            <Modal.CloseButton />
                            <Modal.Header>Serviços liberados</Modal.Header>
                            <Modal.Body>
                                <HStack alignItems="center" backgroundColor="white" px={8} py={2} mt={2}>
                                    <Car size={26} color={colors.gray[700]} />
                                    <Text px={2} flex={1} fontSize="sm" fontFamily="body" color="black">
                                        Empréstimo para Carro (REFIN)
                                    </Text>
                                </HStack>
                                <HStack alignItems="center" backgroundColor="white" px={8} py={2} mt={2}>
                                    <Car size={26} color={colors.gray[700]} />
                                    <Text px={2} flex={1} fontSize="sm" fontFamily="body" color="black">
                                        Empréstimo para Carro (REFIN)
                                    </Text>
                                </HStack>
                                <HStack alignItems="center" backgroundColor="white" px={8} py={2} mt={2}>
                                    <Car size={26} color={colors.gray[700]} />
                                    <Text px={2} flex={1} fontSize="sm" fontFamily="body" color="black">
                                        Empréstimo para Carro (REFIN)
                                    </Text>
                                </HStack>
                                <HStack alignItems="center" backgroundColor="white" px={8} py={2} mt={2}>
                                    <Car size={26} color={colors.gray[700]} />
                                    <Text px={2} flex={1} fontSize="sm" fontFamily="body" color="black">
                                        Empréstimo para Carro (REFIN)
                                    </Text>
                                </HStack>
                                <HStack alignItems="center" backgroundColor="white" px={8} py={2} mt={2}>
                                    <Car size={26} color={colors.gray[700]} />
                                    <Text px={2} flex={1} fontSize="sm" fontFamily="body" color="black">
                                        Empréstimo para Carro (REFIN)
                                    </Text>
                                </HStack>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button textSize="md" title="Continuar com o cadastro" onPress={handleSecondRegister} />
                                <TouchableOpacity onPress={handleGoHome}>
                                    <Text>
                                        Ir para a Home!
                                    </Text>
                                </TouchableOpacity>
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal>
                </VStack>

            </ScrollView>
        </SafeAreaView>
    )
}