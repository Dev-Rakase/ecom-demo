import { NavigationContainer } from "@react-navigation/native"
import { RootStackNavigator } from "./RootStackNavigator"

export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <RootStackNavigator />
        </NavigationContainer>
    )
}