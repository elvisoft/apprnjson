//import AsyncStorage from '@react-native-async-storage/async-storage';
import { Md5 } from 'ts-md5';

export async function apiLoginUser (email:string, password:string) {
  let idxemail:number=-1;
  let idxpass:number=-1; 
  let iduser:number=-1;
  const url="https://sielconapidev.onrender.com/users";
  let result=await fetch(url);
  let resultnew=await result.json(); 
  let itemdata:any;
  console.log('result1: ',resultnew);
   
  resultnew.forEach((item:any) => {
    const myJSON = JSON.stringify(item);    
    idxemail=myJSON.indexOf(email);
    const passencrypt=Md5.hashStr(password);
    idxpass=myJSON.indexOf(passencrypt);

    if(idxemail!=-1 && idxpass!=-1){
      iduser=item.id; 
      itemdata=item;         
      return
    }              
  });

  const jsonValue = JSON.stringify(itemdata);
  console.log('jsonbalue: ',jsonValue)
  console.log('itemdata: ',itemdata)
  //await AsyncStorage.setItem('userlogin', jsonValue); 

  return iduser;                   
}