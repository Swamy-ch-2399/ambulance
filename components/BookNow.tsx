import { useState } from "react";
import { View,Text, TouchableOpacity, ScrollView,StyleSheet,TextInput,Image } from "react-native" 
const advance = require("E:\Node\Wheels\Patient\assets\Basic.png")
const basic = require("./assets/Basic.png")


 export default function BookNow(){
    const [location, setLocation] = useState("");
    const [destination, setDestination] = useState("");
    return(
<View style={{ flex: 1 }}>
      <View style={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.16713480537!2d78.38921417377169!3d17.451712800951633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a9b5bb0a23a0f59%3A0xb2aa1b27fe3ba045!2sGenamplify%20Solutions%20Hub%20PVT%20LTD.!5e0!3m2!1sen!2sin!4v1708593171856!5m2!1sen!2sin"
          width="400"
          height="500"
          style={{ border: 0 }}
        ></iframe>
        <TouchableOpacity
          onPress={() => {

          }}
          style={styles.backButton}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
        </TouchableOpacity>
        <View style={styles.searchContainer}>
        <TextInput
          placeholder="Your location"
          value={location}
          onChangeText={(text) => setLocation(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Destination"
          value={destination}
          onChangeText={(text) => setDestination(text)}
          style={styles.input}
        />
      </View>
      </View>
          <Image source={advance}></Image>
          <Image source={basic}></Image>
    </View>

    )
 }const styles = StyleSheet.create({
    mapContainer: {
      flex: 1,
      position: "relative",
    },
    backButton: {
      position: "absolute",
      top: 20,
      left: 20,
      zIndex: 1,
    },
    searchContainer: {
        paddingHorizontal: 20,
        paddingTop: 10,
      },
      input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginBottom: 10,
        // marginTop:10
      }
  });