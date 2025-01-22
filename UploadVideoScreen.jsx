// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
// } from 'react-native';
// import DocumentPicker from 'react-native-document-picker';

// const UploadVideoScreen = ({ navigation }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [file, setFile] = useState(null);

//   const SERVER_URL = 'https://your-server-url/upload.php';

//   const handleFilePick = async () => {
//     try {
//       const result = await DocumentPicker.pickSingle({
//         type: [DocumentPicker.types.video],
//       });

//       if (result.size > 50 * 1024 * 1024) { // 50MB limit
//         Alert.alert('Error', 'The file size exceeds 50MB.');
//         return;
//       }

//       setFile(result);
//     } catch (err) {
//       if (!DocumentPicker.isCancel(err)) {
//         Alert.alert('Error', 'Failed to select a file.');
//       }
//     }
//   };

//   const handleSubmit = async () => {
//     if (!title.trim() || !description.trim() || !file) {
//       Alert.alert('Error', 'All fields are required.');
//       return;
//     }

//     if (SERVER_URL === 'https://your-server-url/upload.php') {
//       Alert.alert('Error', 'Please configure your server URL.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('description', description);
//     formData.append('videoFile', {
//       uri: file.uri,
//       name: file.name,
//       type: file.type,
//     });

//     try {
//       const response = await fetch(SERVER_URL, {
//         method: 'POST',
//         body: formData,
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       const result = await response.json();
//       if (result.success) {
//         Alert.alert('Success', 'File uploaded successfully.');
//         setTitle('');
//         setDescription('');
//         setFile(null);
//         navigation.navigate('Gallery');
//       } else {
//         Alert.alert('Error', result.message || 'Failed to upload the file.');
//       }
//     } catch (error) {
//       Alert.alert('Error', 'An error occurred while uploading.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Upload Your Video</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Title"
//         value={title}
//         onChangeText={setTitle}
//       />
//       <TextInput
//         style={[styles.input, styles.textArea]}
//         placeholder="Description"
//         value={description}
//         onChangeText={setDescription}
//         multiline
//         numberOfLines={4}
//       />
//       <TouchableOpacity style={styles.uploadBox} onPress={handleFilePick}>
//         <Text style={styles.uploadText}>
//           {file ? file.name : 'Select or Drop Video File Here'}
//         </Text>
//       </TouchableOpacity>
//       <View style={styles.buttonContainer}>
//         <Button
//           title="Cancel"
//           onPress={() => navigation.navigate('Gallery')}
//           color="#ff3b3b"
//         />
//         <Button title="Upload Video" onPress={handleSubmit} color="#007bff" />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   heading: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#0a4a91',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#cbcbcb',
//     borderRadius: 8,
//     padding: 10,
//     marginBottom: 15,
//     backgroundColor: '#f9f9f9',
//   },
//   textArea: {
//     height: 100,
//     textAlignVertical: 'top',
//   },
//   uploadBox: {
//     borderWidth: 2,
//     borderColor: '#007bff',
//     borderRadius: 8,
//     padding: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 15,
//     height: 100,
//   },
//   uploadText: {
//     color: '#007bff',
//     textAlign: 'center',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
// });

// export default UploadVideoScreen;



// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import axios from 'axios';

// const CreateAssignmentScreen = () => {
//   const [assignmentName, setAssignmentName] = useState('');
//   const [description, setDescription] = useState('');
//   const [deadline, setDeadline] = useState('');
//   const [fileUri, setFileUri] = useState(null);
//   const [errorMessages, setErrorMessages] = useState({
//     assignmentNameError: '',
//     descriptionError: '',
//     deadlineError: '',
//     fileError: '',
//   });

//   // Handle file selection
//   const pickFile = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.cancelled) {
//       setFileUri(result.uri);
//     }
//   };

//   // Validate fields
//   const validateFields = () => {
//     let valid = true;
//     let errors = {
//       assignmentNameError: '',
//       descriptionError: '',
//       deadlineError: '',
//       fileError: '',
//     };

//     if (!assignmentName) {
//       errors.assignmentNameError = 'Assignment name is required.';
//       valid = false;
//     }

//     if (!description) {
//       errors.descriptionError = 'Description is required.';
//       valid = false;
//     }

//     if (!deadline) {
//       errors.deadlineError = 'Deadline is required.';
//       valid = false;
//     }

//     if (!fileUri) {
//       errors.fileError = 'File is required.';
//       valid = false;
//     }

//     setErrorMessages(errors);
//     return valid;
//   };

//   // Handle form submission
//   const handleSubmit = async () => {
//     if (!validateFields()) return;

//     const formData = new FormData();
//     formData.append('assignment_name', assignmentName);
//     formData.append('description', description);
//     formData.append('deadline', deadline);
//     formData.append('document', {
//       uri: fileUri,
//       type: 'image/jpeg', // Adjust this depending on the file type
//       name: 'document.jpg', // Adjust the file name
//     });

//     try {
//       const response = await axios.post('http://localhost/MobApp/my-app/php_api/createSubmission.php', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response.data.success) {
//         Alert.alert('Success', response.data.message);
//       } else {
//         Alert.alert('Error', response.data.message);
//       }
//     } catch (error) {
//       Alert.alert('Error', 'An error occurred while submitting the form.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Create Assignment</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Assignment Name"
//         value={assignmentName}
//         onChangeText={setAssignmentName}
//       />
//       {errorMessages.assignmentNameError && <Text style={styles.error}>{errorMessages.assignmentNameError}</Text>}

//       <TextInput
//         style={styles.input}
//         placeholder="Description"
//         value={description}
//         onChangeText={setDescription}
//       />
//       {errorMessages.descriptionError && <Text style={styles.error}>{errorMessages.descriptionError}</Text>}

//       <TextInput
//         style={styles.input}
//         placeholder="Deadline"
//         value={deadline}
//         onChangeText={setDeadline}
//         keyboardType="datetime"
//       />
//       {errorMessages.deadlineError && <Text style={styles.error}>{errorMessages.deadlineError}</Text>}

//       <TouchableOpacity style={styles.button} onPress={pickFile}>
//         <Text style={styles.buttonText}>Pick a File</Text>
//       </TouchableOpacity>
//       {errorMessages.fileError && <Text style={styles.error}>{errorMessages.fileError}</Text>}

//       <Button title="Create Assignment" onPress={handleSubmit} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingLeft: 10,
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     padding: 10,
//     marginBottom: 10,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   error: {
//     color: 'red',
//     fontSize: 12,
//   },
// });

// export default CreateAssignmentScreen;
