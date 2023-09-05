import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.nameTitle}>I'm James Pesenti</Text>
      <Text style={styles.title}>a Software Developer building mobile apps and websites</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292D3E',
   //  color: "#A6ACCD",
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50
  },
  nameTitle: {
   color: "#34324a",
   letterSpacing: .5,
   fontWeight: 'bold',
   fontSize: 25
  },
  title: {
   fontWeight: 'bold',
   fontSize: 25
  }
});
