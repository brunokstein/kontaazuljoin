import { useTheme, Heading, HStack, Image } from 'native-base';
import { createMaterialTopTabNavigator, MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { OnGoing } from '@screens/tabScreens/OnGoing';
import { Order } from '@screens/tabScreens/Order';
import { Complete } from '@screens/tabScreens/Complete';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, User } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from './app.routes';
import logoPng from '@assets/logo.png';

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
            <HStack bg="white" justifyContent="space-between" alignItems="center" p={6}>
                <HStack alignItems="center" space={2}>
                    <Image source={logoPng} w={10} h={8} resizeMode="contain" alt='' />
                    <Heading
                        fontSize="lg"
                        color="gray.700"
                    >
                        Konta Azul JoinAds
                    </Heading>
                </HStack>
                <HStack>
                    <TouchableOpacity onPress={handleGoProfile}>
                        <User size={24} color={colors.gray[700]} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleGoNotifications}>
                        <Bell size={24} color={colors.gray[700]} style={{ marginLeft: 12, marginRight: 8 }} />
                    </TouchableOpacity>
                </HStack>
            </HStack>
            <Navigator screenOptions={{
                tabBarActiveTintColor: colors.blue[400],
                tabBarInactiveTintColor: colors.gray[300],
                tabBarStyle: {
                    backgroundColor: colors.gray[700],
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                },
                tabBarIndicatorStyle: {
                    backgroundColor: colors.blue[900],
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