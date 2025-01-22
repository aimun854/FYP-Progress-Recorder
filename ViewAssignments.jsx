// import React, { useEffect, useState } from 'react';
// import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity, Linking, Alert } from 'react-native';
// import axios from 'axios';

// const ViewAssignments = () => {
//   const [assignments, setAssignments] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch assignments from the API
//   useEffect(() => {
//     const fetchAssignments = async () => {
//       try {
//         const response = await axios.get('http://localhost/MobApp/my-app/php_api/get_assignments.php');
        
//         // Log the entire response for detailed debugging
//         console.log("API Response:", response);
//         console.log("Response Data:", response.data);
//         console.log("Data Type:", typeof response.data);

//         // Check if response contains an 'assignments' property and is an array
//         if (response.data && Array.isArray(response.data.assignments)) {
//           setAssignments(response.data.assignments);
//         } else {
//           Alert.alert("Error", "No assignments found.");
//           setAssignments([]); // Reset to empty array
//         }
//       } catch (error) {
//         console.error("Error fetching assignments:", error);
//         Alert.alert("Error", "Failed to fetch assignments.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchAssignments();
//   }, []);

//   const handleSubmit = (assignmentId) => {
//     Alert.alert("Submit", `Navigating to submission page for assignment ${assignmentId}`);
//     // Add navigation logic to submit assignment here
//   };

//   const renderAssignmentItem = ({ item }) => {
//     const { assignment_name, deadline, time_left, status, document_path, submission_path, assignment_id } = item;

//     return (
//       <View style={styles.tableRow}>
//         <View style={styles.tableCell}>
//           <Text style={styles.assignmentText}>{assignment_name}</Text>
//         </View>
//         <View style={styles.tableCell}>
//           <Text style={styles.assignmentText}>{deadline}</Text>
//         </View>
//         <View style={styles.tableCell}>
//           <Text style={[styles.assignmentText, time_left.includes("Past deadline") ? styles.pastDeadline : null]}>{time_left}</Text>
//         </View>
//         <View style={styles.tableCell}>
//           <Text style={styles.assignmentText}>{status}</Text>
//         </View>
//         <View style={styles.tableCell}>
//           {status === 'Not submitted' ? (
//             <Button title="Submit" onPress={() => handleSubmit(assignment_id)} />
//           ) : (
//             <TouchableOpacity onPress={() => Linking.openURL(submission_path)}>
//               <Text style={styles.previewLink}>Preview Submission</Text>
//             </TouchableOpacity>
//           )}
//         </View>
//       </View>
//     );
//   };

//   if (loading) {
//     return <Text style={styles.loadingText}>Loading...</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       {assignments.length === 0 ? (
//         <Text style={styles.noAssignmentsText}>No assignments available.</Text>
//       ) : (
//         <View style={styles.table}>
//           <View style={styles.tableHeader}>
//             <Text style={styles.headerText}>Assignment</Text>
//             <Text style={styles.headerText}>Deadline</Text>
//             <Text style={styles.headerText}>Time Left</Text>
//             <Text style={styles.headerText}>Status</Text>
//             <Text style={styles.headerText}>Action</Text>
//           </View>
//           <FlatList
//             data={assignments}
//             renderItem={renderAssignmentItem}
//             keyExtractor={(item) => item.assignment_id.toString()}
//           />
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 20,
//     paddingHorizontal: 15,
//     backgroundColor: '#f4f4f4',
//   },
//   table: {
//     width: '100%',
//     marginTop: 20,
//   },
//   tableHeader: {
//     flexDirection: 'row',
//     backgroundColor: '#f0f0f0',
//     paddingVertical: 10,
//     borderRadius: 5,
//     marginBottom: 5,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   headerText: {
//     flex: 1,
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 16,
//     color: '#333',
//   },
//   tableRow: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     paddingVertical: 10,
//   },
//   tableCell: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 5,
//   },
//   assignmentText: {
//     fontSize: 14,
//     textAlign: 'center',
//     color: '#333',
//   },
//   pastDeadline: {
//     color: '#dc3545',
//   },
//   previewLink: {
//     color: 'green',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   loadingText: {
//     textAlign: 'center',
//     fontSize: 18,
//     marginTop: 50,
//   },
//   noAssignmentsText: {
//     textAlign: 'center',
//     fontSize: 18,
//     marginTop: 50,
//     color: 'gray',
//   },
// });

