// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, TextInput, Button, Alert, Modal, TouchableOpacity, StyleSheet } from 'react-native';
// import axios from 'axios';

// const ProjectList = () => {
//   const [projects, setProjects] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   useEffect(() => {
//     fetchProjects();
//   }, [searchQuery]);

//   const fetchProjects = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost/MobApp/my-app/php_api/project.php?search=${searchQuery}`
//       );
//       setProjects(response.data);
//     } catch (error) {
//       console.error("Error fetching projects:", error);
//     }
//   };

//   const deleteProject = async (projectId) => {
//     try {
//       const response = await axios.delete(
//         `http://localhost/MobApp/my-app/php_api/project.php?id=${projectId}`
//       );
//       if (response.data.success) {
//         Alert.alert('Success', 'Project deleted successfully');
//         fetchProjects(); // Refresh the project list
//       } else {
//         Alert.alert('Error', response.data.error);
//       }
//     } catch (error) {
//       console.error("Error deleting project:", error);
//     }
//   };

//   const openProjectModal = async (projectId) => {
//     try {
//       const response = await axios.get(
//         `http://localhost/MobApp/my-app/php_api/project_modal.php?id=${projectId}`
//       );
//       setSelectedProject(response.data);
//       setModalVisible(true);
//     } catch (error) {
//       console.error("Error fetching project details:", error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Search Projects"
//         value={searchQuery}
//         onChangeText={setSearchQuery}
//         onSubmitEditing={fetchProjects}
//       />

//       <FlatList
//         data={projects}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.projectRow}>
//             <View>
//               <Text>Project ID: {item.project_id}</Text>
//               <Text>Title: {item.title}</Text>
//               <Text>Supervisor: {item.supervisor_name}</Text>
//             </View>
//             <View style={styles.actionButtons}>
//               <TouchableOpacity onPress={() => openProjectModal(item.id)}>
//                 <Text style={styles.viewButton}>View</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => deleteProject(item.id)}>
//                 <Text style={styles.deleteButton}>Delete</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//       />

//       {selectedProject && (
//         <Modal
//           transparent={true}
//           animationType="slide"
//           visible={modalVisible}
//           onRequestClose={() => setModalVisible(false)}
//         >
//           <View style={styles.modalOverlay}>
//             <View style={styles.modalContent}>
//               <Text style={styles.modalTitle}>Project Details</Text>
//               <Text>Project ID: {selectedProject.project_id}</Text>
//               <Text>Title: {selectedProject.title}</Text>
//               <Text>Description: {selectedProject.description}</Text>
//               <Text>Supervisor: {selectedProject.supervisor_name}</Text>
//               <Text>Co-Supervisor: {selectedProject.co_supervisor_name}</Text>
//               <Text>External Supervisor: {selectedProject.external_supervisor_name}</Text>
//               <Text>Students: {selectedProject.students}</Text>
//               <Text>Batch: {selectedProject.batch_name}</Text>
//               <Text>Created At: {selectedProject.created_at}</Text>

//               <Button title="Close" onPress={() => setModalVisible(false)} />
//             </View>
//           </View>
//         </Modal>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingLeft: 10,
//     borderRadius: 5,
//   },
//   projectRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//     padding: 10,
//     backgroundColor: '#f1f1f1',
//     borderRadius: 8,
//   },
//   actionButtons: { flexDirection: 'row' },
//   viewButton: { color: 'blue', marginRight: 10 },
//   deleteButton: { color: 'red' },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     width: 300,
//     padding: 20,
//     backgroundColor: 'white',
//     borderRadius: 10,
//   },
//   modalTitle: { fontWeight: 'bold', fontSize: 18, marginBottom: 10 },
// });

// export default ProjectList;


// 

// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, TextInput, TouchableOpacity, Modal, Alert, Button, StyleSheet } from 'react-native';
// import axios from 'axios';
// import { useNavigation } from '@react-navigation/native';
// // Import Sidebar
// import Sidebar from '../Coordinator/Sidebar';

