import { View,Text, TouchableOpacity, ScrollView } from "react-native" 


 export default function Landingpage(){
    return(
        <ScrollView>
        <View>
            <View style={{margin:20,alignSelf:"stretch"}}>
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.16713480537!2d78.38921417377169!3d17.451712800951633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a9b5bb0a23a0f59%3A0xb2aa1b27fe3ba045!2sGenamplify%20Solutions%20Hub%20PVT%20LTD.!5e0!3m2!1sen!2sin!4v1708593171856!5m2!1sen!2sin" width="400" height="500" style={{border:0,color:"green"}}></iframe>
    
         </View>
         <span style={{border:"solid" ,borderWidth:1,borderRadius:20,width:"83%",textAlign:"center",marginLeft:25}}>
         <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-search" viewBox="0 0 14 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
        <input type="search" placeholder="Search here" style={{ border:"none", height:30,maxWidth:1000,paddingLeft:30}}/>
        
</span>
<ScrollView>
        <View style={{paddingLeft:20,gap:5,backgroundColor:"lightblue"}}>
           <View style={{width:"83%",paddingLeft:30}}>
            <Text style={{fontWeight:"bold",fontSize:20}}>Usha Mullapudi Cardiac Center</Text>
            <Text>Gajulasahfnhkj,Serposo,Vahanaganj Nagar,Gajultaramana,Heramabad</Text>
           </View>
           <View style={{width:"83%",paddingLeft:30}}>
            <Text style={{fontWeight:"bold",fontSize:20}}>Guru Nanank Hospital</Text> 
            <Text>Gurunanak Road,Roadbahudur,Malli Nagar,Kranthipur,Tanimanjandu</Text>
           </View>
           <View style={{width:"83%",paddingLeft:30}}>
            <Text style={{fontWeight:"bold",fontSize:20}}>Hari Nanank Hospital</Text>
            <Text>Hurunanak Road,Roadbahudur,MaliNagar,Kranthipur,Tanimanjandu</Text>
           </View>
           <View style={{width:"83%",paddingLeft:30}}>
            <Text style={{fontWeight:"bold",fontSize:20}}>Usha Mullapudi Cardiac Center</Text>
            <Text>Gajulasahfnhkj,Serposo,Vahanaganj Nagar,Gajultaramana,Heramabad</Text>
           </View>
           </View>
           </ScrollView>
        </View>
        </ScrollView>
    )
 }