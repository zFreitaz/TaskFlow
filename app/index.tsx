import { Image, Text, View, Pressable, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { useState } from 'react';

export default function Home() {
    const [contador, setContador] =useState(0)

    function incrementando() {
       setContador(contador+1)
    }

    function decrementar(){
        if(contador > 0){
            setContador(contador -1)
        }
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text>CONTADOR</Text>
                    <Text style={{fontSize: 25}}>{contador}</Text>
                </View>
 
                <Button
                    title='+'
                    onPress={incrementando}
                />
                <Button
                    title='-'
                    onPress={decrementar}
                />
            </View>
        </SafeAreaView>
    );
}