// const ProjectListScreen = () => {
//   const navigation = useNavigation();
//   const [projects, setProjects] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   useEffect(() => {
//     fetchProjects();
//   }, [searchQuery]);

//   const fetchProjects = async () => {
//     try {
//       const response = await axios.get(`http://localhost/MobApp/my-app/php_api/project.php?search=${searchQuery}`);
//       setProjects(response.data);
//     } catch (error) {
//       console.error("Error fetching projects", error);
//     }
//   };

//   const deleteProject = async (projectId) => {
//     try {
//       const response = await axios.delete(`http://localhost/MobApp/my-app/php_api/project.php?id=${projectId}`);
//       if (response.data.success) {
//         Alert.alert('Success', 'Project deleted successfully');
//         fetchProjects(); // Refresh the project list
//       } else {
//         Alert.alert('Error', response.data.error);
//       }
//     } catch (error) {
//       console.error("Error deleting project", error);
//     }
//   };

//   const openProjectModal = async (projectId) => {
//     try {
//       const response = await axios.get(`http://localhost/MobApp/my-app/php_api/project_modal.php?id=${projectId}`);
//       setSelectedProject(response.data);
//       setModalVisible(true);
//     } catch (error) {
//       console.error("Error fetching project details", error);
//     }
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.projectItem}>
//       <View style={styles.projectInfo}>
//         <Text style={styles.projectText}>Project ID: {item.project_id}</Text>
//         <Text style={styles.projectText}>Title: {item.title}</Text>
//         <Text style={styles.projectText}>Supervisor: {item.supervisor_name}</Text>
//       </View>
//       <View style={styles.actions}>
//         <TouchableOpacity style={styles.viewButton} onPress={() => openProjectModal(item.id)}>
//           <Text style={styles.actionText}>View</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.editButton}>
//           <Text style={styles.actionText}>Edit</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.deleteButton} onPress={() => deleteProject(item.id)}>
//           <Text style={styles.actionText}>Delete</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//      {/* Include Sidebar */}
//      <Sidebar />
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Projects List</Text>
//         {/* "Assign Project" Button for Navigation */}
//         <TouchableOpacity style={styles.assignButton} onPress={() => navigation.navigate('AssignProject')}>
//           <Text style={styles.assignButtonText}>Assign Project</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.searchWrapper}>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search Projects"
//           value={searchQuery}
//           onChangeText={setSearchQuery}
//           onSubmitEditing={fetchProjects}
//         />
//       </View>

//       <FlatList
//         data={projects}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderItem}
//         ListEmptyComponent={<Text style={styles.noProjectsText}>No projects found.</Text>}
//       />

//       {selectedProject && (
//         <Modal
//           transparent={true}
//           animationType="slide"
//           visible={modalVisible}
//           onRequestClose={() => setModalVisible(false)}
//         >
//           <View style={styles.modalOverlay}>
//             <View style={styles.modalContainer}>
//               <Text style={styles.modalTitle}>Project Details</Text>
//               <Text style={styles.modalText}>Project ID: {selectedProject.project_id}</Text>
//               <Text style={styles.modalText}>Title: {selectedProject.title}</Text>
//               <Text style={styles.modalText}>Description: {selectedProject.description}</Text>
//               <Text style={styles.modalText}>Supervisor: {selectedProject.supervisor_name}</Text>
//               <Text style={styles.modalText}>Co-Supervisor: {selectedProject.co_supervisor_name}</Text>
//               <Text style={styles.modalText}>External Supervisor: {selectedProject.external_supervisor_name}</Text>
//               <Text style={styles.modalText}>Students: {selectedProject.students}</Text>
//               <Text style={styles.modalText}>Batch: {selectedProject.batch_name}</Text>
//               <Text style={styles.modalText}>Created At: {selectedProject.created_at}</Text>

