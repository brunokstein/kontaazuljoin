import { useTheme, Heading, HStack } from 'native-base';
import { createMaterialTopTabNavigator, MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { OnGoing } from '@screens/tabScreens/OnGoing';
import { Order } from '@screens/tabScreens/Order';
import { Complete } from '@screens/tabScreens/Complete';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, User } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from './app.routes';

type TopTabRoutes = {
    order: undefined;
    ongoing: undefined;
    complete: undefined;
}

export type TopTabNavigatorRoutesProps = MaterialTopTabNavigationProp<TopTabRoutes>;

const { Navigator, Screen } = createMaterialTopTabNavigator<TopTabRoutes>();

export function TopTabRoutes() {
    const { colors, fontSizes, fonts } = useTheme();
    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleGoProfile() {
        navigation.navigate('profile');
    }

    function handleGoNotifications() {
        navigation.navigate('notifications');
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HStack px={6} justifyContent="space-between" alignItems="center" mt={6} mb={4}>
                <Heading
                    fontSize="lg"
                    color="white"
                >
                    Konta Azul JoinAds
                </Heading>
                <HStack>
                    <TouchableOpacity onPress={handleGoProfile}>
                        <User size={24} color={colors.white} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleGoNotifications}>
                        <Bell size={24} color={colors.white} style={{ marginLeft: 12 }} />
                    </TouchableOpacity>
                </HStack>
            </HStack>
            <Navigator screenOptions={{
                tabBarActiveTintColor: colors.green[500],
                tabBarInactiveTintColor: colors.gray[300],
                tabBarStyle: {
                    backgroundColor: colors.white,
                    borderRadius: 6
                },
                tabBarIndicatorStyle: {
                    backgroundColor: colors.green[500],
                    borderRadius: 8,
                    width: '31%',
                    left: "1%",
                },
                tabBarPressColor: colors.green[300]
            }}
            >
                <Screen
                    name="order"
                    component={Order}
                    options={{
                        tabBarLabel: "Serviços",
                        tabBarLabelStyle: {
                            textTransform: 'none',
                            fontFamily: fonts.heading,
                            fontSize: fontSizes.sm,
                            textAlign: "left"
                        }
                    }}
                />

                <Screen
                    name="ongoing"
                    component={OnGoing}
                    options={{
                        tabBarLabel: "Em análise",
                        tabBarLabelStyle: {
                            textTransform: 'none',
                            fontFamily: fonts.heading,
                            fontSize: fontSizes.sm,
                        }
                    }}
                />

                <Screen
                    name="complete"
                    component={Complete}
                    options={{
                        tabBarLabel: "Concluídos",
                        tabBarLabelStyle: {
                            textTransform: 'none',
                            fontFamily: fonts.heading,
                            fontSize: fontSizes.sm,
                        }
                    }}
                />
            </Navigator>
        </SafeAreaView>
    );

}