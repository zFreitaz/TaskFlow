import { Image, Pressable, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { useState } from 'react';
import { router } from 'expo-router';
 
export default function Home() {
    const [iniciado, setIniciado] = useState(false);
 
    function iniciarAplicacao() {
        setIniciado(true);
        router.push("/tarefas")
    }
 
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image
                        source={require("../assets/images/logo.png")}
                        style={styles.logo}
                        resizeMode='contain'
                    />
                    {iniciado ? (
                        <Text style={styles.titulo}>FlowTask</Text>
                    ) : (
                        <Text style={styles.titulo}>TaskFlow</Text>
                    )}
                   
 
                   
                    {iniciado ? (
                        <Text style={styles.descricao}>
                            Organize sua tarefas de forma simples!
                        </Text>
                    ) : (
                        <Text style={styles.descricao}>
                            Organize sua tarefas de forma simples
                        </Text>
                    )}
                   
                
                    <Pressable
                        onPress={iniciarAplicacao}
                        style={({ pressed }) => [styles.botao,
                        pressed && styles.botaoPressionado
                        ]}
                    >
 
                        {({ pressed }) => (
                            <Text style={styles.textoBotao}>
                                {iniciado ? "Carregando" : "Iniciar"}
                            </Text>
                        )}
 

                    </Pressable>
                    <Button
                        title='Configurações'
                        onPress={()=>router.push("/configuracoes")}
                    />

                </View>
            </View>
        </SafeAreaView>
    );
}