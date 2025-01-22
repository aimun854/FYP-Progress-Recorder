// // import React, { useState } from 'react';
// // import {
// //   View,
// //   Text,
// //   StyleSheet,
// //   TouchableOpacity,
// //   Image,
// //   Dimensions,
// //   Modal,
// //   Pressable,
// // } from 'react-native';
// // import { useNavigation } from '@react-navigation/native'; // For navigation

// // const SupNav = () => {
// //   const [sidebarVisible, setSidebarVisible] = useState(false);
// //   const [meetingsDropdown, setMeetingsDropdown] = useState(false);
// //   const [isModalVisible, setModalVisible] = useState(false);
// //   const navigation = useNavigation(); // To navigate between screens

// //   const toggleSidebar = () => {
// //     setSidebarVisible(!sidebarVisible);
// //   };

// //   const toggleMeetingsDropdown = () => {
// //     setMeetingsDropdown(!meetingsDropdown);
// //   };

// //   const toggleModal = () => {
// //     setModalVisible(!isModalVisible);
// //   };

// //   return (
// //     <>
// //       {/* Header */}
// //       <View style={styles.header}>
// //         <View style={styles.headerCenter}>
// //           <Image source={require('../assets/IconsSuper/logo.png')} style={styles.logo} />
// //           <Text style={styles.headerTitle}>FYP Progress Recorder</Text>
// //         </View>

// //         <View style={styles.userInfo}>
// //           <TouchableOpacity onPress={toggleModal}>
// //             <Image
// //               source={require('../assets/IconsSuper/userIcon.png')} // Replace with your user icon
// //               style={styles.userImage}
// //             />
// //           </TouchableOpacity>

// //           {/* Dropdown Modal for User Info */}
// //           <Modal
// //             animationType="slide"
// //             transparent={true}
// //             visible={isModalVisible}
// //             onRequestClose={toggleModal}
// //           >
// //             <View style={styles.modalBackground}>
// //               <View style={styles.modalContainer}>
// //                 <Text style={styles.modalText}>Supervisor: User</Text>
// //                 <TouchableOpacity onPress={toggleModal}>
// //                   <Text style={styles.logoutText}>Logout</Text>
// //                 </TouchableOpacity>
// //                 <Pressable onPress={toggleModal} style={styles.closeButton}>
// //                   <Text style={styles.closeText}>Close</Text>
// //                 </Pressable>
// //               </View>
// //             </View>
// //           </Modal>
// //         </View>

// //         <TouchableOpacity onPress={toggleSidebar} style={styles.toggleBtn}>
// //           <Text style={styles.toggleText}>☰</Text>
// //         </TouchableOpacity>
// //       </View>

// //       {/* Sidebar */}
// //       {sidebarVisible && (
// //         <View style={styles.sidebar}>
// //           <TouchableOpacity onPress={() => navigation.navigate('SupervisorDashboard')}>
// //             <Text style={styles.sidebarLink}>SupervisorDashboard</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity onPress={() => navigation.navigate('SupAnnouncement')}>
// //             <Text style={styles.sidebarLink}>SupAnnouncement</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity onPress={() => navigation.navigate('FetchProjects')}>
// //             <Text style={styles.sidebarLink}>FetchProjects</Text>
// //           </TouchableOpacity>

// //           {/* Meetings Dropdown */}
// //           <TouchableOpacity onPress={toggleMeetingsDropdown}>
// //             <Text style={styles.sidebarLink}>Meetings</Text>
// //           </TouchableOpacity>
// //           {meetingsDropdown && (
// //             <View style={styles.submenu}>
// //               <TouchableOpacity onPress={() => navigation.navigate('Meetings')}>
// //                 <Text style={styles.submenuLink}>View Meetings</Text>
// //               </TouchableOpacity>
// //               <TouchableOpacity onPress={() => navigation.navigate('MeetingSchedule')}>
// //                 <Text style={styles.submenuLink}>Set Meetings</Text>
// //               </TouchableOpacity>
// //             </View>
// //           )}

