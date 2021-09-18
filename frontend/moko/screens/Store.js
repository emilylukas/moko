import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
  FlatList
} from 'react-native';

/*function fetchD() {
  fetch('http://ec2-13-57-28-56.us-west-1.compute.amazonaws.com:3000/tags', {
  method: 'GET' //Request Type 
  })
  .then((response) => response.json()) //If response is in json then in success
  .then((responseJson) =>  //Success 
    console.log(responseJson)
  )
  //If response is not in json then in error
  .catch((error) => { //Error 
    console.error(error);
  })
   
  <TouchableOpacity style={styles.btn} onPress={() => fetchD()}>
            <Text style={styles.btnText}>fetch</Text>
  </TouchableOpacity>
} */

const storeEmpty = false;  

function Store({ navigation }) {
  const { height } = Dimensions.get('window');
  if (storeEmpty) {
    return (
      <View style = {{backgroundColor: '#FFFFFF', height: height}}>
        <View style = {{flexDirection: 'row'}}> 
            <Text style={styles.name}>Store</Text>     
        </View> 
        <View style = {{flexDirection: 'column'}}>
            <Image style = {styles.image} source={require('../images/storeEmpty.png')}/> 
            <Text style = {styles.text1}>Become a vendor</Text>
            <Text style = {styles.text2}>Want to join your local market</Text>
            <Text style = {styles.text3}>community?</Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('UserStack')}>
                <Text style={styles.btnText}>Create your store</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
  else {
    return (
      <View style = {{flexDirection:'column', backgroundColor: '#FFFFFF', height: height}}>
        <View style = {{flexDirection: 'row', justifyContent: 'center'}}> 
            <Text style={styles.storeName}>Your Store Name</Text>
        </View>
        <TouchableOpacity style={styles.dotBtn} onPress={() => navigation.navigate('UserStack')}>
            <Text style={styles.dotBtnText}>+ Add Product</Text>
        </TouchableOpacity>
        <View style = {{flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 30}}> 
            <Text style={styles.tag}>Tag</Text>
        </View>
 
        <TouchableOpacity style = {{width: 50, height: 50, backgroundColor: 'green'}} onPress={() => navigation.navigate('StoreItem')}/>  
              

      </View>
    );
  }
}

const styles = StyleSheet.create({
    name: {
        marginTop: 20,
        marginLeft: 40,
        marginHorizontal: 10,
        fontFamily: 'Inter-Regular',
        fontSize: 40
    },
    image: {
        alignSelf: 'center',
        marginTop: 120,
        width: 300,
        height: 250
    },
    text1: {
        marginTop: 40,
        fontSize: 30,
        fontFamily: 'Inter-Bold',
        alignSelf: 'center'
    },
    text2: {
        marginTop: 20,
        fontSize: 20,
        fontFamily: 'Inter-Light',
        alignSelf: 'center'
    },
    text3: {
        fontSize: 20,
        fontFamily: 'Inter-Light',
        alignSelf: 'center'
    },
    btn:{
        height:55,
        alignItems:"center",
        justifyContent:"center",
        marginTop:50,
        backgroundColor:"#87B676",
        width: "70%",
        borderRadius:15,
        alignSelf: 'center',
        marginBottom: 20,
      },
      btnText: {
        height: 50,
        flex: 1,
        padding: 10,
        alignSelf: 'center',
        alignItems: "center",
        alignContent: 'center',
        color: 'white',
        fontSize: 20,
        fontFamily: 'Inter-Regular'
      }, 
      storeName:{
        textAlign: 'center',
        fontSize: 40, 
        marginTop: 20
      }, 
      dotBtn: {
        height:55,
        alignItems:"center",
        justifyContent:"center",
        marginTop: 50,
        width: "80%",
        borderRadius:15,
        borderWidth: 2, 
        borderColor: '#DC8433',
        borderStyle: 'dashed',
        alignSelf: 'center',
        marginBottom: 20,
      }, 
      dotBtnText:{
        height: 50,
        flex: 1,
        padding: 10,
        alignSelf: 'center',
        alignItems: "center",
        alignContent: 'center',
        color: '#DC8433',
        fontSize: 20,
        fontFamily: 'Inter-Regular'
      }, 
      tag: {
        marginTop: 20,
        fontSize: 25,
        
        color: '#4C6D41', 
        fontWeight: 'bold'
      }

});

export default Store;
