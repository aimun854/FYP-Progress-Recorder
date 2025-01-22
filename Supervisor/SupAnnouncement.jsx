// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
//   Modal,
//   ScrollView,
//   SafeAreaView,
//   Button,
// } from 'react-native';

// const SupAnnouncement = () => {
//   const [announcements, setAnnouncements] = useState([]);
//   const [presentations, setPresentations] = useState([]);
//   const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
//   const [selectedPresentation, setSelectedPresentation] = useState(null);

//   useEffect(() => {
//     // Fetch data from API
//     fetchAnnouncements();
//     fetchPresentations();
//   }, []);

//   const fetchAnnouncements = async () => {
//     try {
//       const response = await fetch('http://localhost/MobApp/my-app/php_api/fetchAnnouncementsS.php');
//       const data = await response.json();
//       setAnnouncements(data);
//     } catch (error) {
//       console.error('Error fetching announcements:', error);
//     }
//   };

//   const fetchPresentations = async () => {
//     try {
//       const response = await fetch('http://localhost/MobApp/my-app/php_api/fetchPresentationsS.php');
//       const data = await response.json();
//       setPresentations(data);
//     } catch (error) {
//       console.error('Error fetching presentations:', error);
//     }
//   };

//   const AnnouncementModal = () => (
//     <Modal
//       visible={!!selectedAnnouncement}
//       transparent={true}
//       animationType="slide"
//       onRequestClose={() => setSelectedAnnouncement(null)}
//     >
//       <View style={styles.modalContainer}>
//         <View style={styles.modalContent}>
//           <Text style={styles.modalTitle}>Announcement</Text>
//           {selectedAnnouncement && (
//             <>
//               <Text>
//                 <Text style={styles.bold}>Message:</Text> {selectedAnnouncement.message}
//               </Text>
//               <Text>
//                 <Text style={styles.bold}>Date:</Text>{' '}
//                 {new Date(selectedAnnouncement.created_at).toLocaleDateString()}
//               </Text>
//             </>
//           )}
//           <Button title="Close" onPress={() => setSelectedAnnouncement(null)} />
//         </View>
//       </View>
//     </Modal>
//   );