//               <Button title="Close" onPress={() => setModalVisible(false)} />
//             </View>
//           </View>
//         </Modal>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f9f9f9',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//     backgroundColor: '#0a4a91',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   assignButton: {
//     backgroundColor: '#0a4a91',
//     padding: 10,
//     borderRadius: 8,
//   },
//   assignButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   searchWrapper: {
//     marginBottom: 20,
//   },
//   searchInput: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     paddingLeft: 10,
//     borderRadius: 8,
//     backgroundColor: 'white',
//   },
//   projectItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: 'white',
//     padding: 15,
//     marginBottom: 10,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   projectInfo: {
//     flex: 1,
//   },
//   projectText: {
//     fontSize: 14,
//     color: '#333',
//   },
//   actions: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   viewButton: {
//     backgroundColor: '#4CAF50',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     marginRight: 10,
//     borderRadius: 4,
//   },
//   editButton: {
//     backgroundColor: '#FFA500',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     marginRight: 10,
//     borderRadius: 4,
//   },
//   deleteButton: {
//     backgroundColor: '#F44336',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     borderRadius: 4,
//   },
//   actionText: {
//     color: 'white',
//     fontSize: 14,
//   },
//   noProjectsText: {
//     textAlign: 'center',
//     color: '#999',
//     marginTop: 20,
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContainer: {
//     width: 300,
//     padding: 20,
//     backgroundColor: 'white',
//     borderRadius: 10,
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   modalText: {
//     fontSize: 14,
//     marginBottom: 5,
//   },
// });

// export default ProjectListScreen;


// new
// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, FlatList, TouchableOpacity, Alert, Modal, StyleSheet } from 'react-native';
// import { AntDesign, FontAwesome } from '@expo/vector-icons';

// const ProjectList = ({ navigation }) => {
//     const [projects, setProjects] = useState([]);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [modalVisible, setModalVisible] = useState(false);
//     const [selectedProject, setSelectedProject] = useState(null);

//     // Fetch projects from API
//     const fetchProjects = async () => {
//         try {
//             const response = await fetch(`http://localhost/MobApp/my-app/php_api/project.php?search=${searchQuery}`);
//             const data = await response.json();
//             if (data && data.projects) {
//                 setProjects(data.projects);
//             } else {
//                 setProjects([]);
//             }
//         } catch (error) {
//             console.error('Error fetching projects:', error);
//         }
//     };

//     // Fetch projects on initial load and whenever search query changes
//     useEffect(() => {
//         fetchProjects();
//     }, [searchQuery]);

//     // Handle delete project
//     const handleDelete = async (projectId) => {
//         try {
//             const response = await fetch(`http://localhost/MobApp/my-app/php_api/project_modal.php/${projectId}`, {
//                 method: 'DELETE',
//             });
//             const data = await response.json();
//             if (data.success) {
//                 Alert.alert('Success', 'Project deleted successfully');
//                 fetchProjects(); // Refresh the list after deletion
//             } else {
//                 Alert.alert('Error', 'Error deleting project');
//             }
//         } catch (error) {
//             console.error('Error deleting project:', error);
//         }
//     };

//     // Handle view project details
//     const handleViewProject = async (projectId) => {
//         try {
//             const response = await fetch(`http://localhost/MobApp/my-app/php_api/project_modal.php/${projectId}`);
//             const data = await response.json();
//             if (data && data.project) {
//                 setSelectedProject(data.project);
//                 setModalVisible(true);
//             }
//         } catch (error) {
//             console.error('Error fetching project details:', error);
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <View style={styles.header}>
//                 <Text style={styles.headerText}>Projects List</Text>
//                 <TouchableOpacity onPress={() => navigation.navigate('UploadAnnouncement')}>
//                     <AntDesign name="pluscircle" size={24} color="black" />
//                 </TouchableOpacity>
//             </View>

//             <TextInput
//                 style={styles.searchInput}
//                 placeholder="Search"
//                 value={searchQuery}
//                 onChangeText={setSearchQuery}
//             />

//             <FlatList
//                 data={projects}
//                 keyExtractor={(item) => item.id.toString()}
//                 renderItem={({ item }) => (
//                     <View style={styles.projectCard}>
//                         <Text style={styles.projectId}>{item.project_id}</Text>
//                         <Text style={styles.projectTitle}>{item.title}</Text>
//                         <Text style={styles.supervisorText}>{item.supervisor_name}</Text>
//                         <Text style={styles.batchText}>{item.batch_name}</Text>

//                         <View style={styles.actions}>
//                         <TouchableOpacity
//     style={styles.button}
//     onPress={() => navigation.navigate('EditProject', { projectId: item.id })} // Pass projectId correctly
// >
//     <FontAwesome name="pencil" size={20} color="white" />
// </TouchableOpacity>

//                             <TouchableOpacity
//                                 style={styles.button}
//                                 onPress={() => handleDelete(item.id)}
//                             >
//                                 <FontAwesome name="trash" size={20} color="white" />
//                             </TouchableOpacity>
//                             <TouchableOpacity
//                                 style={styles.button}
//                                 onPress={() => handleViewProject(item.id)}
//                             >
//                                 <FontAwesome name="eye" size={20} color="white" />
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                 )}
//             />

