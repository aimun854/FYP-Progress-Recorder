// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Button, Picker, FlatList, Alert} from 'react-native';

// import axios from 'axios';

// const AnnouncementList = ({ navigation }) => {
// //   const [courseDurations, setCourseDurations] = useState([]);
//   const [selectedCourse, setSelectedCourse] = useState('');
//   const [announcements, setAnnouncements] = useState([]);

//   // Fetch course durations
// //   useEffect(() => {
// //     axios.get('https://your-backend-api-url/getCourseDurations.php')
// //       .then(response => setCourseDurations(response.data))
// //       .catch(error => console.error(error));
// //   }, []);

//   // Fetch announcements based on selected course
//   useEffect(() => {
//     const url = selectedCourse
//       ? `http://localhost/MobApp/my-app/php_api/getAnnouncementsC.php?course_title=${selectedCourse}`
//       : 'http://localhost/MobApp/my-app/php_api/getAnnouncements.php';

//     axios.get(url)
//       .then(response => setAnnouncements(response.data))
//       .catch(error => console.error(error));
//   }, [selectedCourse]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Announcement List</Text>
      
//       <Picker
//         selectedValue={selectedCourse}
//         style={styles.picker}
//         onValueChange={itemValue => setSelectedCourse(itemValue)}>
//         <Picker.Item label="Select Course Duration" value="" />
//         {courseDurations.map((course, index) => (
//           <Picker.Item key={index} label={course.title} value={course.title} />
//         ))}
//       </Picker>
      
//       <FlatList
//         data={announcements}
//         renderItem={({ item }) => (
//           <View style={styles.announcementCard}>
//             <Text>{item.message}</Text>
//             <Text>{new Date(item.created_at).toLocaleString()}</Text>
//             <Text>{item.audience_type}</Text>
//             <Button
//               title="Edit"
//               onPress={() => navigation.navigate('EditAnnouncement', { id: item.id })}
//             />
//             <Button
//               title="Delete"
//               onPress={() => deleteAnnouncement(item.id)}
//             />
//           </View>
//         )}
//         keyExtractor={item => item.id.toString()}
//       />
//     </View>
//   );
// };

// import { Alert } from 'react-native'; // Import Alert component

// const deleteAnnouncement = (id) => {
//   Alert.alert(
//     'Confirmation',
//     'Are you sure you want to delete this announcement?',
//     [
//       {
//         text: 'Cancel',
//         onPress: () => console.log('Delete canceled'),
//         style: 'cancel',
//       },
//       {
//         text: 'OK',
//         onPress: () => {
//           axios.post('https://localhost/MobApp/my-app/php_api/deleteAnnouncement.php', { id })
//             .then(response => {
//               Alert.alert('Success', response.data);
//             })
//             .catch(error => {
//               Alert.alert('Error', 'An error occurred: ' + error);
//             });
//         },
//       },
//     ],
//     { cancelable: false }
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f7f7f7',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   picker: {
//     marginBottom: 20,
//   },
//   announcementCard: {
//     backgroundColor: '#fff',
//     padding: 15,
//     marginBottom: 10,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//   },
// });

// export default AnnouncementList;


// 
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Button, Picker, FlatList, Alert } from 'react-native';
// import axios from 'axios';

// const AnnouncementList = ({ navigation }) => {
//   const [selectedCourse, setSelectedCourse] = useState('');
//   const [announcements, setAnnouncements] = useState([]);

//   useEffect(() => {
//     const fetchAnnouncements = async () => {
//       const url = selectedCourse
//         ? `http://localhost/MobApp/my-app/php_api/getAnnouncementsC.php?course_title=${selectedCourse}`
//         : 'http://localhost/MobApp/my-app/php_api/getAnnouncements.php';

//       try {
//         const response = await axios.get(url);
//         setAnnouncements(response.data);
//       } catch (error) {
//         console.error('Error fetching announcements:', error);
//       }
//     };

//     fetchAnnouncements();
//   }, [selectedCourse]);

//   const deleteAnnouncement = (id) => {
//     Alert.alert(
//       'Delete Announcement',
//       'Are you sure you want to delete this announcement?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         {
//           text: 'Delete',
//           style: 'destructive',
//           onPress: () => {
//             axios
//               .post('http://localhost/MobApp/my-app/php_api/deleteAnnouncement.php', { id })
//               .then((response) => {
//                 Alert.alert('Success', response.data);
//                 setAnnouncements((prev) => prev.filter((announcement) => announcement.id !== id));
//               })
//               .catch((error) => {
//                 Alert.alert('Error', error.message);
//               });
//           },
//         },
//       ]
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Announcement List</Text>

