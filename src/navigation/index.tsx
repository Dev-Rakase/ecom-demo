import { NavigationContainer } from "@react-navigation/native"
import { RootStackNavigator } from "./RootStackNavigator"
import { useAppSelector } from "@/redux"
import { OnboardingStackNavigator } from "./OnboardingStackNavigator"



export const AppNavigation = () => {
    const { onboarded } = useAppSelector(state => state.app);
    return (
        <NavigationContainer>
            {
                onboarded ? <RootStackNavigator /> : <OnboardingStackNavigator />
            }

        </NavigationContainer>
    )
}