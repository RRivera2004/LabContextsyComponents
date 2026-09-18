import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './src/components/context/ThemeContext';
import TabsNavigator from './src/components/navigation/TabsNavigator';


export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <TabsNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
