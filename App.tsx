
import { View } from "react-native";
import "./global.css"
import { AppNavigation } from './navigation';
import { Provider } from "react-redux";
import { persistor, store } from "./redux";
import { PersistGate } from "redux-persist/integration/react";
import ThemeProvider from "./context/theme/themeContext";

export default function App() {
  return (
    <View className="flex-1">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            <AppNavigation />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </View>
  );
}

