// // import React, { useState } from 'react';
// // import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
// // import * as ImagePicker from 'expo-image-picker';
// // import axios from 'axios';

// // const CreateAssignmentScreen = () => {
// //   const [assignmentName, setAssignmentName] = useState('');
// //   const [description, setDescription] = useState('');
// //   const [deadline, setDeadline] = useState('');
// //   const [fileUri, setFileUri] = useState(null);
// //   const [errorMessages, setErrorMessages] = useState({
// //     assignmentNameError: '',
// //     descriptionError: '',
// //     deadlineError: '',
// //     fileError: '',
// //   });

// //   // Handle file selection
// //   const pickFile = async () => {
// //     const result = await ImagePicker.launchImageLibraryAsync({
// //       mediaTypes: ImagePicker.MediaTypeOptions.All,
// //       allowsEditing: true,
// //       aspect: [4, 3],
// //       quality: 1,
// //     });

// //     if (!result.cancelled) {
// //       setFileUri(result.uri);
// //     }
// //   };

// //   // Validate fields
// //   const validateFields = () => {
// //     let valid = true;
// //     let errors = {
// //       assignmentNameError: '',
// //       descriptionError: '',
// //       deadlineError: '',
// //       fileError: '',
// //     };

// //     if (!assignmentName) {
// //       errors.assignmentNameError = 'Assignment name is required.';
// //       valid = false;
// //     }

// //     if (!description) {
// //       errors.descriptionError = 'Description is required.';
// //       valid = false;
// //     }

// //     if (!deadline) {
// //       errors.deadlineError = 'Deadline is required.';
// //       valid = false;
// //     }

// //     if (!fileUri) {
// //       errors.fileError = 'File is required.';
// //       valid = false;
// //     }

// //     setErrorMessages(errors);
// //     return valid;
// //   };

// //   // Handle form submission
// //   const handleSubmit = async () => {
// //     if (!validateFields()) return;

// //     const formData = new FormData();
// //     formData.append('assignment_name', assignmentName);
// //     formData.append('description', description);
// //     formData.append('deadline', deadline);
// //     formData.append('document', {
// //       uri: fileUri,
// //       type: 'image/jpeg', // Adjust this depending on the file type
// //       name: 'document.jpg', // Adjust the file name
// //     });

// //     try {
// //       const response = await axios.post('http://localhost/MobApp/my-app/php_api/createSubmission.php', formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //         },
// //       });

// //       if (response.data.success) {
// //         Alert.alert('Success', response.data.message);
// //       } else {
// //         Alert.alert('Error', response.data.message);
// //       }
// //     } catch (error) {
// //       Alert.alert('Error', 'An error occurred while submitting the form.');
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.header}>Create Assignment</Text>

// //       <TextInput
// //         style={styles.input}
// //         placeholder="Assignment Name"
// //         value={assignmentName}
// //         onChangeText={setAssignmentName}
// //       />
// //       {errorMessages.assignmentNameError && <Text style={styles.error}>{errorMessages.assignmentNameError}</Text>}

// //       <TextInput
// //         style={styles.input}
// //         placeholder="Description"
// //         value={description}
// //         onChangeText={setDescription}
// //       />
// //       {errorMessages.descriptionError && <Text style={styles.error}>{errorMessages.descriptionError}</Text>}

// //       <TextInput
// //         style={styles.input}
// //         placeholder="Deadline"
// //         value={deadline}
// //         onChangeText={setDeadline}
// //         keyboardType="datetime"
// //       />
// //       {errorMessages.deadlineError && <Text style={styles.error}>{errorMessages.deadlineError}</Text>}

// //       <TouchableOpacity style={styles.button} onPress={pickFile}>
// //         <Text style={styles.buttonText}>Pick a File</Text>
// //       </TouchableOpacity>
// //       {errorMessages.fileError && <Text style={styles.error}>{errorMessages.fileError}</Text>}

// //       <Button title="Create Assignment" onPress={handleSubmit} />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //     justifyContent: 'center',
// //   },
// //   header: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     textAlign: 'center',
// //   },
// //   input: {
// //     height: 40,
// //     borderColor: '#ccc',
// //     borderWidth: 1,
// //     marginBottom: 10,
// //     paddingLeft: 10,
// //   },
// //   button: {
// //     backgroundColor: '#007BFF',
// //     padding: 10,
// //     marginBottom: 10,
// //     alignItems: 'center',
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //   },
// //   error: {
// //     color: 'red',
// //     fontSize: 12,
// //   },
// // });

// // export default CreateAssignmentScreen;


// // new
// // import React, { useState } from 'react';
// // import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
// // import * as DocumentPicker from 'expo-document-picker'; // Updated import for document picker
// // import axios from 'axios';

// // const CreateAssignmentScreen = () => {
// //   const [assignmentName, setAssignmentName] = useState('');
// //   const [description, setDescription] = useState('');
// //   const [deadline, setDeadline] = useState('');
// //   const [fileUri, setFileUri] = useState(null);
// //   const [fileName, setFileName] = useState('');
// //   const [fileType, setFileType] = useState('');
// //   const [errorMessages, setErrorMessages] = useState({
// //     assignmentNameError: '',
// //     descriptionError: '',
// //     deadlineError: '',
// //     fileError: '',
// //   });

// //   // Handle file selection for documents
// //   const pickFile = async () => {
// //     const result = await DocumentPicker.getDocumentAsync({
// //       type: '*/*', // Allow all file types
// //     });

// //     if (result.type === 'success') {
// //       setFileUri(result.uri);
// //       setFileName(result.name);
// //       setFileType(result.mimeType); // Get the MIME type of the selected file
// //     }
// //   };

// //   // Validate fields
// //   const validateFields = () => {
// //     let valid = true;
// //     let errors = {
// //       assignmentNameError: '',
// //       descriptionError: '',
// //       deadlineError: '',
// //       fileError: '',
// //     };

// //     if (!assignmentName) {
// //       errors.assignmentNameError = 'Assignment name is required.';
// //       valid = false;
// //     }

// //     if (!description) {
// //       errors.descriptionError = 'Description is required.';
// //       valid = false;
// //     }

// //     if (!deadline) {
// //       errors.deadlineError = 'Deadline is required.';
// //       valid = false;
// //     }

// //     if (!fileUri) {
// //       errors.fileError = 'File is required.';
// //       valid = false;
// //     }

// //     setErrorMessages(errors);
// //     return valid;
// //   };

