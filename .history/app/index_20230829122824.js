import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
      <>
        <ImageBackground 
         style={{flex: 1, width: '100%', height: '500'}}
         source={{ uri: "https://wallpaperaccess.com/full/3277616.jpg" }}
        >
         <View style={styles.container}>
            <Text style={styles.nameTitle}>I'm James Pesenti</Text>
            <Text style={styles.title}>a Software Developer building mobile apps and websites</Text>
               <StatusBar style="auto" />
         </View>
        </ImageBackground>
      </>
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
