import { useState } from "react";
import {View,Text, Button,Image, TouchableOpacity} from "react-native"
import { useNavigation } from "@react-navigation/native";
const logocar = require("../assets/car.png")
const calender = require("../assets/calendar.png")


export default function Firstpage(){
    const navigation = useNavigation();
    // const login()=>{
    //     navigate('/sospage')
    // }
    const [firstpagedata,setFirstPageData] = useState('')

    // const sospage2=()=>{
    //     navigation.navigate('sospage')
    // }
    return(
        <View style={{padding:40}}>
            <View style={{flex:1,backgroundColor:"white"}}>
                <View>
                <Button title="SOS" color={"red"}
                />
                <Image source={logocar}></Image>
                </View>
                <View style={{backgroundColor:"blue", alignItems:"center"}}>
                <TouchableOpacity >
                <Image source={logocar} style={{width:50,height:50,}}></Image>
                <Text style={{textAlign:"center"}}>Ambulance</Text>
                </TouchableOpacity>
                </View >

                <View style={{backgroundColor:"green", alignItems:"center", marginTop:10 }}>
                <TouchableOpacity >
                <Image source={calender} style={{width:50,height:50,}}></Image>
                <Text style={{textAlign:"center"}}>Advance Booking</Text>
                </TouchableOpacity>
                </View>
                </View>
                </View>

    
    )
}