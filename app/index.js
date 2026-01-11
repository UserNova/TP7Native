import { StatusBar, StyleSheet, View } from 'react-native';

import AppFooter from './../components/AppFooter';
import AppHeader from './../components/AppHeader';
import LoginScreen from './../components/LoginScreen';
import WelcomeScreen from './../components/WelcomeScreen';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <AppHeader />
        <WelcomeScreen />
        <LoginScreen />
      </View>
      <AppFooter />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
});
