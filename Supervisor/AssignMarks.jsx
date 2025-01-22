// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert, TouchableOpacity } from 'react-native';
// import axios from 'axios';

// const AssignMarks = () => {
//   const [projects, setProjects] = useState([]);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [formDetails, setFormDetails] = useState([]);
//   const [students, setStudents] = useState([]);
//   const [marks, setMarks] = useState({});
//   const [formComment, setFormComment] = useState('');

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     try {
//       const response = await axios.get('http://localhost/MobApp/my-app/php_api/SProjects.php');
//       setProjects(response.data);
//     } catch (error) {
//       console.error('Error fetching projects:', error);
//     }
//   };

//   const fetchFormDetails = async (projectId, formId) => {
//     try {
//       const projectResponse = await axios.get(`http://localhost/MobApp/my-app/php_api/SProjects.php/${projectId}`);
//       const formResponse = await axios.get(`http://localhost/MobApp/my-app/php_api/SForms.php/${formId}`);
//       setSelectedProject(projectResponse.data);
//       setFormDetails(formResponse.data.details);
//       setStudents(projectResponse.data.students);
//     } catch (error) {
//       console.error('Error fetching form details:', error);
//     }
//   };

//   const handleMarksChange = (studentId, descriptionId, value) => {
//     setMarks((prevMarks) => ({
//       ...prevMarks,
//       [descriptionId]: {
//         ...prevMarks[descriptionId],
//         [studentId]: value,
//       },
//     }));
//   };

//   const submitMarks = async () => {
//     try {
//       const payload = {
//         projectId: selectedProject.id,
//         formId: selectedProject.formId,
//         marks,
//         formComment,
//       };
//       await axios.post('http://localhost/MobApp/my-app/php_api/SupSubmitMarks.php', payload);
//       Alert.alert('Success', 'Marks submitted successfully!');
//     } catch (error) {
//       console.error('Error submitting marks:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Assign Marks</Text>

//       <FlatList
//         data={projects}
//         keyExtractor={(item, index) => item.id ? item.id.toString() : `project-${index}`}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => fetchFormDetails(item.id, item.formId)}>
//             <Text style={styles.projectItem}>{item.title}</Text>
//           </TouchableOpacity>
//         )}
//       />

//       {selectedProject && (
//         <View>
//           <Text style={styles.subHeading}>{selectedProject.title}</Text>

//           <FlatList
//             data={formDetails}
//             keyExtractor={(item, index) => item.id ? item.id.toString() : `formDetail-${index}`}
//             renderItem={({ item }) => (
//               <View style={styles.detailRow}>
//                 <Text style={styles.detailText}>{item.description}</Text>
//                 <Text style={styles.detailText}>{item.maxMarks}</Text>
//                 {students.map((student) => (
//                   <TextInput
//                     key={`${student.id}-${item.id}`}  // Unique key for each TextInput
//                     style={styles.input}
//                     placeholder="Enter marks"
//                     keyboardType="numeric"
//                     onChangeText={(value) => handleMarksChange(student.id, item.id, value)}
//                   />
//                 ))}
//               </View>
//             )}
//           />

//           <TextInput
//             style={styles.commentInput}
//             placeholder="Add a comment"
//             value={formComment}
//             onChangeText={setFormComment}
//           />

//           <Button title="Submit Marks" onPress={submitMarks} />
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f8f9fa',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   subHeading: {
//     fontSize: 20,
//     fontWeight: '600',
//     marginVertical: 8,
//   },
//   projectItem: {
//     fontSize: 18,
//     padding: 10,
//     backgroundColor: '#e9ecef',
//     marginBottom: 8,
//     borderRadius: 8,
//   },
//   detailRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 8,
//   },
//   detailText: {
//     flex: 1,
//     fontSize: 16,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ced4da',
//     padding: 8,
//     marginHorizontal: 4,
//     borderRadius: 4,
//     flex: 1,
//   },
//   commentInput: {
//     borderWidth: 1,
//     borderColor: '#ced4da',
//     padding: 8,
//     marginVertical: 12,
//     borderRadius: 4,
//   },
// });

// export default AssignMarks;



// 

// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert, TouchableOpacity, ScrollView } from 'react-native';
// import axios from 'axios';

// const AssignMarks = () => {
//   const [projects, setProjects] = useState([]);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [formDetails, setFormDetails] = useState([]);
//   const [students, setStudents] = useState([]);
//   const [marks, setMarks] = useState({});
//   const [formComment, setFormComment] = useState('');

//   useEffect(() => {
//     fetchProjects();
//   }, []);

//   const fetchProjects = async () => {
//     try {
//       const response = await axios.get('http://localhost/MobApp/my-app/php_api/getSupProjects.php');
//       setProjects(response.data);
//     } catch (error) {
//       console.error('Error fetching projects:', error);
//     }
//   };

//   const fetchFormDetails = async (projectId, formId) => {
//     try {
//       const projectResponse = await axios.get(`http://localhost/MobApp/my-app/php_api/getSupProjects.php/${23}`);
//       const formResponse = await axios.get(`http://localhost/MobApp/my-app/php_api/get_forms.php/${28}`);
      
//       // Ensure project and form data is valid before setting state
//       if (projectResponse.data && formResponse.data) {
//         setSelectedProject(projectResponse.data);
//         setFormDetails(formResponse.data.details || []);
//         setStudents(projectResponse.data.students || []);
//       }
//     } catch (error) {
//       console.error('Error fetching form details:', error);
//     }
//   };

//   const handleMarksChange = (studentId, descriptionId, value) => {
//     setMarks((prevMarks) => ({
//       ...prevMarks,
//       [descriptionId]: {
//         ...prevMarks[descriptionId],
//         [studentId]: value,
//       },
//     }));
//   };

//   const submitMarks = async () => {
//     try {
//       // Check if required data exists
//       if (!selectedProject || !marks) {
//         Alert.alert('Error', 'Please select a project and enter marks.');
//         return;
//       }
//       const payload = {
//         projectId: selectedProject.id,
//         formId: selectedProject.formId,
//         marks,
//         formComment,
//       };
//       await axios.post('http://localhost/MobApp/my-app/php_api/SupSubmitMarks.php', payload);
//       Alert.alert('Success', 'Marks submitted successfully!');
//     } catch (error) {
//       console.error('Error submitting marks:', error);
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.heading}>Assign Marks</Text>

