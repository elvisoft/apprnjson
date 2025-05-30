import { StyleSheet, View, Image, TextInput, KeyboardType } from 'react-native';

interface Props {
    placeholder: string,
    value: string,
    onChangeText: (text: string) => void,
    keyboardType?: KeyboardType,
    icon: any,
    secureTextEntry?: boolean
}

const DefaultTextInput = ({ 
    placeholder, 
    value, 
    onChangeText, 
    keyboardType = 'default',
    icon,
    secureTextEntry = false
}: Props) => {
    return (
    <View style={styles.containerTextInput}>

        <Image 
            style={styles.textInputIcon}
            source={ icon }
        />

        <TextInput 
            style={styles.textInput}
            placeholder={placeholder}
            placeholderTextColor='black'
            value={ value }
            onChangeText={ text => onChangeText(text) }
            keyboardType={ keyboardType }
            secureTextEntry={ secureTextEntry }
        />

    </View>
    )
}

const styles = StyleSheet.create({
    containerTextInput: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
      },
      textInput: {
        width: '90%',
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        color: 'black',
        fontSize: 18,
      },
      textInputIcon: {
        width: 25,
        height: 25,
        marginRight: 15,
      },
})

export default DefaultTextInput;