// //           <TouchableOpacity onPress={() => navigation.navigate('Result')}>
// //             <Text style={styles.sidebarLink}>Result</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity onPress={() => navigation.navigate('TemplateScreen')}>
// //             <Text style={styles.sidebarLink}>TemplateScreen</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity onPress={() => navigation.navigate('Internal Project Evaluation')}>
// //             <Text style={styles.sidebarLink}>Internal Project Evaluation</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity onPress={() => navigation.navigate('My Project Evaluation')}>
// //             <Text style={styles.sidebarLink}>My Project Evaluation</Text>
// //           </TouchableOpacity>
// //           <TouchableOpacity onPress={() => navigation.navigate('Logout')}>
// //             <Text style={styles.sidebarLink}>Logout</Text>
// //           </TouchableOpacity>
// //         </View>
// //       )}
// //     </>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   header: {
// //     backgroundColor: '#051747',
// //     height: 60,
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     paddingHorizontal: 10,
// //     position: 'relative',
// //   },
// //   headerCenter: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   logo: {
// //     width: 40,
// //     height: 40,
// //     resizeMode: 'contain',
// //   },
// //   headerTitle: {
// //     color: '#fff',
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginLeft: 5,
// //   },
// //   userInfo: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     position: 'absolute',
// //     right: 10,
// //   },
// //   userImage: {
// //     width: 40,
// //     height: 40,
// //     borderRadius: 20,
// //     resizeMode: 'contain',
// //     backgroundColor: 'transparent',
// //   },
// //   modalBackground: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
// //   },
// //   modalContainer: {
// //     backgroundColor: 'white',
// //     padding: 20,
// //     borderRadius: 10,
// //     width: '80%',
// //     alignItems: 'center',
// //   },
// //   modalText: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// //   logoutText: {
// //     fontSize: 16,
// //     marginTop: 20,
// //     color: 'blue',
// //   },
// //   closeButton: {
// //     marginTop: 20,
// //     padding: 10,
// //     backgroundColor: '#051747',
// //     borderRadius: 5,
// //   },
// //   closeText: {
// //     color: '#fff',
// //     fontSize: 16,
// //   },
// //   toggleBtn: {
// //     position: 'absolute',
// //     left: 10,
// //     padding: 5,
// //   },
// //   toggleText: {
// //     color: '#fff',
// //     fontSize: 24,
// //   },
// //   sidebar: {
// //     position: 'absolute',
// //     top: 60,
// //     left: 0,
// //     width: 250,
// //     height: Dimensions.get('window').height - 60,
// //     backgroundColor: '#fff',
// //     padding: 10,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.25,
// //     shadowRadius: 3.84,
// //     elevation: 5,
// //     zIndex: 10,
// //   },
// //   sidebarLink: {
// //     paddingVertical: 15,
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     color: '#051747',
// //     borderBottomWidth: 0.3,
// //     borderBottomColor: '#ccc',
// //   },
// //   submenu: {
// //     paddingLeft: 20,
// //   },
// //   submenuLink: {
// //     fontSize: 14,
// //     color: '#051747',
// //     paddingVertical: 10,
// //   },
// // });

// // export default SupNav;


// // updated
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   Dimensions,
//   Modal,
//   Pressable,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native'; // For navigation

// const SupNav = () => {
//   const [sidebarVisible, setSidebarVisible] = useState(false);
//   const [meetingsDropdown, setMeetingsDropdown] = useState(false);
//   const [isModalVisible, setModalVisible] = useState(false);
//   const navigation = useNavigation(); // To navigate between screens

//   const toggleSidebar = () => {
//     setSidebarVisible(!sidebarVisible);
//   };

//   const toggleMeetingsDropdown = () => {
//     setMeetingsDropdown(!meetingsDropdown);
//   };

//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };

