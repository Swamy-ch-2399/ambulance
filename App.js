import React from "react"
import Firstpage from "./components/firstpage";
import Sospage from "./components/sospage";
import Landingpage from "./components/landingpage";
import BookNow from "./components/BookNow";
import { View } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App(){


    return(
        // <View style={{flex:1,justifyContent:"flex-start",alignItems:"center"}}>
            /* <Firstpage/> */
            /* <Sospage/> */
            /* <Landingpage/> */
            // <BookNow/>
        // </View>

        // <NavigationContainer>
        // <Stack.Navigator>
        //     <Stack.Screen name="Firstpage" component={Firstpage}/>
        //     <Stack.Screen name="Sospage" component={Sospage}/>
        // </Stack.Navigator>
        // </NavigationContainer>

        <NavigationContainer>
            <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={Landingpage} />
      </Stack.Navigator>
        </NavigationContainer>
    
    )
}