//       <Picker
//         selectedValue={selectedCourse}
//         style={styles.picker}
//         onValueChange={(itemValue) => setSelectedCourse(itemValue)}
//       >
//         <Picker.Item label="Select Course Duration" value="" />
//         {/* Add course durations dynamically if available */}
//       </Picker>

//       <FlatList
//         data={announcements}
//         renderItem={({ item }) => (
//           <View style={styles.announcementCard}>
//             <Text>{item.message}</Text>
//             <Text>{new Date(item.created_at).toLocaleString()}</Text>
//             <Text>{item.audience_type}</Text>
//             <Button
//               title="Edit"
//               onPress={() => navigation.navigate('EditAnnouncement', { id: item.id })}
//             />
//             <Button title="Delete" onPress={() => deleteAnnouncement(item.id)} />
//           </View>
//         )}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f7f7f7',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   picker: {
//     marginBottom: 20,
//   },
//   announcementCard: {
//     backgroundColor: '#fff',
//     padding: 15,
//     marginBottom: 10,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//   },
// });

// export default AnnouncementList;


// new code
// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, FlatList, TouchableOpacity, Alert, Picker, StyleSheet } from 'react-native';
// import axios from 'axios';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useNavigation } from '@react-navigation/native';

// // API URL
// const API_URL = 'http://localhost/MobApp/my-app/php_api';

// const AnnouncementList = () => {

//   const [announcements, setAnnouncements] = useState([]);
//   const [selectedCourse, setSelectedCourse] = useState('');

  

//   // Fetch Announcements from the new API endpoint
//   useEffect(() => {
//     const fetchAnnouncements = async () => {
//       const url = selectedCourse
//         ? 'http://localhost/MobApp/my-app/php_api/getAnnouncementsC.php' // New API link with courseTitle parameter
//         : 'http://localhost/MobApp/my-app/php_api/getAnnouncementsC.php'; // New API link for all announcements

//       try {
//         const response = await axios.get(url);
//         setAnnouncements(response.data);
//       } catch (error) {
//         Alert.alert('Error', 'Failed to load announcements');
//       }
//     };
//     fetchAnnouncements();
//   }, [selectedCourse]);

//   const handleDelete = (announcementId) => {
//     axios.post(`${API_URL}/delete-announcement`, { id: announcementId })
//       .then(response => {
//         Alert.alert('Success', 'Announcement deleted');
//         setAnnouncements(announcements.filter(ann => ann.id !== announcementId));
//       })
//       .catch(error => Alert.alert('Error', 'Failed to delete announcement'));
//   };

//   const handleSendEmail = (announcementId) => {
//     axios.post(`${API_URL}/send-email`, { announcementId })
//       .then(response => Alert.alert('Success', 'Email sent successfully!'))
//       .catch(error => Alert.alert('Error', 'Failed to send email'));
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Announcement List</Text>

//       <Picker
//         selectedValue={selectedCourse}
//         style={styles.picker}
//         onValueChange={(itemValue) => setSelectedCourse(itemValue)}
//       >
//         <Picker.Item label="Select Course Duration" value="" />
//         {courseDurations.map(course => (
//           <Picker.Item key={course.id} label={course.title} value={course.title} />
//         ))}
//       </Picker>

