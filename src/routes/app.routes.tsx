import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TopTabRoutes } from './topTab.routes';
import { FirstRegistration } from '@screens/registrationPathScreens/FirstRegistration';
import { SecondRegistration } from '@screens/registrationPathScreens/SecondRegistration';
import { ThirdRegistration } from '@screens/registrationPathScreens/ThirdRegistration';
import { FourthRegistration } from '@screens/registrationPathScreens/FourthRegistration';
import { LoanValueRegister } from '@screens/servicesScreens/LoanValueRegister';
import { PropertyRegister } from '@screens/servicesScreens/PropertyRegister';
import { CarRegister } from '@screens/servicesScreens/CarRegister';
import { Profile } from '@screens/Profile';
import { Notifications } from '@screens/Notifications';
import { BankInformationsRegister } from '@screens/BankInformationsRegister';

type AppRoutes = {
    toptabroutes: undefined;
    firstregistration: undefined;
    secondregistration: undefined;
    thirdregistration: undefined;
    fourthregistration: undefined;
    loanvalueregister: undefined;
    propertyregister: undefined;
    carregister: undefined;
    profile: undefined;
    notifications: undefined;
    bankinformationsregister: undefined;
}

export type AppNavigatorRoutesProps = NativeStackNavigationProp<AppRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="toptabroutes"
                component={TopTabRoutes}
            />
            <Screen
                name="firstregistration"
                component={FirstRegistration}
            />
            <Screen
                name="secondregistration"
                component={SecondRegistration}
            />
            <Screen
                name="thirdregistration"
                component={ThirdRegistration}
            />
            <Screen
                name="fourthregistration"
                component={FourthRegistration}
            />
            <Screen
                name="loanvalueregister"
                component={LoanValueRegister}
            />
             <Screen
                name="propertyregister"
                component={PropertyRegister}
            />
             <Screen
                name="carregister"
                component={CarRegister}
            />
            <Screen
                name="profile"
                component={Profile}
            />
            <Screen
                name="notifications"
                component={Notifications}
            />
            <Screen
                name="bankinformationsregister"
                component={BankInformationsRegister}
            />
        </Navigator>
    );
}