import { Text, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"

export const Participant = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Nome do Participante</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}