// //   // Handle form submission
// //   const handleSubmit = async () => {
// //     if (!validateFields()) return;

// //     const formData = new FormData();
// //     formData.append('assignment_name', assignmentName);
// //     formData.append('description', description);
// //     formData.append('deadline', deadline);
// //     formData.append('document', {
// //       uri: fileUri,
// //       type: fileType, // Correct MIME type
// //       name: fileName, // Use the selected file's name
// //     });

// //     try {
// //       const response = await axios.post('http://localhost/MobApp/my-app/php_api/createSubmission.php', formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //         },
// //       });

// //       if (response.data.success) {
// //         Alert.alert('Success', response.data.message);
// //       } else {
// //         Alert.alert('Error', response.data.message);
// //       }
// //     } catch (error) {
// //       Alert.alert('Error', 'An error occurred while submitting the form.');
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.header}>Create Assignment</Text>

// //       <TextInput
// //         style={styles.input}
// //         placeholder="Assignment Name"
// //         value={assignmentName}
// //         onChangeText={setAssignmentName}
// //       />
// //       {errorMessages.assignmentNameError && <Text style={styles.error}>{errorMessages.assignmentNameError}</Text>}

// //       <TextInput
// //         style={styles.input}
// //         placeholder="Description"
// //         value={description}
// //         onChangeText={setDescription}
// //       />
// //       {errorMessages.descriptionError && <Text style={styles.error}>{errorMessages.descriptionError}</Text>}

// //       <TextInput
// //         style={styles.input}
// //         placeholder="Deadline"
// //         value={deadline}
// //         onChangeText={setDeadline}
// //         keyboardType="datetime"
// //       />
// //       {errorMessages.deadlineError && <Text style={styles.error}>{errorMessages.deadlineError}</Text>}

// //       <TouchableOpacity style={styles.button} onPress={pickFile}>
// //         <Text style={styles.buttonText}>Pick a File</Text>
// //       </TouchableOpacity>
// //       {fileUri && <Text style={styles.fileText}>Selected File: {fileName}</Text>}
// //       {errorMessages.fileError && <Text style={styles.error}>{errorMessages.fileError}</Text>}

// //       <Button title="Create Assignment" onPress={handleSubmit} />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //     justifyContent: 'center',
// //   },
// //   header: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     textAlign: 'center',
// //   },
// //   input: {
// //     height: 40,
// //     borderColor: '#ccc',
// //     borderWidth: 1,
// //     marginBottom: 10,
// //     paddingLeft: 10,
// //   },
// //   button: {
// //     backgroundColor: '#007BFF',
// //     padding: 10,
// //     marginBottom: 10,
// //     alignItems: 'center',
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //   },
// //   error: {
// //     color: 'red',
// //     fontSize: 12,
// //   },
// //   fileText: {
// //     color: 'green',
// //     fontSize: 14,
// //     marginTop: 10,
// //   },
// // });

// // export default CreateAssignmentScreen;


// // newww
// // CreateAssignmentScreen.js
// // import React, { useState } from 'react';
// // import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
// // import * as DocumentPicker from 'expo-document-picker';
// // import axios from 'axios';

// // const CreateAssignmentScreen = () => {
// //   const [assignmentName, setAssignmentName] = useState('');
// //   const [description, setDescription] = useState('');
// //   const [deadline, setDeadline] = useState('');
// //   const [fileUri, setFileUri] = useState(null);
// //   const [fileName, setFileName] = useState('');
// //   const [fileType, setFileType] = useState('');
// //   const [errorMessages, setErrorMessages] = useState({
// //     assignmentNameError: '',
// //     descriptionError: '',
// //     deadlineError: '',
// //     fileError: '',
// //   });

// //   const pickFile = async () => {
// //     const result = await DocumentPicker.getDocumentAsync({
// //       type: 'application/pdf,application/vnd.ms-powerpoint,application/msword',
// //     });

// //     if (result.type === 'success') {
// //       setFileUri(result.uri);
// //       setFileName(result.name);
// //       setFileType(result.mimeType);
// //     }
// //   };

// //   const validateFields = () => {
// //     let valid = true;
// //     let errors = {
// //       assignmentNameError: '',
// //       descriptionError: '',
// //       deadlineError: '',
// //       fileError: '',
// //     };

// //     if (!assignmentName) {
// //       errors.assignmentNameError = 'Assignment name is required.';
// //       valid = false;
// //     }

// //     if (!description) {
// //       errors.descriptionError = 'Description is required.';
// //       valid = false;
// //     }

// //     if (!deadline) {
// //       errors.deadlineError = 'Deadline is required.';
// //       valid = false;
// //     }

// //     if (!fileUri) {
// //       errors.fileError = 'File is required.';
// //       valid = false;
// //     }

// //     setErrorMessages(errors);
// //     return valid;
// //   };

// //   const handleSubmit = async () => {
// //     if (!validateFields()) return;

// //     const formData = new FormData();
// //     formData.append('assignment_name', assignmentName);
// //     formData.append('description', description);
// //     formData.append('deadline', deadline);
// //     formData.append('document', {
// //       uri: fileUri,
// //       type: fileType,
// //       name: fileName,
// //     });

// //     try {
// //       const response = await axios.post('http://localhost/MobApp/my-app/php_api/createSubmission.php', formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //         },
// //       });

// //       if (response.data.success) {
// //         Alert.alert('Success', response.data.message);
// //       } else {
// //         Alert.alert('Error', response.data.message);
// //       }
// //     } catch (error) {
// //       Alert.alert('Error', 'An error occurred while submitting the form.');
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.header}>Create Assignment</Text>

// //       <TextInput
// //         style={styles.input}
// //         placeholder="Assignment Name"
// //         value={assignmentName}
// //         onChangeText={setAssignmentName}
// //       />
// //       {errorMessages.assignmentNameError && <Text style={styles.error}>{errorMessages.assignmentNameError}</Text>}

// //       <TextInput
// //         style={styles.input}
// //         placeholder="Description"
// //         value={description}
// //         onChangeText={setDescription}
// //       />
// //       {errorMessages.descriptionError && <Text style={styles.error}>{errorMessages.descriptionError}</Text>}

// //       <TextInput
// //         style={styles.input}
// //         placeholder="Deadline"
// //         value={deadline}
// //         onChangeText={setDeadline}
// //         keyboardType="datetime"
// //       />
// //       {errorMessages.deadlineError && <Text style={styles.error}>{errorMessages.deadlineError}</Text>}