// export default ViewAssignments;


// new
// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity, Alert, Linking } from 'react-native';
// import axios from 'axios';

// const ViewAssignments = () => {
//   const [assignments, setAssignments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [projectId, setProjectId] = useState(null);

//   // Fetch project ID (based on logged-in student)
//   const fetchProjectId = async () => {
//     try {
//       const response = await axios.get('http://localhost/MobApp/my-app/php_api/get_project_id.php'); // Create this API
//       setProjectId(response.data.project_id);
//       fetchAssignments(response.data.project_id); // Fetch assignments once project ID is available
//     } catch (error) {
//       console.error("Error fetching project ID:", error);
//       Alert.alert("Error", "Failed to fetch project details.");
//     }
//   };

//   // Fetch assignments
//   const fetchAssignments = async (projectId) => {
//     try {
//       const response = await axios.get(`http://localhost/MobApp/my-app/php_api/get_assignments.php`);
//       if (response.data.assignments) {
//         setAssignments(response.data.assignments);
//       } else {
//         Alert.alert("No assignments", "No assignments available for this project.");
//       }
//     } catch (error) {
//       console.error("Error fetching assignments:", error);
//       Alert.alert("Error", "Failed to fetch assignments.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Format time left based on deadline
//   const formatTimeLeft = (deadline) => {
//     const deadlineTime = new Date(deadline).getTime();
//     const currentTime = Date.now();
//     const timeDifference = deadlineTime - currentTime;

//     if (timeDifference > 0) {
//       const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//       const hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       return `${daysLeft} days, ${hoursLeft} hours`;
//     } else if (timeDifference === 0) {
//       return "Deadline is now";
//     } else {
//       return "Past deadline";
//     }
//   };

//   // Handle Submit action
//   const handleSubmit = (assignmentId) => {
//     Alert.alert("Submit", `Navigating to submission page for assignment ${assignmentId}`);
//     // Add navigation logic to submit assignment here
//   };

//   useEffect(() => {
//     fetchProjectId(); // Get project details and assignments
//   }, []);

//   if (loading) {
//     return <Text style={styles.loadingText}>Loading...</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Assignments</Text>

//       <FlatList
//         data={assignments}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => {
//           const { assignment_name, deadline, status, submission_path, assignment_id, document_path } = item;
//           const timeLeft = formatTimeLeft(deadline);

//           return (
//             <View style={styles.tableRow}>
//               <View style={styles.tableCell}>
//                 <TouchableOpacity onPress={() => Linking.openURL(document_path)}>
//                   <Text style={styles.assignmentText}>{assignment_name}</Text>
//                 </TouchableOpacity>
//               </View>
//               <View style={styles.tableCell}>
//                 <Text style={styles.assignmentText}>{new Date(deadline).toLocaleString()}</Text>
//               </View>
//               <View style={styles.tableCell}>
//                 <Text style={[styles.assignmentText, timeLeft.includes("Past deadline") && styles.pastDeadline]}>
//                   {timeLeft}
//                 </Text>
//               </View>
//               <View style={styles.tableCell}>
//                 <Text style={styles.assignmentText}>{status}</Text>
//               </View>
//               <View style={styles.tableCell}>
//                 {status === 'Not submitted' ? (
//                   <Button title="Submit" onPress={() => handleSubmit(assignment_id)} />
//                 ) : (
//                   <TouchableOpacity onPress={() => Linking.openURL(submission_path)}>
//                     <Text style={styles.previewLink}>Preview Submission</Text>
//                   </TouchableOpacity>
//                 )}
//               </View>
//             </View>
//           );
//         }}
//         ListEmptyComponent={<Text>No assignments available.</Text>}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 20,
//     paddingHorizontal: 15,
//     backgroundColor: '#f4f4f4',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#0a4a91',
//     marginBottom: 20,
//   },
//   tableRow: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     paddingVertical: 10,
//     alignItems: 'center',
//   },
//   tableCell: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 5,
//   },
//   assignmentText: {
//     fontSize: 14,
//     textAlign: 'center',
//     color: '#333',
//   },
//   pastDeadline: {
//     color: '#dc3545',
//   },
//   previewLink: {
//     color: 'green',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   loadingText: {
//     textAlign: 'center',
//     fontSize: 18,
//     marginTop: 50,
//   },
// });

