import { Box, Text } from 'native-base';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
    title: string;
    width?: number;
    textSize: string;
}

export function Button({ title, width, textSize, ...rest }: Props) {
    return (
        <TouchableOpacity activeOpacity={0.5} {...rest}>
            <Box bg={{
                linearGradient: {
                    colors: ['blue.300', 'blue.500'],
                    start: [0, 0],
                    end: [1, 0]
                }
            }}
                w={width}
                py={2}
                px={4}
                rounded={8}
            >
                <Text
                    fontSize={textSize}
                    fontFamily="heading"
                    color="white"
                    textAlign="center"
                >
                    {title}
                </Text>
            </Box>
        </TouchableOpacity>
    );
}