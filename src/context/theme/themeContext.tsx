import { ReactNode } from "react";
import { themes } from "./themeConstant";
import { useColorScheme } from "nativewind";
import { View } from "react-native";
import { useAppSelector } from "@/redux";



export default function ThemeProvider({ children }: { children: ReactNode }) {
    const { colorScheme } = useColorScheme();
    const { theme } = useAppSelector(state => state.app);
    return (
        <View style={themes[theme][colorScheme || 'light']} className="flex-1">
            {children}
        </View>
    )
}