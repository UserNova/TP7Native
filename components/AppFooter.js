import { StyleSheet, Text, View } from 'react-native';

export default function AppFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        All rights reserved © 2025
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
    paddingVertical: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    color: '#EDEFEE',
    fontStyle: 'italic',
  },
});