//       {/* List of Projects */}
//       <FlatList
//         data={projects}
//         keyExtractor={(item) => item.id ? item.id.toString() : 'default'}  // Ensure key is a string
//         renderItem={({ item }) => (
//           <TouchableOpacity style={styles.projectItem} onPress={() => fetchFormDetails(item.id, item.formId)}>
//             <Text style={styles.projectText}>{item.title}</Text>
//           </TouchableOpacity>
//         )}
//       />

//       {selectedProject && (
//         <View style={styles.selectedProjectContainer}>
//           <Text style={styles.subHeading}>{selectedProject.title}</Text>

//           {/* Marks Table */}
//           <View style={styles.table}>
//             <View style={styles.tableHeader}>
//               <Text style={styles.tableHeaderText}>Description</Text>
//               <Text style={styles.tableHeaderText}>Max Marks</Text>
//               {students.map((student) => (
//                 <Text key={student.id ? student.id.toString() : 'default'} style={styles.tableHeaderText}>{student.name}</Text>
//               ))}
//             </View>

//             {formDetails.map((item) => (
//               <View key={item.id ? item.id.toString() : 'default'} style={styles.tableRow}>
//                 <Text style={styles.tableCell}>{item.description}</Text>
//                 <Text style={styles.tableCell}>{item.maxMarks}</Text>
//                 {students.map((student) => (
//                   <TextInput
//                     key={`${student.id}-${item.id}`}  // Unique key for each TextInput
//                     style={styles.input}
//                     placeholder="Enter marks"
//                     keyboardType="numeric"
//                     onChangeText={(value) => handleMarksChange(student.id, item.id, value)}
//                   />
//                 ))}
//               </View>
//             ))}
//           </View>

//           {/* Comment Input */}
//           <TextInput
//             style={styles.commentInput}
//             placeholder="Add a comment"
//             value={formComment}
//             onChangeText={setFormComment}
//           />

//           <Text style={styles.totalMarks}>Total Marks: 60</Text>
//           <Text style={styles.totalMarks}>Passing Marks: 30</Text>

//           {/* Save Marks Button */}
//           <Button title="Save All Marks" onPress={submitMarks} />
//         </View>
//       )}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 16,
//     backgroundColor: '#f8f9fa',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   subHeading: {
//     fontSize: 20,
//     fontWeight: '600',
//     marginVertical: 8,
//   },
//   projectItem: {
//     fontSize: 18,
//     padding: 10,
//     backgroundColor: '#e9ecef',
//     marginBottom: 8,
//     borderRadius: 8,
//   },
//   projectText: {
//     textAlign: 'center',
//   },
//   selectedProjectContainer: {
//     marginTop: 20,
//   },
//   table: {
//     marginTop: 16,
//     marginBottom: 16,
//   },
//   tableHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingBottom: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ced4da',
//   },
//   tableHeaderText: {
//     flex: 1,
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   tableRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ced4da',
//   },
//   tableCell: {
//     flex: 1,
//     fontSize: 16,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ced4da',
//     padding: 8,
//     marginHorizontal: 4,
//     borderRadius: 4,
//     flex: 1,
//   },
//   commentInput: {
//     borderWidth: 1,
//     borderColor: '#ced4da',
//     padding: 8,
//     marginVertical: 12,
//     borderRadius: 4,
//   },
//   totalMarks: {
//     fontSize: 16,
//     marginVertical: 8,
//   },
// });

// export default AssignMarks;

// uppp
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TextInput,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// import { Table, Row, Rows } from 'react-native-table-component';
// import { useNavigation } from '@react-navigation/native';

