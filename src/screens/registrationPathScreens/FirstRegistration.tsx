import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Center, HStack, Heading, Modal, Pressable, Progress, ScrollView, Text, VStack, useTheme } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from 'react-native'
import * as yup from "yup";
import { ArrowCircleRight, Car, House, MagnifyingGlass } from "phosphor-react-native";
import { useCallback, useEffect, useRef, useState } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";


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
    const { colors } = useTheme();
    const [showModal, setShowModal] = useState(false);
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
        <SafeAreaView style={{ flex: 1, backgroundColor: "black"}}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    showsVerticalScrollIndicator={false}
                >
                    <VStack p={8} flex={1}>
                        <Progress bg="gray.100" mt={8} _filledTrack={{
                            bg: "blue.500"
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
                                        title="CPF"
                                        onChangeText={onChange}
                                        value={value}
                                        errorMessage={errors.cpf?.message}
                                        InputRightElement={<Pressable><MagnifyingGlass size={20} color="white" style={{ marginRight: 8 }} /></Pressable>}
                                    />
                                )}
                            />

                            <Controller
                                control={control}
                                name="rg"
                                render={({ field: { onChange, value } }) => (
                                    <Input
                                        title="RG"
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
                                                title="Orgao Expedidor"
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
                                                title="Estado do RG"
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
                                        title="Data de nascimento"
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
                                        title="Nacionalidade"
                                        onChangeText={onChange}
                                        value={value}
                                        errorMessage={errors.nationality?.message}
                                    />
                                )}
                            />
                        </Center>

                        <Button
                            title="Próximo"
                            textSize="md"
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
                                    <Button textSize="md" title="Continuar com o cadastro" onPress={handleFirstRegister} />
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
            </GestureHandlerRootView>
        </SafeAreaView>
    )
}