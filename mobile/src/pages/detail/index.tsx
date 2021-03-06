import React from 'react'

import { View, StyleSheet, TouchableOpacity, Image, Text, SafeAreaView} from 'react-native'
import { Feather as Icon, FontAwesome } from  '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'


const Detail = () => {
    const navigation = useNavigation()

    //useEffect(() => {}, [])

    function handleNavigateBack() {
        navigation.goBack()
    }

    return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
        <TouchableOpacity onPress={handleNavigateBack}>
            <Icon name="arrow-left" size={20} color="#34cd79"/>
        </TouchableOpacity>

        <Image style={styles.pointImage} source={{ uri: "https://midias.agazeta.com.br/2020/03/17/pandemia-de-coronavirus-supermercados-amanhecem-lotados-em-vitoria-209185.jpeg"}} />
        <Text style={styles.pointName}>Mercado do Elton</Text>
        <Text style={styles.pointItems}>Lampada, oleo de cozinha</Text>
        <View style={styles.address}>
        <Text style={styles.addressTitle}>Endereço</Text>
        <Text style={styles.addressContent}>Anapolis, GO</Text>
        </View>
    </View>
    <View style={styles.footer}>
        <RectButton style={styles.button} onPress={()=> {}}>
            <FontAwesome name="whatsapp" size={20} color="#FFF" />
            <Text style={styles.buttonText}>whatsapp</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={()=> {}}>
            <Icon name="mail" size={20} color="#FFF" />
            <Text style={styles.buttonText}>Email</Text>
        </RectButton>
    </View> 
    </SafeAreaView>
    
    )
} 




const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
      paddingTop: 20,
    },
  
    pointImage: {
      width: '100%',
      height: 120,
      resizeMode: 'cover',
      borderRadius: 10,
      marginTop: 32,
    },
  
    pointName: {
      color: '#322153',
      fontSize: 28,
      fontFamily: 'Ubuntu_700Bold',
      marginTop: 24,
    },
  
    pointItems: {
      fontFamily: 'Roboto_400Regular',
      fontSize: 16,
      lineHeight: 24,
      marginTop: 8,
      color: '#6C6C80'
    },
  
    address: {
      marginTop: 32,
    },
    
    addressTitle: {
      color: '#322153',
      fontFamily: 'Roboto_500Medium',
      fontSize: 16,
    },
  
    addressContent: {
      fontFamily: 'Roboto_400Regular',
      lineHeight: 24,
      marginTop: 8,
      color: '#6C6C80'
    },
  
    footer: {
      borderTopWidth: StyleSheet.hairlineWidth,
      borderColor: '#999',
      paddingVertical: 20,
        paddingBottom:0,
      paddingHorizontal: 32,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    
    button: {
      width: '48%',
      backgroundColor: '#34CB79',
      borderRadius: 10,
      height: 50,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    buttonText: {
      marginLeft: 8,
      color: '#FFF',
      fontSize: 16,
      fontFamily: 'Roboto_500Medium',
    },
  });

export default Detail