// const AssignMarks = () => {
//   const navigation = useNavigation();
//   const [marks, setMarks] = useState({});
//   const [formComment, setFormComment] = useState('');
//   const [totalMarks, setTotalMarks] = useState({});
//   const maxMarks = 100; // Example max marks for each field

//   // Sample data
//   const students = [
//     { id: 1, name: 'John Doe' },
//     { id: 2, name: 'Jane Smith' },
//   ];

//   const formDetails = [
//     { id: 1, description: 'Project Understanding', maxMarks: 30 },
//     { id: 2, description: 'Implementation', maxMarks: 50 },
//     { id: 3, description: 'Presentation', maxMarks: 20 },
//   ];

//   // Calculate totals
//   const calculateTotals = () => {
//     const totals = {};
//     students.forEach((student) => {
//       totals[student.id] = formDetails.reduce(
//         (sum, detail) => sum + (parseFloat(marks[`${detail.id}_${student.id}`]) || 0),
//         0
//       );
//     });
//     setTotalMarks(totals);
//   };

//   // Validate and submit form
//   const validateAndSubmit = () => {
//     let isValid = true;
//     formDetails.forEach((detail) => {
//       students.forEach((student) => {
//         const value = parseFloat(marks[`${detail.id}_${student.id}`]) || 0;
//         if (value < 0 || value > detail.maxMarks) {
//           isValid = false;
//         }
//       });
//     });

//     if (!isValid) {
//       Alert.alert('Invalid Input', 'Please ensure all marks are within valid ranges.');
//       return;
//     }

//     // Submit data
//     const payload = {
//       marks,
//       formComment,
//     };

//     // Use fetch or axios to send data to the backend
//     console.log('Submitting data:', payload);
//     Alert.alert('Success', 'Marks submitted successfully!');
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.heading}>Assign Marks</Text>
//       <Table borderStyle={{ borderWidth: 1, borderColor: '#ddd' }}>
//         {/* Table Header */}
//         <Row
//           data={['S.No', 'Description', 'Max Marks', ...students.map((s) => s.name)]}
//           style={styles.header}
//           textStyle={styles.headerText}
//         />

//         {/* Table Rows */}
//         {formDetails.map((detail, index) => (
//           <Row
//             key={detail.id}
//             data={[
//               index + 1,
//               detail.description,
//               detail.maxMarks,
//               ...students.map((student) => (
//                 <TextInput
//                   key={`${detail.id}_${student.id}`}
//                   style={styles.input}
//                   keyboardType="numeric"
//                   placeholder="0"
//                   maxLength={3}
//                   onChangeText={(value) => {
//                     setMarks((prev) => ({
//                       ...prev,
//                       [`${detail.id}_${student.id}`]: value,
//                     }));
//                     calculateTotals();
//                   }}
//                 />
//               )),
//             ]}
//             textStyle={styles.rowText}
//           />
//         ))}

//         {/* Totals Row */}
//         <Row
//           data={[
//             'Total',
//             '',
//             '',
//             ...students.map((student) => totalMarks[student.id] || 0),
//           ]}
//           textStyle={styles.rowText}
//         />
//       </Table>

//       {/* Form Comment Section */}
//       <Text style={styles.commentLabel}>Comment for the Form</Text>
//       <TextInput
//         style={styles.textArea}
//         multiline
//         numberOfLines={4}
//         placeholder="Write your comment for the entire form..."
//         value={formComment}
//         onChangeText={setFormComment}
//       />

