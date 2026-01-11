import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';

export default function LoginScreen() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome</Text>
      <Text style={styles.regularText}>Login to continue</Text>

      <TextInput
        style={styles.inputBox}
        value={email}
        onChangeText={onChangeEmail}
        placeholder="Email"
        placeholderTextColor="#999999"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.inputBox}
        value={password}
        onChangeText={onChangePassword}
        placeholder="Password"
        placeholderTextColor="#999999"
        secureTextEntry={true}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  regularText: {
    fontSize: 22,
    paddingHorizontal: 20,
    marginBottom: 20,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBox: {
    height: 44,
    marginHorizontal: 20,
    marginVertical: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#EDEFEE',
    borderRadius: 8,
    fontSize: 18,
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },
});