// export default ViewAssignments;


// updated
// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity, Alert, Linking } from 'react-native';
// import axios from 'axios';
// import StuNav from './StuNav'; // Import StuNav

// const ViewAssignments = () => {
//   const [assignments, setAssignments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [projectId, setProjectId] = useState(null);

//   // Fetch project ID (based on logged-in student)
//   const fetchProjectId = async () => {
//     try {
//       const response = await axios.get('http://localhost/MobApp/my-app/php_api/get_project_id.php'); // Create this API
//       setProjectId(response.data.project_id);
//       fetchAssignments(response.data.project_id); // Fetch assignments once project ID is available
//     } catch (error) {
//       console.error("Error fetching project ID:", error);
//       Alert.alert("Error", "Failed to fetch project details.");
//     }
//   };

//   // Fetch assignments
//   const fetchAssignments = async (projectId) => {
//     try {
//       const response = await axios.get(
//         `http://localhost/MobApp/my-app/php_api/getStuAssignments.php?projectId=${projectId}`
//       );
//       if (response.data.assignments) {
//         setAssignments(response.data.assignments);
//       } else {
//         Alert.alert("No assignments", "No assignments available for this project.");
//       }
//     } catch (error) {
//       console.error("Error fetching assignments:", error);
//       Alert.alert("Error", "Failed to fetch assignments.");
//     } finally {
//       setLoading(false);
//     }
//   };
  

//   // Format time left based on deadline
//   const formatTimeLeft = (deadline) => {
//     const deadlineTime = new Date(deadline).getTime();
//     const currentTime = Date.now();
//     const timeDifference = deadlineTime - currentTime;

//     if (timeDifference > 0) {
//       const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//       const hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       return `${daysLeft} days, ${hoursLeft} hours`;
//     } else if (timeDifference === 0) {
//       return "Deadline is now";
//     } else {
//       return "Past deadline";
//     }
//   };

//   // Handle Submit action
//   const handleSubmit = (assignmentId) => {
//     Alert.alert("Submit", `Navigating to submission page for assignment ${assignmentId}`);
//     // Add navigation logic to submit assignment here
//   };

//   useEffect(() => {
//     fetchProjectId(); // Get project details and assignments
//   }, []);

//   if (loading) {
//     return <Text style={styles.loadingText}>Loading...</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <StuNav /> {/* Include StuNav here */}

//       <Text style={styles.heading}>Assignments</Text>

//       <FlatList
//         data={assignments}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => {
//           const { assignment_name, deadline, status, submission_path, assignment_id, document_path } = item;
//           const timeLeft = formatTimeLeft(deadline);

