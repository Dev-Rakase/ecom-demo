
import { View } from "react-native";
import "./global.css"
import { AppNavigation } from './navigation';

export default function App() {
  return (
    <View className="flex-1">
      <AppNavigation />
    </View>
  );
}