//   return (
//     <>
//       {/* Header */}
//       <View style={styles.header}>
//         <View style={styles.headerCenter}>
//           <Image source={require('../assets/IconsSuper/logo.png')} style={styles.logo} />
//           <Text style={styles.headerTitle}>FYP Progress Recorder</Text>
//         </View>

//         <View style={styles.userInfo}>
//           <TouchableOpacity onPress={toggleModal}>
//             <Image
//               source={require('../assets/IconsSuper/homes.png')} // Replace with your user icon
//               style={styles.userImage}
//             />
//           </TouchableOpacity>

//           {/* Dropdown Modal for User Info */}
//           <Modal
//             animationType="slide"
//             transparent={true}
//             visible={isModalVisible}
//             onRequestClose={toggleModal}
//           >
//             <View style={styles.modalBackground}>
//               <View style={styles.modalContainer}>
//                 <Text style={styles.modalText}>Supervisor: User</Text>
//                 <TouchableOpacity onPress={toggleModal}>
//                   <Text style={styles.logoutText}>Logout</Text>
//                 </TouchableOpacity>
//                 <Pressable onPress={toggleModal} style={styles.closeButton}>
//                   <Text style={styles.closeText}>Close</Text>
//                 </Pressable>
//               </View>
//             </View>
//           </Modal>
//         </View>

//         <TouchableOpacity onPress={toggleSidebar} style={styles.toggleBtn}>
//           <Text style={styles.toggleText}>☰</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Sidebar */}
//       {sidebarVisible && (
//         <View style={styles.sidebar}>
//           <TouchableOpacity onPress={() => navigation.navigate('SupervisorDashboard')}>
//             <Text style={styles.sidebarLink}>SupervisorDashboard</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate('SupAnnouncement')}>
//             <Text style={styles.sidebarLink}>SupAnnouncement</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate('FetchProjects')}>
//             <Text style={styles.sidebarLink}>FetchProjects</Text>
//           </TouchableOpacity>

//           {/* Meetings Dropdown */}
//           <TouchableOpacity onPress={toggleMeetingsDropdown}>
//             <Text style={styles.sidebarLink}>Meetings</Text>
//           </TouchableOpacity>
//           {meetingsDropdown && (
//             <View style={styles.submenu}>
//               <TouchableOpacity onPress={() => navigation.navigate('Meetings')}>
//                 <Text style={styles.submenuLink}>View Meetings</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => navigation.navigate('MeetingSchedule')}>
//                 <Text style={styles.submenuLink}>Set Meetings</Text>
//               </TouchableOpacity>
//             </View>
//           )}

//           <TouchableOpacity onPress={() => navigation.navigate('Result')}>
//             <Text style={styles.sidebarLink}>Result</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate('TemplateScreen')}>
//             <Text style={styles.sidebarLink}>TemplateScreen</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate('Internal Project Evaluation')}>
//             <Text style={styles.sidebarLink}>Internal Project Evaluation</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate('My Project Evaluation')}>
//             <Text style={styles.sidebarLink}>My Project Evaluation</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate('Logout')}>
//             <Text style={styles.sidebarLink}>Logout</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: '#051747',
//     height: 60,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 10,
//     position: 'relative',
//   },
//   headerCenter: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   logo: {
//     width: 40,
//     height: 40,
//     resizeMode: 'contain',
//   },
//   headerTitle: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginLeft: 5,
//   },
//   userInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     position: 'absolute',
//     right: 10,
//   },
//   userImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     resizeMode: 'contain',
//     backgroundColor: 'transparent',
//   },
//   modalBackground: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContainer: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     width: '80%',
//     alignItems: 'center',
//   },
//   modalText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   logoutText: {
//     fontSize: 16,
//     marginTop: 20,
//     color: 'blue',
//   },
//   closeButton: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: '#051747',
//     borderRadius: 5,
//   },
//   closeText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   toggleBtn: {
//     position: 'absolute',
//     left: 10,
//     padding: 5,
//   },
//   toggleText: {
//     color: '#fff',
//     fontSize: 24,
//   },
//   sidebar: {
//     position: 'absolute',
//     top: 60,
//     left: 0,
//     width: 250,
//     height: Dimensions.get('window').height - 60,
//     backgroundColor: '#fff',
//     padding: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//     zIndex: 10,
//   },
//   sidebarLink: {
//     paddingVertical: 15,
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#051747',
//     borderBottomWidth: 0.3,
//     borderBottomColor: '#ccc',
//   },
//   submenu: {
//     paddingLeft: 20,
//   },
//   submenuLink: {
//     fontSize: 14,
//     color: '#051747',
//     paddingVertical: 10,
//   },
// });

