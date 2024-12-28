import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '@/screens';

type AuthStackParamList = {
    login: undefined;
    register: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>()


export const AuthStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='login' component={Login} />

            {/* more auth route, register, forget-password */}

        </Stack.Navigator>
    )
}


