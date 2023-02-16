import { BackButton } from "@components/BackButton";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Center, HStack, Heading, ScrollView, Text, VStack } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";
import * as yup from 'yup';

type FormDataProps = {
    loanValue: string;
}

const loanValueSchema = yup.object({
    loanValue: yup.string().required('Informe um valor de empréstimo')
})

export function LoanValueRegister() {

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        resolver: yupResolver(loanValueSchema)
    });

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
                    <HStack alignItems="center" mb={6}>
                        <BackButton onPress={handleGoBack} />
                        <Heading color="white" fontSize="xl" ml={6}>
                            Qual o valor do {"\n"}empréstimo desejado?
                        </Heading>
                    </HStack>
                    <VStack flex={1}>
                        <Controller
                            control={control}
                            name="loanValue"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    title="Valor do empréstimo"
                                    onChangeText={onChange}
                                    keyboardType="number-pad"
                                    value={value}
                                    errorMessage={errors.loanValue?.message}
                                />
                            )}
                        />
                    </VStack>
                    <Button textSize="md" title="Solicitar serviço" />
                </VStack>
            </ScrollView>
        </SafeAreaView>
    );
}