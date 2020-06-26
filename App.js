import React from 'react';
import {view, Text} from 'react-native';


class baklava extends React.Component{



  render(){
    
    console.log("--------------baklava modeli---------------")
    const boyut=20;
    const satirlar=[];
    
    for(let i=0; i<=boyut; i++){
      satirlar[i]= '';
      for(let j=0; j<=boyut-i; j++)  satirlar[i]+=' ';
      for(let j=0; j<=2*i; j++) satirlar[i]+='*';
    }
    
    satirlar.forEach(s => console.log(s));
    const tersten=satirlar.reverse();
    tersten.shift();//dizinin ilk elemanını silmek için
    tersten.forEach(s => console.log(s));
    //let dizi=satirlar.concat(tersten);
    // dizi.forEach(s => console.log(s));
    console.log("--------------baklava modeli---------------")


  return <Text></Text>;  
  }

}

export default baklava;