//       {/* Submit Button */}
//       <TouchableOpacity style={styles.submitButton} onPress={validateAndSubmit}>
//         <Text style={styles.submitButtonText}>Save All Marks</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//     padding: 10,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#0a4a91',
//     marginBottom: 20,
//   },
//   header: {
//     height: 50,
//     backgroundColor: '#e9ecef',
//   },
//   headerText: {
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   rowText: {
//     textAlign: 'center',
//     paddingVertical: 10,
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     textAlign: 'center',
//     paddingHorizontal: 5,
//   },
//   commentLabel: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 20,
//   },
//   textArea: {
//     height: 80,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     padding: 10,
//     textAlignVertical: 'top',
//     backgroundColor: '#fff',
//   },
//   submitButton: {
//     backgroundColor: '#0d6efd',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   submitButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });

// export default AssignMarks;



// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, ScrollView, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const AssignMarks = ({ route }) => {
//   const { formId, projectId, formTitle, studentsNames, formDetails, totalMarks, passingMarks } = route.params;
//   const [marks, setMarks] = useState({});
//   const [formComment, setFormComment] = useState('');
//   const navigation = useNavigation();

//   useEffect(() => {
//     // Initialize marks state
//     const initialMarks = {};
//     formDetails.forEach((detail) => {
//       studentsNames.forEach((_, studentId) => {
//         if (!initialMarks[detail.id]) {
//           initialMarks[detail.id] = {};
//         }
//         initialMarks[detail.id][studentId] = '';
//       });
//     });
//     setMarks(initialMarks);
//   }, [formDetails, studentsNames]);

//   const calculateTotals = () => {
//     const totals = {};
//     Object.values(marks).forEach((studentMarks) => {
//       Object.entries(studentMarks).forEach(([studentId, value]) => {
//         totals[studentId] = (totals[studentId] || 0) + (parseFloat(value) || 0);
//       });
//     });
//     return totals;
//   };

//   const validateForm = () => {
//     for (const detail of formDetails) {
//       for (const studentId in marks[detail.id]) {
//         const value = parseFloat(marks[detail.id][studentId]);
//         const max = detail.max_marks;
//         if (isNaN(value) || value < 0 || value > max) {
//           return false;
//         }
//       }
//     }
//     return true;
//   };

//   const handleSubmit = async () => {
//     if (!validateForm()) {
//       Alert.alert("Error", "Please fill all fields correctly. Marks must be between 0 and the maximum marks.");
//       return;
//     }

//     const payload = {
//       projectId,
//       formId,
//       marks,
//       formComment,
//     };

//     try {
//       const response = await fetch('http://localhost/MobApp/my-app/php_api/SupSubmitMarks.php', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       const result = await response.json();
//       if (response.ok) {
//         Alert.alert("Success", "Marks have been successfully saved.");
//         navigation.goBack();
//       } else {
//         Alert.alert("Error", result.message || "An error occurred while saving marks.");
//       }
//     } catch (error) {
//       console.error(error);
//       Alert.alert("Error", "Could not connect to the server.");
//     }
//   };

//   const totals = calculateTotals();

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.heading}>Assign Marks</Text>
//       <Text style={styles.subheading}>{formTitle}</Text>
//       {formDetails.map((detail, index) => (
//         <View key={detail.id} style={styles.row}>
//           <Text style={styles.index}>{index + 1}</Text>
//           <Text style={styles.description}>{detail.description}</Text>
//           <Text style={styles.maxMarks}>Max: {detail.max_marks}</Text>
//           {Object.entries(studentsNames).map(([studentId, studentName]) => (
//             <View key={studentId} style={styles.inputContainer}>
//               <Text style={styles.studentName}>{studentName}</Text>
//               <TextInput
//                 style={styles.input}
//                 keyboardType="numeric"
//                 placeholder="Marks"
//                 value={marks[detail.id]?.[studentId] || ''}
//                 onChangeText={(value) =>
//                   setMarks((prev) => ({
//                     ...prev,
//                     [detail.id]: {
//                       ...prev[detail.id],
//                       [studentId]: value,
//                     },
//                   }))
//                 }
//               />
//             </View>
//           ))}
//         </View>
//       ))}
//       <Text style={styles.totalHeading}>Totals</Text>
//       {Object.entries(studentsNames).map(([studentId, studentName]) => (
//         <Text key={studentId} style={styles.totalText}>
//           {studentName}: {totals[studentId] || 0}
//         </Text>
//       ))}
//       <TextInput
//         style={styles.commentBox}
//         multiline
//         placeholder="Write your comment for the form..."
//         value={formComment}
//         onChangeText={setFormComment}
//       />
//       <View style={styles.footer}>
//         <Text>Total Marks: {totalMarks}</Text>
//         <Text>Passing Marks: {passingMarks}</Text>
//       </View>
//       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Save All Marks</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#f9f9f9',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#0a4a91',
//     marginBottom: 20,
//   },
//   subheading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   row: {
//     marginBottom: 15,
//     padding: 10,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//   },
//   index: {
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   description: {
//     marginBottom: 5,
//   },
//   maxMarks: {
//     color: '#666',
//     marginBottom: 10,
//   },
//   inputContainer: {
//     marginBottom: 5,
//   },
//   studentName: {
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 5,
//     marginBottom: 5,
//   },
//   totalHeading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 20,
//   },
//   totalText: {
//     fontSize: 16,
//   },
//   commentBox: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 10,
//     padding: 10,
//     marginTop: 15,
//   },
//   footer: {
//     marginTop: 20,
//   },
//   button: {
//     backgroundColor: '#0a4a91',
//     padding: 15,
//     borderRadius: 5,
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default AssignMarks;


// 

// import React, { useEffect, useState } from 'react';
// import { View, Text, TextInput, FlatList, StyleSheet, ScrollView } from 'react-native';

// const AssignMarks = () => {
//   const [forms, setForms] = useState([]);
//   const [students, setStudents] = useState([]);
//   const [description, setDescription] = useState([]);

//   useEffect(() => {
//     // Fetch VisibleForms data
//     fetch('http://localhost/MobApp/my-app/php_api/getVisibleForms.php') // Replace with actual API endpoint
//       .then((response) => response.json())
//       .then((data) => setForms(data));

//     // Fetch CustomizedForm data
//     fetch('http://localhost/MobApp/my-app/php_api/getFormsC.php') // Replace with actual API endpoint
//       .then((response) => response.json())
//       .then((data) => setDescription(data));

//     // Fetch students enrolled in the project
//     fetch('http://localhost/MobApp/my-app/php_api/getStudents.php') // Replace with actual API endpoint
//       .then((response) => response.json())
//       .then((data) => setStudents(data));
//   }, []);

//   const renderTableRows = () => {
//     return students.map((student, index) => (
//       <View key={student.id} style={styles.row}>
//         <Text style={styles.tableCell}>{index + 1}</Text>
//         <Text style={styles.tableCell}>{description ? description[index].title : ''}</Text>
//         <Text style={styles.tableCell}>{student.maxMarks}</Text>
//         <TextInput
//           style={styles.tableCell}
//           placeholder="Enter Marks"
//           keyboardType="numeric"
//         />
//       </View>
//     ));
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.heading}>Assign Marks</Text>

