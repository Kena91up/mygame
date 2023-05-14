import { Text, StyleSheet } from 'react-native';

import color from '../../constants/color';

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: color.accent500,
    fontSize: 25,
  },
});