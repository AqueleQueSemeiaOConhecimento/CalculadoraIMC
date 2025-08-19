import { useState } from "react";
import { KeyboardTypeOptions, StyleSheet, TextInput, View } from "react-native";

type Props = {
    placeholder: string;
    keyboardType?: KeyboardTypeOptions;
    onChangeText: (text: string) => void;
    value?: string;
};

export default function Input({ placeholder, keyboardType, onChangeText, value }: Props) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={"#fff"}
                keyboardType={keyboardType}
                value={value}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChangeText={onChangeText}
                style={[
                    styles.inputStyle,
                    { 
                        borderColor: isFocused ? "#ff0000" : "#fff"
                    },
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        width: 220,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputStyle: {
        width: 220,
        height: 36,
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderWidth: 1,
        color: "#fff",
        borderRadius: 6,
        marginBottom: 10,
        padding: 8,
    },
});