// export default SupNav;


// neww updation
// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   Dimensions,
//   Modal,
//   Pressable,
// } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';

// const SupNav = () => {
//   const [sidebarVisible, setSidebarVisible] = useState(false);
//   const [meetingsDropdown, setMeetingsDropdown] = useState(false);
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [facultyName, setFacultyName] = useState(''); // State for supervisor's username
//   const navigation = useNavigation();
//   const route = useRoute();

//   // const juwId = 'soomaiya.hamid';
// console.log('JUW ID:', juwId); // Check if JUW ID is correct
// // Fallback to 'default_id' if juw_id is not passed

//   // Function to fetch supervisor's username based on juw_id
//   const fetchFacultyDetails = async () => {
//   try {
//     // Make sure juwId is set correctly
//     const juwId = "ummay.faseeha"; // this should be a string

//     // API request with juwId passed as query parameter
//     const response = await fetch(
//       `http://localhost/MobApp/my-app/php_api/getSupervisorDetails.php?juw_id=${juwId}` // passing juwId as query parameter
//     );
    
//     const data = await response.json(); // get response data

//     // Checking if the response was successful
//     if (data.success) {
//       setFacultyName(data.username); // Assuming the API returns username and faculty name
//     } else {
//       console.error('Error from API:', data.error || 'Unknown error');
//       setFacultyName('Unknown'); // Fallback value in case of error
//     }
//   } catch (error) {
//     // Catching and logging any errors
//     console.error('Error fetching faculty details:', error);
//     setFacultyName('Unknown'); // Fallback value in case of an error
//   }
// };


//   useEffect(() => {
//     if (juwId !== 'default_id') {
//       fetchFacultyDetails(); // Fetch details when juw_id is available
//     }
//   }, [juwId]);

//   const toggleSidebar = () => {
//     setSidebarVisible(!sidebarVisible);
//   };

//   const toggleMeetingsDropdown = () => {
//     setMeetingsDropdown(!meetingsDropdown);
//   };

//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };

//   return (
//     <>
//       {/* Header */}
//       <View style={styles.header}>
//         <View style={styles.headerCenter}>
//           <Image source={require('../assets/IconsSuper/logo.png')} style={styles.logo} />
//           <Text style={styles.headerTitle}>FYP Progress Recorder</Text>
//         </View>

        // <View style={styles.userInfo}>
        //   <TouchableOpacity onPress={toggleModal}>
        //     <Image
        //       source={require('../assets/IconsSuper/homes.png')}
        //       style={styles.userImage}
        //     />
        //   </TouchableOpacity>

//           {/* Dropdown Modal for User Info */}
//           <Modal
//             animationType="slide"
//             transparent={true}
//             visible={isModalVisible}
//             onRequestClose={toggleModal}
//           >
//             <View style={styles.modalBackground}>
//               <View style={styles.modalContainer}>
//                 <Text style={styles.modalText}>
//                   Supervisor: {facultyName || 'Unknown'}
//                 </Text>
//                 <TouchableOpacity onPress={toggleModal}>
//                   <Text style={styles.logoutText}>Logout</Text>
//                 </TouchableOpacity>
//                 <Pressable onPress={toggleModal} style={styles.closeButton}>
//                   <Text style={styles.closeText}>Close</Text>
//                 </Pressable>
//               </View>
//             </View>
//           </Modal>
//         </View>

