import { BackButton } from "@components/BackButton";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { HStack, Heading, Radio, ScrollView, Switch, Text, VStack } from "native-base";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import * as yup from 'yup';

type FormDataProps = {
    propertyType: string;
    propertyValue: string;
    propertyLoanReason: string;
    cep: string;
    isSettled: boolean;
    isEndorsed: boolean;
    isPaved: boolean;
    isCpfRestricted: boolean;
    isLivingInTheProperty: boolean;
}

const propertySchema = yup.object({
    loanValue: yup.string().required('Informe um valor de empréstimo')
})

export function PropertyRegister() {

    const [propertyType, setPropertyType] = useState('');

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>();

    function handleGoRegisterLoanValue() {
        navigation.navigate('loanvalueregister');
    }

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <VStack flex={1} p={8} >
                    <BackButton onPress={handleGoBack} />
                    <Heading color="white" fontSize="xl" my={6}>
                        Precisamos de mais algumas informações...
                    </Heading>
                    <VStack flex={1}>
                        <Controller
                            control={control}
                            name="propertyValue"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    title="Valor do Imóvel"
                                    onChangeText={onChange}
                                    keyboardType="number-pad"
                                    value={value}
                                    errorMessage={errors.propertyValue?.message}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="propertyLoanReason"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    title="Motivo do empréstimo"
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.propertyLoanReason?.message}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="cep"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    title="CEP"
                                    onChangeText={onChange}
                                    keyboardType="number-pad"
                                    value={value}
                                    errorMessage={errors.cep?.message}
                                />
                            )}
                        />

                        <VStack my={2}>
                            <HStack alignItems="center" justifyContent="space-between" >
                                <Text color="gray.200">
                                    Você tem restrição no CPF?
                                </Text>
                                <Switch colorScheme="green" />
                            </HStack>
                            <HStack alignItems="center" justifyContent="space-between">
                                <Text color="gray.200">
                                    Você mora na propriedade?
                                </Text>
                                <Switch colorScheme="green" />
                            </HStack>
                        </VStack>

                        <Text
                            fontFamily="heading"
                            fontSize="md"
                            color="white"
                            my={2}
                        >
                            Qual o tipo do imóvel?
                        </Text>
                        <Radio.Group
                            name="myRadioGroup"
                            accessibilityLabel="favorite number"
                            colorScheme="green"
                            value={propertyType}
                            onChange={nextValue => {
                                setPropertyType(nextValue);
                            }}
                        >
                            <Radio value="Empregado Setor Público" my={1}>
                                <Text color="gray.200">
                                    Casa Residencial
                                </Text>
                            </Radio>
                            <Radio value="Empregado Setor Privado" my={1}>
                                <Text color="gray.200">
                                    Apartamento Residencial
                                </Text>
                            </Radio>
                            <Radio value="Autônomo" my={1}>
                                <Text color="gray.200">
                                    Casa Comercial
                                </Text>
                            </Radio>
                            <Radio value="Profissional Liberal" my={1}>
                                <Text color="gray.200">
                                    Sala Comercial
                                </Text>
                            </Radio>
                            <Radio value="Empresário" my={1}>
                                <Text color="gray.200">
                                    Terreno
                                </Text>
                            </Radio>
                        </Radio.Group>

                        <Text
                            fontFamily="heading"
                            fontSize="md"
                            color="white"
                            mt={4}
                            mb={1}
                        >
                            O Imóvel:
                        </Text>

                        <HStack alignItems="center" justifyContent="space-between">
                            <Text color="gray.200">
                                Está quitado?
                            </Text>
                            <Switch colorScheme="green" />
                        </HStack>
                        <HStack alignItems="center" justifyContent="space-between">
                            <Text color="gray.200">
                                Está averbado?
                            </Text>
                            <Switch colorScheme="green" />
                        </HStack>
                        <HStack alignItems="center" justifyContent="space-between">
                            <Text color="gray.200">
                                Tem rua asfaltada?
                            </Text>
                            <Switch colorScheme="green" />
                        </HStack>
                    </VStack>
                    <Button
                        title="Solicitar serviço"
                        textSize="md"
                        onPress={handleGoRegisterLoanValue}
                    />
                </VStack>
            </ScrollView>
        </SafeAreaView>
    );
}