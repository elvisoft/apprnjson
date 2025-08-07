import DefaultRoundedButton from "@/components/DefaultRoundedButton";
import DefaultTextInput from "@/components/DefaultTextInput";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Md5 } from "ts-md5";

export default function RegisterScreen() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const registerNow = async () => {
        if (email === '' || password === '' || confirmPassword === '' || nombre === '') {
        alert('Debe rellenar todos los campos!!');
        } else if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden!!');
        } else {
            const passmd5= Md5.hashStr(password);
            fetch("https://sielconapidev.onrender.com/users", {
            method: "POST",
            body: JSON.stringify({
           "name": nombre,
            "password": passmd5,
            "email": email,
            "pin": "1112",
            "token": "VnrrNoOO3gioKaO04oJWj#!fYRcB#5I%"
            }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then(response => response.json())
        .then(data => {
          //setUsers([...users, data])
          setNombre("")
          setEmail("")
          setPassword("")
          setConfirmPassword("")
         alert('Usuario registrado correctamente!!');
          return true; // Indicate success
        })
                    
        }
    };
    
    return (
        <View style={styles.container}>
        <View style={styles.form}>
            <Text style={styles.title}>Registro de Usuario</Text>
            <DefaultTextInput
            placeholder='Nombre y Apellido'
            onChangeText={setNombre}
            value={nombre}
            />          
            <DefaultTextInput
            placeholder='Correo electrónico'
            onChangeText={setEmail}
            value={email}
            keyboardType='email-address'
            />
            <DefaultTextInput
            placeholder='Contraseña'
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
            />
            <DefaultTextInput
            placeholder='Confirmar Contraseña'
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            secureTextEntry={true}
            />
            <DefaultRoundedButton
            text='REGISTRARSE'
            onPress={() => registerNow()}
            backgroundColor='#ff7b25'
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
    height: 480,
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