//             <Modal
//                 visible={modalVisible}
//                 animationType="slide"
//                 onRequestClose={() => setModalVisible(false)}
//             >
//                 <View style={styles.modalContainer}>
//                     {selectedProject && (
//                         <>
//                             <Text style={styles.modalTitle}>{selectedProject.title}</Text>
//                             <Text style={styles.modalContent}><Text style={styles.modalLabel}>Project ID: </Text>{selectedProject.project_id}</Text>
//                             <Text style={styles.modalContent}><Text style={styles.modalLabel}>Title: </Text>{selectedProject.title}</Text>
//                             <Text style={styles.modalContent}><Text style={styles.modalLabel}>Description: </Text>{selectedProject.description}</Text>
//                             <Text style={styles.modalContent}><Text style={styles.modalLabel}>Supervisor: </Text>{selectedProject.supervisor_name}</Text>
//                             <Text style={styles.modalContent}><Text style={styles.modalLabel}>Co-Supervisor: </Text>{selectedProject.co_supervisor_name}</Text>
//                             <Text style={styles.modalContent}><Text style={styles.modalLabel}>External Supervisor: </Text>{selectedProject.external_supervisor_name}</Text>
//                             <Text style={styles.modalContent}><Text style={styles.modalLabel}>Students: </Text>{selectedProject.students}</Text>
//                             <Text style={styles.modalContent}><Text style={styles.modalLabel}>Batch: </Text>{selectedProject.batch_name}</Text>
//                             <Text style={styles.modalContent}><Text style={styles.modalLabel}>Created At: </Text>{selectedProject.created_at}</Text>
//                             <Button title="Close" onPress={() => setModalVisible(false)} />
//                         </>
//                     )}
//                 </View>
//             </Modal>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 10,
//     },
//     header: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 20,
//     },
//     headerText: {
//         fontSize: 24,
//         fontWeight: 'bold',
//     },
//     searchInput: {
//         height: 40,
//         borderColor: '#ccc',
//         borderWidth: 1,
//         borderRadius: 5,
//         marginBottom: 20,
//         paddingLeft: 10,
//     },
//     projectCard: {
//         backgroundColor: '#fff',
//         padding: 15,
//         marginBottom: 10,
//         borderRadius: 5,
//         borderWidth: 1,
//         borderColor: '#ccc',
//     },
//     projectId: {
//         fontWeight: 'bold',
//     },
//     projectTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginVertical: 5,
//     },
//     supervisorText: {
//         fontSize: 14,
//         color: '#555',
//     },
//     batchText: {
//         fontSize: 14,
//         color: '#555',
//         marginBottom: 10,
//     },
//     actions: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginTop: 10,
//     },
//     button: {
//         backgroundColor: '#007bff',
//         padding: 10,
//         borderRadius: 5,
//     },
//     modalContainer: {
//         padding: 20,
//     },
//     modalTitle: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     modalContent: {
//         fontSize: 16,
//         marginBottom: 10,
//     },
//     modalLabel: {
//         fontWeight: 'bold',
//     },
// });

