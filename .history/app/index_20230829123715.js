import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
      <>
        <Image
         style={styles.image}
         source={{ uri: "https://wallpaperaccess.com/full/3277616.jpg" }}
        />
         <View style={styles.container}>
            <Text style={styles.nameTitle}>I'm James Pesenti</Text>
            <Text style={styles.title}>a Software Developer building mobile apps and websites</Text>
               <StatusBar style="auto" />
         </View>
      </>
  );
}

const styles = StyleSheet.create({
  image: {
   flex: 1, 
   bottom: 50,
   width: "auto", 
   height: 'auto', 
   resizeMode: "contain"
  },
  container: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#292D3E',
   //  color: "#A6ACCD",
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50
  },
  nameTitle: {
   color: "#c5c8d9",
   letterSpacing: .5,
   fontWeight: 'bold',
   fontSize: 25
  },
  title: {
   color: "#676E95",
   fontWeight: 'bold',
   fontSize: 25
  }
});
