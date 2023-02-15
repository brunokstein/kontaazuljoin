import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { HStack, Progress, ScrollView, Text, VStack, useTheme } from "native-base";
import { Bank, Car, CaretCircleRight, FileText, House } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export function Order() {
    const { colors } = useTheme();
    const navigation = useNavigation<AppNavigatorRoutesProps>()

    function handleLoanValueRequest() {
        navigation.navigate('loanvalueregister');
    }

    function handlePropertyRequest() {
        navigation.navigate('propertyregister');
    }

    function handleCarRequest() {
        navigation.navigate('carregister');
    }

    function handleRequiereBankInformations() {
        navigation.navigate('bankinformationsregister');
    }

    function handleContinueRegister() {
        navigation.navigate('firstregistration');
    }

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <VStack flex={1} px={4}>
                <VStack flex={1} mt={6}>
                    <TouchableOpacity onPress={handlePropertyRequest}>
                        <HStack alignItems="center" backgroundColor="white" borderRadius={8} px={4} py={2} >
                            <House size={20} color={colors.green[500]} />
                            <Text px={2} flex={1}>
                                Empréstimo para Imóvel
                            </Text>
                            <CaretCircleRight size={24} color={colors.green[500]} />
                        </HStack>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleCarRequest}>
                        <HStack alignItems="center" backgroundColor="white" borderRadius={8} px={4} py={2} mt={2}>
                            <Car size={20} color={colors.green[500]} />
                            <Text px={2} flex={1}>
                                Empréstimo para Carro (REFIN)
                            </Text>
                            <CaretCircleRight size={24} color={colors.green[500]} />
                        </HStack>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleLoanValueRequest}>
                        <HStack alignItems="center" backgroundColor="white" borderRadius={8} px={4} py={2} mt={2}>
                            <FileText size={20} color={colors.green[500]} />
                            <Text px={2} flex={1}>
                                Auxílio Brasil
                            </Text>
                            <CaretCircleRight size={24} color={colors.green[500]} />
                        </HStack>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleRequiereBankInformations}>
                        <HStack alignItems="center" backgroundColor="white" borderRadius={8} px={4} py={2} mt={2}>
                            <Bank size={20} color={colors.green[500]} />
                            <Text px={2} flex={1}>
                                Informações Bancárias
                            </Text>
                            <CaretCircleRight size={24} color={colors.green[500]} />
                        </HStack>
                    </TouchableOpacity>

                </VStack>
                <Text
                    fontSize="lg"
                    fontFamily="heading"
                    color="white"
                    letterSpacing="xs"
                    mb={2}
                >
                    Continue para liberar mais serviços!
                </Text>
                <Progress bg="gray.100" _filledTrack={{
                    bg: "green.500"
                }} value={40}
                />
                <Text
                    fontSize="sm"
                    fontFamily="body"
                    color="white"
                    alignSelf="center"
                    my={2}
                >
                    40% do perfil completo
                </Text>
                <Button title="Continuar cadastro" mb={4} onPress={handleContinueRegister} variant="outline" />
            </VStack>
        </ScrollView>

    )
}

//car, house, caret-circle-right, file-text