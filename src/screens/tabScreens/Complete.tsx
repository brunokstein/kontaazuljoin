import { Center, Text } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

export function Complete() {
    return (
        <Center flex={1}>
            <Text color="white" fontFamily="heading" fontSize="lg">
               Nao tem nenhum serviço concluído.
            </Text>
        </Center>
    )
}