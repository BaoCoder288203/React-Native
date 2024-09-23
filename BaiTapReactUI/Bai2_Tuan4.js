import React, { useState } from 'react';
import { View, Text, TextInput, Button, CheckBox, StyleSheet } from 'react-native';

const App = () => {
  const [length, setLength] = useState('');
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    let chars = '';
    if (includeLowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) chars += '0123456789';
    if (includeSymbols) chars += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    if (chars.length === 0 || length === '') {
      alert('Please select at least one option and specify the length.');
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < parseInt(length); i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }

    setPassword(generatedPassword);
    updateCheckboxes(generatedPassword);
  };

  const updateCheckboxes = (generatedPassword) => {
    let hasLowercase = false;
    let hasUppercase = false;
    let hasNumber = false;
    let hasSymbol = false;

    const specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    for (let i = 0; i < generatedPassword.length; i++) {
      const char = generatedPassword[i];

      if (char >= 'a' && char <= 'z') {
        hasLowercase = true;
      } else if (char >= 'A' && char <= 'Z') {
        hasUppercase = true;
      } else if (char >= '0' && char <= '9') {
        hasNumber = true;
      } else if (specialChars.includes(char)) {
        hasSymbol = true;
      }
    }

    // Cập nhật các checkbox dựa trên thành phần của mật khẩu
    setIncludeLowercase(hasLowercase);
    setIncludeUppercase(hasUppercase);
    setIncludeNumbers(hasNumber);
    setIncludeSymbols(hasSymbol);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PASSWORD GENERATOR</Text>
    <TextInput
        style={styles.passwordDisplay}
        value={password}
        onChangeText={setPassword} // Hàm cập nhật state password khi nhập
        placeholder="Enter password"
        secureTextEntry={true} // Ẩn ký tự khi nhập mật khẩu
      />
      <View style={styles.row}>
        <Text>Password length</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={length}
          onChangeText={setLength}
          placeholder="Length"
        />
      </View>

      <View style={styles.row}>
        <Text>Include lower case letters</Text>
        <CheckBox
          value={includeLowercase}
          onValueChange={setIncludeLowercase}
        />
      </View>

      <View style={styles.row}>
        <Text>Include upper case letters</Text>
        <CheckBox
          value={includeUppercase}
          onValueChange={setIncludeUppercase}
        />
      </View>

      <View style={styles.row}>
        <Text>Include number</Text>
        <CheckBox
          value={includeNumbers}
          onValueChange={setIncludeNumbers}
        />
      </View>

      <View style={styles.row}>
        <Text>Include special symbol</Text>
        <CheckBox
          value={includeSymbols}
          onValueChange={setIncludeSymbols}
        />
      </View>

      <Button title="GENERATE PASSWORD" onPress={generatePassword} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#2C2C54',
    borderRadius: 10,
    width: 300,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  passwordDisplay: {
    backgroundColor: '#1B1B3A',
    color: 'white',
    fontSize: 18,
    padding: 10,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    width: 50,
    textAlign: 'center',
    backgroundColor: 'white',
  },
});

export default App;
