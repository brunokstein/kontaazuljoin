import { Center, Text } from "native-base";

export function OnGoing() {
    return (
        <Center flex={1} bgColor="gray.700">
            <Text color="white" fontFamily="heading" fontSize="lg">
               Nao tem nenhum servico em analise.
            </Text>
        </Center>
    )
}