// export default ProjectList;


// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   TouchableOpacity,
//   Alert,
//   Modal,
//   StyleSheet,
// } from 'react-native';
// import axios from 'axios';

// const ProjectList = () => {
//   const [projects, setProjects] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   useEffect(() => {
//     fetchProjects();
//   }, [searchQuery]);

//   // Fetch projects from the backend
//   const fetchProjects = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost/MobApp/my-app/php_api/project.php?search=${searchQuery}`
//       );
//       setProjects(response.data || []);
//     } catch (error) {
//       console.error('Error fetching projects:', error);
//     }
//   };

//   // Delete project from the backend
//   const deleteProject = async (id) => {
//     try {
//       const response = await axios.get(
//         `http://localhost/MobApp/my-app/php_api/project.php?action=delete&id=${id}`
//       );
//       if (response.data.success) {
//         Alert.alert('Success', 'Project deleted successfully');
//         fetchProjects(); // Refresh the list
//       } else {
//         Alert.alert('Error', response.data.error || 'Unable to delete the project.');
//       }
//     } catch (error) {
//       console.error('Error deleting project:', error);
//     }
//   };

//   // Fetch project details for the modal
//   const openProjectModal = async (id) => {
//     try {
//       const response = await axios.get(
//         `http://localhost/MobApp/my-app/php_api/project_modal.php?id=${id}`
//       );
//       setSelectedProject(response.data);
//       setModalVisible(true);
//     } catch (error) {
//       console.error('Error fetching project details:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Projects List</Text>

//       {/* Search Input */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search Projects"
//           value={searchQuery}
//           onChangeText={(text) => setSearchQuery(text)}
//         />
//       </View>

//       {/* Project List */}
//       <FlatList
//         data={projects}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.projectRow}>
//             <View>
//               <Text style={styles.projectText}>ID: {item.project_id}</Text>
//               <Text style={styles.projectText}>Title: {item.title}</Text>
//               <Text style={styles.projectText}>Supervisor: {item.supervisor_name}</Text>
//               <Text style={styles.projectText}>Batch: {item.batch_name}</Text>
//             </View>
//             <View style={styles.actions}>
//               <TouchableOpacity
//                 style={[styles.actionButton, styles.viewButton]}
//                 onPress={() => openProjectModal(item.id)}
//               >
//                 <Text style={styles.actionText}>View</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={[styles.actionButton, styles.deleteButton]}
//                 onPress={() =>
//                   Alert.alert(
//                     'Confirm',
//                     'Are you sure you want to delete this project?',
//                     [
//                       { text: 'Cancel', style: 'cancel' },
//                       { text: 'Delete', onPress: () => deleteProject(item.id) },
//                     ]
//                   )
//                 }
//               >
//                 <Text style={styles.actionText}>Delete</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//         ListEmptyComponent={<Text style={styles.noProjects}>No projects found.</Text>}
//       />