// //       <TouchableOpacity style={styles.button} onPress={pickFile}>
// //         <Text style={styles.buttonText}>Pick a File</Text>
// //       </TouchableOpacity>
// //       {fileUri && <Text style={styles.fileText}>Selected File: {fileName}</Text>}
// //       {errorMessages.fileError && <Text style={styles.error}>{errorMessages.fileError}</Text>}

// //       <Button title="Create Assignment" onPress={handleSubmit} />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //     justifyContent: 'center',
// //   },
// //   header: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     textAlign: 'center',
// //   },
// //   input: {
// //     height: 40,
// //     borderColor: '#ccc',
// //     borderWidth: 1,
// //     marginBottom: 10,
// //     paddingLeft: 10,
// //   },
// //   button: {
// //     backgroundColor: '#007BFF',
// //     padding: 10,
// //     marginBottom: 10,
// //     alignItems: 'center',
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //   },
// //   error: {
// //     color: 'red',
// //     fontSize: 12,
// //   },
// //   fileText: {
// //     color: 'green',
// //     fontSize: 14,
// //     marginTop: 10,
// //   },
// // });

// // export default CreateAssignmentScreen;




// // updated
// // import React, { useState } from 'react';
// // import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native';
// // import * as DocumentPicker from 'expo-document-picker';
// // import axios from 'axios';

// // const CreateAssignmentScreen = () => {
// //   const [assignmentName, setAssignmentName] = useState('');
// //   const [description, setDescription] = useState('');
// //   const [deadline, setDeadline] = useState('');
// //   const [fileUri, setFileUri] = useState(null);
// //   const [fileName, setFileName] = useState('');
// //   const [fileType, setFileType] = useState('');
// //   const [errorMessages, setErrorMessages] = useState({
// //     assignmentNameError: '',
// //     descriptionError: '',
// //     deadlineError: '',
// //     fileError: '',
// //   });

// //   const pickFile = async () => {
// //     const result = await DocumentPicker.getDocumentAsync({
// //       type: 'application/pdf,application/vnd.ms-powerpoint,application/msword',
// //     });

// //     if (result.type === 'success') {
// //       setFileUri(result.uri);
// //       setFileName(result.name);
// //       setFileType(result.mimeType);
// //     }
// //   };

// //   const validateFields = () => {
// //     let valid = true;
// //     let errors = {
// //       assignmentNameError: '',
// //       descriptionError: '',
// //       deadlineError: '',
// //       fileError: '',
// //     };

// //     if (!assignmentName) {
// //       errors.assignmentNameError = 'Assignment name is required.';
// //       valid = false;
// //     }

// //     if (!description) {
// //       errors.descriptionError = 'Description is required.';
// //       valid = false;
// //     }

// //     if (!deadline) {
// //       errors.deadlineError = 'Deadline is required.';
// //       valid = false;
// //     }

// //     if (!fileUri) {
// //       errors.fileError = 'File is required.';
// //       valid = false;
// //     }

// //     setErrorMessages(errors);
// //     return valid;
// //   };

// //   const handleSubmit = async () => {
// //     if (!validateFields()) return;

// //     const formData = new FormData();
// //     formData.append('assignment_name', assignmentName);
// //     formData.append('description', description);
// //     formData.append('deadline', deadline);
// //     formData.append('document', {
// //       uri: fileUri,
// //       type: fileType,
// //       name: fileName,
// //     });

// //     try {
// //       const response = await axios.post('http://localhost/MobApp/my-app/php_api/createSubmission.php', formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //         },
// //       });

// //       if (response.data.success) {
// //         Alert.alert('Success', response.data.message);
// //       } else {
// //         Alert.alert('Error', response.data.message);
// //       }
// //     } catch (error) {
// //       Alert.alert('Error', 'An error occurred while submitting the form.');
// //     }
// //   };

// //   const handleCancel = () => {
// //     setAssignmentName('');
// //     setDescription('');
// //     setDeadline('');
// //     setFileUri(null);
// //     setFileName('');
// //     setFileType('');
// //     setErrorMessages({
// //       assignmentNameError: '',
// //       descriptionError: '',
// //       deadlineError: '',
// //       fileError: '',
// //     });
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.header}>Create Assignment</Text>

// //       <TextInput
// //         style={styles.input}
// //         placeholder="Assignment Name"
// //         value={assignmentName}
// //         onChangeText={setAssignmentName}
// //       />
// //       {errorMessages.assignmentNameError && <Text style={styles.error}>{errorMessages.assignmentNameError}</Text>}

// //       <TextInput
// //         style={styles.input}
// //         placeholder="Description"
// //         value={description}
// //         onChangeText={setDescription}
// //       />
// //       {errorMessages.descriptionError && <Text style={styles.error}>{errorMessages.descriptionError}</Text>}

// //       <TextInput
// //         style={styles.input}
// //         placeholder="Deadline (mm/dd/yyyy)"
// //         value={deadline}
// //         onChangeText={setDeadline}
// //         keyboardType="numeric"
// //       />
// //       {errorMessages.deadlineError && <Text style={styles.error}>{errorMessages.deadlineError}</Text>}

// //       <TouchableOpacity style={styles.button} onPress={pickFile}>
// //         <Text style={styles.buttonText}>Choose File</Text>
// //       </TouchableOpacity>
// //       {fileUri && <Text style={styles.fileText}>Selected File: {fileName}</Text>}
// //       {errorMessages.fileError && <Text style={styles.error}>{errorMessages.fileError}</Text>}

// //       <View style={styles.buttonContainer}>
// //         <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
// //           <Text style={styles.cancelText}>Cancel</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
// //           <Text style={styles.submitText}>Create Assignment</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //     justifyContent: 'center',
// //   },
// //   header: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     textAlign: 'center',
// //   },
// //   input: {
// //     height: 40,
// //     borderColor: '#ccc',
// //     borderWidth: 1,
// //     marginBottom: 10,
// //     paddingLeft: 10,
// //   },
// //   button: {
// //     backgroundColor: '#007BFF',
// //     padding: 10,
// //     marginBottom: 10,
// //     alignItems: 'center',
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //   },
// //   error: {
// //     color: 'red',
// //     fontSize: 12,
// //   },
// //   fileText: {
// //     color: 'green',
// //     fontSize: 14,
// //     marginTop: 10,
// //   },
// //   buttonContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     marginTop: 20,
// //   },
// //   cancelButton: {
// //     backgroundColor: '#f44336',
// //     padding: 10,
// //     width: '45%',
// //     alignItems: 'center',
// //   },
// //   cancelText: {
// //     color: '#fff',
// //     fontSize: 16,
// //   },
// //   submitButton: {
// //     backgroundColor: '#007BFF',
// //     padding: 10,
// //     width: '45%',
// //     alignItems: 'center',
// //   },
// //   submitText: {
// //     color: '#fff',
// //     fontSize: 16,
// //   },
// // });

