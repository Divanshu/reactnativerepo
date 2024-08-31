import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResourcesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Language Resources</Text>
      <Text style={styles.content}>Audio clips, video lessons, and cultural notes...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
  },
});
