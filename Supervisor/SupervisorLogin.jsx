import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SupervisorLogin = ({ navigation }) => {
    const [juwId, setJuwId] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!juwId || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        try {
            const response = await fetch('http://localhost/MobApp/my-app/php_api/supervisorLogin.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ juw_id: juwId, password: password }),
            });

            const data = await response.json();

            if (data.success) {
                await AsyncStorage.setItem('faculty_id', data.faculty_id);
                await AsyncStorage.setItem('role', data.role);
                navigation.navigate('SupervisorDashboard'); // Navigate to the dashboard
            } else {
                Alert.alert('Login Failed', data.message);
            }
        } catch (error) {
            Alert.alert('Error', 'Something went wrong. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
         {/* Header Section */}
              <View style={styles.headerContainer}>
                <Image source={require('../assets/IconsSuper/logo.png')} style={styles.logo} />
                <Text style={styles.headerText}>FYP Progress Recorder</Text>
              </View>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Supervisor Login</Text>
                <TextInput
                    style={styles.input}
                    placeholder="User ID"
                    value={juwId}
                    onChangeText={setJuwId}
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('RoleSelection')}>
                    <Text style={styles.otherRoleLink}>Want to login as another role?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#051747',
    paddingTop: 40,
    paddingBottom: 20,
    justifyContent: 'flex-start',
    paddingLeft: 20,
    height: 25,
  },
  logo: {
    width: 60,
    height: 35,
    resizeMode: 'contain',
    marginLeft: 60,
    marginBottom: 13,
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 5,
    marginBottom: 13,
    textAlign: 'center',
    flexDirection: 'row',
  },
  formContainer: {
    backgroundColor: 'white',
        padding: 30,
        borderRadius: 12,
        width: '90%',
        maxWidth: 400,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        elevation: 5,
        marginTop: 210,
        marginLeft: 20,
  },
    title: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 20,
        color: '#333',
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#2575fc',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
    otherRoleLink: {
        marginTop: 15,
        textAlign: 'center',
        color: '#2575fc',
        fontSize: 14,
        textDecorationLine: 'underline',
    },
});

export default SupervisorLogin;

