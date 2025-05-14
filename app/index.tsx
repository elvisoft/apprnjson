import { StyleSheet, Text, View } from 'react-native';

import DefaultRoundedButton from '@/components/DefaultRoundedButton';
import DefaultTextInput from '@/components/DefaultTextInput';
import { apiLoginUser } from '@/services/apiLoginUser';
import { router } from 'expo-router';
import { useState } from 'react';

export default function IndexScreen() {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')  
  
   const loginnow=async()=>{           
    if(email=='' || password==''){
      alert('Debe rellenar los campos!!');
    }
    else{
      const iduser= await apiLoginUser(email,password);    
      
      if (iduser!=-1) {

        router.push('/(tabs)')
        
      }                  
        //router.navigate('/dashboard')         
      else 
        alert('Usuario y contraseña incorrectos!!!');
      }                                       
   
    };

  return (
          
      <View style={styles.container}>
            <View style={styles.form}>
          <Text style={styles.title}>Inicia Sesion</Text>
          <DefaultTextInput
          icon={require('../assets/images/emailnew.png')}
          placeholder='Correo electronico'
          onChangeText={setemail}
          value={email}
          keyboardType='email-address'
        />

      <DefaultTextInput
          icon={require('../assets/images/contrasenia.png')}
          placeholder='Contraseña'
          onChangeText={setpassword}
          value={password}
          secureTextEntry={true}
        />

      <DefaultRoundedButton
          text='INICIAR SESION'
          onPress={() => loginnow()}     
          backgroundColor='#034f84'               
      />
        </View>
      </View>
     
      
       
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#034f84',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  form:{
    width: '80%',
    height: 400,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 20,
    shadowColor: '#000',
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ff7b25',
    marginBottom: 20,
    textAlign: 'center',
  }
});
