// // Import necessary libraries
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image, Modal, Pressable } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const Sidebar = () => {
//   const [sidebarVisible, setSidebarVisible] = useState(false);
//   const [isModalVisible, setModalVisible] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarVisible(!sidebarVisible);
//   };

//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.toggleBtn} onPress={toggleSidebar}>
//           <Icon name="bars" size={30} color="#fff" />
//         </TouchableOpacity>

//         <View style={styles.headerTitle}>
//           <Image source={require('../assets/IconsC/logo.png')} style={styles.headerLogo} />
//           <Text style={styles.headerText}>FYP Progress Recorder</Text>
//         </View>

//         <View style={styles.userInfo}>
//   <TouchableOpacity onPress={toggleModal}>
//     <Image 
//       source={require('../assets/IconsC/homes.png')} 
//       style={styles.image}  // Applying styles to the image
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
//                 <Text style={styles.modalText}>Coordinator: User</Text>
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
//       </View>

//       {/* Sidebar (Hidden by Default) */}
//       {sidebarVisible && (
//         <View style={styles.sidebar}>
//           <TouchableOpacity style={styles.sidebarItem}>
//             <Text style={styles.sidebarText}>Dashboard</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.sidebarItem}>
//             <Text style={styles.sidebarText}>Manage Projects</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.sidebarItem}>
//             <Text style={styles.sidebarText}>Settings</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'rgb(236, 236, 236)',
//   },
//   header: {
//     backgroundColor: '#051747',
//     height: 60,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   toggleBtn: {
//     cursor: 'pointer',
//   },
//   headerTitle: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerLogo: {
//     width: 30,
//     height: 30,
//     marginRight: 10,
//   },
//   headerText: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   userInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     size:20,
//     width: 20,
//     height: 20,
//     justifyContent: 'flex-end',
//   },
//   image: {
//     width: 50,  // Set the width to 20
//     height: 50, // Set the height to 20
//     resizeMode: 'contain', 
//     paddingRight:20, // Ensures the image is scaled proportionally without distortion
//     backgroundColor: 'transparent',  // Remove any background color from the image
//   },

//   sidebar: {
//     position: 'absolute',
//     top: 60,
//     left: 0,
//     width: 250,
//     height: '100%',
//     backgroundColor: '#fff',
//     borderRightWidth: 1,
//     borderColor: '#ccc',
//     paddingTop: 20,
//   },
//   sidebarItem: {
//     padding: 14,
//     borderBottomWidth: 1,
//     borderColor: '#f9eeee',
//   },
//   sidebarText: {
//     color: '#051747',
//     fontSize: 16,
//     fontWeight: '600',
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
// });

// export default Sidebar;


// Import necessary libraries
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image, Modal, Pressable } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const Sidebar = () => {
//   const [sidebarVisible, setSidebarVisible] = useState(false);
//   const [isModalVisible, setModalVisible] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarVisible(!sidebarVisible);
//   };

//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.toggleBtn} onPress={toggleSidebar}>
//           <Icon name="bars" size={30} color="#fff" />
//         </TouchableOpacity>

//         <View style={styles.headerTitle}>
//           <Image source={require('../assets/IconsC/logo.png')} style={styles.headerLogo} />
//           <Text style={styles.headerText}>FYP Progress Recorder</Text>
//         </View>

//         <View style={styles.userInfo}>
//           <TouchableOpacity onPress={toggleModal}>
//             <Image
//               source={require('../assets/IconsC/homes.png')}
//               style={styles.image} // Applying styles to the image
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
//                 <Text style={styles.modalText}>Coordinator: User</Text>
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
//       </View>

//       {/* Sidebar (Hidden by Default) */}
//       {sidebarVisible && (
//         <View style={styles.sidebar}>
//           <TouchableOpacity style={styles.sidebarItem}>
//             <Text style={styles.sidebarText}>Dashboard</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.sidebarItem}>
//             <Text style={styles.sidebarText}>Manage Projects</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.sidebarItem}>
//             <Text style={styles.sidebarText}>Settings</Text>
//           </TouchableOpacity>

//           <TouchableOpacity onPress={() => navigation.navigate('SupervisorDashboard')}>
//                       <Text style={styles.sidebarLink}>SupervisorDashboard</Text>
//                     </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'rgb(236, 236, 236)',
//   },
//   header: {
//     backgroundColor: '#051747',
//     height: 60,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   toggleBtn: {
//     cursor: 'pointer',
//   },
//   toggleText: {
//     color: '#fff',
//     fontSize: 24,
//   },
//   headerTitle: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerLogo: {
//     width: 30,
//     height: 30,
//     marginRight: 10,
//   },
//   headerText: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   userInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: 20,
//     height: 20,
//     justifyContent: 'flex-end',
//   },
//   image: {
//     width: 50,
//     height: 50,
//     resizeMode: 'contain',
//     paddingRight: 20,
//     backgroundColor: 'transparent',
//   },
//   sidebar: {
//     position: 'absolute',
//     top: 60,
//     left: 0,
//     width: 250,
//     height: '100%',
//     backgroundColor: '#fff',
//     borderRightWidth: 1,
//     borderColor: '#ccc',
//     paddingTop: 20,
//     zIndex: 10, // Ensures the sidebar is displayed in front
//     elevation: 5, // Adds shadow for Android
//   },
//   sidebarItem: {
//     padding: 14,
//     borderBottomWidth: 1,
//     borderColor: '#f9eeee',
//   },
//   sidebarText: {
//     color: '#051747',
//     fontSize: 16,
//     fontWeight: '600',
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
// });

// export default Sidebar;



// 
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image, Modal, Pressable, Dimensions } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const Sidebar = () => {
//   const [sidebarVisible, setSidebarVisible] = useState(false);
//   const [isModalVisible, setModalVisible] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarVisible(!sidebarVisible);
//   };

//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.toggleBtn} onPress={toggleSidebar}>
//           <Icon name="bars" size={30} color="#fff" />
//         </TouchableOpacity>

//         <View style={styles.headerTitle}>
//           <Image source={require('../assets/IconsC/logo.png')} style={styles.headerLogo} />
//           <Text style={styles.headerText}>FYP Progress Recorder</Text>
//         </View>

//         <View style={styles.userInfo}>
//           <TouchableOpacity onPress={toggleModal}>
//             <Image
//               source={require('../assets/IconsC/homes.png')}
//               style={styles.image} // Applying styles to the image
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
//                 <Text style={styles.modalText}>Coordinator: User</Text>
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
//       </View>

//       {/* Sidebar (Hidden by Default) */}
//       {sidebarVisible && (
//         <View style={styles.sidebar}>
//           <TouchableOpacity style={styles.sidebarItem}>
//             <Text style={styles.sidebarText}>Dashboard</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.sidebarItem}>
//             <Text style={styles.sidebarText}>Manage Projects</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.sidebarItem}>
//             <Text style={styles.sidebarText}>Settings</Text>
//           </TouchableOpacity>

//           <TouchableOpacity onPress={() => navigation.navigate('SupervisorDashboard')}>
//             <Text style={styles.sidebarLink}>SupervisorDashboard</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'rgb(236, 236, 236)',
//   },
//   header: {
//     backgroundColor: '#051747',
//     height: 60,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   toggleBtn: {
//     cursor: 'pointer',
//   },
//   headerTitle: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   headerLogo: {
//     width: 30,
//     height: 30,
//     marginRight: 10,
//   },
//   headerText: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   userInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//   },
//   image: {
//     width: 50,
//     height: 50,
//     resizeMode: 'contain',
//     paddingRight: 20,
//     backgroundColor: 'transparent',
//   },
//   sidebar: {
//     position: 'absolute',
//         top: 60,
//         left: 0,
//         width: 250,
//         height: Dimensions.get('window').height - 60,
//         backgroundColor: '#fff',
//         padding: 10,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//         zIndex: 10,
//   },
//   sidebarLink:{
//     paddingVertical: 15,
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#051747',
//     borderBottomWidth: 0.3,
//     borderBottomColor: '#ccc',
//   },
//   sidebarItem: {
//     padding: 14,
//     borderBottomWidth: 1,
//     borderColor: '#f9eeee',
//   },
//   sidebarText: {
//     color: '#051747',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   submenu: {
//     paddingLeft: 20,
//   },
//   submenuLink: {
//     fontSize: 14,
//     color: '#051747',
//     paddingVertical: 10,
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
// });

// export default Sidebar;



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

const Sidebar = () => {
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
                  Coordintor: {facultyName || 'Unknown'}
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
          <TouchableOpacity onPress={() => navigation.navigate('CoordinatorDashboard')}>
            <Text style={styles.sidebarLink}>Coordinator Dashboard</Text>
          </TouchableOpacity>
        
          <TouchableOpacity onPress={() => navigation.navigate('GalleryScreen')}>
            <Text style={styles.sidebarLink}>Gallery</Text>
          </TouchableOpacity>

          {/* Meetings Dropdown */}
          <TouchableOpacity onPress={toggleMeetingsDropdown}>
            <Text style={styles.sidebarLink}>Announcements</Text>
          </TouchableOpacity>
          {meetingsDropdown && (
            <View style={styles.submenu}>
              <TouchableOpacity onPress={() => navigation.navigate('AnnouncementList')}>
                <Text style={styles.submenuLink}>View Announcement</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('PostAnnouncement')}>
                <Text style={styles.submenuLink}>Post Announcement</Text>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity onPress={toggleMeetingsDropdown}>
            <Text style={styles.sidebarLink}>Assignment</Text>
          </TouchableOpacity>
          {meetingsDropdown && (
            <View style={styles.submenu}>
              <TouchableOpacity onPress={() => navigation.navigate('CreateAssignmentScreen')}>
                <Text style={styles.submenuLink}> Create Assignment</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('ViewAssignmentScreen')}>
                <Text style={styles.submenuLink}>View Assignment</Text>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity onPress={toggleMeetingsDropdown}>
            <Text style={styles.sidebarLink}>Presentation</Text>
          </TouchableOpacity>
          {meetingsDropdown && (
            <View style={styles.submenu}>
              <TouchableOpacity onPress={() => navigation.navigate('ViewPresentations')}>
                <Text style={styles.submenuLink}> View Presentations</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('SchedulePresentations')}>
                <Text style={styles.submenuLink}>Schedule Presentations</Text>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity onPress={toggleMeetingsDropdown}>
            <Text style={styles.sidebarLink}>Forms</Text>
          </TouchableOpacity>
          {meetingsDropdown && (
            <View style={styles.submenu}>
              <TouchableOpacity onPress={() => navigation.navigate('FormList')}>
                <Text style={styles.submenuLink}> Form</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('CreateFormScreen')}>
                <Text style={styles.submenuLink}>Create Form</Text>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity onPress={toggleMeetingsDropdown}>
            <Text style={styles.sidebarLink}>Templates</Text>
          </TouchableOpacity>
          {meetingsDropdown && (
            <View style={styles.submenu}>
              <TouchableOpacity onPress={() => navigation.navigate('Template')}>
                <Text style={styles.submenuLink}> Template</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('CreateTemplate')}>
                <Text style={styles.submenuLink}>Create Template</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* <TouchableOpacity onPress={toggleMeetingsDropdown}>
            <Text style={styles.sidebarLink}>Templates</Text>
          </TouchableOpacity>
          {meetingsDropdown && (
            <View style={styles.submenu}>
              <TouchableOpacity onPress={() => navigation.navigate('Template')}>
                <Text style={styles.submenuLink}> Template</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('CreateTemplate')}>
                <Text style={styles.submenuLink}>Create Template</Text>
              </TouchableOpacity>
            </View>
          )} */}

          <TouchableOpacity onPress={() => navigation.navigate('Result')}>
            <Text style={styles.sidebarLink}>Result</Text>
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

export default Sidebar;
