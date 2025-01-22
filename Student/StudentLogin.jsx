



// import React, { useState } from 'react';
// import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

// const StudentLogin = ({ navigation }) => {
//   const [juwId, setJuwId] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     // Validate if fields are filled
//     if (!juwId || !password) {
//       Alert.alert("Error", "Please fill in all fields.");
//       return;
//     }

//     try {
//       // Send login request to the PHP backend
//       const response = await fetch('http://localhost/MobApp/my-app/php_api/StudentLogin.php', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: new URLSearchParams({
//           juw_id: juwId,
//           password: password
//         }).toString(),
//       });
//       <View>
//       <Button title="Login as Student" onPress={() => onLogin('Student')} />
//       <Button title="Login as User" onPress={() => onLogin('user')} />
//       {/* Add buttons for other roles */}
//     </View>

//       const data = await response.json();

//       if (data.success) {
//         // Successful login, navigate to the student dashboard
//         Alert.alert("Success", "Logged in successfully.");
//         navigation.navigate('StudentDashboard'); // Replace 'StudentDashboard' with your actual screen
//       } else {
//         Alert.alert("Error", data.message || "Invalid credentials");
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       Alert.alert("Error", "There was a problem with the request.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="User ID"
//         value={juwId}
//         onChangeText={setJuwId}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />
//       <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 12,
//     paddingHorizontal: 8,
//   },
// });

// export default StudentLogin;



// 
// import { View, Button } from 'react-native';
// <View>
//       <Button title="Login as Student" onPress={() => onLogin('Student')} />
//       <Button title="Login as User" onPress={() => onLogin('user')} />
//       {/* Add buttons for other roles */}
//     </View>




// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import StudentLogin from '../../src/screens/Student/StudentLogin' // Separate component for Student login
// import LoginScreen from '../../src/screens/Admin/LoginScreen';    // Separate component for Admin login

// const LoginScreen = ({ route }) => {
//   const { role } = route.params;

//   if (role === 'Student') {
//     return <StudentLogin />;
//   } else if (role === 'Admin') {
//     return <AdminLogin />;
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
// });

// export default LoginScreen;


// import React, { useState } from 'react';
// import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

// const StudentLogin = ({ route, navigation }) => {
//   const [juwId, setJuwId] = useState('');
//   const [password, setPassword] = useState('');
//   const { role } = route.params; // Get the role passed from RoleSelection

//   const handleLogin = async () => {
//     // Validate if fields are filled
//     if (!juwId || !password) {
//       Alert.alert("Error", "Please fill in all fields.");
//       return;
//     }

//     try {
//       // Send login request to the PHP backend
//       const response = await fetch('http://localhost/MobApp/my-app/php_api/StudentLogin.php', {
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
//         // Successful login, navigate to the student dashboard
//         Alert.alert("Success", `Welcome, ${role}!`);
//         navigation.navigate('StudentDashboard'); // Navigate to student dashboard
//       } else {
//         Alert.alert("Error", data.message || "Invalid credentials");
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       Alert.alert("Error", "There was a problem with the request.");
//     }
//   };

//   return (
//     <View style={styles.container}>
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
//       <Button title={`Login as ${role}`} onPress={handleLogin} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 12,
//     paddingHorizontal: 8,
//     borderRadius: 8,
//   },
// });

// export default StudentLogin;



// 
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

// const StudentLogin = ({ navigation }) => {
//   const [juwId, setJuwId] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//         // Validate if fields are filled
//         if (!juwId || !password) {
//           Alert.alert("Error", "Please fill in all fields.");
//           return;
//         }
    
//         try {
//           // Send login request to the PHP backend
//           const response = await fetch('http://localhost/MobApp/my-app/php_api/StudentLogin.php', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/x-www-form-urlencoded',
//             },
//             body: new URLSearchParams({
//               juw_id: juwId,
//               password: password,
//             }).toString(),
//           });
    
//           const data = await response.json();
    
//           if (data.success) {
//             // Successful login, navigate to the student dashboard
//             Alert.alert("Success", `Welcome, ${role}!`);
//             navigation.navigate('StudentDashboard'); // Navigate to student dashboard
//           } else {
//             Alert.alert("Error", data.message || "Invalid credentials");
//           }
//         } catch (error) {
//           console.error('Error:', error);
//           Alert.alert("Error", "There was a problem with the request.");
//         }
//       };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Student Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your juwId"
//         value={juwId}
//         onChangeText={setjuwId}
//         keyboardType="juw_id"
//         autoCapitalize="none"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your password"
//         value={password}
//         onChangeText={setPassword}
//         secureTextEntry
//       />
//       <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//         <Text style={styles.loginButtonText}>Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 30,
//   },
//   input: {
//     width: '100%',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     padding: 10,
//     marginBottom: 15,
//   },
//   loginButton: {
//     backgroundColor: '#004080',
//     paddingVertical: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     width: '100%',
//   },
//   loginButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default StudentLogin;

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Button } from 'react-native';
// const StudentLogin = ({ route, navigation }) => {
//   const { role = 'Student' } = route.params || {}; // Default to 'Student' if route.params is undefined
//   const [juwId, setJuwId] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     // Validate if fields are filled
//     if (!juwId || !password) {
//       Alert.alert("Error", "Please fill in all fields.");
//       return;
//     }

