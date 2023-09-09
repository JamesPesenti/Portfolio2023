import { Pressable, StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Link, useRouter } from "expo-router"
import Pdf from "../components/JamesPesentiResume2023.pdf"
import { useNavigation } from '@react-navigation/native';

const LinkBar = () => {

  const router = useRouter()

  const navigation = useNavigation()

  return (
      <View style={styles.container}>
          <SimpleLineIcons name="trash" size={44} color="black" />
            <Pressable onPress={() => navigation.navigate("/projects")} style={styles.column}>
              <Entypo style={styles.icon} name="documents" size={30} color="white" /> 
                <Text style={styles.linkText}>Resume</Text>
            </Pressable>
          <Link href="https://github.com/JamesPesenti/Portfolio2023/blob/main/src/components/JamesPesentiResume2023.pdf" asChild>
            <Pressable style={styles.column}>
              <FontAwesome style={styles.icon} name="github" size={30} color="white" />
                <Text style={styles.linkText}>GitHub</Text>
            </Pressable>
          </Link>
          <Link href={Pdf} asChild>
            <Pressable style={styles.column}>
              <MaterialCommunityIcons style={styles.icon} name="mailbox-open-up-outline" size={30} color="white" />
                <Text style={styles.linkText}>Email</Text>
            </Pressable>
          </Link>
      </View>
  )
}

export default LinkBar

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      // left: 450,
      height: "10%",
      width: '83%',
      bottom: 35,
      backgroundColor: "black",
      opacity: 1,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      position: "absolute",
      gap: 40,
   },
   column: {
    flexDirection: 'column',
    right: 60,
    alignItems: "center",
    alignSelf: "center",
   },
   icon: {
    marginLeft: 0,
   },
   linkText: {
    color: "white",
   }
})