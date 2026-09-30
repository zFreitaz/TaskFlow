import { Pressable, Text, StyleSheet } from "react-native";
 
interface BotaoProps{
    texto: string,
    onPress: () => void
}
 
export default function Botao({texto, onPress}:BotaoProps){
    return(
        <Pressable
        style={({ pressed }) => [styles.botao,
            pressed && styles.botaoPressionado
        ]}
        onPress={onPress}
        >
            <Text style={styles.texto}>{texto}</Text>
        </Pressable>
    )
}
 
const styles = StyleSheet.create({
    botao:{
        backgroundColor: '#2563EB',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 10
    },
    texto:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    botaoPressionado: {
        opacity: 0.8
    }
})