// // export default CreateAssignmentScreen;





// // import React, { useState } from 'react';
// // import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native';
// // import * as DocumentPicker from 'expo-document-picker';
// // import axios from 'axios';
// // // Import Sidebar
// // import Sidebar from '../Coordinator/Sidebar';

// // const CreateAssignmentScreen = () => {
// //   const [assignmentName, setAssignmentName] = useState('');
// //   const [description, setDescription] = useState('');
// //   const [deadline, setDeadline] = useState('');
// //   const [fileUri, setFileUri] = useState(null);
// //   const [fileName, setFileName] = useState('');
// //   const [fileType, setFileType] = useState('');
// //   const [errorMessages, setErrorMessages] = useState({
// //     assignmentNameError: '',
// //     descriptionError: '',
// //     deadlineError: '',
// //     fileError: '',
// //   });

// //   const pickFile = async () => {
// //     const result = await DocumentPicker.getDocumentAsync({
// //       type: 'application/pdf,application/vnd.ms-powerpoint,application/msword',
// //     });

// //     if (result.type === 'success') {
// //       setFileUri(result.uri);
// //       setFileName(result.name);
// //       setFileType(result.mimeType);
// //     }
// //   };

// //   const validateFields = () => {
// //     let valid = true;
// //     let errors = {
// //       assignmentNameError: '',
// //       descriptionError: '',
// //       deadlineError: '',
// //       fileError: '',
// //     };

// //     if (!assignmentName) {
// //       errors.assignmentNameError = 'Assignment name is required.';
// //       valid = false;
// //     }

// //     if (!description) {
// //       errors.descriptionError = 'Description is required.';
// //       valid = false;
// //     }

// //     if (!deadline) {
// //       errors.deadlineError = 'Deadline is required.';
// //       valid = false;
// //     }

// //     if (!fileUri) {
// //       errors.fileError = 'File is required.';
// //       valid = false;
// //     }

// //     setErrorMessages(errors);
// //     return valid;
// //   };

// //   const handleSubmit = async () => {
// //     if (!validateFields()) return;

// //     const formData = new FormData();
// //     formData.append('assignment_name', assignmentName);
// //     formData.append('description', description);
// //     formData.append('deadline', deadline);
// //     formData.append('document', {
// //       uri: fileUri,
// //       type: fileType,
// //       name: fileName,
// //     });

// //     try {
// //       const response = await axios.post('http://localhost/MobApp/my-app/php_api/createSubmission.php', formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data',
// //         },
// //       });

// //       if (response.data.success) {
// //         Alert.alert('Success', response.data.message);
// //       } else {
// //         Alert.alert('Error', response.data.message);
// //       }
// //     } catch (error) {
// //       Alert.alert('Error', 'An error occurred while submitting the form.');
// //     }
// //   };

// //   const handleCancel = () => {
// //     setAssignmentName('');
// //     setDescription('');
// //     setDeadline('');
// //     setFileUri(null);
// //     setFileName('');
// //     setFileType('');
// //     setErrorMessages({
// //       assignmentNameError: '',
// //       descriptionError: '',
// //       deadlineError: '',
// //       fileError: '',
// //     });
// //   };

// //   return (
// //     <View style={styles.container}>
// //     {/* Include Sidebar */}
// //     <Sidebar />
// //       <Text style={styles.header}>Create Assignment</Text>

// //       <TextInput
// //         style={styles.input}
// //         placeholder="Assignment Name"
// //         value={assignmentName}
// //         onChangeText={setAssignmentName}
// //       />
// //       {errorMessages.assignmentNameError && (
// //         <Text style={styles.error}>{errorMessages.assignmentNameError}</Text>
// //       )}

// //       <TextInput
// //         style={styles.input}
// //         placeholder="Description"
// //         value={description}
// //         onChangeText={setDescription}
// //       />
// //       {errorMessages.descriptionError && (
// //         <Text style={styles.error}>{errorMessages.descriptionError}</Text>
// //       )}

// //       <TextInput
// //         style={styles.input}
// //         placeholder="Deadline (mm/dd/yyyy)"
// //         value={deadline}
// //         onChangeText={setDeadline}
// //         keyboardType="numeric"
// //       />
// //       {errorMessages.deadlineError && (
// //         <Text style={styles.error}>{errorMessages.deadlineError}</Text>
// //       )}

// //       <TouchableOpacity style={styles.button} onPress={pickFile}>
// //         <Text style={styles.buttonText}>Choose File</Text>
// //       </TouchableOpacity>

// //       {fileUri && (
// //         <Text style={styles.fileText}>Selected File: {fileName}</Text>
// //       )}
// //       {errorMessages.fileError && (
// //         <Text style={styles.error}>{errorMessages.fileError}</Text>
// //       )}

// //       <View style={styles.buttonContainer}>
// //         <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
// //           <Text style={styles.cancelText}>Cancel</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
// //           <Text style={styles.submitText}>Create Assignment</Text>
// //         </TouchableOpacity>
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //     justifyContent: 'center',
// //   },
// //   header: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     textAlign: 'center',
// //   },
// //   input: {
// //     height: 40,
// //     borderColor: '#ccc',
// //     borderWidth: 1,
// //     marginBottom: 10,
// //     paddingLeft: 10,
// //   },
// //   button: {
// //     backgroundColor: '#007BFF',
// //     padding: 10,
// //     marginBottom: 10,
// //     alignItems: 'center',
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //   },
// //   error: {
// //     color: 'red',
// //     fontSize: 12,
// //   },
// //   fileText: {
// //     color: 'green',
// //     fontSize: 14,
// //     marginTop: 10,
// //   },
// //   buttonContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     marginTop: 20,
// //   },
// //   cancelButton: {
// //     backgroundColor: '#f44336',
// //     padding: 10,
// //     width: '45%',
// //     alignItems: 'center',
// //   },
// //   cancelText: {
// //     color: '#fff',
// //     fontSize: 16,
// //   },
// //   submitButton: {
// //     backgroundColor: '#007BFF',
// //     padding: 10,
// //     width: '45%',
// //     alignItems: 'center',
// //   },
// //   submitText: {
// //     color: '#fff',
// //     fontSize: 16,
// //   },
// // });

