// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
//   Image,
// } from "react-native";
// import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const Dashboard = ({ navigation }) => {
//   const [courses, setCourses] = useState([]);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchDashboardData();
//   }, []);

//   const fetchDashboardData = async () => {
//     try {
//       const studentId = await AsyncStorage.getItem("student_id");

//       // Fetch ongoing courses
//       const coursesResponse = await axios.post(
//         "http://your-server-url/api/ongoingCourses.php",
//         { current_date: new Date().toISOString().split("T")[0] }
//       );
//       setCourses(coursesResponse.data);

//       // Fetch student result
//       const resultResponse = await axios.post(
//         "http://your-server-url/api/studentResult.php",
//         { student_id: studentId }
//       );
//       setResult(resultResponse.data || null);

//       setLoading(false);
//     } catch (error) {
//       Alert.alert("Error", "Failed to load dashboard data.");
//       console.error(error);
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>JUW - FYP Progress Recorder</Text>
//         <Text style={styles.subtitle}>Dashboard</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>More Activities</Text>
//         <View style={styles.grid}>
//           <ActivityButton
//             title="View Announcement"
//             icon={require("../../assets/icons/announcement.png")}
//             onPress={() => navigation.navigate("ViewAnnouncement")}
//           />
//           <ActivityButton
//             title="View Meetings"
//             icon={require("../../assets/icons/meeting.png")}
//             onPress={() => navigation.navigate("ViewMeetings")}
//           />
//           <ActivityButton
//             title="Submit Assignments"
//             icon={require("../../assets/icons/submit.png")}
//             onPress={() => navigation.navigate("SubmitAssignments")}
//           />
//           <ActivityButton
//             title="View Templates"
//             icon={require("../../assets/icons/template.png")}
//             onPress={() => navigation.navigate("ViewTemplates")}
//           />
//           <ActivityButton
//             title="Gallery"
//             icon={require("../../assets/icons/gallery.png")}
//             onPress={() => navigation.navigate("Gallery")}
//           />
//           <ActivityButton
//             title="View Result"
//             icon={require("../../assets/icons/result.png")}
//             onPress={() => navigation.navigate("ViewResult")}
//           />
//         </View>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>FYP Duration</Text>
//         {courses.length > 0 ? (
//           courses.map((course, index) => (
//             <View key={index} style={styles.card}>
//               <Text style={styles.cardTitle}>{course.title}</Text>
//               <Text style={styles.cardText}>Start: {course.start_date}</Text>
//               <Text style={styles.cardText}>End: {course.end_date}</Text>
//             </View>
//           ))
//         ) : (
//           <Text style={styles.noDataText}>No ongoing courses.</Text>
//         )}
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Result</Text>
//         {result ? (
//           <View style={styles.card}>
//             <Text style={styles.cardTitle}>Title: {result.title}</Text>
//             <Text style={styles.cardText}>
//               Total Marks: {result.total_marks}
//             </Text>
//             <Text style={styles.cardText}>GPA: {result.gpa}</Text>
//             <Text style={styles.grade}>Grade: {result.grade}</Text>
//           </View>
//         ) : (
//           <Text style={styles.noDataText}>Your result is not published yet.</Text>
//         )}
//       </View>
//     </ScrollView>
//   );
// };

// const ActivityButton = ({ title, icon, onPress }) => (
//   <TouchableOpacity style={styles.activityButton} onPress={onPress}>
//     <Image source={icon} style={styles.icon} />
//     <Text style={styles.buttonText}>{title}</Text>
//   </TouchableOpacity>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f8f9fa",
//     padding: 10,
//   },
//   header: {
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#0a4a91",
//   },
//   subtitle: {
//     fontSize: 16,
//     color: "#555",
//   },
//   section: {
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   grid: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   },
//   activityButton: {
//     width: "30%",
//     alignItems: "center",
//     marginBottom: 15,
//   },
//   icon: {
//     width: 50,
//     height: 50,
//     marginBottom: 5,
//   },
//   buttonText: {
//     fontSize: 12,
//     textAlign: "center",
//   },
//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 5,
//     padding: 15,
//     marginBottom: 10,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   cardTitle: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   cardText: {
//     fontSize: 14,
//   },
//   grade: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#28a745",
//     marginTop: 5,
//   },
//   noDataText: {
//     textAlign: "center",
//     color: "#dc3545",
//     fontSize: 14,
//   },
// });

// export default Dashboard;


// import React from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   SafeAreaView,
//   StatusBar,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons'; 

