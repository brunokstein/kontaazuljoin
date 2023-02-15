import { Box, Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';

type Props = IButtonProps & {
    title: string;
    variant?: 'solid' | 'outline';
}

export function Button({ title, variant = 'solid', ...rest }: Props) {
    return (
        <TouchableOpacity activeOpacity={0.5}>
            <Box bg={{
                linearGradient: {
                    colors: ['blue.300', 'blue.500'],
                    start: [0, 0],
                    end: [1, 0]
                }
            }} 
            w={280}
            px={2}
            py={1}
            rounded={8} 
            _text={{
                fontSize: 'md',
                fontFamily:"heading",
                color: 'white',
                textAlign: 'center'
            }}>
               Entrar
            </Box>
        </TouchableOpacity>
    );
}