//       {/* Project Details Modal */}
//       {selectedProject && (
//         <Modal
//           visible={modalVisible}
//           transparent
//           animationType="slide"
//           onRequestClose={() => setModalVisible(false)}
//         >
//           <View style={styles.modalOverlay}>
//             <View style={styles.modalContent}>
//               <Text style={styles.modalTitle}>{selectedProject.title}</Text>
//               <Text style={styles.modalText}>Project ID: {selectedProject.project_id}</Text>
//               <Text style={styles.modalText}>Description: {selectedProject.description}</Text>
//               <Text style={styles.modalText}>Supervisor: {selectedProject.supervisor_name}</Text>
//               <Text style={styles.modalText}>
//                 Co-Supervisor: {selectedProject.co_supervisor_name}
//               </Text>
//               <Text style={styles.modalText}>
//                 External Supervisor: {selectedProject.external_supervisor_name}
//               </Text>
//               <Text style={styles.modalText}>Batch: {selectedProject.batch_name}</Text>
//               <Text style={styles.modalText}>Created At: {selectedProject.created_at}</Text>
//               <TouchableOpacity
//                 style={[styles.actionButton, styles.closeButton]}
//                 onPress={() => setModalVisible(false)}
//               >
//                 <Text style={styles.actionText}>Close</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, backgroundColor: '#f8f9fa' },
//   heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#0a4a91' },
//   searchContainer: { marginBottom: 20 },
//   searchInput: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//   },
//   projectRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//     marginBottom: 10,
//     backgroundColor: '#ffffff',
//     borderRadius: 8,
//     elevation: 2,
//   },
//   projectText: { fontSize: 14, marginBottom: 5 },
//   actions: { flexDirection: 'row' },
//   actionButton: { padding: 8, borderRadius: 4, marginLeft: 5 },
//   viewButton: { backgroundColor: '#0d6efd' },
//   deleteButton: { backgroundColor: '#dc3545' },
//   closeButton: { backgroundColor: '#6c757d', marginTop: 20 },
//   actionText: { color: '#fff', fontWeight: 'bold' },
//   noProjects: { textAlign: 'center', marginTop: 20, color: '#6c757d' },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     width: '90%',
//     padding: 20,
//     backgroundColor: '#ffffff',
//     borderRadius: 10,
//   },
//   modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
//   modalText: { fontSize: 14, marginBottom: 8 },
// });

// export default ProjectList;


// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   TouchableOpacity,
//   Alert,
//   Modal,
//   StyleSheet,
// } from 'react-native';
// import axios from 'axios';

// const ProjectList = () => {
//   const [projects, setProjects] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchProjects();
//   }, [searchQuery]);

//   // Fetch projects from the backend
//   const fetchProjects = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(
//         `http://localhost/MobApp/my-app/php_api/project.php`,
//         { params: { search: searchQuery } }
//       );
  
//       console.log('API Response:', response.data);
  
//       if (response.data && response.data.length > 0) {
//         setProjects(response.data);
//       } else {
//         console.warn('No projects found for the current query.');
//         setProjects([]);
//       }
//     } catch (error) {
//       console.error('Error fetching projects:', error.message);
//       Alert.alert('Error', 'Failed to fetch projects. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Delete project from the backend
//   const deleteProject = async (id) => {
//     try {
//       const response = await axios.get(
//         'http://localhost/MobApp/my-app/php_api/project.php',
//         { params: { action: 'delete', id } }
//       );
//       if (response.data.success) {
//         Alert.alert('Success', 'Project deleted successfully');
//         fetchProjects(); // Refresh the list
//       } else {
//         Alert.alert('Error', response.data.error || 'Unable to delete the project.');
//       }
//     } catch (error) {
//       console.error('Error deleting project:', error.message);
//       Alert.alert('Error', 'Failed to delete the project. Please try again.');
//     }
//   };

//   // Fetch project details for the modal
//   const openProjectModal = async (id) => {
//     try {
//       const response = await axios.get(
//         'http://localhost/MobApp/my-app/php_api/project_modal.php',
//         { params: { id } }
//       );
//       setSelectedProject(response.data);
//       setModalVisible(true);
//     } catch (error) {
//       console.error('Error fetching project details:', error.message);
//       Alert.alert('Error', 'Failed to fetch project details. Please try again.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Projects List</Text>

//       {/* Search Input */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search Projects"
//           value={searchQuery}
//           onChangeText={(text) => setSearchQuery(text)}
//         />
//       </View>

//       {/* Loading Indicator */}
//       {loading && <Text style={styles.loadingText}>Loading projects...</Text>}

