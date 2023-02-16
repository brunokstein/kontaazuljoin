import { BackButton } from "@components/BackButton";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Center, HStack, Heading, Pressable, ScrollView, Switch, Text, VStack } from "native-base";
import { MagnifyingGlass } from "phosphor-react-native";
import { useForm, Controller } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import * as yup from 'yup';

type FormData = {
    plate: string;
    carBrand: string;
    carModel: string;
    manufactureYear: string;
    modelYear: string;
    fipeValue: string;
    km: string;
    state: string;
}

/* const loanValueSchema = yup.object({
    loanValue: yup.string().required('Informe um valor de empréstimo')
}) */

export function CarRegister() {

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

    function handleGoBack() {
        navigation.goBack();
    }

    function handleGetVehicleInfo() {

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
                        <HStack justifyContent="space-between" w='100%'>
                            <Center w="145" rounded="md" shadow={3} >
                                <Controller
                                    control={control}
                                    name="plate"
                                    render={({ field: { onChange, value } }) => (
                                        <Input
                                            title="Placa"
                                            fontSize="sm"
                                            onChangeText={onChange}
                                            value={value}
                                            //errorMessage={errors.orgaoExpedidor?.message}
                                            w={145}
                                            InputRightElement={<Pressable onPress={handleGetVehicleInfo}><MagnifyingGlass size={20} color="white" style={{ marginRight: 8 }} /></Pressable>}
                                        />
                                    )}
                                />
                            </Center>

                            <Center w="145" rounded="md"  >
                                <Controller
                                    control={control}
                                    name="carBrand"
                                    render={({ field: { onChange, value } }) => (
                                        <Input
                                            title="Marca"
                                            onChangeText={onChange}
                                            value={value}
                                            //errorMessage={errors.state?.message}
                                            w={145}
                                        />
                                    )}
                                />
                            </Center>
                        </HStack>
                        <HStack justifyContent="space-between" w='100%'>
                            <Center w="145" rounded="md" shadow={3} >
                                <Controller
                                    control={control}
                                    name="carModel"
                                    render={({ field: { onChange, value } }) => (
                                        <Input
                                            title="Modelo"
                                            fontSize="sm"
                                            onChangeText={onChange}
                                            value={value}
                                            //errorMessage={errors.orgaoExpedidor?.message}
                                            w={145}
                                        />
                                    )}
                                />
                            </Center>

                            <Center w="145" rounded="md"  >
                                <Controller
                                    control={control}
                                    name="manufactureYear"
                                    render={({ field: { onChange, value } }) => (
                                        <Input
                                            title="Ano Fabricação"
                                            onChangeText={onChange}
                                            value={value}
                                            //errorMessage={errors.state?.message}
                                            w={145}
                                        />
                                    )}
                                />
                            </Center>
                        </HStack>
                        <HStack justifyContent="space-between" w='100%'>
                            <Center w="145" rounded="md" shadow={3} >
                                <Controller
                                    control={control}
                                    name="modelYear"
                                    render={({ field: { onChange, value } }) => (
                                        <Input
                                            title="Ano Modelo"
                                            fontSize="sm"
                                            onChangeText={onChange}
                                            value={value}
                                            //errorMessage={errors.orgaoExpedidor?.message}
                                            w={145}
                                        />
                                    )}
                                />
                            </Center>

                            <Center w="145" rounded="md"  >
                                <Controller
                                    control={control}
                                    name="fipeValue"
                                    render={({ field: { onChange, value } }) => (
                                        <Input
                                            title="Valor da Fipe"
                                            onChangeText={onChange}
                                            value={value}
                                            //errorMessage={errors.state?.message}
                                            w={145}
                                        />
                                    )}
                                />
                            </Center>
                        </HStack>
                        <HStack justifyContent="space-between" w='100%'>
                            <Center w="145" rounded="md" shadow={3} >
                                <Controller
                                    control={control}
                                    name="km"
                                    render={({ field: { onChange, value } }) => (
                                        <Input
                                            title="Quilometragem"
                                            fontSize="sm"
                                            onChangeText={onChange}
                                            value={value}
                                            //errorMessage={errors.orgaoExpedidor?.message}
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
                                            title="Estado"
                                            onChangeText={onChange}
                                            value={value}
                                            //errorMessage={errors.state?.message}
                                            w={145}
                                        />
                                    )}
                                />
                            </Center>
                        </HStack>
                        <VStack my={2}>
                            <HStack alignItems="center" justifyContent="space-between" >
                                <Text color="gray.200" fontSize="md">
                                    Quitado?
                                </Text>
                                <Switch colorScheme="green" />
                            </HStack>
                            <HStack alignItems="center" justifyContent="space-between">
                                <Text color="gray.200" fontSize="md">
                                    Refin?
                                </Text>
                                <Switch colorScheme="green" />
                            </HStack>
                            <HStack alignItems="center" justifyContent="space-between" >
                                <Text color="gray.200" fontSize="md">
                                    Prazo de 48X
                                </Text>
                                <Switch colorScheme="green" defaultIsChecked disabled />
                            </HStack>
                        </VStack>

                    </VStack>
                    <Button textSize="md" title="Solicitar serviço" />
                </VStack>
            </ScrollView>
        </SafeAreaView>
    );
}