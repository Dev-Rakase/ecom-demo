
import { View } from "react-native";
import "./global.css"
import { AppNavigation } from './navigation';
import { Provider } from "react-redux";
import { persistor, store } from "./redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <View className="flex-1">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigation />
        </PersistGate>
      </Provider>
    </View>
  );
}