//   const PresentationModal = () => (
//     <Modal
//       visible={!!selectedPresentation}
//       transparent={true}
//       animationType="slide"
//       onRequestClose={() => setSelectedPresentation(null)}
//     >
//       <ScrollView contentContainerStyle={styles.modalContainer}>
//         <View style={styles.modalContent}>
//           <Text style={styles.modalTitle}>Presentation Details</Text>
//           {selectedPresentation && (
//             <>
//               <Text>
//                 <Text style={styles.bold}>Title:</Text> {selectedPresentation.project_title}
//               </Text>
//               <Text>
//                 <Text style={styles.bold}>Date:</Text>{' '}
//                 {new Date(selectedPresentation.date).toLocaleDateString()}
//               </Text>
//               <Text>
//                 <Text style={styles.bold}>Time:</Text> {selectedPresentation.time}
//               </Text>
//               <Text>
//                 <Text style={styles.bold}>Room:</Text> {selectedPresentation.room_number}
//               </Text>
//               <Text style={styles.bold}>Students:</Text>
//               {selectedPresentation.students.map((student, index) => (
//                 <Text key={index}>{student.name} (Seat Number: {student.seat_number})</Text>
//               ))}
//             </>
//           )}
//           <Button title="Close" onPress={() => setSelectedPresentation(null)} />
//         </View>
//       </ScrollView>
//     </Modal>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.heading}>Announcements</Text>
//       <FlatList
//         data={announcements}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             onPress={() => setSelectedAnnouncement(item)}
//             style={styles.listItem}
//           >
//             <Text>{item.message}</Text>
//             <Text>{new Date(item.created_at).toLocaleDateString()}</Text>
//           </TouchableOpacity>
//         )}
//       />
//       <Text style={styles.heading}>Presentations</Text>
//       <FlatList
//         data={presentations}
//         keyExtractor={(item) => item.presentation_id.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             onPress={() => setSelectedPresentation(item)}
//             style={styles.listItem}
//           >
//             <Text>{item.project_title}</Text>
//             <Text>{new Date(item.date).toLocaleDateString()}</Text>
//           </TouchableOpacity>
//         )}
//       />
//       <AnnouncementModal />
//       <PresentationModal />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#f5f5f5',
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#0a4a91',
//     marginVertical: 10,
//   },
//   listItem: {
//     padding: 15,
//     backgroundColor: '#fff',
//     marginVertical: 5,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     width: '90%',
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   bold: {
//     fontWeight: 'bold',
//   },
// });

// export default SupAnnouncement;


// new
// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
//   Modal,
//   ScrollView,
//   SafeAreaView,
//   Button,
// } from 'react-native';

// const SupAnnouncement = () => {
//   const [announcements, setAnnouncements] = useState([]);
//   const [presentations, setPresentations] = useState([]);
//   const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
//   const [selectedPresentation, setSelectedPresentation] = useState(null);

//   useEffect(() => {
//     // Fetch data from API
//     fetchAnnouncements();
//     fetchPresentations();
//   }, []);

//   const fetchAnnouncements = async () => {
//     try {
//       const response = await fetch('http://localhost/MobApp/my-app/php_api/fetchAnnouncementsS.php');
//       const data = await response.json();
//       console.log('Announcements Data:', data); // Log the response to verify data
//       setAnnouncements(data);
//     } catch (error) {
//       console.error('Error fetching announcements:', error);
//     }
//   };

//   const fetchPresentations = async () => {
//     try {
//       const response = await fetch('http://localhost/MobApp/my-app/php_api/fetchPresentationsS.php');
//       const data = await response.json();
//       console.log('Presentations Data:', data); // Log the response to verify data
//       setPresentations(data);
//     } catch (error) {
//       console.error('Error fetching presentations:', error);
//     }
//   };

//   const AnnouncementModal = () => (
//     <Modal
//       visible={!!selectedAnnouncement}
//       transparent={true}
//       animationType="slide"
//       onRequestClose={() => setSelectedAnnouncement(null)}
//     >
//       <View style={styles.modalContainer}>
//         <View style={styles.modalContent}>
//           <Text style={styles.modalTitle}>Announcement</Text>
//           {selectedAnnouncement && (
//             <>
//               <Text>
//                 <Text style={styles.bold}>Message:</Text> {selectedAnnouncement.message}
//               </Text>
//               <Text>
//                 <Text style={styles.bold}>Date:</Text>{' '}
//                 {new Date(selectedAnnouncement.created_at).toLocaleDateString()}
//               </Text>
//             </>
//           )}
//           <Button title="Close" onPress={() => setSelectedAnnouncement(null)} />
//         </View>
//       </View>
//     </Modal>
//   );

//   const PresentationModal = () => (
//     <Modal
//       visible={!!selectedPresentation}
//       transparent={true}
//       animationType="slide"
//       onRequestClose={() => setSelectedPresentation(null)}
//     >
//       <ScrollView contentContainerStyle={styles.modalContainer}>
//         <View style={styles.modalContent}>
//           <Text style={styles.modalTitle}>Presentation Details</Text>
//           {selectedPresentation && (
//             <>
//               <Text>
//                 <Text style={styles.bold}>Title:</Text> {selectedPresentation.project_title}
//               </Text>
//               <Text>
//                 <Text style={styles.bold}>Date:</Text>{' '}
//                 {new Date(selectedPresentation.date).toLocaleDateString()}
//               </Text>
//               <Text>
//                 <Text style={styles.bold}>Time:</Text> {selectedPresentation.time}
//               </Text>
//               <Text>
//                 <Text style={styles.bold}>Room:</Text> {selectedPresentation.room_number}
//               </Text>
//               <Text style={styles.bold}>Students:</Text>
//               {selectedPresentation.student && selectedPresentation.student.map((student, index) => (
//                 <Text key={index}>{student.name} (Seat Number: {student.seat_number})</Text>
//               ))}
//             </>
//           )}
//           <Button title="Close" onPress={() => setSelectedPresentation(null)} />
//         </View>
//       </ScrollView>
//     </Modal>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.heading}>Announcements</Text>
//       <FlatList
//         data={announcements}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             onPress={() => setSelectedAnnouncement(item)}
//             style={styles.listItem}
//           >
//             <Text>{item.message}</Text>
//             <Text>{new Date(item.created_at).toLocaleDateString()}</Text>
//           </TouchableOpacity>
//         )}
//       />
//       <Text style={styles.heading}>Presentations</Text>
//       <FlatList
//         data={presentations}
//         keyExtractor={(item) => item.presentation_id.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             onPress={() => setSelectedPresentation(item)}
//             style={styles.listItem}
//           >
//             <Text>{item.project_title}</Text>
//             <Text>{new Date(item.date).toLocaleDateString()}</Text>
//           </TouchableOpacity>
//         )}
//       />
//       <AnnouncementModal />
//       <PresentationModal />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#f5f5f5',
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#0a4a91',
//     marginVertical: 10,
//   },
//   listItem: {
//     padding: 15,
//     backgroundColor: '#fff',
//     marginVertical: 5,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     width: '90%',
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   bold: {
//     fontWeight: 'bold',
//   },
// });

// export default SupAnnouncement;


// newww
// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
//   Modal,
//   ScrollView,
//   SafeAreaView,
//   Button,
// } from 'react-native';

// const SupAnnouncement = () => {
//   const [announcements, setAnnouncements] = useState([]);
//   const [presentations, setPresentations] = useState([]);
//   const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
//   const [selectedPresentation, setSelectedPresentation] = useState(null);

//   useEffect(() => {
//     // Fetch data from API
//     fetchAnnouncements();
//     fetchPresentations();
//   }, []);

//   const fetchAnnouncements = async () => {
//     try {
//       const response = await fetch('http://localhost/MobApp/my-app/php_api/fetchAnnouncementsS.php');
//       const data = await response.json();
//       console.log('Announcements Data:', data); // Log the response to verify data
//       setAnnouncements(data);
//     } catch (error) {
//       console.error('Error fetching announcements:', error);
//     }
//   };

//   const fetchPresentations = async () => {
//     try {
//       const response = await fetch('http://localhost/MobApp/my-app/php_api/fetchPresentationsS.php');
//       const data = await response.json();
//       console.log('Presentations Data:', data); // Log the response to verify data
//       setPresentations(data);
//     } catch (error) {
//       console.error('Error fetching presentations:', error);
//     }
//   };

//   const AnnouncementModal = () => (
//     <Modal
//       visible={!!selectedAnnouncement}
//       transparent={true}
//       animationType="slide"
//       onRequestClose={() => setSelectedAnnouncement(null)}
//     >
//       <View style={styles.modalContainer}>
//         <View style={styles.modalContent}>
//           <Text style={styles.modalTitle}>Announcement</Text>
//           {selectedAnnouncement && (
//             <>
//               <Text>
//                 <Text style={styles.bold}>Message:</Text> {selectedAnnouncement.message}
//               </Text>
//               <Text>
//                 <Text style={styles.bold}>Date:</Text>{' '}
//                 {new Date(selectedAnnouncement.created_at).toLocaleDateString()}
//               </Text>
//             </>
//           )}
//           <Button title="Close" onPress={() => setSelectedAnnouncement(null)} />
//         </View>
//       </View>
//     </Modal>
//   );

//   const PresentationModal = () => (
//     <Modal
//       visible={!!selectedPresentation}
//       transparent={true}
//       animationType="slide"
//       onRequestClose={() => setSelectedPresentation(null)}
//     >
//       <ScrollView contentContainerStyle={styles.modalContainer}>
//         <View style={styles.modalContent}>
//           <Text style={styles.modalTitle}>Presentation Details</Text>
//           {selectedPresentation && (
//             <>
//               <Text>
//                 <Text style={styles.bold}>Project Title:</Text> {selectedPresentation.project_title}
//               </Text>
//               <Text>
//                 <Text style={styles.bold}>Date:</Text>{' '}
//                 {new Date(selectedPresentation.date).toLocaleDateString()}
//               </Text>
//               <Text>
//                 <Text style={styles.bold}>Time:</Text> {selectedPresentation.time}
//               </Text>
//               <Text>
//                 <Text style={styles.bold}>Room No:</Text> {selectedPresentation.room_number}
//               </Text>
//             </>
//           )}
//           <Button title="Close" onPress={() => setSelectedPresentation(null)} />
//         </View>
//       </ScrollView>
//     </Modal>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <Text style={styles.heading}>Announcements</Text>
//         <FlatList
//           data={announcements}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               onPress={() => setSelectedAnnouncement(item)}
//               style={styles.listItem}
//             >
//               <Text>{item.message}</Text>
//               <Text>{new Date(item.created_at).toLocaleDateString()}</Text>
//             </TouchableOpacity>
//           )}
//         />
//         <Text style={styles.heading}>Presentations</Text>
//         <FlatList
//           data={presentations}
//           keyExtractor={(item) => item.presentation_id.toString()}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               onPress={() => setSelectedPresentation(item)}
//               style={styles.listItem}
//             >
//               <Text style={styles.bold}>Project Title:</Text> {item.project_title}
//               <Text>{'\n'}</Text>
//               <Text>
//                 <Text style={styles.bold}>Date:</Text> {new Date(item.date).toLocaleDateString()}
//               </Text>
//               <Text>
//                 <Text style={styles.bold}>Time:</Text> {item.time}
//               </Text>
//               <Text>
//                 <Text style={styles.bold}>Room No:</Text> {item.room_number}
//               </Text>
//             </TouchableOpacity>
//           )}
//         />
//       </ScrollView>
//       <AnnouncementModal />
//       <PresentationModal />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#f5f5f5',
//   },
//   scrollContainer: {
//     paddingBottom: 20,
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#0a4a91',
//     marginVertical: 10,
//   },
//   listItem: {
//     padding: 15,
//     backgroundColor: '#fff',
//     marginVertical: 5,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     width: '90%',
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   bold: {
//     fontWeight: 'bold',
//   },
// });

// export default SupAnnouncement;



// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TouchableOpacity,
//   Modal,
//   ScrollView,
//   SafeAreaView,
//   Button,
// } from 'react-native';

// const SupAnnouncement = () => {
//   const [announcements, setAnnouncements] = useState([]);
//   const [presentations, setPresentations] = useState([]);
//   const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
//   const [selectedPresentation, setSelectedPresentation] = useState(null);

//   useEffect(() => {
//     // Fetch data from API
//     fetchAnnouncements();
//     fetchPresentations();
//   }, []);

//   const fetchAnnouncements = async () => {
//     try {
//       const response = await fetch('http://localhost/MobApp/my-app/php_api/fetchAnnouncementsS.php');
//       const data = await response.json();
//       console.log('Announcements Data:', data); // Log the response to verify data
//       setAnnouncements(data);
//     } catch (error) {
//       console.error('Error fetching announcements:', error);
//     }
//   };

//   const fetchPresentations = async () => {
//     try {
//       const response = await fetch('http://localhost/MobApp/my-app/php_api/fetchPresentationsS.php');
//       const data = await response.json();
//       console.log('Presentations Data:', data); // Log the response to verify data
//       // Ensure the data is an array
//       setPresentations(Array.isArray(data) ? data : []);
//     } catch (error) {
//       console.error('Error fetching presentations:', error);
//       setPresentations([]); // Set to an empty array in case of error
//     }
//   };

//   const AnnouncementModal = () => (
//     <Modal
//       visible={!!selectedAnnouncement}
//       transparent={true}
//       animationType="slide"
//       onRequestClose={() => setSelectedAnnouncement(null)}
//     >
//       <View style={styles.modalContainer}>
//         <View style={styles.modalContent}>
//           <Text style={styles.modalTitle}>Announcement</Text>
//           {selectedAnnouncement && (
//             <>
//               <Text>
//                 <Text style={styles.bold}>Message:</Text> {selectedAnnouncement.message}
//               </Text>
//               <Text>
//                 <Text style={styles.bold}>Date:</Text>{' '}
//                 {new Date(selectedAnnouncement.created_at).toLocaleDateString()}
//               </Text>
//             </>
//           )}
//           <Button title="Close" onPress={() => setSelectedAnnouncement(null)} />
//         </View>
//       </View>
//     </Modal>
//   );

//   const PresentationModal = () => (
//     <Modal
//       visible={!!selectedPresentation}
//       transparent={true}
//       animationType="slide"
//       onRequestClose={() => setSelectedPresentation(null)}
//     >
//       <ScrollView contentContainerStyle={styles.modalContainer}>
//         <View style={styles.modalContent}>
//           <Text style={styles.modalTitle}>Presentation Details</Text>
//           {selectedPresentation && (
//             <>
//               <Text>
//                 <Text style={styles.bold}>Title:</Text> {selectedPresentation.project_title}
//               </Text>
//               <Text>
//                 <Text style={styles.bold}>Date:</Text>{' '}
//                 {new Date(selectedPresentation.date).toLocaleDateString()}
//               </Text>
//               <Text>
//                 <Text style={styles.bold}>Time:</Text> {selectedPresentation.time}
//               </Text>
//               <Text>
//                 <Text style={styles.bold}>Room:</Text> {selectedPresentation.room_number}
//               </Text>
//               <Text style={styles.bold}>Students:</Text>
//               {selectedPresentation.student && selectedPresentation.student.map((student, index) => (
//                 <Text key={index}>{student.name} (Seat Number: {student.seat_number})</Text>
//               ))}
//             </>
//           )}
//           <Button title="Close" onPress={() => setSelectedPresentation(null)} />
//         </View>
//       </ScrollView>
//     </Modal>
//   );

//   const renderPresentationTable = () => {
//     return (
//       <View style={styles.table}>
//         <View style={styles.tableHeader}>
//           <Text style={styles.tableHeaderText}>Project Title</Text>
//           <Text style={styles.tableHeaderText}>Date</Text>
//           <Text style={styles.tableHeaderText}>Time</Text>
//           <Text style={styles.tableHeaderText}>Room No</Text>
//         </View>
//         {presentations.length > 0 ? (
//           presentations.map((item, index) => (
//             <TouchableOpacity
//               key={index}
//               onPress={() => setSelectedPresentation(item)}
//               style={styles.tableRow}
//             >
//               <Text style={styles.tableCell}>{item.project_title}</Text>
//               <Text style={styles.tableCell}>{new Date(item.date).toLocaleDateString()}</Text>
//               <Text style={styles.tableCell}>{item.time}</Text>
//               <Text style={styles.tableCell}>{item.room_number}</Text>
//             </TouchableOpacity>
//           ))
//         ) : (
//           <Text style={styles.noDataText}>No presentations available.</Text>
//         )}
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.heading}>Announcements</Text>
//       <FlatList
//         data={announcements}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             onPress={() => setSelectedAnnouncement(item)}
//             style={styles.listItem}
//           >
//             <Text>{item.message}</Text>
//             <Text>{new Date(item.created_at).toLocaleDateString()}</Text>
//           </TouchableOpacity>
//         )}
//       />
//       <Text style={styles.heading}>Presentations</Text>
//       {renderPresentationTable()}
//       <AnnouncementModal />
//       <PresentationModal />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     backgroundColor: '#f5f5f5',
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#0a4a91',
//     marginVertical: 10,
//   },
//   listItem: {
//     padding: 15,
//     backgroundColor: '#fff',
//     marginVertical: 5,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     width: '90%',
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   bold: {
//     fontWeight: 'bold',
//   },
//   table: {
//     marginTop: 10,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 10,
//   },
//   tableHeader: {
//     flexDirection: 'row',
//     backgroundColor: '#0a4a91',
//     paddingVertical: 5,
//     borderRadius: 8,
//   },
//   tableHeaderText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     width: '25%',
//     textAlign: 'center',
//   },
//   tableRow: {
//     flexDirection: 'row',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   tableCell: {
//     width: '25%',
//     textAlign: 'center',
//   },
//   noDataText: {
//     textAlign: 'center',
//     color: 'gray',
//     marginVertical: 10,
//   },
// });

// export default SupAnnouncement;



// newwwwwwwwwwwwwwwwwwwwww
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  ScrollView,
  SafeAreaView,
  Button,
} from 'react-native';
import SupNav from '../Supervisor/SupNav.jsx'; // Import SupNav component

const SupAnnouncement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [presentations, setPresentations] = useState([]);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [selectedPresentation, setSelectedPresentation] = useState(null);

  useEffect(() => {
    // Fetch data from API
    fetchAnnouncements();
    fetchPresentations();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await fetch('http://localhost/MobApp/my-app/php_api/fetchAnnouncementsS.php');
      const data = await response.json();
      console.log('Announcements Data:', data); // Log the response to verify data
      setAnnouncements(data);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  const fetchPresentations = async () => {
    try {
      const response = await fetch('http://localhost/MobApp/my-app/php_api/fetchPresentationsS.php');
      const data = await response.json();
      console.log('Presentations Data:', data); // Log the response to verify data
      // Ensure the data is an array
      setPresentations(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching presentations:', error);
      setPresentations([]); // Set to an empty array in case of error
    }
  };

  const AnnouncementModal = () => (
    <Modal
      visible={!!selectedAnnouncement}
      transparent={true}
      animationType="slide"
      onRequestClose={() => setSelectedAnnouncement(null)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Announcement</Text>
          {selectedAnnouncement && (
            <>
              <Text>
                <Text style={styles.bold}>Message:</Text> {selectedAnnouncement.message}
              </Text>
              <Text>
                <Text style={styles.bold}>Date:</Text>{' '}
                {new Date(selectedAnnouncement.created_at).toLocaleDateString()}
              </Text>
            </>
          )}
          <Button title="Close" onPress={() => setSelectedAnnouncement(null)} />
        </View>
      </View>
    </Modal>
  );

  const PresentationModal = () => (
    <Modal
      visible={!!selectedPresentation}
      transparent={true}
      animationType="slide"
      onRequestClose={() => setSelectedPresentation(null)}
    >
      <ScrollView contentContainerStyle={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Presentation Details</Text>
          {selectedPresentation && (
            <>
              <Text>
                <Text style={styles.bold}>Title:</Text> {selectedPresentation.project_title}
              </Text>
              <Text>
                <Text style={styles.bold}>Date:</Text>{' '}
                {new Date(selectedPresentation.date).toLocaleDateString()}
              </Text>
              <Text>
                <Text style={styles.bold}>Time:</Text> {selectedPresentation.time}
              </Text>
              <Text>
                <Text style={styles.bold}>Room:</Text> {selectedPresentation.room_number}
              </Text>
              <Text style={styles.bold}>Students:</Text>
              {selectedPresentation.student && selectedPresentation.student.map((student, index) => (
                <Text key={index}>{student.name} (Seat Number: {student.seat_number})</Text>
              ))}
            </>
          )}
          <Button title="Close" onPress={() => setSelectedPresentation(null)} />
        </View>
      </ScrollView>
    </Modal>
  );

  const renderPresentationTable = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Project Title</Text>
          <Text style={styles.tableHeaderText}>Date</Text>
          <Text style={styles.tableHeaderText}>Time</Text>
          <Text style={styles.tableHeaderText}>Room No</Text>
        </View>
        {presentations.length > 0 ? (
          presentations.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedPresentation(item)}
              style={styles.tableRow}
            >
              <Text style={styles.tableCell}>{item.project_title}</Text>
              <Text style={styles.tableCell}>{new Date(item.date).toLocaleDateString()}</Text>
              <Text style={styles.tableCell}>{item.time}</Text>
              <Text style={styles.tableCell}>{item.room_number}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noDataText}>No presentations available.</Text>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SupNav /> {/* Include SupNav component here */}
      <Text style={styles.heading}>Announcements</Text>
      <FlatList
        data={announcements}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelectedAnnouncement(item)}
            style={styles.listItem}
          >
            <Text>{item.message}</Text>
            <Text>{new Date(item.created_at).toLocaleDateString()}</Text>
          </TouchableOpacity>
        )}
      />
      <Text style={styles.heading}>Presentations</Text>
      {renderPresentationTable()}
      <AnnouncementModal />
      <PresentationModal />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0a4a91',
    marginVertical: 10,
  },
  listItem: {
    padding: 15,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  table: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#0a4a91',
    paddingVertical: 5,
    borderRadius: 8,
  },
  tableHeaderText: {
    color: '#fff',
    fontWeight: 'bold',
    width: '25%',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableCell: {
    width: '25%',
    textAlign: 'center',
  },
  noDataText: {
    textAlign: 'center',
    color: 'gray',
    marginVertical: 10,
  },
});

export default SupAnnouncement;

