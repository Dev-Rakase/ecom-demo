import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@/screens';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { cssInterop, remapProps } from 'nativewind';

type RootStackParamList = {
    home: undefined;
    profile: { userId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>()

interface IStack { headerBackground?: string, headerClass: string }

export const RootStack = ({ headerBackground }: IStack) => {
    const navigation = useNavigation<any>()
    return (
        <Stack.Navigator screenOptions={{
            headerRight: () => <Pressable onPress={() => navigation.navigate("profile")}><Ionicons name='person-circle' size={24} color="#fff" /></Pressable>,
            headerStyle: {
                backgroundColor: headerBackground,
            },
            headerTitleStyle: {
                color: "#fff"
            }
        }}>
            <Stack.Screen name='home' component={Home} options={{
                title: "Home"
            }} />
            <Stack.Screen name="profile" component={Home} options={{
                title: "Home"
            }} />
        </Stack.Navigator>
    )
}

cssInterop(RootStack, {
    headerClass: {
        target: false,
        nativeStyleToProp: {
            backgroundColor: "headerBackground"
        }
    }
})

export const RootStackNavigator = () => <RootStack headerClass="bg-primary" />