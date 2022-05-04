import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState, useRef} from 'react'
import Header from '../../components/Header';
import { colors, title } from '../../global/styles';
import { Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

export default function SignInScreen() {

    const [TextInput2Focussed, setTextInput2Focussed] = useState(false)

const TextInput1 = useRef(1)
const TextInput2 = useRef(2)

  return (
    <View style={styles.container}>
      <Header title="My Account" type="arrow-left" />
    <View style={{marginLeft: 20, marginTop: 10}}>
        <Text style={title}>Sign In</Text>
    </View>
   
    <View style={{marginTop: 10, alignItems: 'center',}}>
        <Text style={styles.text1}>Please enter the email and password</Text>
        <Text style={styles.text1}>registered with your account</Text>
    </View>




        <View style={{marginTop: 20}}>
    <TextInput 
    style={styles.TextInput1}
    placeholder="Email" 
    ref = {TextInput1}
    
    />
    </View>



    <View style={styles.TextInput2}>

        <Animatable.View animation={TextInput2Focussed?"" : "fadeInLeft"} duration={400}>
            <Icon 
                name="lock"
                iconStyle={{color: colors.grey3}}
                type= "material"
            />
        </Animatable.View > 


        <TextInput
        style={{width: '80%'}}
        placeholder= "password"
        ref={TextInput2}
        onFocus={()=> {
            setTextInput2Focussed(false)
        }}
        onBlur={()=>{
            setTextInput2Focussed(true)
        }}
                
            />

       
        <Animatable.View animation={TextInput2Focussed?"" : "fadeInLeft"} duration={400}>
        <Icon 
                name="visibility-off"
                iconStyle={{color: colors.grey3}}
                style={{marginRight: 5}}
                type= "material"
            />
        </Animatable.View> 
    </View>



    </View>
  )
}










const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text1:{
        color: colors.grey3,
        fontSize: 16,
    },
    TextInput1:{
        borderWidth: 1,
        borderColor: '#86939e',
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft: 15,
        height: 50,
    },
    TextInput2: {
        borderWidth:1,
        borderRadius: 12,
        marginHorizontal: 20,
        borderColor: "#86939e",
        flexDirection: "row",
        height: 50,
        paddingLeft: 15,

        justifyContent: "space-between",
        alignContent: "center",
        alignItems: 'center',
    }

})