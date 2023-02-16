import { useTheme, Box } from 'native-base';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { Loading } from '@components/Loading';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

export function Routes() {
    const { colors } = useTheme();
    //const { user, isLoadingUserStorageData } = useAuth();

    const theme = DefaultTheme;
    theme.colors.background = colors.white;

    /* if (isLoadingUserStorageData) {
        return <Loading />
    } */

    return (
        <Box flex={1} bg="gray.700">
            <NavigationContainer theme={theme}>
                <AuthRoutes />
            </NavigationContainer>
        </Box>
    );
}

//{user.id ? <AppRoutes /> : <AuthRoutes />}