//       {/* Fetch and display title from VisibleForms */}
//       {forms.length > 0 && (
//         <Text style={styles.formTitle}>{forms[0]?.title}</Text>
//       )}

//       <View style={styles.table}>
//         <View style={styles.headerRow}>
//           <Text style={styles.headerCell}>S.no</Text>
//           <Text style={styles.headerCell}>Description</Text>
//           <Text style={styles.headerCell}>Max Marks</Text>
//           {/* Render student names dynamically as columns */}
//           {students.map((student) => (
//             <Text key={student.id} style={styles.headerCell}>
//               {student.name}
//             </Text>
//           ))}
//         </View>

//         {renderTableRows()}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   formTitle: {
//     fontSize: 18,
//     fontWeight: '500',
//     marginVertical: 10,
//   },
//   table: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     marginTop: 20,
//   },
//   headerRow: {
//     flexDirection: 'row',
//     backgroundColor: '#f1f1f1',
//     padding: 10,
//     borderBottomWidth: 1,
//   },
//   headerCell: {
//     flex: 1,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   row: {
//     flexDirection: 'row',
//     padding: 10,
//     borderBottomWidth: 1,
//   },
//   tableCell: {
//     flex: 1,
//     textAlign: 'center',
//     padding: 5,
//     borderWidth: 1,
//   },
// });

// export default AssignMarks;


// import React, { useEffect, useState } from 'react';
// import { View, Text, TextInput, FlatList, StyleSheet, ScrollView } from 'react-native';

// const AssignMarks = () => {
//   const [forms, setForms] = useState([]);
//   const [students, setStudents] = useState([]);
//   const [description, setDescription] = useState([]);

//   useEffect(() => {
//     // Fetch VisibleForms data
//     fetch('http://localhost/MobApp/my-app/php_api/getVisibleForms.php') // Replace with actual API endpoint
//       .then((response) => response.json())
//       .then((data) => setForms(data));

//     // Fetch CustomizedForm data
//     fetch('http://localhost/MobApp/my-app/php_api/getFormsC.php') // Replace with actual API endpoint
//       .then((response) => response.json())
//       .then((data) => setDescription(data));

//     // Fetch students enrolled in the project
//     fetch('http://localhost/MobApp/my-app/php_api/getStudents.php') // Replace with actual API endpoint
//       .then((response) => response.json())
//       .then((data) => setStudents(data));
//   }, []);

//   const renderTableRows = () => {
//     return students.map((student, index) => (
//       <View key={student.id} style={styles.row}>
//         <Text style={styles.tableCell}>{index + 1}</Text>
//         <Text style={styles.tableCell}>
//           {/* Make sure description exists and has a title */}
//           {description && description[index] ? description[index].title : 'No Description'}
//         </Text>
//         <Text style={styles.tableCell}>{student.maxMarks}</Text>
//         <TextInput
//           style={styles.tableCell}
//           placeholder="Enter Marks"
//           keyboardType="numeric"
//         />
//       </View>
//     ));
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.heading}>Assign Marks</Text>

//       {/* Fetch and display title from VisibleForms */}
//       {forms.length > 0 && forms[0]?.title ? (
//         <Text style={styles.formTitle}>{forms[0].title}</Text>
//       ) : (
//         <Text style={styles.formTitle}>No Title Available</Text>
//       )}

//       <View style={styles.table}>
//         <View style={styles.headerRow}>
//           <Text style={styles.headerCell}>S.no</Text>
//           <Text style={styles.headerCell}>Description</Text>
//           <Text style={styles.headerCell}>Max Marks</Text>
//           {/* Render student names dynamically as columns */}
//           {students.map((student) => (
//             <Text key={student.id} style={styles.headerCell}>
//               {student.name}
//             </Text>
//           ))}
//         </View>

//         {renderTableRows()}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   formTitle: {
//     fontSize: 18,
//     fontWeight: '500',
//     marginVertical: 10,
//   },
//   table: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     marginTop: 20,
//   },
//   headerRow: {
//     flexDirection: 'row',
//     backgroundColor: '#f1f1f1',
//     padding: 10,
//     borderBottomWidth: 1,
//   },
//   headerCell: {
//     flex: 1,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   row: {
//     flexDirection: 'row',
//     padding: 10,
//     borderBottomWidth: 1,
//   },
//   tableCell: {
//     flex: 1,
//     textAlign: 'center',
//     padding: 5,
//     borderWidth: 1,
//   },
// });