// // export default CreateAssignmentScreen;


// import React, { useState } from 'react';
// import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native';
// import * as DocumentPicker from 'expo-document-picker';
// import axios from 'axios';
// // Ensure Sidebar is a valid React component and imported correctly
// import Sidebar from '../Coordinator/Sidebar';

// const CreateAssignmentScreen = () => {
//   const [assignmentName, setAssignmentName] = useState('');
//   const [description, setDescription] = useState('');
//   const [deadline, setDeadline] = useState('');
//   const [fileUri, setFileUri] = useState(null);
//   const [fileName, setFileName] = useState('');
//   const [fileType, setFileType] = useState('');
//   const [errorMessages, setErrorMessages] = useState({
//     assignmentNameError: '',
//     descriptionError: '',
//     deadlineError: '',
//     fileError: '',
//   });

//   const pickFile = async () => {
//     const result = await DocumentPicker.getDocumentAsync({
//       type: ['application/pdf', 'application/vnd.ms-powerpoint', 'application/msword'],
//     });

//     if (result.type === 'success') {
//       setFileUri(result.uri);
//       setFileName(result.name);
//       setFileType(result.mimeType);
//     } else {
//       Alert.alert('Error', 'File selection was canceled.');
//     }
//   };

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

//   const handleSubmit = async () => {
//     if (!validateFields()) return;

//     const formData = new FormData();
//     formData.append('assignment_name', assignmentName);
//     formData.append('description', description);
//     formData.append('deadline', deadline);
//     formData.append('document', {
//       uri: fileUri,
//       type: fileType,
//       name: fileName,
//     });

//     try {
//       const response = await axios.post(
//         'http://localhost/MobApp/my-app/php_api/createSubmission.php',
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );

//       if (response.data.success) {
//         Alert.alert('Success', response.data.message);
//       } else {
//         Alert.alert('Error', response.data.message);
//       }
//     } catch (error) {
//       Alert.alert('Error', 'An error occurred while submitting the form.');
//     }
//   };

//   const handleCancel = () => {
//     setAssignmentName('');
//     setDescription('');
//     setDeadline('');
//     setFileUri(null);
//     setFileName('');
//     setFileType('');
//     setErrorMessages({
//       assignmentNameError: '',
//       descriptionError: '',
//       deadlineError: '',
//       fileError: '',
//     });
//   };

//   return (
//     <View style={styles.container}>
//       {/* Render Sidebar only if it's a valid component */}
//       {Sidebar && <Sidebar />}
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
//         placeholder="Deadline (mm/dd/yyyy)"
//         value={deadline}
//         onChangeText={setDeadline}
//         keyboardType="numeric"
//       />
//       {errorMessages.deadlineError && <Text style={styles.error}>{errorMessages.deadlineError}</Text>}
//       <TouchableOpacity style={styles.button} onPress={pickFile}>
//         <Text style={styles.buttonText}>Choose File</Text>
//       </TouchableOpacity>
//       {fileUri && <Text style={styles.fileText}>Selected File: {fileName}</Text>}
//       {errorMessages.fileError && <Text style={styles.error}>{errorMessages.fileError}</Text>}
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
//           <Text style={styles.cancelText}>Cancel</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//           <Text style={styles.submitText}>Create Assignment</Text>
//         </TouchableOpacity>
//       </View>
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
//   fileText: {
//     color: 'green',
//     fontSize: 14,
//     marginTop: 10,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
//   cancelButton: {
//     backgroundColor: '#f44336',
//     padding: 10,
//     width: '45%',
//     alignItems: 'center',
//   },
//   cancelText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   submitButton: {
//     backgroundColor: '#007BFF',
//     padding: 10,
//     width: '45%',
//     alignItems: 'center',
//   },
//   submitText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default CreateAssignmentScreen;




// import React, { useState } from 'react';
// import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native';
// import * as DocumentPicker from 'expo-document-picker';
// import axios from 'axios';

// const CreateAssignmentScreen = () => {
//   const [assignmentName, setAssignmentName] = useState('');
//   const [description, setDescription] = useState('');
//   const [deadline, setDeadline] = useState('');
//   const [fileUri, setFileUri] = useState(null);
//   const [fileName, setFileName] = useState('');
//   const [fileType, setFileType] = useState('');
//   const [errorMessages, setErrorMessages] = useState({
//     assignmentNameError: '',
//     descriptionError: '',
//     deadlineError: '',
//     fileError: '',
//   });

//   const pickFile = async () => {
//     try {
//       const result = await DocumentPicker.getDocumentAsync({
//         type: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
//       });

//       if (result.type === 'success') {
//         setFileUri(result.uri);
//         setFileName(result.name);
//         setFileType(result.mimeType);
//       } else {
//         Alert.alert('Error', 'File selection was canceled.');
//       }
//     } catch (error) {
//       Alert.alert('Error', 'An error occurred while picking the file.');
//     }
//   };

//   const validateFields = () => {
//     const errors = {
//       assignmentNameError: '',
//       descriptionError: '',
//       deadlineError: '',
//       fileError: '',
//     };

//     let valid = true;

//     if (!assignmentName.trim()) {
//       errors.assignmentNameError = 'Assignment name is required.';
//       valid = false;
//     }

//     if (!description.trim()) {
//       errors.descriptionError = 'Description is required.';
//       valid = false;
//     }

//     if (!deadline.trim()) {
//       errors.deadlineError = 'Deadline is required.';
//       valid = false;
//     } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(deadline)) {
//       errors.deadlineError = 'Deadline must be in mm/dd/yyyy format.';
//       valid = false;
//     }

//     if (!fileUri) {
//       errors.fileError = 'File is required.';
//       valid = false;
//     }

//     setErrorMessages(errors);
//     return valid;
//   };

//   const handleSubmit = async () => {
//     if (!validateFields()) return;

//     const formData = new FormData();
//     formData.append('assignment_name', assignmentName.trim());
//     formData.append('description', description.trim());
//     formData.append('deadline', deadline.trim());
//     formData.append('document', {
//       uri: fileUri,
//       type: fileType,
//       name: fileName,
//     });

//     try {
//       const response = await axios.post(
//         'http://localhost/MobApp/my-app/php_api/createSubmission.php',
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );

