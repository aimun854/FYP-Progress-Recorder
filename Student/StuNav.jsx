// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   Dimensions,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native'; // For navigation

// const StuNav = () => {
//   const [sidebarVisible, setSidebarVisible] = useState(false);
//   const [meetingsDropdown, setMeetingsDropdown] = useState(false);
//   const navigation = useNavigation(); // To navigate between screens

//   const toggleSidebar = () => {
//     setSidebarVisible(!sidebarVisible);
//   };

//   const toggleMeetingsDropdown = () => {
//     setMeetingsDropdown(!meetingsDropdown);
//   };

//   return (
//     <>
//       {/* Header */}
//       <View style={styles.header}>
//         <View style={styles.headerCenter}>
//           <Image source={require('../assets/IconsSuper/logo.png')} style={styles.logo} />
//           <Text style={styles.headerTitle}>FYP Progress Recorder</Text>
//         </View>
//         <TouchableOpacity onPress={toggleSidebar} style={styles.toggleBtn}>
//           <Text style={styles.toggleText}>☰</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Sidebar */}
      // {sidebarVisible && (
      //   <View style={styles.sidebar}>
      //     <TouchableOpacity onPress={() => navigation.navigate('StudentDashboard')}>
      //       <Text style={styles.sidebarLink}>Student Dashboard</Text>
      //     </TouchableOpacity>
      //     <TouchableOpacity onPress={() => navigation.navigate('StudentAnnouncements')}>
      //       <Text style={styles.sidebarLink}>Student Announcements</Text>
      //     </TouchableOpacity>
      //     <TouchableOpacity onPress={() => navigation.navigate('ViewMeetings')}>
      //       <Text style={styles.sidebarLink}>View Meetings</Text>
      //     </TouchableOpacity>
      //     <TouchableOpacity onPress={() => navigation.navigate('ViewAssignments')}>
      //       <Text style={styles.sidebarLink}>View Assignments</Text>
      //     </TouchableOpacity>
      //     <TouchableOpacity onPress={() => navigation.navigate('TemplateListScreen')}>
      //       <Text style={styles.sidebarLink}>Templates</Text>
      //     </TouchableOpacity>
      //     <TouchableOpacity onPress={() => navigation.navigate('ViewAssignments')}>
      //       <Text style={styles.sidebarLink}>View Assignments</Text>
      //     </TouchableOpacity>

      //     {/* Meetings Dropdown */}
      //     <TouchableOpacity onPress={toggleMeetingsDropdown}>
      //       <Text style={styles.sidebarLink}>Gallery</Text>
      //     </TouchableOpacity>
      //     {meetingsDropdown && (
      //       <View style={styles.submenu}>
      //         <TouchableOpacity onPress={() => navigation.navigate('StuGalleryScreen')}>
      //           <Text style={styles.submenuLink}>Student Gallery</Text>
      //         </TouchableOpacity>
      //         <TouchableOpacity onPress={() => navigation.navigate('UploadVideoScreen')}>
      //           <Text style={styles.submenuLink}>Upload Video</Text>
      //         </TouchableOpacity>
      //       </View>
      //     )}

      //     <TouchableOpacity onPress={() => navigation.navigate('ResultScreen')}>
      //       <Text style={styles.sidebarLink}>ResultScreen</Text>
      //     </TouchableOpacity>
      //   </View>
      // )}

      
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
//     marginTop:0,
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
//   content: {
//     padding: 15,
//   },
// });

// export default StuNav;






import React, { useState } from 'react';
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
import { useNavigation } from '@react-navigation/native'; // For navigation

const StuNav = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [meetingsDropdown, setMeetingsDropdown] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation(); // To navigate between screens

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const toggleMeetingsDropdown = () => {
    setMeetingsDropdown(!meetingsDropdown);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerCenter}>
          <Image source={require('../assets/IconsS/logo.png')} style={styles.logo} />
          <Text style={styles.headerTitle}>FYP Progress Recorder</Text>
        </View>

        <View style={styles.userInfo}>
          <TouchableOpacity onPress={toggleModal}>
            <Image
              source={require('../assets/IconsS/homes.png')} // Replace with your user icon
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
                <Text style={styles.modalText}>Student: User</Text>
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
          <TouchableOpacity onPress={() => navigation.navigate('StudentDashboard')}>
            <Text style={styles.sidebarLink}>Student Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('StudentAnnouncements')}>
            <Text style={styles.sidebarLink}>Student Announcements</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ViewMeetings')}>
            <Text style={styles.sidebarLink}>View Meetings</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ViewAssignments')}>
            <Text style={styles.sidebarLink}>View Assignments</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('TemplateListScreen')}>
            <Text style={styles.sidebarLink}>Templates</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ViewAssignments')}>
            <Text style={styles.sidebarLink}>View Assignments</Text>
          </TouchableOpacity>

          {/* Meetings Dropdown */}
          <TouchableOpacity onPress={toggleMeetingsDropdown}>
            <Text style={styles.sidebarLink}>Gallery</Text>
          </TouchableOpacity>
          {meetingsDropdown && (
            <View style={styles.submenu}>
              <TouchableOpacity onPress={() => navigation.navigate('StuGalleryScreen')}>
                <Text style={styles.submenuLink}>Student Gallery</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('UploadVideoScreen')}>
                <Text style={styles.submenuLink}>Upload Video</Text>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity onPress={() => navigation.navigate('ResultScreen')}>
            <Text style={styles.sidebarLink}>ResultScreen</Text>
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
    padding:0,
    margin:0,
   
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

export default StuNav;
