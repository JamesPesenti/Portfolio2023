import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
      <>
        <ScrollView contentContainerStyle={styles.screenContainer}>
         <Image
            style={styles.image}
            source={{ uri: "https://wallpaperaccess.com/full/3277616.jpg" }}
         />
         <View style={styles.container}>
            <Text style={styles.nameTitle}>I'm James Pesenti</Text>
            <Text style={styles.title}>a Software Developer building mobile apps and websites</Text>
               <StatusBar style="auto" />
         </View>
        </ScrollView>
      </>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
   flex: 1, 
   backgroundColor: '#292D3E',
  },
  image: {
   flex: 1, 
   bottom: 0,
   width: "100%", 
   height: 'auto', 
   resizeMode: "contain",
   borderRadius: 10,
   borderWidth: 5,
   borderColor: "white"
  },
  container: {
    top: 100,
    flex: 1,
    position: 'absolute',
   //  color: "#A6ACCD",
    alignItems: 'center',
    alignSelf: 'center',
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
   color: "#c5c8d9",
   // color: "#676E95",
   fontWeight: 'bold',
   fontSize: 25
  }
});
