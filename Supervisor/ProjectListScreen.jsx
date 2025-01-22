// // import React, { useState, useEffect } from 'react';
// // import {
// //   View,
// //   Text,
// //   FlatList,
// //   TouchableOpacity,
// //   Alert,
// //   StyleSheet,
// // } from 'react-native';
// // import axios from 'axios';

// // const ProjectListScreen = ({ route, navigation }) => {
// //   const { formId, supervisorId } = route.params; // Parameters passed from previous screen
// //   const [projects, setProjects] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchProjects = async () => {
// //       try {
// //         const response = await axios.get(
// //           `http://localhost/MobApp/my-app/php_api/get_projectsS.php?form_id=${24}&supervisor_id=${27}`
// //         );
// //         if (response.data && response.data.projects) {
// //           setProjects(response.data.projects);
// //         } else {
// //           Alert.alert('No Projects', 'No projects found for this form.');
// //         }
// //       } catch (error) {
// //         console.error('Error fetching projects:', error);
// //         Alert.alert('Error', 'Failed to fetch project data.');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProjects();
// //   }, [formId, supervisorId]);

// //   const handleAction = (projectId, marksSubmitted) => {
// //     if (marksSubmitted) {
// //       navigation.navigate('ViewMarks', { projectId, formId });
// //     } else {
// //       navigation.navigate('AssignMarks', { projectId, formId });
// //     }
// //   };

// //   const renderItem = ({ item }) => (
// //     <View style={styles.row}>
// //       <Text style={styles.cell}>{item.title}</Text>
// //       <TouchableOpacity
// //         style={item.marksSubmitted ? styles.viewButton : styles.evaluateButton}
// //         onPress={() => handleAction(item.id, item.marksSubmitted)}
// //       >
// //         <Text style={styles.buttonText}>
// //           {item.marksSubmitted ? 'View' : 'Evaluate'}
// //         </Text>
// //       </TouchableOpacity>
// //     </View>
// //   );

// //   if (loading) {
// //     return <Text style={styles.loadingText}>Loading...</Text>;
// //   }

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.heading}>Projects List</Text>
// //       <FlatList
// //         data={projects}
// //         renderItem={renderItem}
// //         keyExtractor={(item) => item.id.toString()}
// //         ListEmptyComponent={
// //           <Text style={styles.noDataText}>No projects found for this form.</Text>
// //         }
// //       />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //     backgroundColor: '#f8f9fa',
// //   },
// //   heading: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     color: '#0a4a91',
// //     marginBottom: 20,
// //   },
// //   row: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     padding: 15,
// //     backgroundColor: '#fff',
// //     marginBottom: 10,
// //     borderRadius: 8,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 4,
// //     elevation: 2,
// //   },
// //   cell: {
// //     flex: 1,
// //     fontSize: 16,
// //     color: '#333',
// //   },
// //   viewButton: {
// //     backgroundColor: '#28a745',
// //     paddingVertical: 8,
// //     paddingHorizontal: 15,
// //     borderRadius: 5,
// //   },
// //   evaluateButton: {
// //     backgroundColor: '#007bff',
// //     paddingVertical: 8,
// //     paddingHorizontal: 15,
// //     borderRadius: 5,
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontWeight: 'bold',
// //   },
// //   loadingText: {
// //     textAlign: 'center',
// //     marginTop: 20,
// //     fontSize: 18,
// //   },
// //   noDataText: {
// //     textAlign: 'center',
// //     marginTop: 20,
// //     fontSize: 16,
// //     color: '#666',
// //   },
// // });

// // export default ProjectListScreen;


// // import React, { useState, useEffect } from 'react';
// // import {
// //   View,
// //   Text,
// //   FlatList,
// //   TouchableOpacity,
// //   Alert,
// //   StyleSheet,
// // } from 'react-native';
// // import axios from 'axios';

// // const ProjectListScreen = ({ route, navigation }) => {
// //   const { formId, supervisorId } = route.params; // Parameters passed from the previous screen
// //   const [projects, setProjects] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   // Fetch projects from the API when the component mounts or parameters change
// //   useEffect(() => {
// //     const fetchProjects = async () => {
// //       try {
// //         const response = await axios.get(
// //           `http://localhost/MobApp/my-app/php_api/get_projectsS.php?form_id=${formId}&supervisor_id=${supervisorId}`
// //         );

// //         // Check if response contains projects
// //         if (response.data && response.data.projects) {
// //           setProjects(response.data.projects);
// //         } else {
// //           Alert.alert('No Projects', 'No projects found for this form.');
// //         }
// //       } catch (error) {
// //         console.error('Error fetching projects:', error);
// //         Alert.alert('Error', 'Failed to fetch project data.');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProjects();
// //   }, [formId, supervisorId]);

// //   // Handle action when either 'Evaluate' or 'View' button is clicked
// //   const handleAction = (projectId, marksSubmitted) => {
// //     if (marksSubmitted) {
// //       navigation.navigate('ViewMarks', { projectId, formId });
// //     } else {
// //       // Navigate to the 'SubmitMarks' screen if 'Evaluate' button is clicked
// //       navigation.navigate('SubmitMarks', { projectId, formId });
// //     }
// //   };