// export default AssignMarks;


// import React, { useEffect, useState } from 'react';
// import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';

// const AssignMarks = () => {
//   const [forms, setForms] = useState([]);
//   const [students, setStudents] = useState([]);
//   const [descriptions, setDescriptions] = useState([]);

//   useEffect(() => {
//     // Fetch VisibleForms data (Title)
//     fetch('http://localhost/MobApp/my-app/php_api/getVisibleForms.php') // Replace with actual API endpoint
//       .then((response) => response.json())
//       .then((data) => setForms(data));

//     // Fetch CustomizedForm data (Description)
//     fetch('http://localhost/MobApp/my-app/php_api/getFormsC.php') // Replace with actual API endpoint
//       .then((response) => response.json())
//       .then((data) => setDescriptions(data));

//     // Fetch students enrolled in the project
//     fetch('http://localhost/MobApp/my-app/php_api/getStudents.php') // Replace with actual API endpoint
//       .then((response) => response.json())
//       .then((data) => setStudents(data));
//   }, []);

//   const renderTableRows = () => {
//     return students.map((student, index) => (
//       <View key={student.id} style={styles.row}>
//         <Text style={styles.tableCell}>{index + 1}</Text>
//         <Text style={styles.tableCell}>
//           {/* Limit the number of descriptions to the available ones */}
//           {descriptions && descriptions[index] ? descriptions[index].description : 'No Description'}
//         </Text>
//         <Text style={styles.tableCell}>{student.maxMarks}</Text>
//         <TextInput
//           style={styles.tableCell}
//           placeholder="Enter Marks"
//           keyboardType="numeric"
//         />
//       </View>
//     ));
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.heading}>Assign Marks</Text>

//       {/* Fetch and display title from VisibleForms */}
//       {forms.length > 0 && forms[0]?.title ? (
//         <Text style={styles.formTitle}>{forms[0].title}</Text>
//       ) : (
//         <Text style={styles.formTitle}>No Title Available</Text>
//       )}

//       <View style={styles.table}>
//         <View style={styles.headerRow}>
//           <Text style={styles.headerCell}>S.no</Text>
//           <Text style={styles.headerCell}>Description</Text>
//           <Text style={styles.headerCell}>Max Marks</Text>
//           {/* Render student names dynamically as columns */}
//           {students.length > 0 && students[0]?.name ? (
//             students.map((student) => (
//               <Text key={student.id} style={styles.headerCell}>
//                 {student.name}
//               </Text>
//             ))
//           ) : (
//             <Text style={styles.headerCell}>No Students Available</Text>
//           )}
//         </View>

//         {renderTableRows()}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   formTitle: {
//     fontSize: 18,
//     fontWeight: '500',
//     marginVertical: 10,
//   },
//   table: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     marginTop: 20,
//   },
//   headerRow: {
//     flexDirection: 'row',
//     backgroundColor: '#f1f1f1',
//     padding: 10,
//     borderBottomWidth: 1,
//   },
//   headerCell: {
//     flex: 1,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   row: {
//     flexDirection: 'row',
//     padding: 10,
//     borderBottomWidth: 1,
//   },
//   tableCell: {
//     flex: 1,
//     textAlign: 'center',
//     padding: 5,
//     borderWidth: 1,
//   },
// });

// export default AssignMarks;


// 
// import React, { useEffect, useState } from 'react';
// import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';

// const AssignMarks = () => {
//   const [forms, setForms] = useState([]); // To store form titles
//   const [students, setStudents] = useState([]); // To store students
//   const [descriptions, setDescriptions] = useState([]); // To store form details

//   useEffect(() => {
//     // Fetch VisibleForms data (Title from customized_form table)
//     fetch('http://localhost/MobApp/my-app/php_api/getVisibleForms.php')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log('VisibleForms:', data); // Debugging line
//         setForms(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching VisibleForms:', error);
//       });
  
//     // Fetch form_detail data (Description from form_detail table)
//     fetch('http://localhost/MobApp/my-app/php_api/getFormDetails.php')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log('Descriptions:', data); // Debugging line
//         setDescriptions(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching descriptions:', error);
//         setDescriptions([]); // Fallback to an empty array if there is an error
//       });
  
//     // Fetch students enrolled in the project (from the student table)
//     fetch('http://localhost/MobApp/my-app/php_api/getStudents.php')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log('Students:', data); // Debugging line
//         setStudents(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching students:', error);
//       });
//   }, []);
  
//   const renderTableRows = () => {
//     // Ensure descriptions is an array
//     if (!Array.isArray(descriptions) || descriptions.length === 0) return null;
  
//     return descriptions.map((description, index) => {
//       const studentColumns = students.map((student) => (
//         <TextInput
//           key={student.id}  // Use student.id as the key
//           style={styles.tableCell}
//           placeholder="Enter Marks"
//           keyboardType="numeric"
//         />
//       ));
  