//         <TouchableOpacity onPress={toggleSidebar} style={styles.toggleBtn}>
//           <Text style={styles.toggleText}>☰</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Sidebar */}
//       {sidebarVisible && (
//         <View style={styles.sidebar}>
//           <TouchableOpacity onPress={() => navigation.navigate('SupervisorDashboard')}>
//             <Text style={styles.sidebarLink}>SupervisorDashboard</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate('SupAnnouncement')}>
//             <Text style={styles.sidebarLink}>SupAnnouncement</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate('FetchProjects')}>
//             <Text style={styles.sidebarLink}>FetchProjects</Text>
//           </TouchableOpacity>

//           {/* Meetings Dropdown */}
//           <TouchableOpacity onPress={toggleMeetingsDropdown}>
//             <Text style={styles.sidebarLink}>Meetings</Text>
//           </TouchableOpacity>
//           {meetingsDropdown && (
//             <View style={styles.submenu}>
//               <TouchableOpacity onPress={() => navigation.navigate('Meetings')}>
//                 <Text style={styles.submenuLink}>View Meetings</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => navigation.navigate('MeetingSchedule')}>
//                 <Text style={styles.submenuLink}>Set Meetings</Text>
//               </TouchableOpacity>
//             </View>
//           )}

//           <TouchableOpacity onPress={() => navigation.navigate('Result')}>
//             <Text style={styles.sidebarLink}>Result</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate('TemplateScreen')}>
//             <Text style={styles.sidebarLink}>TemplateScreen</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate('Internal Project Evaluation')}>
//             <Text style={styles.sidebarLink}>Internal Project Evaluation</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate('My Project Evaluation')}>
//             <Text style={styles.sidebarLink}>My Project Evaluation</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate('Logout')}>
//             <Text style={styles.sidebarLink}>Logout</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: '#051747',
//     height: 60,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 10,
//     position: 'relative',
//   },
//   headerCenter: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   logo: {
//     width: 40,
//     height: 40,
//     resizeMode: 'contain',
//   },
//   headerTitle: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginLeft: 5,
//   },
  // userInfo: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   position: 'absolute',
  //   right: 10,
  // },
  // userImage: {
  //   width: 40,
  //   height: 40,
  //   borderRadius: 20,
  //   resizeMode: 'contain',
  //   backgroundColor: 'transparent',
  // },
//   modalBackground: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContainer: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     width: '80%',
//     alignItems: 'center',
//   },
//   modalText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   logoutText: {
//     fontSize: 16,
//     marginTop: 20,
//     color: 'blue',
//   },
//   closeButton: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: '#051747',
//     borderRadius: 5,
//   },
//   closeText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   toggleBtn: {
//     position: 'absolute',
//     left: 10,
//     padding: 5,
//   },
//   toggleText: {
//     color: '#fff',
//     fontSize: 24,
//   },
//   sidebar: {
//     position: 'absolute',
//     top: 60,
//     left: 0,
//     width: 250,
//     height: Dimensions.get('window').height - 60,
//     backgroundColor: '#fff',
//     padding: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//     zIndex: 10,
//   },
//   sidebarLink: {
//     paddingVertical: 15,
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#051747',
//     borderBottomWidth: 0.3,
//     borderBottomColor: '#ccc',
//   },
//   submenu: {
//     paddingLeft: 20,
//   },
//   submenuLink: {
//     fontSize: 14,
//     color: '#051747',
//     paddingVertical: 10,
//   },
// });

// export default SupNav;


// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   Dimensions,
//   Modal,
//   Pressable,
// } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';

