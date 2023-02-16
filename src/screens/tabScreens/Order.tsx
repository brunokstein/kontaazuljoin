import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import linearGradient from "expo-linear-gradient";
import { Box, HStack, Progress, ScrollView, Text, VStack, View, useTheme, Pressable, } from "native-base";
import { ArrowCircleRight, Bank, Car, FileText, House } from "phosphor-react-native";
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
            <VStack flex={1} py={4} bg="gray.700">
                <VStack flex={1} mt={6}>
                    <TouchableOpacity onPress={handlePropertyRequest}>
                        <HStack alignItems="center" backgroundColor="white" px={8} py={2} >
                            <House size={26} color={colors.gray[700]} />
                            <Text px={2} flex={1} fontSize="sm" fontFamily="body" color="black">
                                Empréstimo para Imóvel
                            </Text>
                            <ArrowCircleRight size={24} color={colors.gray[700]} />
                        </HStack>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleCarRequest}>
                        <HStack alignItems="center" backgroundColor="white" px={8} py={2} mt={2}>
                            <Car size={26} color={colors.gray[700]} />
                            <Text px={2} flex={1} fontSize="sm" fontFamily="body" color="black">
                                Empréstimo para Carro (REFIN)
                            </Text>
                            <ArrowCircleRight size={24} color={colors.gray[700]} />
                        </HStack>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleLoanValueRequest}>
                        <HStack alignItems="center" backgroundColor="white" px={8} py={2} mt={2}>
                            <FileText size={26} color={colors.gray[700]} />
                            <Text px={2} flex={1} fontSize="sm" fontFamily="body" color="black">
                                Auxílio Brasil
                            </Text>
                            <ArrowCircleRight size={24} color={colors.gray[700]} />
                        </HStack>
                    </TouchableOpacity>

                    <Box>
                        <Pressable onPress={handleRequiereBankInformations}>
                            {({
                                isPressed
                            }) => (
                                <Box bg={isPressed ? {
                                    linearGradient: {
                                        colors: ['blue.300', 'blue.500'],
                                        start: [0, 0],
                                        end: [1, 0]
                                    }
                                } : "white"}
                                    flexDirection="row"
                                    px={8}
                                    py={2}
                                    mt={2}
                                >
                                    <Bank size={26} color={isPressed ? colors.white : colors.gray[700]} />
                                    <Text px={2} flex={1} fontSize="sm" fontFamily="body" color={isPressed ? colors.white : colors.gray[700]}>
                                        Informações Bancárias
                                    </Text>
                                    <ArrowCircleRight size={24} color={isPressed ? colors.white : colors.gray[700]} />
                                </Box>
                            )}
                        </Pressable>
                    </Box>
                </VStack>

                <VStack px={6}>
                    <Text
                        fontSize="lg"
                        fontFamily="heading"
                        color="white"
                        letterSpacing="xs"
                        mb={2}
                    >
                        Continue para liberar mais serviços!
                    </Text>

                    <Progress
                        _filledTrack={{
                            bg: 'blue.500',
                        }}
                        value={40}
                    />

                    <HStack alignItems="center" justifyContent="space-between" my={2}>
                        <Text
                            fontSize="xs"
                            fontFamily="body"
                            color="white"
                            alignSelf="center"
                            my={2}
                        >
                            40% do perfil completo
                        </Text>
                        <Button
                            title="Continuar cadastro"
                            onPress={handleContinueRegister}
                            textSize="xs"
                            width={180}
                        />
                    </HStack>
                </VStack>
            </VStack>
        </ScrollView>

    )
}

//car, house, caret-circle-right, file-text