//       return (
//         <View key={index} style={styles.row}>
//           <Text style={styles.tableCell}>{index + 1}</Text>
//           <Text style={styles.tableCell}>{description.description || 'No Description'}</Text>
//           <Text style={styles.tableCell}>{description.maxMarks || 'No Marks Available'}</Text>
//           {studentColumns}
//         </View>
//       );
//     });
//   };
  
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.heading}>Assign Marks</Text>
  
//       {/* Fetch and display title from VisibleForms */}
//       {forms.length > 0 && forms[0]?.title ? (
//         <Text style={styles.formTitle}>{forms[0].title}</Text>
//       ) : (
//         <Text style={styles.formTitle}>No Title Available</Text>
//       )}
  
//       <View style={styles.table}>
//         <View style={styles.headerRow}>
//           <Text style={styles.headerCell}>S.no</Text>
//           <Text style={styles.headerCell}>Description</Text>
//           <Text style={styles.headerCell}>Max Marks</Text>
  
//           {/* Render student names dynamically as columns */}
//           {students.length > 0 ? (
//             students.map((student) => (
//               <Text key={student.id} style={styles.headerCell}>
//                 {student.name}
//               </Text>
//             ))
//           ) : (
//             <Text style={styles.headerCell}>No Students Available</Text>
//           )}
//         </View>
  
//         {renderTableRows()}
//       </View>
//     </ScrollView>
//   );
  
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   formTitle: {
//     fontSize: 18,
//     fontWeight: '500',
//     marginVertical: 10,
//   },
//   table: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     marginTop: 20,
//   },
//   headerRow: {
//     flexDirection: 'row',
//     backgroundColor: '#f1f1f1',
//     padding: 10,
//     borderBottomWidth: 1,
//   },
//   headerCell: {
//     flex: 1,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   row: {
//     flexDirection: 'row',
//     padding: 10,
//     borderBottomWidth: 1,
//   },
//   tableCell: {
//     flex: 1,
//     textAlign: 'center',
//     padding: 5,
//     borderWidth: 1,
//   },
// });

// export default AssignMarks;


// import React, { useEffect, useState } from 'react';
// import { View, Text, TextInput, StyleSheet, ScrollView, Picker } from 'react-native';

// const AssignMarks = () => {
//   const [forms, setForms] = useState([]); // Ensure forms is initialized as an empty array
//   const [students, setStudents] = useState([]); // To store students based on selected project
//   const [descriptions, setDescriptions] = useState([]); // To store form details
//   const [selectedProject, setSelectedProject] = useState(''); // To store the selected project ID

//   useEffect(() => {
//     // Fetch VisibleForms data (Title from customized_form table)
//     fetch('http://localhost/MobApp/my-app/php_api/getVisibleForms.php')
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('VisibleForms:', data);  // Debugging line
//         if (Array.isArray(data)) {
//           setForms(data);
//         } else {
//           setForms([]); // Ensure forms is an empty array if the data is not valid
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         setForms([]); // Fallback to an empty array in case of error
//       });

//     // Fetch form_detail data (Description from form_detail table)
//     fetch('http://localhost/MobApp/my-app/php_api/getFormDetails.php')
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Descriptions:', data);  // Debugging line
//         setDescriptions(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching descriptions:', error);
//         setDescriptions([]); // Fallback to an empty array if there is an error
//       });
//   }, []);

//   useEffect(() => {
//     if (selectedProject) {
//       // Fetch students based on selected project
//       fetch(`http://localhost/MobApp/my-app/php_api/getStudentByProject.php?projectId=${23}`)
//         .then((response) => response.json())
//         .then((data) => {
//           console.log('Students:', data); // Debugging line
//           setStudents(data);
//         })
//         .catch((error) => {
//           console.error('Error fetching students:', error);
//         });
//     }
//   }, [selectedProject]);

//   const renderTableRows = () => {
//     if (!Array.isArray(descriptions) || descriptions.length === 0) return null;

//     return descriptions.map((description, index) => {
//       const studentColumns = students.map((student) => (
//         <TextInput
//           key={student.id}
//           style={styles.tableCell}
//           placeholder="Enter Marks"
//           keyboardType="numeric"
//         />
//       ));

//       return (
//         <View key={index} style={styles.row}>
//           <Text style={styles.tableCell}>{index + 1}</Text>
//           <Text style={styles.tableCell}>{description.description || 'No Description'}</Text>
//           <Text style={styles.tableCell}>{description.maxMarks || 'No Marks Available'}</Text>
//           {studentColumns}
//         </View>
//       );
//     });
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.heading}>Assign Marks</Text>

//       {/* Dropdown for project selection */}
//       <Picker
//         selectedValue={selectedProject}
//         onValueChange={(itemValue) => setSelectedProject(itemValue)}
//         style={styles.picker}
//       >
//         {forms && forms.length > 0 ? (
//           forms.map((form) => (
//             <Picker.Item key={form.id} label={form.title} value={form.id} />
//           ))
//         ) : (
//           <Picker.Item label="No Projects Available" value="" />
//         )}
//       </Picker>

//       {/* Display title from the selected project */}
//       {selectedProject && (
//         <Text style={styles.formTitle}>
//           {forms.find((form) => form.id === selectedProject)?.title || 'No Title Available'}
//         </Text>
//       )}

