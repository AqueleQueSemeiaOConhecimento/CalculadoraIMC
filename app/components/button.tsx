import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
    label: string;
    onPress?: () => void;
};

export default function Button({ label, onPress }: Props) {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <View style={styles.buttonContainer}>
            <Pressable 
                style={[styles.button, { backgroundColor: isPressed ? '#ff0000' : '#05b82cff' }]} 
                onPress={onPress}
                onPressIn={() => setIsPressed(true)} 
                onPressOut={() => setIsPressed(false)}
            >
                <MaterialIcons name="fitness-center" size={24} color="black" style={styles.buttonIcon} />
                <Text style={styles.buttonLabel}>
                    {label}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 190,
        height: 42,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: '#fff',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },
});