// const StudentDashboard = ({ navigation }) => {
//   const activities = [
//     { title: 'Faculty', icon: require('../assets/IconsS/faculty.png'), screen: 'FacultyFormScreen' },
//     { title: 'Student', icon: require('../assets/IconsS/student.png'), screen: 'AddStudent' },
//     { title: 'External', icon: require('../assets/IconsS/External.png'), screen: 'AddExternal' },
//     { title: 'Project', icon: require('../assets/IconsS/status board.png'), screen: 'AssignProject' },
//     { title: 'Project Status', icon: require('../assets/IconsS/chat.png'), screen: 'ProjectStatus' },
//     { title: 'Coordinator', icon: require('../assets/IconsS/profile.png'), screen: 'AssignCoordinatorScreen' },
//     { title: 'Batch', icon: require('../assets/IconsS/template.png'), screen: 'AddBatch' },
//     { title: 'Room', icon: require('../assets/IconsS/Submit.png'), screen: 'AddRooms' },
//   ];

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#6200ee" />

     
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={24} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.headerText}>JUW - FYP Progress Recorder</Text>
//       </View>

//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <Text style={styles.title}>Dashboard</Text>

//         <View style={styles.activitiesContainer}>
//           {activities.map((activity, index) => (
//             <TouchableOpacity
//               key={index}
//               style={styles.card}
//               onPress={() => navigation.navigate(activity.screen)}
//             >
//               <Image source={activity.icon} style={styles.cardIcon} />
//               <Text style={styles.cardText}>{activity.title}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     backgroundColor: '#004080',
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   backButton: {
//     position: 'absolute',
//     left: 15,
//   },
//   headerText: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     flex: 1,
//   },
//   scrollContainer: {
//     paddingHorizontal: 16,
//     paddingBottom: 20,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginVertical: 20,
//     textAlign: 'center',
//   },
//   activitiesContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
//   card: {
//     width: '40%',
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     elevation: 3, 
//     shadowColor: '#000', 
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     marginBottom: 10,
//     marginHorizontal: 8,
//     alignItems: 'center',
//     paddingVertical: 15,
//   },
//   cardIcon: {
//     width: 50,
//     height: 50,
//     marginBottom: 8,
//   },
//   cardText: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default StudentDashboard;




// Provided by miss

// 
// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const StudentDashboard = ({ navigation }) => {
//   const handleLogout = () => {
//     // Clear any user data or tokens here if necessary
//     navigation.replace('RoleSelection'); // Navigate back to the role selection screen
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.welcomeText}>Welcome to the Student Dashboard!</Text>

//       {/* Add dashboard functionalities below */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>My Profile</Text>
//         <Text>View and update your profile details.</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>My Progress</Text>
//         <Text>Track your academic and project progress.</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Notifications</Text>
//         <Text>Check important announcements and updates.</Text>
//       </View>

//       <Button title="Logout" onPress={handleLogout} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f8f9fa',
//   },
//   welcomeText: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 20,
//     color: '#004080',
//   },
//   section: {
//     backgroundColor: '#fff',
//     padding: 16,
//     borderRadius: 8,
//     marginBottom: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 8,
//     color: '#333',
//   },
// });

// export default StudentDashboard;

// new code
// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
// import axios from 'axios'; // For API calls

// const StudentDashboard = () => {
//   // const [ongoingCourses, setOngoingCourses] = useState([]);
//   // const [result, setResult] = useState(null);
//   // const [hasResult, setHasResult] = useState(false);

//   // useEffect(() => {
//   //   fetchOngoingCourses();
//   //   fetchStudentResult();
//   // }, []);

//   // const fetchOngoingCourses = async () => {
//   //   try {
//   //     const response = await axios.get('YOUR_API_ENDPOINT_FOR_COURSES');
//   //     setOngoingCourses(response.data);
//   //   } catch (error) {
//   //     console.error('Error fetching courses:', error);
//   //   }
//   // };

//   // const fetchStudentResult = async () => {
//   //   try {
//   //     const response = await axios.get('YOUR_API_ENDPOINT_FOR_RESULTS');
//   //     if (response.data) {
//   //       setResult(response.data);
//   //       setHasResult(true);
//   //     } else {
//   //       setHasResult(false);
//   //     }
//   //   } catch (error) {
//   //     console.error('Error fetching results:', error);
//   //   }
//   // };

//   const navigateTo = (route) => {
//     Alert.alert('Navigation', `Navigate to ${route}`);
//     // Use navigation.navigate(route) for actual navigation
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.heading}>Dashboard</Text>
//       </View>

