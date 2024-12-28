import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboarding } from '../screens';


const Stack = createNativeStackNavigator()

export const OnboardingStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='onboading' component={Onboarding} />
        </Stack.Navigator>
    )
}