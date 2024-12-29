
import "../global.css"
import { Text, View } from "react-native";
import { AppNavigation } from '@/navigation';
import { Provider } from "react-redux";
import { persistor, store } from "@/redux";
import { PersistGate } from "redux-persist/integration/react";
import ThemeProvider from "@/context/theme/themeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

export default function App() {
  return (
    <View className="flex-1">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider>
              <AppNavigation />
            </ThemeProvider>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </View>
  );
}