//       <View style={styles.table}>
//         <View style={styles.headerRow}>
//           <Text style={styles.headerCell}>S.no</Text>
//           <Text style={styles.headerCell}>Description</Text>
//           <Text style={styles.headerCell}>Max Marks</Text>

//           {/* Render student names dynamically as columns */}
//           {students.length > 0 ? (
//             students.map((student) => (
//               <Text key={student.id} style={styles.headerCell}>
//                 {student.name}
//               </Text>
//             ))
//           ) : (
//             <Text style={styles.headerCell}>No Students Available</Text>
//           )}
//         </View>

//         {renderTableRows()}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   formTitle: {
//     fontSize: 18,
//     fontWeight: '500',
//     marginVertical: 10,
//   },
//   table: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     marginTop: 20,
//   },
//   headerRow: {
//     flexDirection: 'row',
//     backgroundColor: '#f1f1f1',
//     padding: 10,
//     borderBottomWidth: 1,
//   },
//   headerCell: {
//     flex: 1,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   row: {
//     flexDirection: 'row',
//     padding: 10,
//     borderBottomWidth: 1,
//   },
//   tableCell: {
//     flex: 1,
//     textAlign: 'center',
//     padding: 5,
//     borderWidth: 1,
//   },
//   picker: {
//     height: 50,
//     width: '100%',
//     marginBottom: 20,
//   },
// });

// export default AssignMarks;


import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Picker } from 'react-native';
import SupNav from '../Supervisor/SupNav.jsx';

const AssignMarks = () => {
  const [forms, setForms] = useState([]); // Forms data (Visible forms)
  const [students, setStudents] = useState([]); // Students data for the selected project
  const [descriptions, setDescriptions] = useState([]); // Descriptions of each form (from form_detail)
  const [selectedProject, setSelectedProject] = useState(''); // Store selected project ID


  useEffect(() => {
    // Fetch VisibleForms data (Title from customized_form table)
    fetch('http://localhost/MobApp/my-app/php_api/getVisibleForms.php')
      .then((response) => response.json())
      .then((data) => {
        console.log('VisibleForms:', data);  // Debugging line
        if (Array.isArray(data)) {
          setForms(data);
        } else {
          setForms([]); // Fallback to empty array if data is invalid
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setForms([]); // Fallback to empty array if there's an error
      });

    // Fetch form_detail data (Description from form_detail table)
    fetch('http://localhost/MobApp/my-app/php_api/getFormDetails.php')
      .then((response) => response.json())
      .then((data) => {
        console.log('Descriptions:', data);  // Debugging line
        setDescriptions(data);
      })
      .catch((error) => {
        console.error('Error fetching descriptions:', error);
        setDescriptions([]); // Fallback to empty array if there's an error
      });
  }, []);

  useEffect(() => {
    if (selectedProject) {
      // Fetch students based on selected project
      fetch(`http://localhost/MobApp/my-app/php_api/getStudentByProject.php?projectId=${23}`)
  .then((response) => response.json())
  .then((data) => {
    console.log('Students:', data); // Debugging line
    setStudents(data);
  })
  .catch((error) => {
    console.error('Error fetching students:', error);
  });

    }
  }, [selectedProject]);

  const renderTableRows = () => {
    if (!Array.isArray(descriptions) || descriptions.length === 0) return null;

    return descriptions.map((description, index) => {
      const studentColumns = students.map((student) => (
        <TextInput
          key={student.id}
          style={styles.tableCell}
          placeholder="Enter Marks"
          keyboardType="numeric"
        />
      ));

      return (
        <View key={index} style={styles.row}>
          <Text style={styles.tableCell}>{index + 1}</Text>
          <Text style={styles.tableCell}>{description.description || 'No Description'}</Text>
          <Text style={styles.tableCell}>{description.maxMarks || 'No Marks Available'}</Text>
          {studentColumns}
        </View>
      );
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
    {/* SupNav Component */}
    <SupNav />

{/* Page Content */}
<View style={styles.content}>
  <Text style={styles.heading}>View Results</Text></View>

      

      {/* Display title from the selected project */}
      {selectedProject && (
        <Text style={styles.formTitle}>
          {forms.find((form) => form.id === selectedProject)?.title || 'No Title Available'}
        </Text>
      )}

      <View style={styles.table}>
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>S.no</Text>
          <Text style={styles.headerCell}>Description</Text>
          <Text style={styles.headerCell}>Max Marks</Text>

          {/* Render student names dynamically as columns */}
          {students.length > 0 ? (
            students.map((student) => (
              <Text key={student.id} style={styles.headerCell}>
                {student.name}
              </Text>
            ))
          ) : (
            <Text style={styles.headerCell}>No Students Available</Text>
          )}
        </View>

        {renderTableRows()}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
    marginTop: 10, 
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 20,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderBottomWidth: 1,
  },
  headerCell: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    padding: 5,
    borderWidth: 1,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
});

export default AssignMarks;