// //   // Render each project item
// //   const renderItem = ({ item }) => (
// //     <View style={styles.row}>
// //       <Text style={styles.cell}>{item.title}</Text>
// //       <TouchableOpacity
// //         style={item.marksSubmitted ? styles.viewButton : styles.evaluateButton}
// //         onPress={() => handleAction(item.id, item.marksSubmitted)}
// //       >
// //         <Text style={styles.buttonText}>
// //           {item.marksSubmitted ? 'View' : 'Evaluate'}
// //         </Text>
// //       </TouchableOpacity>
// //     </View>
// //   );

// //   // Show loading message while data is being fetched
// //   if (loading) {
// //     return <Text style={styles.loadingText}>Loading...</Text>;
// //   }

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.heading}>Projects List</Text>
// //       <FlatList
// //         data={projects}
// //         renderItem={renderItem}
// //         keyExtractor={(item) => item.id.toString()}
// //         ListEmptyComponent={
// //           <Text style={styles.noDataText}>No projects found for this form.</Text>
// //         }
// //       />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     padding: 20,
// //     backgroundColor: '#f8f9fa',
// //   },
// //   heading: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     color: '#0a4a91',
// //     marginBottom: 20,
// //   },
// //   row: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     padding: 15,
// //     backgroundColor: '#fff',
// //     marginBottom: 10,
// //     borderRadius: 8,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.1,
// //     shadowRadius: 4,
// //     elevation: 2,
// //   },
// //   cell: {
// //     flex: 1,
// //     fontSize: 16,
// //     color: '#333',
// //   },
// //   viewButton: {
// //     backgroundColor: '#28a745',
// //     paddingVertical: 8,
// //     paddingHorizontal: 15,
// //     borderRadius: 5,
// //   },
// //   evaluateButton: {
// //     backgroundColor: '#007bff',
// //     paddingVertical: 8,
// //     paddingHorizontal: 15,
// //     borderRadius: 5,
// //   },
// //   buttonText: {
// //     color: '#fff',
// //     fontWeight: 'bold',
// //   },
// //   loadingText: {
// //     textAlign: 'center',
// //     marginTop: 20,
// //     fontSize: 18,
// //   },
// //   noDataText: {
// //     textAlign: 'center',
// //     marginTop: 20,
// //     fontSize: 16,
// //     color: '#666',
// //   },
// // });

// // export default ProjectListScreen;
// // updated


// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   Alert,
//   StyleSheet,
// } from 'react-native';
// import axios from 'axios';
// import SupNav from './SupNav'; // Importing SupNav component

// const ProjectListScreen = ({ route, navigation }) => {
//   const { formId, supervisorId } = route.params; // Parameters passed from the previous screen
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch projects from the API when the component mounts or parameters change
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await axios.get(
//           'http://localhost/MobApp/my-app/php_api/get_projectsS.php?form_id=${formId}&supervisor_id=${27}'
//         );
  
//         // Check if response contains projects
//         if (response.data && response.data.data) {
//           setProjects(response.data.data);
//         } else {
//           Alert.alert('No Projects', 'No projects found for this form.');
//         }
//       } catch (error) {
//         console.error('Error fetching projects:', error);
//         Alert.alert('Error', 'Failed to fetch project data.');
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     fetchProjects();
//   }, [formId, supervisorId]);
  

//   // Handle action when either 'Evaluate' or 'View' button is clicked
//   const handleAction = (projectId, marksSubmitted) => {
//     if (marksSubmitted) {
//       navigation.navigate('ViewMarks', { projectId, formId });
//     } else {
//       // Navigate to the 'SubmitMarks' screen if 'Evaluate' button is clicked
//       navigation.navigate('AssignMarksScreen', { projectId, formId });
//     }
//   };

//   // Render each project item
//   const renderItem = ({ item }) => (
//     <View style={styles.row}>
//       <Text style={styles.cell}>{item.title}</Text>
//       <TouchableOpacity
//         style={item.marksSubmitted ? styles.viewButton : styles.evaluateButton}
//         onPress={() => handleAction(item.id, item.marksSubmitted)}
//       >
//         <Text style={styles.buttonText}>
//           {item.marksSubmitted ? 'View' : 'Evaluate'}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );

//   // Show loading message while data is being fetched
//   if (loading) {
//     return <Text style={styles.loadingText}>Loading...</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       {/* Include SupNav for navigation */}
//       <SupNav />

//       <Text style={styles.heading}>Projects List</Text>
//       <FlatList
//         data={projects}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//         ListEmptyComponent={
//           <Text style={styles.noDataText}>No projects found for this form.</Text>
//         }
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f8f9fa',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#0a4a91',
//     marginBottom: 20,
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: 15,
//     backgroundColor: '#fff',
//     marginBottom: 10,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   cell: {
//     flex: 1,
//     fontSize: 16,
//     color: '#333',
//   },
//   viewButton: {
//     backgroundColor: '#28a745',
//     paddingVertical: 8,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//   },
//   evaluateButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 8,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   loadingText: {
//     textAlign: 'center',
//     marginTop: 20,
//     fontSize: 18,
//   },
//   noDataText: {
//     textAlign: 'center',
//     marginTop: 20,
//     fontSize: 16,
//     color: '#666',
//   },
// });

// export default ProjectListScreen;
