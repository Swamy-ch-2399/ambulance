import { View,Text, TouchableOpacity } from "react-native";

export default function Sospage(){

    return(
        <View style={{alignSelf:"stretch",justifyContent:"center",alignItems:"center",flex:1}}>
            <TouchableOpacity style={{
                backgroundColor:"red",
                flex:1,alignItems:"center",
                width:"45%",
                padding:70,
                justifyContent:"center",
                borderRadius:500,
                marginTop:20}}>
                <Text style={{color:"white",fontWeight:"bold"}}>SOS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                backgroundColor:"green",
                flex:1,alignItems:"center",
                width:"45%",
                padding:20,
                justifyContent:"center",
                borderRadius:500,
                marginTop:20}}>
                <Text style={{color:"white",fontWeight:"bold"}}>Photo/Video</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                backgroundColor:"green",
                flex:1,alignItems:"center",
                width:"45%",
                padding:20,
                justifyContent:"center",
                borderRadius:500,
                marginTop:20}}>
                <Text style={{color:"white",fontWeight:"bold"}}>Location Sharing</Text>
            </TouchableOpacity>
            <View style={{margin:20,alignSelf:"stretch"}}>
        
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.16713480537!2d78.38921417377169!3d17.451712800951633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a9b5bb0a23a0f59%3A0xb2aa1b27fe3ba045!2sGenamplify%20Solutions%20Hub%20PVT%20LTD.!5e0!3m2!1sen!2sin!4v1708593171856!5m2!1sen!2sin" width="400" height="340" style={{border:0,color:"green"}}></iframe>
       
            </View>
        </View>
    )
}