//       if (response.data.success) {
//         Alert.alert('Success', response.data.message);
//         handleCancel();
//       } else {
//         Alert.alert('Error', response.data.message || 'Submission failed.');
//       }
//     } catch (error) {
//       Alert.alert('Error', 'An error occurred while submitting the form.');
//     }
//   };

//   const handleCancel = () => {
//     setAssignmentName('');
//     setDescription('');
//     setDeadline('');
//     setFileUri(null);
//     setFileName('');
//     setFileType('');
//     setErrorMessages({
//       assignmentNameError: '',
//       descriptionError: '',
//       deadlineError: '',
//       fileError: '',
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Create Assignment</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Assignment Name"
//         value={assignmentName}
//         onChangeText={
// setAssignmentName}
//       />
//       {errorMessages.assignmentNameError && <Text style={styles.error}>{errorMessages.assignmentNameError}</Text>}

//       <TextInput
//         style={styles.input}
//         placeholder="Description"
//         value={description}
//         onChangeText={setDescription}
//       />
//       {errorMessages.
// descriptionError && <Text style={styles.error}>{errorMessages.descriptionError}</Text>}

//       <TextInput
//         style={styles.input}
//         placeholder="Deadline (mm/dd/yyyy)"
//         value={deadline}
//         onChangeText={setDeadline}
//         keyboardType="numeric"
//       />
//       {errorMessages.deadlineError && <Text style={styles.error}>{
// errorMessages.deadlineError}</Text>}

//       <TouchableOpacity style={styles.button} onPress={pickFile}>
//         <Text style={styles.buttonText}>
// Choose File</Text>

//       </TouchableOpacity>
//       {fileUri && <Text style={styles.fileText}>
// Selected File: {fileName}</Text>}

//       {errorMessages.fileError && <Text style={styles.error}>{
// errorMessages.fileError}</Text>}
//       <View style={styles.buttonContainer}>

//         <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
//           <Text style={styles.cancelText}>
// Cancel</Text>

//         </TouchableOpacity>
//         <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//           <Text style={styles.submitText}>
// Create Assignment</Text>

//         </TouchableOpacity>
//       </View>
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
//     marginBottom: 20,
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
//     marginBottom: 10,

//   },
//   fileText: {
//     color: 'green',
//     fontSize: 14,
//     marginTop: 10,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
//   cancelButton: {
//     backgroundColor: '#f44336',
//     padding: 10,
//     width: '45%',
//     alignItems: 'center',
//   },
//   cancelText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   submitButton: {
//     backgroundColor: '#007BFF',
//     padding: 10,
//     width: '45%',
//     alignItems: 'center',
//   },
//   submitText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default CreateAssignmentScreen;


// import axios from 'axios';

// const CreateAssignmentScreen = async (formData) => {
//   try {
//     const response = await axios.post(
//       'http://localhost/MobApp/my-app/php_api/createSubmission.php',
//       formData,
//       {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       }
//     );
//     console.log('Response:', response.data);
//     alert(response.data.message);
//   } catch (error) {
//     console.error('Error uploading assignment:', error.message);
//     alert('Failed to upload assignment.');
//   }
// };

// // Usage example
// const formData = new FormData();
// formData.append('assignment_name', 'Assignment 1');
// formData.append('description', 'This is a test assignment.');
// formData.append('deadline', '2025-01-30');
// formData.append('document', {
//   uri: 'MobApp/my-app/src/screens/Coordinator/uploads', // Path to the local file
//   type: 'application/pdf', // MIME type
//   name: 'assignment.pdf', // File name
// });

// CreateAssignmentScreen(formData);


// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Alert,
//   StyleSheet,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,

// } from 'react-native';
// import * as DocumentPicker from 'expo-document-picker';
// import axios from 'axios';

// const CreateAssignmentScreen = () => {
//   const [assignmentName, setAssignmentName] = useState('');
//   const [description, setDescription] = useState('');
//   const [deadline, setDeadline] = useState('');
//   const [fileUri, setFileUri] = useState(null);
//   const [fileName, setFileName] = useState('');
//   const [fileType, setFileType] = useState('');
//   const [errorMessages, setErrorMessages] = useState({
//     assignmentNameError: '',
//     descriptionError: '',
//     deadlineError: '',
//     fileError: '',
//   });

//   const pickFile = async () => {
//     try {
//       const result = await DocumentPicker.
// getDocumentAsync({

//         type: [
//           'application/pdf',
//           'application/msword',
//           'application/vnd.openxmlformats-officedocument.wordprocessingml.document',

//         ],
//       });

//       if (result.type === 'success') {
//         setFileUri(result.uri);
//         setFileName(result.name);
//         setFileType(result.mimeType);
//       } else {
//         Alert.alert('Error', 'File selection was canceled.');
//       }
//     } catch (error) {
//       console.error('Error picking file:', error);

//       Alert.alert('Error', 'An error occurred while picking the file.');
//     }
//   };

//   const validateFields = () => {
//     const errors = {
//       assignmentNameError: '',
//       descriptionError: '',
//       deadlineError: '',
//       fileError: '',
//     };

//     let valid = true;

//     if (!assignmentName.trim()) {
//       errors.assignmentNameError = 'Assignment name is required.';
//       valid = false;
//     }

//     if (!description.trim()) {
//       errors.descriptionError = 'Description is required.';
//       valid = false;
//     }

//     if (!deadline.trim()) {
//       errors.deadlineError = 'Deadline is required.';
//       valid = false;
//     } else if (!/^\d{2}\/\d{2}\/\d{4}$/.
// test(deadline)) {

//       errors.deadlineError = 'Deadline must be in mm/dd/yyyy format.';
//       valid = false;
//     }

//     if (!fileUri) {
//       errors.fileError = 'File is required.';
//       valid = false;
//     }

//     setErrorMessages(errors);
//     return valid;
//   };

//   const handleSubmit = async () => {
//     if (!validateFields()) return;

//     const formData = new FormData();
//     formData.append('assignment_name', assignmentName.trim());

//     formData.append('description', description.trim());
//     formData.append('deadline', deadline.trim());
//     formData.append('document', {
//       uri: fileUri,
//       type: fileType,
//       name: fileName,
//     });

//     try {
//       const response = await axios.post(
//         'http://localhost/MobApp/my-app/php_api/createSubmission.php',
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );

//       if (response.data.success) {
//         Alert.alert('Success', response.data.message);
//         handleCancel();
//       } else {
//         Alert.alert('Error', response.data.message || 'Submission failed.');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       Alert.alert('Error', 'An error occurred while submitting the form.');
//     }
//   };

//   const handleCancel = () => {
//     setAssignmentName('');
//     setDescription('');
//     setDeadline('');
//     setFileUri(null);
//     setFileName('');
//     setFileType('');
//     setErrorMessages({
//       assignmentNameError: '',
//       descriptionError: '',
//       deadlineError: '',
//       fileError: '',
//     });
//   };

//   return (
//     <KeyboardAvoidingView
//       style={{ flex: 1 }}
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//     >
//       <ScrollView contentContainerStyle={styles.container}>
//         <Text style={styles.header}>Create Assignment</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Assignment Name"
//           value={assignmentName}
//           onChangeText={setAssignmentName}
//         />
//         {errorMessages.assignmentNameError && (
//           <Text style={styles.error}>{errorMessages.assignmentNameError}</Text>

//         )}
//         <TextInput
//           style={styles.input}
//           placeholder="Description"
//           value={description}
//           onChangeText={setDescription}
//         />
//         {errorMessages.
// descriptionError && (
//           <Text style={styles.error}>{errorMessages.descriptionError}</Text>

//         )}
//         <TextInput
//           style={styles.input}
//           placeholder="Deadline (mm/dd/yyyy)"
//           value={deadline}
//           onChangeText={setDeadline}
//           keyboardType="numeric"
//         />
//         {errorMessages.deadlineError && (
//           <Text style={styles.error}>{
// errorMessages.deadlineError}</Text>

//         )}
//         <TouchableOpacity style={styles.button} onPress={pickFile}>
//           <Text style={styles.buttonText}>
// Choose File</Text>

//         </TouchableOpacity>
//         {fileUri && <Text style={styles.fileText}>
// Selected File: {fileName}</Text>}
//         {errorMessages.fileError && (
//           <Text style={styles.error}>{errorMessages.fileError}</Text>
//         )}
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
//             <Text style={styles.cancelText}>Cancel</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//             <Text style={styles.submitText}>Create Assignment</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,

//     padding: 20,
//     justifyContent: 'center',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
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
//     marginBottom: 10,
//   },
//   fileText: {
//     color: 'green',
//     fontSize: 14,
//     marginTop: 10,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
//   cancelButton: {
//     backgroundColor: '#f44336',
//     padding: 10,
//     width: '45%',
//     alignItems: 'center',
//   },
//   cancelText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   submitButton: {
//     backgroundColor: '#007BFF',
//     padding: 10,
//     width: '45%',
//     alignItems: 'center',
//   },
//   submitText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default CreateAssignmentScreen;




// import React, { useState } from 'react';
// import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native';
// import * as DocumentPicker from 'expo-document-picker';
// import axios from 'axios';

// const CreateAssignmentScreen = () => {
//   const [fileUri, setFileUri] = useState(null);
//   const [fileName, setFileName] = useState('');
//   const [fileType, setFileType] = useState('');

//   const pickFile = async () => {
//     try {
//       const result = await DocumentPicker.getDocumentAsync({
//         type: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
//       });

//       if (result.type === 'success') {
//         setFileUri(result.uri);
//         setFileName(result.name);
//         setFileType(result.mimeType);
//       } else {
//         Alert.alert('Error', 'File selection was canceled.');
//       }
//     } catch (error) {
//       Alert.alert('Error', 'An error occurred while picking the file.');
//     }
//   };

//   const uploadFile = async () => {
//     if (!fileUri) {
//       Alert.alert('Error', 'Please select a file first.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('document', {
//       uri: fileUri,
//       type: fileType,
//       name: fileName,
//     });

//     try {
//       const response = await axios.post(
//         'http://<your-server-url>/uploadFile.php', // Replace <your-server-url> with your actual server URL
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );

//       if (response.data.success) {
//         Alert.alert('Success', response.data.message);
//         setFileUri(null);
//         setFileName('');
//         setFileType('');
//       } else {
//         Alert.alert('Error', response.data.message);
//       }
//     } catch (error) {
//       Alert.alert('Error', 'An error occurred while uploading the file.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Upload File</Text>
//       <TouchableOpacity style={styles.button} onPress={pickFile}>
//         <Text style={styles.buttonText}>Choose File</Text>
//       </TouchableOpacity>
//       {fileUri && <Text style={styles.fileText}>Selected File: {fileName}</Text>}
//       <TouchableOpacity style={styles.uploadButton} onPress={uploadFile}>
//         <Text style={styles.uploadButtonText}>Upload File</Text>
//       </TouchableOpacity>
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
//     marginBottom: 20,
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
//   fileText: {
//     color: 'green',
//     fontSize: 14,
//     marginTop: 10,
//   },
//   uploadButton: {
//     backgroundColor: '#28a745',
//     padding: 10,
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   uploadButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default CreateAssignmentScreen;



// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import DocumentPicker from 'react-native-document-picker';
// import axios from 'axios';

// export default function App() {
//   const [assignmentName, setAssignmentName] = useState('');
//   const [description, setDescription] = useState('');
//   const [deadline, setDeadline] = useState('');
//   const [file, setFile] = useState(null);