//       <View style={styles.activitiesSection}>
//         <Text style={styles.subHeading}>More Activities</Text>
//         <View style={styles.activitiesGrid}>
//           {[
//             { title: 'Announcement', icon: require('../assets/IconsS/announcement.png'), screen: 'viewAnnouncement' },
//             { title: 'Meetings', icon: require('../assets/IconsS//meeting.png'), screen: 'viewMeetings' },
//             { title: 'Assignments', icon: require('../assets/IconsS//Submit.png'), screen: 'Assignments' },
//             { title: 'Templates', icon: require('../assets/IconsS//template.png'), screen: 'viewTemplates' },
//             { title: 'Gallery', icon: require('../assets/IconsS//gallery.png'), screen: 'gallery' },
//             { title: 'Result', icon: require('../assets/IconsS//evaluation.png'), screen: 'viewResult' },
//           ].map((activity, index) => (
//             <TouchableOpacity key={index} style={styles.dashButton} onPress={() => navigateTo(activity.screen)}>
//               <Image source={activity.icon} style={styles.icon} />
//               <Text style={styles.activityText}>{activity.title}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>

//       {/* <View style={styles.infoSection}>
//         <Text style={styles.subHeading}>FYP Duration</Text>
//         {ongoingCourses.length > 0 ? (
//           ongoingCourses.map((course, index) => (
//             <View key={index} style={styles.infoCard}>
//               <Text style={styles.cardTitle}>{course.title}</Text>
//               <Text>Start: {course.start_date}</Text>
//               <Text>End: {course.end_date}</Text>
//             </View>
//           ))
//         ) : (
//           <Text style={styles.noData}>No ongoing courses.</Text>
//         )}
//       </View> */}

//       {/* <View style={styles.infoSection}>
//         <Text style={styles.subHeading}>Result</Text>
//         {hasResult ? (
//           <View style={styles.resultCard}>
//             <Text style={styles.cardTitle}>Title: {result.title}</Text>
//             <Text>Total Marks: <Text style={styles.boldText}>{result.total_marks}</Text></Text>
//             <Text>GPA: <Text style={styles.boldText}>{result.gpa}</Text></Text>
//             <Text style={styles.grade}>Grade: {result.grade}</Text>
//           </View>
//         ) : (
//           <Text style={styles.noData}>Your result is not published yet.</Text>
//         )}
//       </View> */}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 16, backgroundColor: '#fff' },
//   header: { marginBottom: 20, alignItems: 'center' },
//   heading: { fontSize: 24, fontWeight: 'bold', color: '#0a4a91' },
//   activitiesSection: { marginBottom: 20 },
//   subHeading: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
//   activitiesGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
//   dashButton: { width: '48%', alignItems: 'center', marginBottom: 16, padding: 10, backgroundColor: '#f8f9fa', borderRadius: 8 },
//   icon: { width: 50, height: 50, marginBottom: 8 },
//   activityText: { fontSize: 14, textAlign: 'center' },
//   infoSection: { marginBottom: 20 },
//   infoCard: { backgroundColor: '#f8f9fa', padding: 10, borderRadius: 8, marginBottom: 10 },
//   cardTitle: { fontSize: 16, fontWeight: 'bold' },
//   noData: { textAlign: 'center', color: '#dc3545', fontWeight: 'bold' },
//   resultCard: { backgroundColor: '#f8f9fa', padding: 10, borderRadius: 8 },
//   boldText: { fontWeight: 'bold' },
//   grade: { fontSize: 18, fontWeight: 'bold', color: '#28a745' },
// });

// export default StudentDashboard;


// new code
// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   Image,
//   Alert,
//   Dimensions,
// } from 'react-native';


// const StudentDashboard = () => {
//   const navigateTo = (route) => {
//     Alert.alert('Navigation', `Navigate to ${route}`);
//     // Use navigation.navigate(route) for actual navigation
//   };

//   return (
//     <ScrollView style={styles.container}>
//       {/* Header Section */}
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>JUW - FYP Progress Recorder</Text>
//       </View>

//       {/* Dashboard Heading */}
//       <View style={styles.dashboardHeading}>
//         <Text style={styles.headingText}>Dashboard</Text>
//       </View>