// const SupNav = () => {
//   const [sidebarVisible, setSidebarVisible] = useState(false);
//   const [meetingsDropdown, setMeetingsDropdown] = useState(false);
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [facultyName, setFacultyName] = useState(''); // State for supervisor's username
//   const navigation = useNavigation();
//   const route = useRoute();

//   // Default JUW ID value
//   const juwId = "ummay.faseeha"; // this should be a string

//   // Function to fetch supervisor's username based on juw_id
//   const fetchFacultyDetails = async () => {
//     try {
//       // API request with juwId passed as query parameter
//       const response = await fetch(
//         `http://localhost/MobApp/my-app/php_api/getSupervisorDetails.php?juw_id=${juwId}` // passing juwId as query parameter
//       );
      
//       const data = await response.json(); // get response data

//       // Checking if the response was successful
//       if (data.success) {
//         setFacultyName(data.username); // Assuming the API returns username and faculty name
//       } else {
//         console.error('Error from API:', data.error || 'Unknown error');
//         setFacultyName('Unknown'); // Fallback value in case of error
//       }
//     } catch (error) {
//       // Catching and logging any errors
//       console.error('Error fetching faculty details:', error);
//       setFacultyName('Unknown'); // Fallback value in case of an error
//     }
//   };

//   useEffect(() => {
//     // Log JUW ID and fetch faculty details when the component mounts
//     console.log('JUW ID:', juwId); // Log JUW ID inside useEffect after it's defined
//     fetchFacultyDetails(); // Fetch details when juw_id is available
//   }, []); // Empty dependency array to run only once on component mount

//   const toggleSidebar = () => {
//     setSidebarVisible(!sidebarVisible);
//   };

//   const toggleMeetingsDropdown = () => {
//     setMeetingsDropdown(!meetingsDropdown);
//   };

//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };

//   return (
//     <>
//       {/* Header */}
//       <View style={styles.header}>
//         <View style={styles.headerCenter}>
//           <Image source={require('../assets/IconsSuper/logo.png')} style={styles.logo} />
//           <Text style={styles.headerTitle}>FYP Progress Recorder</Text>
//         </View>

//         <View style={styles.userInfo}>
//           <TouchableOpacity onPress={toggleModal}>
//             <Image
//               source={require('../assets/IconsSuper/homes.png')}
//               style={styles.userImage}
//             />
//           </TouchableOpacity>

//           {/* Dropdown Modal for User Info */}
//           <Modal
//             animationType="slide"
//             transparent={true}
//             visible={isModalVisible}
//             onRequestClose={toggleModal}
//           >
//             <View style={styles.modalBackground}>
//               <View style={styles.modalContainer}>
//                 <Text style={styles.modalText}>
//                   Supervisor: {facultyName || 'Unknown'}
//                 </Text>
//                 <TouchableOpacity onPress={toggleModal}>
//                   <Text style={styles.logoutText}>Logout</Text>
//                 </TouchableOpacity>
//                 <Pressable onPress={toggleModal} style={styles.closeButton}>
//                   <Text style={styles.closeText}>Close</Text>
//                 </Pressable>
//               </View>
//             </View>
//           </Modal>
//         </View>

//         <TouchableOpacity onPress={toggleSidebar} style={styles.toggleBtn}>
//           <Text style={styles.toggleText}>☰</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Sidebar */}
//       {sidebarVisible && (
//         <View style={styles.sidebar}>
//           <TouchableOpacity onPress={() => navigation.navigate('SupervisorDashboard')}>
//             <Text style={styles.sidebarLink}>SupervisorDashboard</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate('SupAnnouncement')}>
//             <Text style={styles.sidebarLink}>SupAnnouncement</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate('FetchProjects')}>
//             <Text style={styles.sidebarLink}>FetchProjects</Text>
//           </TouchableOpacity>

