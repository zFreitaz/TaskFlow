import { Text, View, Button } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Contador(){
    const [contador, setContador] = useState(0)
    const [iniciado, setIniciado] = useState(false)

    useEffect(() =>{
        console.log("O contador foi alterado para: ", contador)
    },[contador])

    useEffect(() =>{
        setTimeout(() => {
            setIniciado(true)
        }, 3000)
    },[])

    return(
        <SafeAreaView style={{flex:1}}>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            {iniciado ? (
                <View></View>
            ) : (
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text>Carregando Dados</Text>
                </View>
            )}
            <Text style={{fontSize:30}}>CONTADOR</Text>
            <Text style={{fontSize:25}}>{contador}</Text>
        </View>

        <Button
            title="-"
            onPress={()=>{setContador(contador-1)}}

        />

        <Button
            title="+"
            onPress={()=>{setContador(contador+1)}}
        />
        </SafeAreaView>
    )
}