//     try {
//       // Send login request to the PHP backend
//       const response = await fetch('http://localhost/MobApp/my-app/php_api/studentLogin.php', {
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
//         // Successful login, navigate to the student dashboard
//         Alert.alert("Success", `Welcome, ${role}!`);
//         navigation.navigate('StudentDashboard'); // Navigate to student dashboard
//       } else {
//         Alert.alert("Error", data.message || "Invalid credentials");
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       Alert.alert("Error", "There was a problem with the request.");
//     }
//   };

//   return (
//     <View style={styles.container}>
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
//       <Button title={`Login as ${role}`} onPress={handleLogin} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 12,
//     paddingHorizontal: 8,
//     borderRadius: 8,
//   },
// });

// export default StudentLogin;


// 
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import StuNav from './StuNav'; // Import StuNav here

// const StudentLogin = ({ route, navigation }) => {
//   const { role = 'Student' } = route.params || {}; // Default to 'Student' if route.params is undefined
//   const [juwId, setJuwId] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     // Validate if fields are filled
//     if (!juwId || !password) {
//       Alert.alert("Error", "Please fill in all fields.");
//       return;
//     }

//     try {
//       // Send login request to the PHP backend
//       const response = await fetch('http://localhost/MobApp/my-app/php_api/studentLogin.php', {
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
//         // Successful login, navigate to the student dashboard
//         Alert.alert("Success", `Welcome, ${role}!`);
//         navigation.navigate('StudentDashboard'); // Navigate to student dashboard
//       } else {
//         Alert.alert("Error", data.message || "Invalid credentials");
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       Alert.alert("Error", "There was a problem with the request.");
//     }
//   };

//   return (
//     <View style={styles.container}>
//        {/* Integrating StuNav here */}
//        <StuNav />
//                 <View style={styles.formContainer}>
//                     <Text style={styles.title}>Student Login</Text>
//                     <TextInput
//                         style={styles.input}
//                         placeholder="User ID"
//                         value={juwId}
//                         onChangeText={setJuwId}
//                         autoCapitalize="none"
//                     />
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Password"
//                         value={password}
//                         onChangeText={setPassword}
//                         secureTextEntry
//                     />
//                     <TouchableOpacity style={styles.button} onPress={handleLogin}>
//                         <Text style={styles.buttonText}>Login</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => navigation.navigate('RoleSelection')}>
//                         <Text style={styles.otherRoleLink}>Want to login as another role?</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//    flex: 1,
//         backgroundColor: 'rgb(236, 236, 236)',
//         justifyContent: 'center',
//         alignItems: 'center',
//   },
 
