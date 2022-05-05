import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useState, useRef} from 'react'
import { colors, parameters, title } from '../../global/styles';
import { Icon, Button, SocialIcon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import Swiper from "react-native-swiper";
// import food1 from "../../../assets/images/food1.jpg";
// import food2 from "";


export default function SignInWelcomeScreen (){
    return(
        <View style={{flex: 1,}}>
            <View style={{flex:3, justifyContent: "flex-start", alignItems: "center", paddingTop: 20}}>
                <Text style={{fontSize: 26, color:colors.buttons, fontWeight: "bold"}}>DISCOVER RESTAURANTS</Text>
                <Text style={{fontSize: 26, color:colors.buttons, fontWeight: "bold"}}>IN YOUR AREA</Text>
            </View>

            <View style={{flex: 4, justifyContent: "center"}}>
                <Swiper autoplay= {true}>
                        <View styles={styles.slide1}>
                            <Image 
                                source={{uri: "../../../assets/images/food1"}}
                                style={{height: "100%", width: "100%", resizeMode : 'contain'}}
                            />
                        </View>
                        <View styles={styles.slide2}>
                            <Image 
                                source={{uri: '../../../assets/images/food2'}}
                                style={{height: "100%", width: "100%", resizeMode : 'contain'}}
                            />
                        </View>
                        <View styles={styles.slide3}>
                            <Image 
                                source={{uri: '../../../assets/images/food3'}}
                                style={{height: "100%", width: "100%", resizeMode : 'contain'}}
                            />
                        </View>
                        <View styles={styles.slide3}>
                            <Image 
                                source={{uri: '../../../assets/images/food4'}}
                                style={{height: "100%", width: "100%", resizeMode : 'contain'}}
                            />
                        </View>
                    </Swiper> 
            </View>

            <View style={{flex: 4, justifyContent: "flex-end", marginBottom: 20}}>

            <View style={{marginHorizontal: 20, marginTop: 30}}>
                <Button 
                    title="SIGN IN"
                    buttonStyle={parameters.styledButton}
                    titleStyle={parameters.buttonTitle}
                />
                </View>
                <View style={{marginHorizontal: 20, marginTop: 20}}>
            <Button 
                title="Create your account"
                buttonStyle={styles.createButton}
                titleStyle={styles.createButtonTitle}
            />
        </View>
            </View>
        </View>
    )
};



const styles = StyleSheet.create({
    slide1:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#9dd6eb"
    },
slide2:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#9dd6eb"
},
    slide3:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#9dd6eb"
    },
    createButton: {
        backgroundColor: "white",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.buttons,
        height: 50,
        paddingHorizontal: 20
    },
    createButtonTitle: {
        color: colors.grey1,
        fontSize: 20,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3
    }

})