//       <FlatList
//         data={announcements}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.announcementContainer}>
//             <Text>{item.message}</Text>
//             <Text>{item.created_at}</Text>
//             <Text>{item.audience_type}</Text>
//             <View style={styles.actions}>
//               <TouchableOpacity onPress={() => handleSendEmail(item.id)}>
//                 <Icon name="envelope" size={20} color="blue" />
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => handleDelete(item.id)}>
//                 <Icon name="trash" size={20} color="red" />
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   picker: {
//     height: 50,
//     marginBottom: 20,
//   },
//   announcementContainer: {
//     marginBottom: 20,
//     padding: 10,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   actions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
// });

// export default AnnouncementList;
// neww code
// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
// import axios from 'axios';
// import Icon from 'react-native-vector-icons/FontAwesome';

// // API URL
// const API_URL = 'http://localhost/MobApp/my-app/php_api';

// const AnnouncementList = () => {
//   const [announcements, setAnnouncements] = useState([]);
//   const [selectedCourse, setSelectedCourse] = useState('');

//   // Fetch Announcements from the new API endpoint
//   useEffect(() => {
//     const fetchAnnouncements = async () => {
//       const url = selectedCourse
//         ? 'http://localhost/MobApp/my-app/php_api/getAnnouncementsC.php' // New API link with courseTitle parameter
//         : 'http://localhost/MobApp/my-app/php_api/getAnnouncementsC.php'; // New API link for all announcements

//       try {
//         const response = await axios.get(url);
//         setAnnouncements(response.data);
//       } catch (error) {
//         Alert.alert('Error', 'Failed to load announcements');
//       }
//     };
//     fetchAnnouncements();
//   }, [selectedCourse]);

//   const handleDelete = (announcementId) => {
//     axios.post(`${API_URL}/delete-announcement`, { id: announcementId })
//       .then(response => {
//         Alert.alert('Success', 'Announcement deleted');
//         setAnnouncements(announcements.filter(ann => ann.id !== announcementId));
//       })
//       .catch(error => Alert.alert('Error', 'Failed to delete announcement'));
//   };

//   const handleSendEmail = (announcementId) => {
//     axios.post(`${API_URL}/send-email`, { announcementId })
//       .then(response => Alert.alert('Success', 'Email sent successfully!'))
//       .catch(error => Alert.alert('Error', 'Failed to send email'));
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.heading}>Announcement List</Text>

//       {/* Removed Course Duration Picker */}

//       <FlatList
//         data={announcements}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.announcementContainer}>
//             <Text>{item.message}</Text>
//             <Text>{item.created_at}</Text>
//             <Text>{item.audience_type}</Text>
//             <View style={styles.actions}>
//               <TouchableOpacity onPress={() => handleSendEmail(item.id)}>
//                 <Icon name="envelope" size={20} color="blue" />
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => handleDelete(item.id)}>
//                 <Icon name="trash" size={20} color="red" />
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     flex: 1,  // Ensures the ScrollView takes up the full screen height
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   announcementContainer: {
//     marginBottom: 20,
//     padding: 10,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   actions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
// });

// export default AnnouncementList;
// newwww
// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
// import axios from 'axios';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useNavigation } from '@react-navigation/native'; // For navigation

// // API URL
// const API_URL = 'http://localhost/MobApp/my-app/php_api';

// const AnnouncementList = () => {
//   const [announcements, setAnnouncements] = useState([]);
//   const [selectedCourse, setSelectedCourse] = useState('');
//   const navigation = useNavigation(); // Initialize navigation

//   // Fetch Announcements from the new API endpoint
//   useEffect(() => {
//     const fetchAnnouncements = async () => {
//       const url = selectedCourse
//         ? 'http://localhost/MobApp/my-app/php_api/getAnnouncementsC.php' // New API link with courseTitle parameter
//         : 'http://localhost/MobApp/my-app/php_api/getAnnouncementsC.php'; // New API link for all announcements

//       try {
//         const response = await axios.get(url);
//         setAnnouncements(response.data);
//       } catch (error) {
//         Alert.alert('Error', 'Failed to load announcements');
//       }
//     };
//     fetchAnnouncements();
//   }, [selectedCourse]);

//   const handleDelete = (announcementId) => {
//     axios.post(`${API_URL}/delete-announcement`, { id: announcementId })
//       .then(response => {
//         Alert.alert('Success', 'Announcement deleted');
//         setAnnouncements(announcements.filter(ann => ann.id !== announcementId));
//       })
//       .catch(error => Alert.alert('Error', 'Failed to delete announcement'));
//   };

//   const handleSendEmail = (announcementId) => {
//     axios.post(`${API_URL}/send-email`, { announcementId })
//       .then(response => Alert.alert('Success', 'Email sent successfully!'))
//       .catch(error => Alert.alert('Error', 'Failed to send email'));
//   };

//   const handleEdit = (announcementId) => {
//     // Navigate to the "Post Announcement" page with the announcementId (edit mode)
//     navigation.navigate('PostAnnouncement', { announcementId });
//   };

//   const handlePostAnnouncement = () => {
//     // Navigate to the "Post Announcement" page (add mode)
//     navigation.navigate('PostAnnouncement');
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.heading}>Announcement List</Text>

//       {/* Post Announcement Button */}
//       <TouchableOpacity onPress={handlePostAnnouncement} style={styles.PostButton}>
//         <Text style={styles.uploadButtonText}>Post Announcement</Text>
//       </TouchableOpacity>