//       {/* Project List */}
//       <FlatList
//         data={projects}
//         keyExtractor={(item) => item.project_id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.projectRow}>
//             <View>
//               <Text style={styles.projectText}>ID: {item.project_id}</Text>
//               <Text style={styles.projectText}>Title: {item.title}</Text>
//               <Text style={styles.projectText}>Supervisor: {item.supervisor}</Text>
//               <Text style={styles.projectText}>Batch: {item.batch}</Text>
//             </View>
//             <View style={styles.actions}>
//               <TouchableOpacity
//                 style={[styles.actionButton, styles.viewButton]}
//                 onPress={() => openProjectModal(item.project_id)}
//               >
//                 <Text style={styles.actionText}>View</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={[styles.actionButton, styles.deleteButton]}
//                 onPress={() =>
//                   Alert.alert(
//                     'Confirm',
//                     'Are you sure you want to delete this project?',
//                     [
//                       { text: 'Cancel', style: 'cancel' },
//                       { text: 'Delete', onPress: () => deleteProject(item.project_id) },
//                     ]
//                   )
//                 }
//               >
//                 <Text style={styles.actionText}>Delete</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//         ListEmptyComponent={<Text style={styles.noProjects}>No projects found.</Text>}
//       />

//       {/* Project Details Modal */}
//       {selectedProject && (
//         <Modal
//           visible={modalVisible}
//           transparent
//           animationType="slide"
//           onRequestClose={() => setModalVisible(false)}
//         >
//           <View style={styles.modalOverlay}>
//             <View style={styles.modalContent}>
//               <Text style={styles.modalTitle}>{selectedProject.title}</Text>
//               <Text style={styles.modalText}>Project ID: {selectedProject.project_id}</Text>
//               <Text style={styles.modalText}>Description: {selectedProject.description}</Text>
//               <Text style={styles.modalText}>Supervisor: {selectedProject.supervisor}</Text>
//               <Text style={styles.modalText}>Batch: {selectedProject.batch}</Text>
//               <TouchableOpacity
//                 style={[styles.actionButton, styles.closeButton]}
//                 onPress={() => setModalVisible(false)}
//               >
//                 <Text style={styles.actionText}>Close</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, backgroundColor: '#f8f9fa' },
//   heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#0a4a91' },
//   searchContainer: { marginBottom: 20 },
//   searchInput: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//   },
//   loadingText: { textAlign: 'center', marginBottom: 20, color: '#6c757d' },


//   projectRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//     marginBottom: 10,
//     backgroundColor: '#ffffff',
//     borderRadius: 8,
//     elevation: 2,
//   },
//   projectText: { fontSize: 14, marginBottom: 5 },
//   actions: { flexDirection: 'row' },
//   actionButton: { padding: 8, borderRadius: 4, marginLeft: 5 },
//   viewButton: { backgroundColor: '#0d6efd' },
//   deleteButton: { backgroundColor: '#dc3545' },
//   closeButton: { backgroundColor: '#6c757d', marginTop: 20 },
//   actionText: { color: '#fff', fontWeight: 'bold' },
//   noProjects: { textAlign: 'center', marginTop: 20, color: '#6c757d' },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     width: '90%',
//     padding: 20,
//     backgroundColor: '#ffffff',
//     borderRadius: 10,
//   },
//   modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
//   modalText: { fontSize: 14, marginBottom: 8 },
// });

// export default ProjectList;