//           {/* Meetings Dropdown */}
//           <TouchableOpacity onPress={toggleMeetingsDropdown}>
//             <Text style={styles.sidebarLink}>Meetings</Text>
//           </TouchableOpacity>
//           {meetingsDropdown && (
//             <View style={styles.submenu}>
//               <TouchableOpacity onPress={() => navigation.navigate('Meetings')}>
//                 <Text style={styles.submenuLink}>View Meetings</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => navigation.navigate('MeetingSchedule')}>
//                 <Text style={styles.submenuLink}>Set Meetings</Text>
//               </TouchableOpacity>
//             </View>
//           )}

//           <TouchableOpacity onPress={() => navigation.navigate('Result')}>
//             <Text style={styles.sidebarLink}>Result</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate('TemplateScreen')}>
//             <Text style={styles.sidebarLink}>TemplateScreen</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate('Internal Project Evaluation')}>
//             <Text style={styles.sidebarLink}>Internal Project Evaluation</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate('My Project Evaluation')}>
//             <Text style={styles.sidebarLink}>My Project Evaluation</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate('Logout')}>
//             <Text style={styles.sidebarLink}>Logout</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: '#051747',
//     height: 60,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 10,
//     position: 'relative',
//   },
//   headerCenter: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   logo: {
//     width: 40,
//     height: 40,
//     resizeMode: 'contain',
//   },
//   headerTitle: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginLeft: 5,
//   },
//   userInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     position: 'absolute',
//     right: 10,
//   },
//   userImage: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     resizeMode: 'contain',
//     backgroundColor: 'transparent',
//   },
//   modalBackground: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContainer: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     width: '80%',
//     alignItems: 'center',
//   },
//   modalText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   logoutText: {
//     fontSize: 16,
//     marginTop: 20,
//     color: 'blue',
//   },
//   closeButton: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: '#051747',
//     borderRadius: 5,
//   },
//   closeText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   toggleBtn: {
//     position: 'absolute',
//     left: 10,
//     padding: 5,
//   },
//   toggleText: {
//     color: '#fff',
//     fontSize: 24,
//   },
//   sidebar: {
//     position: 'absolute',
//     top: 60,
//     left: 0,
//     width: 250,
//     height: Dimensions.get('window').height - 60,
//     backgroundColor: '#fff',
//     padding: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//     zIndex: 10,
//   },
//   sidebarLink: {
//     paddingVertical: 15,
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#051747',
//     borderBottomWidth: 0.3,
//     borderBottomColor: '#ccc',
//   },
//   submenu: {
//     paddingLeft: 20,
//   },
//   submenuLink: {
//     fontSize: 14,
//     color: '#051747',
//     paddingVertical: 10,
//   },
// });

// export default SupNav;



