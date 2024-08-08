import React from 'react'
import { Text } from "react-native";
import { styles } from '../Theme/appTheme';


interface Props {
    title:string;
}
   export const TitleComponente = ({title}:Props)=>{
    return (
        <Text style={styles.textTitulo}>{title}</Text>
    )
    
   }