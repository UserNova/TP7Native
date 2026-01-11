import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';

export default function WelcomeScreen() {
  const [firstName, onChangeFirstName] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to My Rania App</Text>

      <Text style={styles.regularText}>
        This is a simple demo application.
        Please enter your first name below.
      </Text>

      <TextInput
        style={styles.inputBox}
        value={firstName}
        onChangeText={onChangeFirstName}
        placeholder="First Name"
        placeholderTextColor="#999999"
      />

      {firstName !== '' && (
        <Text style={styles.previewText}>
          Hello {firstName} 👋
        </Text>
      )}
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
  previewText: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    color: '#F4CE14',
  },
});