// updated code
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
  Modal,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import Sidebar from '../Coordinator/Sidebar';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, [searchQuery]);

  // Fetch projects from the backend
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        'http://localhost/MobApp/my-app/php_api/project.php',
        { params: { search: searchQuery } }
      );
  
      console.log('API Response:', response.data);
  
      setProjects(response.data || []); // Ensure projects is always an array
    } catch (error) {
      console.error('Error fetching projects:', error.message);
      Alert.alert('Error', 'Failed to fetch projects. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Delete project from the backend
  const deleteProject = async (id) => {
    try {
      const response = await axios.get(
        'http://localhost/MobApp/my-app/php_api/project.php',
        { params: { action: 'delete', id } }
      );
      if (response.data.success) {
        Alert.alert('Success', 'Project deleted successfully');
        fetchProjects(); // Refresh the list
      } else {
        Alert.alert('Error', response.data.error || 'Unable to delete the project.');
      }
    } catch (error) {
      console.error('Error deleting project:', error.message);
      Alert.alert('Error', 'Failed to delete the project. Please try again.');
    }
  };

  // Fetch project details for the modal
  const openProjectModal = async (id) => {
    try {
      const response = await axios.get(
        'http://localhost/MobApp/my-app/php_api/project_modal.php',
        { params: { id } }
      );
      setSelectedProject(response.data);
      setModalVisible(true);
    } catch (error) {
      console.error('Error fetching project details:', error.message);
      Alert.alert('Error', 'Failed to fetch project details. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
     <Sidebar /> {/* Include Sidebar here for the navigation bar and sidebar */}
     <View style={styles.content}></View>
      <Text style={styles.heading}>Projects List</Text>

      {/* Search Input */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Projects"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>

      {/* Loading Indicator */}
      {loading && <Text style={styles.loadingText}>Loading projects...</Text>}

      {/* Project List */}
      <FlatList
        data={projects}
        keyExtractor={(item) => item.project_id.toString()}
        renderItem={({ item }) => (
          <View style={styles.projectRow}>
            <View>
              <Text style={styles.projectText}>ID: {item.project_id}</Text>
              <Text style={styles.projectText}>Title: {item.title}</Text>
              <Text style={styles.projectText}>Supervisor: {item.supervisor}</Text>
              <Text style={styles.projectText}>Batch: {item.batch}</Text>
            </View>
            <View style={styles.actions}>
              <TouchableOpacity
                style={[styles.actionButton, styles.viewButton]}
                onPress={() => openProjectModal(item.project_id)}
              >
                <Text style={styles.actionText}>View</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.actionButton, styles.deleteButton]}
                onPress={() =>
                  Alert.alert(
                    'Confirm',
                    'Are you sure you want to delete this project?',
                    [
                      { text: 'Cancel', style: 'cancel' },
                      { text: 'Delete', onPress: () => deleteProject(item.project_id) },
                    ]
                  )
                }
              >
                <Text style={styles.actionText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.noProjects}>No projects found.</Text>}
      />

      {/* Project Details Modal */}
      {selectedProject && (
        <Modal
          visible={modalVisible}
          transparent
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedProject.title}</Text>
              <Text style={styles.modalText}>Project ID: {selectedProject.project_id}</Text>
              <Text style={styles.modalText}>Description: {selectedProject.description}</Text>
              <Text style={styles.modalText}>Supervisor: {selectedProject.supervisor}</Text>
              <Text style={styles.modalText}>Batch: {selectedProject.batch}</Text>
              <TouchableOpacity
                style={[styles.actionButton, styles.closeButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.actionText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,

    // backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 16,
    marginTop: 20, // Adjusts content below StuNav
  },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#0a4a91' },
  searchContainer: { marginBottom: 20 },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginLeft:15,
    marginRight:15,
  },
  loadingText: { textAlign: 'center', marginBottom: 20, color: '#6c757d' },
  projectRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 2,
    
  },
  projectText: { fontSize: 14, marginBottom: 5 },
  actions: { flexDirection: 'row',marginLeft:15,
    marginRight:15, },
  actionButton: { padding: 8, borderRadius: 4, marginLeft: 5},
  viewButton: { backgroundColor: '#0d6efd',height:35},
  deleteButton: { backgroundColor: '#dc3545',height:35},
  closeButton: { backgroundColor: '#6c757d', marginTop: 20, height:35},
  actionText: { color: '#fff', fontWeight: 'bold' },
  noProjects: { textAlign: 'center', marginTop: 20, color: '#6c757d', },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    
  },
  modalContent: {
    width: '90%',
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
   
  },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  modalText: { fontSize: 14, marginBottom: 8 },
});

export default ProjectList;