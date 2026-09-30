import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import Botao from "@/components/Botao";

export default function ExAula10() {
    const produtos = [
        { id: "1", nome: "Teclado", preco: 120 },
        { id: "2", nome: "Mouse", preco: 80 },
        { id: "3", nome: "Monitor", preco: 900 },
    ];
}