import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Modal,
  Pressable,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const SupNav = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [meetingsDropdown, setMeetingsDropdown] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [facultyName, setFacultyName] = useState(''); // State for supervisor's username
  const [juwId, setJuwId] = useState(''); // Variable for storing juw_id (from login)
  const navigation = useNavigation();
  const route = useRoute();

  // Function to fetch supervisor's username based on juw_id
  const fetchFacultyDetails = async () => {
    try {
      // Ensure juwId is set correctly, dynamically based on the logged-in user
      const juwId = "soomaiya.hamid"; // Replace this with the actual value when you get it from the login process
  
      // Check if juwId exists before making the request
      if (!juwId) {
        console.error("Missing juw_id");
        return;
      }
  
      // Make the API call with juw_id as a query parameter
      const response = await fetch(
        `http://localhost/MobApp/my-app/php_api/getSupervisorDetails.php?juw_id=${juwId}`
      );
  
      const data = await response.json();
  
      if (data.success) {
        setFacultyName(data.username); // Set the username based on the response
      } else {
        console.error('Error from API:', data.error || 'Unknown error');
        setFacultyName('Unknown'); // Fallback in case of error
      }
    } catch (error) {
      console.error('Error fetching faculty details:', error);
      setFacultyName('Unknown'); // Fallback in case of network error
    }
  };
  

  // Using useEffect to trigger API call when juwId is available
  useEffect(() => {
    if (juwId) {
      fetchFacultyDetails(); // Fetch details when juw_id is available
    }
  }, [juwId]);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const toggleMeetingsDropdown = () => {
    setMeetingsDropdown(!meetingsDropdown);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // Simulate the login process
  const simulateLogin = (juwIdFromLogin) => {
    setJuwId(juwIdFromLogin); // Set the juw_id when login occurs
  };

  return (
    <>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerCenter}>
          <Image source={require('../assets/IconsSuper/logo.png')} style={styles.logo} />
          <Text style={styles.headerTitle}>FYP Progress Recorder</Text>
        </View>

        <View style={styles.userInfo}>
          <TouchableOpacity onPress={toggleModal}>
            <Image
              source={require('../assets/IconsSuper/homes.png')}
              style={styles.userImage}
            />
          </TouchableOpacity>

          {/* Dropdown Modal for User Info */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={toggleModal}
          >
            <View style={styles.modalBackground}>
              <View style={styles.modalContainer}>
                <Text style={styles.modalText}>
                  Supervisor: {facultyName || 'Unknown'}
                </Text>
                <TouchableOpacity onPress={toggleModal}>
                  <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>
                <Pressable onPress={toggleModal} style={styles.closeButton}>
                  <Text style={styles.closeText}>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>

        <TouchableOpacity onPress={toggleSidebar} style={styles.toggleBtn}>
          <Text style={styles.toggleText}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Sidebar */}
      {sidebarVisible && (
        <View style={styles.sidebar}>
          <TouchableOpacity onPress={() => navigation.navigate('SupervisorDashboard')}>
            <Text style={styles.sidebarLink}>SupervisorDashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SupAnnouncement')}>
            <Text style={styles.sidebarLink}>SupAnnouncement</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('FetchProjects')}>
            <Text style={styles.sidebarLink}>FetchProjects</Text>
          </TouchableOpacity>

          {/* Meetings Dropdown */}
          <TouchableOpacity onPress={toggleMeetingsDropdown}>
            <Text style={styles.sidebarLink}>Meetings</Text>
          </TouchableOpacity>
          {meetingsDropdown && (
            <View style={styles.submenu}>
              <TouchableOpacity onPress={() => navigation.navigate('Meetings')}>
                <Text style={styles.submenuLink}>View Meetings</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('MeetingSchedule')}>
                <Text style={styles.submenuLink}>Set Meetings</Text>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity onPress={() => navigation.navigate('Result')}>
            <Text style={styles.sidebarLink}>Result</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('TemplateScreen')}>
            <Text style={styles.sidebarLink}>TemplateScreen</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Internal Project Evaluation')}>
            <Text style={styles.sidebarLink}>Internal Project Evaluation</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('My Project Evaluation')}>
            <Text style={styles.sidebarLink}>My Project Evaluation</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Logout')}>
            <Text style={styles.sidebarLink}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#051747',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    position: 'relative',
    margin:0,
    padding:0,
  },
  headerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'contain',
    backgroundColor: 'transparent',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutText: {
    fontSize: 16,
    marginTop: 20,
    color: 'blue',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#051747',
    borderRadius: 5,
  },
  closeText: {
    color: '#fff',
    fontSize: 16,
  },
  toggleBtn: {
    position: 'absolute',
    left: 10,
    padding: 5,
  },
  toggleText: {
    color: '#fff',
    fontSize: 24,
  },
  sidebar: {
    position: 'absolute',
    top: 60,
    left: 0,
    width: 250,
    height: Dimensions.get('window').height - 60,
    backgroundColor: '#fff',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 10,
  },
  sidebarLink: {
    paddingVertical: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#051747',
    borderBottomWidth: 0.3,
    borderBottomColor: '#ccc',
  },
  submenu: {
    paddingLeft: 20,
  },
  submenuLink: {
    fontSize: 14,
    color: '#051747',
    paddingVertical: 10,
  },
});

export default SupNav;