//       {/* Activities Section */}
//       <View style={styles.activitiesSection}>
//         <Text style={styles.sectionHeading}>More Activities</Text>
//         <View style={styles.activitiesGrid}>
//           {[
//             {
//               title: 'Announcement',
//               icon: require('../assets/IconsS/announcement.png'),
//               screen: 'StudentAnnouncements',
//             },
//             {
//               title: 'Meetings',
//               icon: require('../assets/IconsS/meeting.png'),
//               screen: 'viewMeetings',
//             },
//             {
//               title: 'Assignments',
//               icon: require('../assets/IconsS/Submit.png'),
//               screen: 'Assignments',
//             },
//             {
//               title: 'Templates',
//               icon: require('../assets/IconsS/template.png'),
//               screen: 'viewTemplates',
//             },
//             {
//               title: 'Result',
//               icon: require('../assets/IconsS/evaluation.png'),
//               screen: 'viewResult',
//             },
//           ].map((activity, index) => (
//             <TouchableOpacity
//               key={index}
//               style={styles.activityCard}
//               onPress={() => navigateTo(activity.screen)}>
//               <Image source={activity.icon} style={styles.activityIcon} />
//               <Text style={styles.activityText}>{activity.title}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const { width } = Dimensions.get('window');

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 16,
//   },
//   header: {
//     backgroundColor: '#0a4a91',
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     alignItems: 'center',
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   dashboardHeading: {
//     alignItems: 'center',
//     marginVertical: 20,
//   },
//   headingText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#0a4a91',
//   },
//   activitiesSection: {
//     marginBottom: 20,
//   },
//   sectionHeading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#333',
//   },
//   activitiesGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   activityCard: {
//     // width: (width - 48) / 2, // Two columns with spacing
//     // backgroundColor: '#f8f9fa',
//     // borderRadius: 10,
//     // paddingVertical: 20,
//     // alignItems: 'center',
//     // marginBottom: 16,
//     // borderWidth: 1,
//     // borderColor: '#dee2e6',
//     width: '40%',
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     marginBottom: 10,
//     marginHorizontal: 8,
//     alignItems: 'center',
//     paddingVertical: 15,
//   },
//   activityIcon: {
//     width: 50,
//     height: 50,
//     marginBottom: 8,
//   },
//   activityText: {
//    fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default StudentDashboard;








// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity,
//   SafeAreaView,
//   StatusBar,
//   Modal,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const StudentDashboard = ({ navigation }) => {
//   const [dropdownVisible, setDropdownVisible] = useState(false);

//   const activities = [
//     { title: ' Announcements', icon: require('../assets/IconsS/announcement.png'), screen: 'StudentAnnouncements' },
//     { title: 'View Meetings', icon: require('../assets/IconsS/meeting.png'), screen: 'ViewMeetings' },
//     { title: 'Submit Assignments', icon: require('../assets/IconsS/Submit.png'), screen: 'ViewAssignments' },
//     { title: 'Download Templates', icon: require('../assets/IconsS/template.png'), screen: 'TemplateListScreen' },
//     { title: 'Gallery', icon: require('../assets/IconsS/gallery.png'), screen: 'StuGalleryScreen' },
//     { title: 'View Results', icon: require('../assets/IconsS/results.png'), screen: 'ResultScreen' },
//   ];

//   const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

//   const handleLogout = async () => {
//     try {
//       await AsyncStorage.removeItem('userToken');
//       navigation.reset({
//         index: 0,
//         routes: [{ name: 'LoginScreen' }],
//       });
//     } catch (error) {
//       console.error('Error during logout:', error);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#004080" />

//       {/* Header Section */}
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.menuButton} onPress={() => navigation.toggleDrawer()}>
//           <Ionicons name="menu" size={24} color="#fff" />
//         </TouchableOpacity>
//         <Text style={styles.headerText}>Student Dashboard</Text>
//         <TouchableOpacity onPress={toggleDropdown}>
//           <Text style={styles.profileText}>Student: John Doe</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Dropdown Menu */}
//       {/* {dropdownVisible && (
//         <Modal
//           transparent
//           animationType="fade"
//           visible={dropdownVisible}
//           onRequestClose={() => setDropdownVisible(false)}
//         >
//           <TouchableOpacity
//             style={styles.modalOverlay}
//             onPress={() => setDropdownVisible(false)}
//           >
//             <View style={styles.dropdownMenu}>
//               <TouchableOpacity onPress={handleLogout} style={styles.dropdownItem}>
//                 <Text style={styles.dropdownText}>Logout</Text>
//               </TouchableOpacity>
//             </View>
//           </TouchableOpacity>
//         </Modal>
//       )} */}

//       {/* Breadcrumb */}
//       <View style={styles.breadcrumb}>
//         <Text style={styles.breadcrumbText}>JUW - FYP Progress Recorder / Student Dashboard</Text>
//       </View>