//           return (
//             <View style={styles.tableRow}>
//               <View style={styles.tableCell}>
//                 <TouchableOpacity onPress={() => Linking.openURL(document_path)}>
//                   <Text style={styles.assignmentText}>{assignment_name}</Text>
//                 </TouchableOpacity>
//               </View>
//               <View style={styles.tableCell}>
//                 <Text style={styles.assignmentText}>{new Date(deadline).toLocaleString()}</Text>
//               </View>
//               <View style={styles.tableCell}>
//                 <Text style={[styles.assignmentText, timeLeft.includes("Past deadline") && styles.pastDeadline]}>
//                   {timeLeft}
//                 </Text>
//               </View>
//               <View style={styles.tableCell}>
//                 <Text style={styles.assignmentText}>{status}</Text>
//               </View>
//               <View style={styles.tableCell}>
//                 {status === 'Not submitted' ? (
//                   <Button title="Submit" onPress={() => handleSubmit(assignment_id)} />
//                 ) : (
//                   <TouchableOpacity onPress={() => Linking.openURL(submission_path)}>
//                     <Text style={styles.previewLink}>Preview Submission</Text>
//                   </TouchableOpacity>
//                 )}
//               </View>
//             </View>
//           );
//         }}
//         ListEmptyComponent={<Text>No assignments available.</Text>}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 20,
//     paddingHorizontal: 15,
//     backgroundColor: '#f4f4f4',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#0a4a91',
//     marginBottom: 20,
//   },
//   tableRow: {
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     paddingVertical: 10,
//     alignItems: 'center',
//   },
//   tableCell: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 5,
//   },
//   assignmentText: {
//     fontSize: 14,
//     textAlign: 'center',
//     color: '#333',
//   },
//   pastDeadline: {
//     color: '#dc3545',
//   },
//   previewLink: {
//     color: 'green',
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   loadingText: {
//     textAlign: 'center',
//     fontSize: 18,
//     marginTop: 50,
//   },
// });

// export default ViewAssignments;



// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// import axios from 'axios';
// import { Button, Card, Paragraph } from 'react-native-paper';

// const ViewAssignments = ({ route, navigation }) => {
//   const { studentId } = route.params; // Pass studentId as a route parameter
//   const [assignments, setAssignments] = useState([]);
//   const [project, setProject] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchAssignments();
//   }, []);

//   useEffect(() => {
//     const fetchAssignments = async (projectId) => {
//           try {
//             const response = await axios.get(
//               `http://localhost/MobApp/my-app/php_api/getStuAssignments.php?projectId=${projectId}`
//             );
//             if (response.data.assignments) {
//               setAssignments(response.data.assignments);
//             } else {
//               Alert.alert("No assignments", "No assignments available for this project.");
//             }
//           } catch (error) {
//             console.error("Error fetching assignments:", error);
//             Alert.alert("Error", "Failed to fetch assignments.");
//           } finally {
//             setLoading(false);
//           }
//         };
        
  
//     if (studentId) fetchAssignments();
//   }, [studentId]);
  

//   const renderAssignment = ({ item }) => {
//     const deadline = new Date(item.deadline);
//     const now = new Date();
//     const timeLeft = deadline - now;
//     const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//     const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const deadlineText =
//       timeLeft > 0 ? `${daysLeft} days, ${hoursLeft} hours left` : 'Past deadline';

//     return (
//       <Card style={styles.card}>
//         <Card.Content>
//           <Text style={styles.assignmentName}>{item.assignment_name}</Text>
//           <Paragraph>Deadline: {deadline.toLocaleString()}</Paragraph>
//           <Paragraph>Time Left: {deadlineText}</Paragraph>
//           <Paragraph>Status: {item.submission_id ? 'Submitted' : 'Not Submitted'}</Paragraph>
//         </Card.Content>
//         <Card.Actions>
//           {item.submission_id ? (
//             <Button
//               mode="contained"
//               onPress={() => navigation.navigate('Preview', { url: item.submission_path })}
//             >
//               Preview
//             </Button>
//           ) : (
//             <Button
//               mode="contained"
//               onPress={() =>
//                 navigation.navigate('Submit', { assignmentId: item.id, studentId, projectId: project.id })
//               }
//             >
//               Submit
//             </Button>
//           )}
//         </Card.Actions>
//       </Card>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Assignments</Text>
//       {loading ? (
//         <Text>Loading...</Text>
//       ) : (
//         <FlatList
//           data={assignments}
//           renderItem={renderAssignment}
//           keyExtractor={(item) => item.id.toString()}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f8f9fa',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#0a4a91',
//     marginBottom: 20,
//   },
//   card: {
//     marginBottom: 10,
//     padding: 10,
//   },
//   assignmentName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default ViewAssignments;


// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// import axios from 'axios';
// import { Button, Card, Paragraph } from 'react-native-paper';

// const ViewAssignments = ({ route, navigation }) => {
//   const studentId = route?.params?.studentId || null; // Safely access studentId
//   const [assignments, setAssignments] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (studentId) {
//       fetchAssignments(studentId);
//     } else {
//       Alert.alert("Error", "Student ID is not provided.");
//       setLoading(false);
//     }
//   }, [studentId]);

//   const fetchAssignments = async (studentId) => {
//     try {
//       const response = await axios.get(
//         `http://localhost/MobApp/my-app/php_api/getStuAssignments.php?studentId=${11}`
//       );
//       if (response.data.assignments) {
//         setAssignments(response.data.assignments);
//       } else {
//         Alert.alert("No assignments", "No assignments available for this student.");
//       }
//     } catch (error) {
//       console.error("Error fetching assignments:", error);
//       Alert.alert("Error", "Failed to fetch assignments.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderAssignment = ({ item }) => {
//     const deadline = new Date(item.deadline);
//     const now = new Date();
//     const timeLeft = deadline - now;
//     const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//     const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const deadlineText =
//       timeLeft > 0 ? `${daysLeft} days, ${hoursLeft} hours left` : 'Past deadline';

//     return (
//       <Card style={styles.card}>
//         <Card.Content>
//           <Text style={styles.assignmentName}>{item.assignment_name}</Text>
//           <Paragraph>Deadline: {deadline.toLocaleString()}</Paragraph>
//           <Paragraph>Time Left: {deadlineText}</Paragraph>
//           <Paragraph>Status: {item.submission_id ? 'Submitted' : 'Not Submitted'}</Paragraph>
//         </Card.Content>
//         <Card.Actions>
//           {item.submission_id ? (
//             <Button
//               mode="contained"
//               onPress={() => navigation.navigate('Preview', { url: item.submission_path })}
//             >
//               Preview
//             </Button>
//           ) : (
//             <Button
//               mode="contained"
//               onPress={() =>
//                 navigation.navigate('Submit', { assignmentId: item.id, studentId })
//               }
//             >
//               Submit
//             </Button>
//           )}
//         </Card.Actions>
//       </Card>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Assignments</Text>
//       {loading ? (
//         <Text>Loading...</Text>
//       ) : (
//         <FlatList
//           data={assignments}
//           renderItem={renderAssignment}
//           keyExtractor={(item) => item.id.toString()}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f8f9fa',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#0a4a91',
//     marginBottom: 20,
//   },
//   card: {
//     marginBottom: 10,
//     padding: 10,
//   },
//   assignmentName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default ViewAssignments;


// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
// import axios from 'axios';
// import { Button, Card, Paragraph } from 'react-native-paper';

// const ViewAssignments = ({ route, navigation }) => {
//   const studentId = route?.params?.studentId || null; // Safely access studentId
//   const [assignments, setAssignments] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (studentId) {
//       fetchAssignments(studentId);
//     } else {
//       Alert.alert("Error", "Student ID is not provided.");
//       setLoading(false);
//     }
//   }, [studentId]);

//   const fetchAssignments = async (studentId) => {
//     try {
//       const response = await axios.get(
//         `http://localhost/MobApp/my-app/php_api/getStuAssignments.php?student_id=${11}` // Use dynamic studentId
//       );
//       console.log('API Response:', response.data); // Log the response to check if the data is correct
//       if (response.data.assignments) {
//         setAssignments(response.data.assignments);
//       } else {
//         Alert.alert("No assignments", "No assignments available for this student.");
//       }
//     } catch (error) {
//       console.error("Error fetching assignments:", error);
//       Alert.alert("Error", "Failed to fetch assignments.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const renderAssignment = ({ item }) => {
//     const deadline = new Date(item.deadline);
//     const now = new Date();
//     const timeLeft = deadline - now;
//     const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//     const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const deadlineText =
//       timeLeft > 0 ? `${daysLeft} days, ${hoursLeft} hours left` : 'Past deadline';

//     return (
//       <Card style={styles.card}>
//         <Card.Content>
//           <Text style={styles.assignmentName}>{item.assignment_name}</Text>
//           <Paragraph>Deadline: {deadline.toLocaleString()}</Paragraph>
//           <Paragraph>Time Left: {deadlineText}</Paragraph>
//           <Paragraph>Status: {item.submission_id ? 'Submitted' : 'Not Submitted'}</Paragraph>
//         </Card.Content>
//         <Card.Actions>
//           {item.submission_id ? (
//             <Button
//               mode="contained"
//               onPress={() => navigation.navigate('Preview', { url: item.submission_path })}
//             >
//               Preview
//             </Button>
//           ) : (
//             <Button
//               mode="contained"
//               onPress={() =>
//                 navigation.navigate('Submit', { assignmentId: item.id, studentId })
//               }
//             >
//               Submit
//             </Button>
//           )}
//         </Card.Actions>
//       </Card>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Assignments</Text>
//       {loading ? (
//         <Text>Loading...</Text>
//       ) : (
//         <FlatList
//           data={assignments}
//           renderItem={renderAssignment}
//           keyExtractor={(item) => item.id.toString()}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f8f9fa',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#0a4a91',
//     marginBottom: 20,
//   },
//   card: {
//     marginBottom: 10,
//     padding: 10,
//   },
//   assignmentName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default ViewAssignments;

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { Button, Card, Paragraph } from 'react-native-paper';

const ViewAssignments = ({ route, navigation }) => {
  // Ensure studentId is safely passed via navigation params
  const studentId = route?.params?.studentId || null;

  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (studentId) {
      fetchAssignments(studentId);
    } else {
      Alert.alert("Error", "Student ID is not provided.");
      setLoading(false);
    }
  }, [studentId]);

  const fetchAssignments = async (studentId) => {
    try {
      console.log("Student ID:", studentId);
      
      // Ensure dynamic studentId is being used in the API request
      const response = await axios.get(
        'http://localhost/MobApp/my-app/php_api/getStuAssignments.php?student_id=${11}'
      );

      console.log('API Response:', response.data);

      if (response.data.success && response.data.assignments && response.data.assignments.length > 0) {
        setAssignments(response.data.assignments); // Update state
        console.log('Assignments fetched:', response.data.assignments); // Check the data being set
      } else {
        Alert.alert("No assignments", "No assignments available for this student.");
      }
    } catch (error) {
      console.error("Error fetching assignments:", error);
      Alert.alert("Error", "Failed to fetch assignments.");
    } finally {
      setLoading(false);
    }
  };

  const renderAssignment = ({ item }) => {
    const deadline = new Date(item.deadline);
    const now = new Date();
    const timeLeft = deadline - now;
    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const deadlineText =
      timeLeft > 0 ? `${daysLeft} days, ${hoursLeft} hours left` : 'Past deadline';

    return (
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.assignmentName}>{item.assignment_name}</Text>
          <Paragraph>Deadline: {deadline.toLocaleString()}</Paragraph>
          <Paragraph>Time Left: {deadlineText}</Paragraph>
          <Paragraph>Status: {item.submission_id ? 'Submitted' : 'Not Submitted'}</Paragraph>
        </Card.Content>
        <Card.Actions>
          {item.submission_id ? (
            <Button
              mode="contained"
              onPress={() => navigation.navigate('Preview', { url: item.submission_path })}
            >
              Preview
            </Button>
          ) : (
            <Button
              mode="contained"
              onPress={() =>
                navigation.navigate('Submit', { assignmentId: item.id, studentId })
              }
            >
              Submit
            </Button>
          )}
        </Card.Actions>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Assignments</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={assignments}
          renderItem={renderAssignment}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.flatListContent}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0a4a91',
    marginBottom: 20,
  },
  card: {
    marginBottom: 10,
    padding: 10,
  },
  assignmentName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  flatListContent: {
    paddingBottom: 20,
  },
});

export default ViewAssignments;
