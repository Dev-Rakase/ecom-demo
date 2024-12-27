import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens';


const Stack = createNativeStackNavigator()

export const RootStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='home' component={Home} />
        </Stack.Navigator>
    )
}