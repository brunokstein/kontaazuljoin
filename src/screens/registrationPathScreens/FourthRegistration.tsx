import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Center, HStack, Heading, Modal, Progress, ScrollView, Text, VStack, useTheme } from "native-base";
import { Car } from "phosphor-react-native";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import * as yup from "yup";

type FormDataProps = {
    job: string;
    jobTime: string;
    income: string;
    familyIncome: string;
    momName: string;
}

const fourthRegistrationSchema = yup.object({
    job: yup.string().required('Informe a sua função'),
    jobTime: yup.string().required('Informe o tempo de serviço.'),
    income: yup.string().required('Informe a renda.'),
    familyIncome: yup.string().required('Informe a renda familiar.'),
    momName: yup.string().required('Informe o nome da mãe.'),
});


export function FourthRegistration() {
    const { colors } = useTheme()
    const [showModal, setShowModal] = useState(false);
    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        resolver: yupResolver(fourthRegistrationSchema)
    });

    const navigation = useNavigation<AppNavigatorRoutesProps>()

    function handleFourthRegister() {
        navigation.navigate("toptabroutes");
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
                    }} value={80}
                    />
                    <Text
                        color="white"
                        alignSelf="center"
                        mt={2}
                    >
                        80% do perfil preenchido
                    </Text>

                    <Heading
                        color="gray.100"
                        fontSize="lg"
                        fontFamily="heading"
                        mt={4}
                    >
                        Preencha as informações e libere praticamente todos os serviços!
                    </Heading>
                    <Center flex={1}>
                        <Controller
                            control={control}
                            name="job"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    title="Função"
                                    keyboardType="number-pad"
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.job?.message}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="jobTime"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    title="Tempo de serviço"
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.jobTime?.message}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="income"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    title="Renda"
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.income?.message}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="familyIncome"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    title="Renda familiar"
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.familyIncome?.message}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="momName"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    title="Nome da mãe"
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.momName?.message}
                                />
                            )}
                        />
                    </Center>

                    <Button
                        textSize="md"
                        title="Finalizar o cadastro"
                        onPress={() => setShowModal(true)}
                    />

                    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                        <Modal.Content maxWidth="400px">
                            <Modal.Header>Parabéns, voce concluiu 100% do seu perfil!</Modal.Header>
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
                                <Button textSize="md" title="Ir para a Home" onPress={handleFourthRegister} />
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal>
                </VStack>

            </ScrollView>
        </SafeAreaView>
    )
}