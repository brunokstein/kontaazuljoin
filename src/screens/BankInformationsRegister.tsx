import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Center, CheckIcon, HStack, Heading, Radio, Select, Text, VStack } from "native-base";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackButton } from "@components/BackButton";

type FormData = {
    bank: string;
    accountType: string;
    agency: string;
    agencyCode: string;
    account: string;
    accountCode: string;
}

export function BankInformationsRegister() {
    const navigation = useNavigation<AppNavigatorRoutesProps>();

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [bank, setBank] = useState('');
    const [accountType, setAccountType] = useState('');

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <VStack flex={1} p={6}>
                <HStack alignItems="center" mb={8}>
                    <BackButton onPress={handleGoBack} />
                        <Heading fontSize="xl" color="white" ml={8}>
                            Informações bancárias
                        </Heading>
                </HStack>
                <VStack flex={1} space={5}>
                    <Select
                        selectedValue={bank} w="100%"
                        accessibilityLabel="Banco"
                        placeholder="Banco"
                        placeholderTextColor="gray.200"
                        borderColor="green.500"
                        color="white"
                        fontSize="md"
                        _selectedItem={{
                            bg: "green.500",
                            endIcon: <CheckIcon size={5} color="white" />
                        }} mt="1" onValueChange={itemValue => setBank(itemValue)}>
                        <Select.Item _pressed={{ bg: "gray.100" }} label="Nubank" value="Nubank" />
                        <Select.Item _pressed={{ bg: "gray.100" }} label="Banco do Brasil" value="Banco do Brasil" />
                        <Select.Item _pressed={{ bg: "gray.100" }} label="Caixa Econômica" value="Caixa Econômica" />
                        <Select.Item _pressed={{ bg: "gray.100" }} label="Itaú Unibanco" value="Itaú Unibanco" />
                        <Select.Item _pressed={{ bg: "gray.100" }} label="Banco Inter" value="Banco Inter" />
                        <Select.Item _pressed={{ bg: "gray.100" }} label="Banco Santander" value="Banco Santander" />
                        <Select.Item _pressed={{ bg: "gray.100" }} label="Bradesco" value="Bradesco" />
                    </Select>

                    <Radio.Group
                        name="myRadioGroup"
                        accessibilityLabel="favorite number"
                        colorScheme="green"
                        value={accountType}
                        onChange={nextValue => {
                            setAccountType(nextValue);
                        }}
                    >
                        <Radio value="Conta Corrente" my={1}>
                            <Text color="gray.200">
                                Conta Corrente
                            </Text>
                        </Radio>
                        <Radio value="Poupança" my={1}>
                            <Text color="gray.200">
                                Poupança
                            </Text>
                        </Radio>
                    </Radio.Group>

                    <VStack>
                        <HStack justifyContent="space-between" w='100%'>
                            <Center w="200" rounded="md" shadow={3} >
                                <Controller
                                    control={control}
                                    name="agency"
                                    render={({ field: { onChange, value } }) => (
                                        <Input
                                            placeholder="Agencia"
                                            onChangeText={onChange}
                                            value={value}
                                            //errorMessage={errors.orgaoExpedidor?.message}
                                            w={200}
                                        />
                                    )}
                                />
                            </Center>

                            <Center w="90" rounded="md"  >
                                <Controller
                                    control={control}
                                    name="agencyCode"
                                    render={({ field: { onChange, value } }) => (
                                        <Input
                                            placeholder="Digito"
                                            onChangeText={onChange}
                                            value={value}
                                            //errorMessage={errors.state?.message}
                                            w={90}
                                        />
                                    )}
                                />
                            </Center>
                        </HStack>
                        <HStack justifyContent="space-between" w='100%'>
                            <Center w="200" rounded="md" shadow={3} >
                                <Controller
                                    control={control}
                                    name="account"
                                    render={({ field: { onChange, value } }) => (
                                        <Input
                                            placeholder="Conta"
                                            onChangeText={onChange}
                                            value={value}
                                            //errorMessage={errors.orgaoExpedidor?.message}
                                            w={200}
                                        />
                                    )}
                                />
                            </Center>

                            <Center w="90" rounded="md"  >
                                <Controller
                                    control={control}
                                    name="accountCode"
                                    render={({ field: { onChange, value } }) => (
                                        <Input
                                            placeholder="Digito"
                                            onChangeText={onChange}
                                            value={value}
                                            //errorMessage={errors.state?.message}
                                            w={90}
                                        />
                                    )}
                                />
                            </Center>
                        </HStack>
                    </VStack>

                </VStack>
                <Button title="Confirmar" />
            </VStack>
        </SafeAreaView>
    )
}