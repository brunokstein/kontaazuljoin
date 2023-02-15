import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Center, CheckIcon, FormControl, Heading, Progress, Radio, ScrollView, Select, Text, VStack, WarningOutlineIcon } from "native-base";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import * as yup from 'yup';

type FormDataProps = {
    wifeName?: string | undefined;
    wifeEmail?: string | undefined;
    wifePhone?: string | undefined;
    wifeCpf?: string | undefined;
}

/* const thirdRegistrationSchema = yup.object({
    cep: yup.string().required('Informe o CEP.'),
    street: yup.string().required('Informe a rua.'),
    streetNumber: yup.string().required('Informe o numero da casa.'),
    district: yup.string().required('Informe o bairro.'),
    city: yup.string().required('Informe a cidade.'),
    state: yup.string().required('Informe o estado.'),
    complement: yup.string().required('Informe o complemento.'),
});
 */
export function ThirdRegistration() {

    const [occupation, setOccupation] = useState(''); //radio group
    const [civilStatus, setCivilStatus] = useState('');

    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        //resolver: yupResolver(thirdRegistrationSchema)
    });

    const navigation = useNavigation<AppNavigatorRoutesProps>()

    function handleSecondRegister() {
        navigation.navigate('fourthregistration');
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
                    }} value={60}
                    />
                    <Text
                        color="white"
                        alignSelf="center"
                        mt={2}
                    >
                        60% do perfil preenchido
                    </Text>

                    <Heading
                        color="gray.100"
                        fontSize="lg"
                        fontFamily="heading"
                        my={4}
                    >
                        Falta pouco, continue a preencher o seu perfil!
                    </Heading>
                    <Text
                        color="white"
                        fontFamily="body"
                        fontSize="md"
                        mt={2}
                        mb={1}
                    >
                        Qual o seu estado civil?
                    </Text>

                    <Select
                        selectedValue={civilStatus} w="100%"
                        accessibilityLabel="Estado civil"
                        placeholder="Estado Civil"
                        placeholderTextColor="gray.200"
                        borderColor="green.500"
                        color="white"
                        fontSize="md"
                        _selectedItem={{
                            bg: "green.500",
                            endIcon: <CheckIcon size={5} color="white" />
                        }} mt="1" onValueChange={itemValue => setCivilStatus(itemValue)}>
                        <Select.Item _pressed={{ bg: "gray.100" }} label="Solteiro" value="single" />
                        <Select.Item _pressed={{ bg: "gray.100" }} label="Casado / União Estável" value="marriedStableUnion" />
                        <Select.Item _pressed={{ bg: "gray.100" }} label="Divorciado" value="divorced" />
                    </Select>

                    {
                        civilStatus === "marriedStableUnion" &&
                        <VStack>
                            <Text
                                color="white"
                                fontSize="sm"
                                fontFamily="body"
                                my={4}
                            >
                                Por favor, preencha os dados da sua mulher:
                            </Text>
                            <Controller
                                control={control}
                                name="wifeName"
                                render={({ field: { onChange, value } }) => (
                                    <Input
                                        placeholder="Nome"
                                        onChangeText={onChange}
                                        value={value}
                                    //errorMessage={errors.street?.message}
                                    />
                                )}
                            />

                            <Controller
                                control={control}
                                name="wifeEmail"
                                render={({ field: { onChange, value } }) => (
                                    <Input
                                        placeholder="Email"
                                        onChangeText={onChange}
                                        value={value}
                                    //errorMessage={errors.street?.message}
                                    />
                                )}
                            />

                            <Controller
                                control={control}
                                name="wifePhone"
                                render={({ field: { onChange, value } }) => (
                                    <Input
                                        placeholder="Celular"
                                        onChangeText={onChange}
                                        value={value}
                                    //errorMessage={errors.street?.message}
                                    />
                                )}
                            />

                            <Controller
                                control={control}
                                name="wifeCpf"
                                render={({ field: { onChange, value } }) => (
                                    <Input
                                        placeholder="CPF"
                                        onChangeText={onChange}
                                        value={value}
                                    //errorMessage={errors.street?.message}
                                    />
                                )}
                            />
                        </VStack>
                    }
                    <VStack flex={1}>
                        <Text
                            color="white"
                            fontFamily="body"
                            fontSize="md"
                            mt={2}
                            mb={1}
                        >
                            Qual a sua ocupação?
                        </Text>
                        <Radio.Group
                            name="myRadioGroup"
                            accessibilityLabel="favorite number"
                            colorScheme="green"
                            value={occupation}
                            onChange={nextValue => {
                                setOccupation(nextValue);
                            }}
                        >
                            <Radio value="Empregado Setor Público" my={1}>
                                <Text color="gray.200">
                                    Empregado Setor Público
                                </Text>
                            </Radio>
                            <Radio value="Empregado Setor Privado" my={1}>
                                <Text color="gray.200">
                                    Empregado Setor Privado
                                </Text>
                            </Radio>
                            <Radio value="Autônomo" my={1}>
                                <Text color="gray.200">
                                    Autônomo
                                </Text>
                            </Radio>
                            <Radio value="Profissional Liberal" my={1}>
                                <Text color="gray.200">
                                    Profissional Liberal
                                </Text>
                            </Radio>
                            <Radio value="Empresário" my={1}>
                                <Text color="gray.200">
                                    Empresário
                                </Text>
                            </Radio>
                            <Radio value=" Aposentado" my={1}>
                                <Text color="gray.200">
                                    Aposentado
                                </Text>
                            </Radio>
                            <Radio value="Investidor" my={1}>
                                <Text color="gray.200">
                                    Investidor
                                </Text>
                            </Radio>
                        </Radio.Group>
                    </VStack>

                    <Button
                        title="Continue para desbloquear mais serviços"
                        mt={4}
                        onPress={handleSecondRegister}
                    />
                </VStack>

            </ScrollView>
        </SafeAreaView>
    )
}