//   const handleFileSelect = async () => {
//     try {
//       const result = await DocumentPicker.pick({
//         type: [DocumentPicker.types.allFiles],
//       });
//       setFile(result);
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) {
//         console.log('File selection canceled');
//       } else {
//         Alert.alert('Error', 'File selection error');
//       }
//     }
//   };

//   const handleSubmit = async () => {
//     if (!assignmentName || !deadline || !file) {
//       Alert.alert('Error', 'Please fill all required fields');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('assignmentName', assignmentName);
//     formData.append('description', description);
//     formData.append('deadline', deadline);
//     formData.append('document', {
//       uri: file.uri,
//       type: file.type,
//       name: file.name,
//     });

//     try {
//       const response = await axios.post('http://localhost/MobApp/my-app/php_api/createSubmission.php', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       Alert.alert('Success', response.data.message);
//     } catch (error) {
//       Alert.alert('Error', 'Error creating assignment');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Create Assignment</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Assignment Name"
//         value={assignmentName}
//         onChangeText={setAssignmentName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Description"
//         value={description}
//         onChangeText={setDescription}
//         multiline
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Deadline (YYYY-MM-DD)"
//         value={deadline}
//         onChangeText={setDeadline}
//       />
//       <Button title="Select File" onPress={handleFileSelect} />
//       {file && <Text style={styles.fileName}>{file.name}</Text>}
//       <Button title="Create Assignment" onPress={handleSubmit} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, justifyContent: 'center' },
//   title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
//   input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 },
//   fileName: { marginVertical: 10, fontStyle: 'italic' },
// });


// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import DocumentPicker from 'react-native-document-picker';
// import axios from 'axios';

// const CreateAssignmentScreen = () => {
//   const [assignmentName, setAssignmentName] = useState('');
//   const [description, setDescription] = useState('');
//   const [deadline, setDeadline] = useState('');
//   const [file, setFile] = useState(null);

//   const handleFilePick = async () => {
//     try {
//       const result = await DocumentPicker.pick({
//         type: [DocumentPicker.types.allFiles],
//     });
//       setFile(result);
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) {
//         // User cancelled the picker
//       } else {
//         console.error(err);
//       }
//     }
//   };

//   const handleSubmit = async () => {
//     const formData = new FormData();
//     formData.append('assignment_name', assignmentName);
//     formData.append('description', description);
//     formData.append('deadline', deadline);
   
//     if (file) {
//       formData.append('document', {
//         uri: file.uri,
//         type: file.type,
//         name: file.name,
//       });
//     }

//     try {
//       const response = await axios.post('http://localhost/MobApp/my-app/php_api/createSubmission.php', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       if (response.data.status === 'success') {
//         Alert.alert('Success', response.data.message);
//       } else {
//         Alert.alert('Error', response.data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       Alert.alert('Error', 'Something went wrong!');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Create Assignment</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Assignment Name"
//         value={assignmentName}
//         onChangeText={setAssignmentName}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Description"
//         value={description}
//         onChangeText={setDescription}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Deadline"
//         value={deadline}
//         onChangeText={setDeadline}
//         keyboardType="datetime"
//       />
//       <Button title="Pick a File" onPress={handleFilePick} />
//       {file && <Text>{file.name}</Text>}
//       <Button title="Submit" onPress={handleSubmit} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   heading: {
//     fontSize: 24,
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 15,
//     paddingLeft: 10,
//   },
// });

// export default CreateAssignmentScreen;



import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';

const CreateAssignmentScreen = () => {
  const [assignmentName, setAssignmentName] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [fileUri, setFileUri] = useState(null);
  const [fileName, setFileName] = useState('');
  const [fileType, setFileType] = useState('');
  const [errorMessages, setErrorMessages] = useState({
    assignmentNameError: '',
    descriptionError: '',
    deadlineError: '',
    fileError: '',
  });

  const pickFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
      });

      if (result.type === 'success') {
        setFileUri(result.uri);
        setFileName(result.name);
        setFileType(result.mimeType);
      } else {
        Alert.alert('Error', 'File selection was canceled.');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred while picking the file.');
    }
  };

  const validateFields = () => {
    const errors = {
      assignmentNameError: '',
      descriptionError: '',
      deadlineError: '',
      fileError: '',
    };

    let valid = true;

    if (!assignmentName.trim()) {
      errors.assignmentNameError = 'Assignment name is required.';
      valid = false;
    }

    if (!description.trim()) {
      errors.descriptionError = 'Description is required.';
      valid = false;
    }

    if (!deadline.trim()) {
      errors.deadlineError = 'Deadline is required.';
      valid = false;
    } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(deadline)) {
      errors.deadlineError = 'Deadline must be in mm/dd/yyyy format.';
      valid = false;
    }

    if (!fileUri) {
      errors.fileError = 'File is required.';
      valid = false;
    }

    setErrorMessages(errors);
    return valid;
  };

  const handleSubmit = async () => {
    if (!validateFields()) return;

    const formData = new FormData();
    formData.append('assignment_name', assignmentName.trim());
    formData.append('description', description.trim());
    formData.append('deadline', deadline.trim());
    formData.append('document', {
      uri: fileUri,
      type: fileType,
      name: fileName,
    });

    try {
      const response = await axios.post(
        'http://localhost/MobApp/my-app/php_api/createSubmission.php',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.data.success) {
        Alert.alert('Success', response.data.message);
        handleCancel();
      } else {
        Alert.alert('Error', response.data.message || 'Submission failed.');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred while submitting the form.');
    }
  };

  const handleCancel = () => {
    setAssignmentName('');
    setDescription('');
    setDeadline('');
    setFileUri(null);
    setFileName('');
    setFileType('');
    setErrorMessages({
      assignmentNameError: '',
      descriptionError: '',
      deadlineError: '',
      fileError: '',
    });
  };

  return (
    
    <View style={styles.container}>
    <Text style={styles.header}>Create Assignment</Text>
    <TextInput
      style={styles.input}
      placeholder="Assignment Name"
      value={assignmentName}
      onChangeText={setAssignmentName}
    />
    {errorMessages.assignmentNameError && (
      <Text style={styles.error}>{errorMessages.assignmentNameError}</Text>
  
    )}
   
    <TextInput
      style={styles.input}
      placeholder="Description"
      value={description}
      onChangeText={setDescription}
    />
    {errorMessages.
  descriptionError && (
      <Text style={styles.error}>{errorMessages.descriptionError}</Text>
  
    )}
   
    <TextInput
      style={styles.input}
      placeholder="Deadline (mm/dd/yyyy)"
      value={deadline}
      onChangeText={setDeadline}
      keyboardType="numeric"
    />
    {errorMessages.deadlineError && (
      <Text style={styles.error}>{
  errorMessages.deadlineError}</Text>
  
    )}
   
    <TouchableOpacity style={styles.button} onPress={pickFile}>
      <Text style={styles.buttonText}>
  Choose File</Text>
  
    </TouchableOpacity>
   
    {fileUri && <Text style={styles.fileText}>
  Selected File: {fileName}</Text>}
  
   
    {errorMessages.fileError && (
      <Text style={styles.error}>{
  errorMessages.fileError}</Text>
    )}
   
    <View style={styles.buttonContainer}>
  
      <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
        <Text style={styles.cancelText}>
  Cancel</Text>
  
      </TouchableOpacity>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>
  Create Assignment</Text>
      </TouchableOpacity>
    </View>
  </View>
    
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  fileText: {
    color: 'green',
    fontSize: 14,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: '#f44336',
    padding: 10,
    width: '45%',
    alignItems: 'center',
  },
  cancelText: {
    color: '#fff',
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    width: '45%',
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CreateAssignmentScreen;