//   formContainer: {
//     backgroundColor: 'white',
//         padding: 30,
//         borderRadius: 12,
//         width: '90%',
//         maxWidth: 400,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 8 },
//         shadowOpacity: 0.2,
//         elevation: 5, // Optional: for shadow effect on Android
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: '600',
//     marginBottom: 20,
//     color: '#333',
//     textAlign: 'center',
// },
// input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     padding: 10,
//     marginBottom: 15,
//     fontSize: 16,
// },
//   button: {
//     backgroundColor: '#2575fc',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
// },
// buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '500',
// },
//   otherRoleLink: {
//     marginTop: 15,
//     textAlign: 'center',
//     color: '#2575fc',
//     fontSize: 14,
//     textDecorationLine: 'underline',
// },
// });

// export default StudentLogin;




// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

// const StudentLogin = ({ route, navigation }) => {
//   const { role = 'Student' } = route.params || {}; // Default to 'Student' if route.params is undefined
//   const [juwId, setJuwId] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async () => {
//     // Validate if fields are filled
//     if (!juwId || !password) {
//       Alert.alert("Error", "Please fill in all fields.");
//       return;
//     }

//     try {
//       // Send login request to the PHP backend
//       const response = await fetch('http://localhost/MobApp/my-app/php_api/studentLogin.php', {
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
//         // Successful login, navigate to the student dashboard
//         Alert.alert("Success", `Welcome, ${role}!`);
//         navigation.navigate('StudentDashboard'); // Navigate to student dashboard
//       } else {
//         Alert.alert("Error", data.message || "Invalid credentials");
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       Alert.alert("Error", "There was a problem with the request.");
//     }
//   };
//    {/* Breadcrumb */}
//         <View style={styles.breadcrumb}>
//           <Text style={styles.breadcrumbText}>JUW - FYP Progress Recorder / Student Dashboard</Text>
//         </View>

//   return (
//     <View style={styles.container}>
//       {/* Header Section */}
//       <View style={styles.headerContainer}>
//         <Image source={require('../assets/IconsS/logo.png')} style={styles.logo} />
//       </View>

//       {/* Login Form Section */}
//       <View style={styles.formContainer}>
//         <Text style={styles.title}>Student Login</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="User ID"
//           value={juwId}
//           onChangeText={setJuwId}
//           autoCapitalize="none"
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />

//         <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.navigate('RoleSelection')}>
//           <Text style={styles.switchRole}>Want to login as another role?</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   headerContainer: {
//     backgroundColor: '#003366',
//     paddingTop: 40,
//     paddingBottom: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   breadcrumb: {
//     backgroundColor: '#eaeff2',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//   },
//   breadcrumbText: {
//     color: '#004080',
//     fontSize: 14,
//   },
//   logo: {
//     width: 150,
//     height: 40,
//     resizeMode: 'contain',
//   },
//   formContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 30,
//     color: '#333',
//   },
//   input: {
//     height: 45,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//     borderRadius: 8,
//     backgroundColor: '#fff',
//   },
//   loginButton: {
//     backgroundColor: '#0066cc',
//     paddingVertical: 12,
//     borderRadius: 8,
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   switchRole: {
//     textAlign: 'center',
//     color: '#0066cc',
//     fontSize: 14,
//   },
// });

// export default StudentLogin;


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

const StudentLogin = ({ route, navigation }) => {
  const { role = 'Student' } = route.params || {}; // Default to 'Student' if route.params is undefined
  const [juwId, setJuwId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Validate if fields are filled
    if (!juwId || !password) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    try {
      // Send login request to the PHP backend
      const response = await fetch('http://localhost/MobApp/my-app/php_api/studentLogin.php', {
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
        // Successful login, navigate to the student dashboard
        Alert.alert("Success", `Welcome, ${role}!`);
        navigation.navigate('StudentDashboard'); // Navigate to student dashboard
      } else {
        Alert.alert("Error", data.message || "Invalid credentials");
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
        <Image source={require('../assets/IconsS/logo.png')} style={styles.logo} />
        <Text style={styles.headerText}>FYP Progress Recorder</Text>
      </View>

     

      {/* Login Form Section */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Student Login</Text>

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
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('RoleSelection')}>
          <Text style={styles.switchRole}>Want to login as another role?</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  loginButton: {
    backgroundColor: '#0066cc',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  switchRole: {
    textAlign: 'center',
    color: '#0066cc',
    fontSize: 14,
  },
});

export default StudentLogin;
