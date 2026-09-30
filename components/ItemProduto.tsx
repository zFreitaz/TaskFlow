import { View, Text, StyleSheet } from "react-native";

interface ProdutoProps{
    nome: string
    preco: string
}

export default function ItemProduto({nome, preco}: ProdutoProps){
    return(
        <View>
            <Text>{nome} {"-->"}  R$ {preco} </Text>
        </View>
    )
}