//       <FlatList
//         data={announcements}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.announcementContainer}>
//             <Text>{item.message}</Text>
//             <Text>{item.created_at}</Text>
//             <Text>{item.audience_type}</Text>
//             <View style={styles.actions}>
//               <TouchableOpacity onPress={() => handleSendEmail(item.id)}>
//                 <Icon name="envelope" size={20} color="blue" />
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => handleEdit(item.id)}>
//                 <Icon name="edit" size={20} color="green" />
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => handleDelete(item.id)}>
//                 <Icon name="trash" size={20} color="red" />
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     flex: 1,  // Ensures the ScrollView takes up the full screen height
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   PostButton: {
//     backgroundColor: '#007BFF',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   uploadButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   announcementContainer: {
//     marginBottom: 20,
//     padding: 10,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   actions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },
// });

// export default AnnouncementList;


// updated code


// Update with your server's IP address
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet, ScrollView, Button } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
// Import Sidebar
import Sidebar from '../Coordinator/Sidebar';

// Update with your server's IP address
const API_URL = 'http://localhost/MobApp/my-app/php_api';

const AnnouncementList = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const navigation = useNavigation();

  // Fetch Announcements
  useEffect(() => {
    const fetchAnnouncements = async () => {
      const url = selectedCourse
        ? `http://localhost/MobApp/my-app/php_api/getAnnouncementsC.php?courseTitle=${selectedCourse}`
        : `http://localhost/MobApp/my-app/php_api/getAnnouncementsC.php`;

      try {
        const response = await axios.get(url);
        setAnnouncements(response.data);
      } catch (error) {
        console.error('Error fetching announcements:', error.message);
        Alert.alert('Error', 'Failed to load announcements');
      }
    };

    fetchAnnouncements();
  }, [selectedCourse]);

  // Delete Announcement
  const handleDelete = (announcementId) => {
    axios
      .post(`http://localhost/MobApp/my-app/php_api/delete-announcement.php`, { id: announcementId })
      .then(() => {
        Alert.alert('Success', 'Announcement deleted');
        setAnnouncements((prev) => prev.filter((ann) => ann.id !== announcementId));
      })
      .catch((error) => {
        console.error('Error deleting announcement:', error.message);
        Alert.alert('Error', 'Failed to delete announcement');
      });
  };

  // Send Email
  // const handleSendEmail = (announcementId) => {
  //   axios
  //     .post(`${API_URL}/SendEmailNotification.php`, { announcementId })
  //     .then(() => {
  //       Alert.alert('Success', 'Email sent successfully!');
  //     })
  //     .catch((error) => {
  //       console.error('Error sending email:', error.message);
  //       Alert.alert('Error', 'Failed to send email');
  //     });
  // };

  // Navigate to Edit Announcement Screen
  const handleEdit = (announcementId) => {
    navigation.navigate('PostAnnouncement', { announcementId });
  };

  // Navigate to Post Announcement Screen
  const handlePostAnnouncement = () => {
    navigation.navigate('PostAnnouncement');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
    <Sidebar /> {/* Include Sidebar here for the navigation bar and sidebar */}
    <View style={styles.content}></View>
      <Text style={styles.heading}>Announcement List</Text>

      {/* Post Announcement Button */}
      <TouchableOpacity onPress={handlePostAnnouncement} style={styles.postButton}>
        <Text style={styles.buttonText}>Post Announcement</Text>
      </TouchableOpacity>

      {/* Announcement List */}
      <FlatList
        data={announcements}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.announcementContainer}>
            <Text>{item.message}</Text>
            <Text>{item.created_at}</Text>
            <Text>{item.audience_type}</Text>
            <View style={styles.actions}>
              {/* <TouchableOpacity onPress={() => handleSendEmail(item.id)}>
                <Icon name="envelope" size={20} color="blue" />
              </TouchableOpacity> */}
              <TouchableOpacity onPress={() => handleEdit(item.id)}>
                <Icon name="edit" size={20} color="green" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Icon name="trash" size={20} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </ScrollView>
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
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft:15,
        marginRight:15,
  },
  postButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    marginLeft:15,
        marginRight:15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft:15,
   marginRight:15,
  },
  announcementContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    marginLeft:15,
    marginRight:15,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft:15,
    marginRight:15,
  },
});

export default AnnouncementList;

