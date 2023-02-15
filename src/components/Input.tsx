import { LinearGradient } from 'expo-linear-gradient';
import { Input as NativeBaseInput, IInputProps, FormControl, Text, useTheme } from 'native-base';

type Props = IInputProps & {
    title: string;
    errorMessage?: string | null;
};

export function Input({ title, errorMessage = null, isInvalid, ...rest }: Props) {

    const invalid = !!errorMessage || isInvalid;
    const { colors } = useTheme()

    return (
        <FormControl isInvalid={invalid} mb={4}>
            <Text
                fontSize="md"
                fontFamily="heading"
                color="white"
            >
                {title}
            </Text>
            <LinearGradient
                colors={[colors.blue[300], colors.blue[500]]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ borderRadius: 30 }}
            >
                <NativeBaseInput
                    bg="gray.500"
                    h={10}
                    px={4}
                    borderRadius={12}
                    fontSize="md"
                    color="white"
                    bgColor="gray.500"
                    fontFamily="body"
                    borderWidth={1}
                    borderColor="gray.700"
                    borderBottomColor="white"
                    isInvalid={invalid}
                    _invalid={{
                        borderWidth: 1,
                        borderColor: "red.500"
                    }}
                    {...rest}
                />
            </LinearGradient>

            <FormControl.ErrorMessage _text={{ color: "red.500" }}>
                {errorMessage}
            </FormControl.ErrorMessage>
        </FormControl>
    );
}