//       {/* Main Content */}
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <Text style={styles.title}>Welcome to Your Dashboard</Text>
//         <View style={styles.activitiesContainer}>
//           {activities.map((activity, index) => (
//             <TouchableOpacity
//               key={index}
//               style={styles.card}
//               onPress={() => navigation.navigate(activity.screen)}
//             >
//               <Image source={activity.icon} style={styles.cardIcon} />
//               <Text style={styles.cardText}>{activity.title}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     backgroundColor: '#004080',
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   menuButton: {
//     padding: 5,
//   },
//   headerText: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   profileText: {
//     color: '#fff',
//     fontSize: 14,
//     fontStyle: 'italic',
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
//   scrollContainer: {
//     paddingHorizontal: 16,
//     paddingBottom: 20,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginVertical: 20,
//     textAlign: 'center',
//   },
//   activitiesContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
//   card: {
//     width: '40%',
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     marginBottom: 10,
//     marginHorizontal: 8,
//     alignItems: 'center',
//     paddingVertical: 15,
//   },
//   cardIcon: {
//     width: 50,
//     height: 50,
//     marginBottom: 8,
//   },
//   cardText: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'flex-start',
//     alignItems: 'flex-end',
//   },
//   dropdownMenu: {
//     backgroundColor: '#fff',
//     width: 150,
//     borderRadius: 5,
//     marginTop: 10,
//     marginRight: 20,
//     paddingVertical: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   dropdownItem: {
//     padding: 10,
//   },
//   dropdownText: {
//     fontSize: 14,
//     color: '#004080',
//   },
// });

// export default StudentDashboard;




// new
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StuNav from './StuNav'; // Import StuNav here

const StudentDashboard = ({ navigation }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const activities = [
    { title: ' Announcements', icon: require('../assets/IconsS/announcement.png'), screen: 'StudentAnnouncements' },
    { title: 'View Meetings', icon: require('../assets/IconsS/meeting.png'), screen: 'ViewMeetings' },
    { title: 'Assignments', icon: require('../assets/IconsS/Submit.png'), screen: 'ViewAssignments' },
    { title: 'Templates', icon: require('../assets/IconsS/template.png'), screen: 'TemplateListScreen' },
    { title: 'Gallery', icon: require('../assets/IconsS/gallery.png'), screen: 'StuGalleryScreen' },
    { title: 'View Results', icon: require('../assets/IconsS/results.png'), screen: 'StuResult' },
  ];

  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      navigation.reset({
        index: 0,
        routes: [{ name: 'LoginScreen' }],
      });
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#004080" />

      {/* Integrating StuNav here */}
      <StuNav />

      {/* Dropdown Menu */}
      {/* {dropdownVisible && (
        <Modal
          transparent
          animationType="fade"
          visible={dropdownVisible}
          onRequestClose={() => setDropdownVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalOverlay}
            onPress={() => setDropdownVisible(false)}
          >
            <View style={styles.dropdownMenu}>
              <TouchableOpacity onPress={handleLogout} style={styles.dropdownItem}>
                <Text style={styles.dropdownText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      )} */}

      {/* Breadcrumb */}
      <View style={styles.breadcrumb}>
        <Text style={styles.breadcrumbText}>JUW - FYP Progress Recorder / Student Dashboard</Text>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Welcome to Your Dashboard</Text>
        <View style={styles.activitiesContainer}>
          {activities.map((activity, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => navigation.navigate(activity.screen)}
            >
              <Image source={activity.icon} style={styles.cardIcon} />
              <Text style={styles.cardText}>{activity.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#004080',
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuButton: {
    padding: 5,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileText: {
    color: '#fff',
    fontSize: 14,
    fontStyle: 'italic',
  },
  breadcrumb: {
    backgroundColor: '#eaeff2',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  breadcrumbText: {
    color: '#004080',
    fontSize: 14,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  activitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    width: '40%',
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 10,
    marginHorizontal: 8,
    alignItems: 'center',
    paddingVertical: 15,
  },
  cardIcon: {
    width: 50,
    height: 50,
    marginBottom: 8,
  
  },
  cardText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  dropdownMenu: {
    backgroundColor: '#fff',
    width: 150,
    borderRadius: 5,
    marginTop: 10,
    marginRight: 20,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  dropdownItem: {
    padding: 10,
  },
  dropdownText: {
    fontSize: 14,
    color: '#004080',
  },
});

export default StudentDashboard;
