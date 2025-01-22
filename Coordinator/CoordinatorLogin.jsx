// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
// } from "react-native";

// const CoordinatorLogin = ({ navigation }) => {
//   const [juwId, setJuwId] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {
//     if (!juwId || !password) {
//       Alert.alert("Error", "Please fill in all fields.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost/MobApp/my-app/php_api/CoordinatorLogin.php", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           juw_id: juwId,
//           password: password,
//         }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         Alert.alert("Login Successful", "Welcome to the Coordinator Dashboard.");
//         // Navigate to the Coordinator Dashboard
//         navigation.navigate("CoordinatorDashboard", {
//           role: data.role,
//           coordinatorId: data.coordinator_id,
//           batchId: data.batch_id,
//         });
//       } else {
//         Alert.alert("Login Failed", data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       Alert.alert("Error", "Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Coordinator Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="User ID"
//         value={juwId}
//         onChangeText={setJuwId}
//         keyboardType="email-address"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//     backgroundColor: "#f9f9f9",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   input: {
//     width: "100%",
//     padding: 15,
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//   },
//   button: {
//     backgroundColor: "#007bff",
//     padding: 15,
//     borderRadius: 5,
//     alignItems: "center",
//     width: "100%",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default CoordinatorLogin;

// working
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

// const CoordinatorLogin = ({ navigation }) => {
//   const [juwId, setJuwId] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleLogin = async () => {
//     // Validate if fields are filled
//     if (!juwId || !password) {
//       Alert.alert("Error", "Please fill in all fields.");
//       return;
//     }

//     try {
//       // Send login request to the PHP backend
//       const response = await fetch('http://localhost/MobApp/my-app/php_api/CoordinatorLogin.php', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: new URLSearchParams({
//           juw_id: juwId,
//           password: password,
//         }).toString(),
//       });

//       const data = await response.json();

//       if (data.success) {
//         // Successful login, navigate to the coordinator dashboard
//         Alert.alert("Success", `Welcome, Coordinator!`);
//         navigation.navigate('CoordinatorDashboard'); // Navigate to coordinator dashboard
//       } else {
//         setErrorMessage(data.message || "Invalid credentials");
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       Alert.alert("Error", "There was a problem with the request.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Coordinator Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="JUW ID"
//         value={juwId}
//         onChangeText={setJuwId}
//         autoCapitalize="none"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />
//       {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('RoleSelection')}>
//         <Text style={styles.otherRole}>Want to login as another role?</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#f7f7f7',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     padding: 10,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     marginBottom: 12,
//   },
//   button: {
//     width: '100%',
//     padding: 15,
//     backgroundColor: '#2575fc',
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: '500',
//   },
//   error: {
//     color: 'red',
//     fontSize: 14,
//     marginBottom: 10,
//   },
//   otherRole: {
//     color: '#2575fc',
//     fontSize: 14,
//     marginTop: 15,
//     textAlign: 'center',
//   },
// });

// export default CoordinatorLogin;


// updated
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert,Image } from 'react-native';

const CoordinatorLogin = ({ navigation }) => {
  const [juwId, setJuwId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [coordinatorName, setCoordinatorName] = useState('');

  const handleLogin = async () => {
    if (!juwId || !password) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }
  
    try {
      const response = await fetch('http://localhost/MobApp/my-app/php_api/CoordinatorLogin.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          juw_id: juwId,
          password: password,
        }).toString(),
      });
  
      const data = await response.json();
  
      if (data.success) {
        // Successful login, display the coordinator's name
        Alert.alert("Success", `Welcome, ${data.name}!`); // Use the name from the response
        navigation.navigate('CoordinatorDashboard');
      } else {
        setErrorMessage(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert("Error", "There was a problem with the request.");
    }
  };
  
  return (
    <View style={styles.container}>
    {/* Header Section */}
                  <View style={styles.headerContainer}>
                    <Image source={require('../assets/IconsC/logo.png')} style={styles.logo} />
                    <Text style={styles.headerText}>FYP Progress Recorder</Text>
                  </View>
      <View style={styles.formContainer}>
                      <Text style={styles.title}>Coordinator Login</Text>
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
  error: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
  otherRoleLink: {
    marginTop: 15,
    textAlign: 'center',
    color: '#2575fc',
    fontSize: 14,
    textDecorationLine: 'underline',
},
 
});

export default CoordinatorLogin;
