// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, Modal, TouchableOpacity, StyleSheet } from 'react-native';
// import axios from 'axios';


// const StudentAnnouncements = () => {
//     const [announcements, setAnnouncements] = useState([]);
//     const [presentations, setPresentations] = useState([]);
//     const [modalData, setModalData] = useState(null);

//     useEffect(() => {
//         // Fetch Announcements
//         axios.get('http://localhost/MobApp/my-app/php_api/getAnnouncements.php')
//             .then(response => setAnnouncements(response.data))
//             .catch(error => console.error(error));

//         // Fetch Presentations
//         axios.get('http://localhost/MobApp/my-app/php_api/getPresentations.php')
//             .then(response => setPresentations(response.data))
//             .catch(error => console.error(error));
//     }, []);

//     return (
//         <View style={styles.container}>
//             <Text style={styles.heading}>Announcements</Text>
//             <FlatList
//                 data={announcements}
//                 keyExtractor={(item) => item.id.toString()}
//                 renderItem={({ item }) => (
//                     <TouchableOpacity onPress={() => setModalData(item)}>
//                         <View style={styles.listItem}>
//                             <Text style={styles.message}>{item.message}</Text>
//                             <Text style={styles.date}>{item.created_at}</Text>
//                         </View>
//                     </TouchableOpacity>
//                 )}
//                 ListEmptyComponent={<Text style={styles.emptyText}>No announcements found.</Text>}
//             />

//             <Text style={styles.heading}>Presentations</Text>
//             <FlatList
//                 data={presentations}
//                 keyExtractor={(item) => item.presentation_id.toString()}
//                 renderItem={({ item }) => (
//                     <TouchableOpacity onPress={() => setModalData(item)}>
//                         <View style={styles.listItem}>
//                             <Text style={styles.message}>{item.project_title}</Text>
//                             <Text style={styles.date}>{item.date} - {item.time}</Text>
//                             <Text style={styles.room}>Room: {item.room_number}</Text>
//                         </View>
//                     </TouchableOpacity>
//                 )}
//                 ListEmptyComponent={<Text style={styles.emptyText}>No presentations found.</Text>}
//             />

//             <Modal visible={modalData !== null} transparent={true} animationType="slide">
//                 <View style={styles.modalContainer}>
//                     <View style={styles.modalContent}>
//                         {modalData && (
//                             <>
//                                 <Text style={styles.modalTitle}>{modalData.message || modalData.project_title}</Text>
//                                 <Text>{modalData.created_at || `${modalData.date} - ${modalData.time}`}</Text>
//                                 {modalData.description && <Text>{modalData.description}</Text>}
//                                 <TouchableOpacity onPress={() => setModalData(null)} style={styles.closeButton}>
//                                     <Text style={styles.closeButtonText}>Close</Text>
//                                 </TouchableOpacity>
//                             </>
//                         )}
//                     </View>
//                 </View>
//             </Modal>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' },
//     heading: { fontSize: 22, fontWeight: 'bold', color: '#0a4a91', marginBottom: 10 },
//     listItem: { backgroundColor: '#fff', padding: 15, marginBottom: 10, borderRadius: 8, elevation: 2 },
//     message: { fontSize: 16, fontWeight: 'bold' },
//     date: { fontSize: 14, color: '#6c757d' },
//     room: { fontSize: 14, color: '#6c757d' },
//     emptyText: { textAlign: 'center', color: '#6c757d', marginTop: 20 },
//     modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
//     modalContent: { backgroundColor: '#fff', padding: 20, borderRadius: 8, width: '90%' },
//     modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
//     closeButton: { marginTop: 20, alignSelf: 'flex-end' },
//     closeButtonText: { color: '#007bff', fontSize: 16 },
// });

// export default StudentAnnouncements;


// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, Modal, TouchableOpacity, StyleSheet } from 'react-native';
// import axios from 'axios';

// const StudentAnnouncements = () => {
//     const [announcements, setAnnouncements] = useState([]);
//     const [presentations, setPresentations] = useState([]);
//     const [modalData, setModalData] = useState(null);

//     useEffect(() => {
//         // Fetch Announcements
//         axios.get('http://localhost/MobApp/my-app/php_api/getAnnouncements.php')
//             .then(response => {
//                 console.log('Announcements:', response.data);
//                 setAnnouncements(Array.isArray(response.data) ? response.data : []);
//             })
//             .catch(error => console.error('Error fetching announcements:', error));

//         // Fetch Presentations
//         axios.get('http://localhost/MobApp/my-app/php_api/getPresentations.php')
//             .then(response => {
//                 console.log('Presentations:', response.data);
//                 setPresentations(Array.isArray(response.data) ? response.data : []);
//             })
//             .catch(error => console.error('Error fetching presentations:', error));
//     }, []);

//     return (
//         <View style={styles.container}>
//             <Text style={styles.heading}>Announcements</Text>
//             <FlatList
//                 data={announcements}
//                 keyExtractor={(item, index) => (item?.id ? item.id.toString() : index.toString())}
//                 renderItem={({ item }) => (
//                     item ? (
//                         <TouchableOpacity onPress={() => setModalData(item)}>
//                             <View style={styles.listItem}>
//                                 <Text style={styles.message}>{item?.message || 'No message available'}</Text>
//                                 <Text style={styles.date}>{item?.created_at || 'Unknown date'}</Text>
//                             </View>
//                         </TouchableOpacity>
//                     ) : null
//                 )}
//                 ListEmptyComponent={<Text style={styles.emptyText}>No announcements found.</Text>}
//             />

//             <Text style={styles.heading}>Presentations</Text>
//             <FlatList
//                 data={presentations}
//                 keyExtractor={(item, index) => (item?.presentation_id ? item.presentation_id.toString() : index.toString())}
//                 renderItem={({ item }) => (
//                     item ? (
//                         <TouchableOpacity onPress={() => setModalData(item)}>
//                             <View style={styles.listItem}>
//                                 <Text style={styles.message}>{item?.project_title || 'No title available'}</Text>
//                                 <Text style={styles.date}>{item?.date ? `${item.date} - ${item.time}` : 'Unknown date'}</Text>
//                                 <Text style={styles.room}>{item?.room_number ? `Room: ${item.room_number}` : ''}</Text>
//                             </View>
//                         </TouchableOpacity>
//                     ) : null
//                 )}
//                 ListEmptyComponent={<Text style={styles.emptyText}>No presentations found.</Text>}
//             />

//             <Modal visible={modalData !== null} transparent={true} animationType="slide">
//                 <View style={styles.modalContainer}>
//                     <View style={styles.modalContent}>
//                         {modalData && (
//                             <>
//                                 <Text style={styles.modalTitle}>{modalData.message || modalData.project_title || 'Details'}</Text>
//                                 <Text>{modalData.created_at || `${modalData.date} - ${modalData.time}` || ''}</Text>
//                                 {modalData.description && <Text>{modalData.description}</Text>}
//                                 <TouchableOpacity onPress={() => setModalData(null)} style={styles.closeButton}>
//                                     <Text style={styles.closeButtonText}>Close</Text>
//                                 </TouchableOpacity>
//                             </>
//                         )}
//                     </View>
//                 </View>
//             </Modal>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' },
//     heading: { fontSize: 22, fontWeight: 'bold', color: '#0a4a91', marginBottom: 10 },
//     listItem: { backgroundColor: '#fff', padding: 15, marginBottom: 10, borderRadius: 8, elevation: 2 },
//     message: { fontSize: 16, fontWeight: 'bold' },
//     date: { fontSize: 14, color: '#6c757d' },
//     room: { fontSize: 14, color: '#6c757d' },
//     emptyText: { textAlign: 'center', color: '#6c757d', marginTop: 20 },
//     modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
//     modalContent: { backgroundColor: '#fff', padding: 20, borderRadius: 8, width: '90%' },
//     modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
//     closeButton: { marginTop: 20, alignSelf: 'flex-end' },
//     closeButtonText: { color: '#007bff', fontSize: 16 },
// });

// export default StudentAnnouncements;





// 
// import React, { useEffect, useState } from 'react';
// import {
//     View,
//     Text,
//     FlatList,
//     ScrollView,
//     StyleSheet,
//     SafeAreaView,
//     TouchableOpacity,
// } from 'react-native';
// import axios from 'axios';

// const StudentAnnouncements = () => {
//     const [announcements, setAnnouncements] = useState([]);
//     const [presentations, setPresentations] = useState([]);

//     useEffect(() => {
//         // Fetch Announcements
//         axios
//             .get('http://localhost/MobApp/my-app/php_api/getAnnouncements.php')
//             .then((response) => {
//                 console.log('Announcements:', response.data);
//                 setAnnouncements(Array.isArray(response.data) ? response.data : []);
//             })
//             .catch((error) => console.error('Error fetching announcements:', error));

//         // Fetch Presentations
//         axios
//             .get('http://localhost/MobApp/my-app/php_api/getPresentations.php')
//             .then((response) => {
//                 console.log('Presentations:', response.data);
//                 setPresentations(Array.isArray(response.data) ? response.data : []);
//             })
//             .catch((error) => console.error('Error fetching presentations:', error));
//     }, []);

//     return (
//         <SafeAreaView style={styles.safeArea}>
//             {/* Header */}
//             <View style={styles.header}>
//                 <Text style={styles.headerTitle}>FYP Progress Recorder</Text>
//             </View>

//             <ScrollView contentContainerStyle={styles.scrollContainer}>
//                 {/* Announcements Section */}
//                 <Text style={styles.sectionTitle}>Announcements</Text>
//                 <FlatList
//                     data={announcements}
//                     keyExtractor={(item, index) =>
//                         item?.id ? item.id.toString() : index.toString()
//                     }
//                     renderItem={({ item }) =>
//                         item ? (
//                             <View style={styles.listItem}>
//                                 <Text style={styles.message}>
//                                     {item?.message || 'No message available'}
//                                 </Text>
//                                 <Text style={styles.date}>
//                                     {item?.created_at || 'Unknown date'}
//                                 </Text>
//                             </View>
//                         ) : null
//                     }
//                     ListEmptyComponent={
//                         <Text style={styles.emptyText}>No announcements found.</Text>
//                     }
//                 />

//                 {/* Presentations Section */}
//                 <Text style={styles.sectionTitle}>Presentations</Text>
//                 <View style={styles.table}>
//                     {/* Table Header */}
//                     <View style={[styles.tableRow, styles.tableHeader]}>
//                         <Text style={[styles.tableCell, styles.headerCell]}>
//                             Project Title
//                         </Text>
//                         <Text style={[styles.tableCell, styles.headerCell]}>Date</Text>
//                         <Text style={[styles.tableCell, styles.headerCell]}>Time</Text>
//                         <Text style={[styles.tableCell, styles.headerCell]}>Room No</Text>
//                     </View>

//                     {/* Table Data */}
//                     {presentations.length > 0 ? (
//                         presentations.map((item, index) => (
//                             <View
//                                 key={index}
//                                 style={[
//                                     styles.tableRow,
//                                     index % 2 === 0
//                                         ? styles.evenRow
//                                         : styles.oddRow,
//                                 ]}
//                             >
//                                 <Text style={styles.tableCell}>
//                                     {item?.project_title || 'N/A'}
//                                 </Text>
//                                 <Text style={styles.tableCell}>
//                                     {item?.date || 'N/A'}
//                                 </Text>
//                                 <Text style={styles.tableCell}>
//                                     {item?.time || 'N/A'}
//                                 </Text>
//                                 <Text style={styles.tableCell}>
//                                     {item?.room_number || 'N/A'}
//                                 </Text>
//                             </View>
//                         ))
//                     ) : (
//                         <Text style={styles.emptyText}>
//                             No presentations scheduled.
//                         </Text>
//                     )}
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
//     header: {
//         padding: 15,
//         backgroundColor: '#0a4a91',
//         alignItems: 'center',
//     },
//     headerTitle: { fontSize: 20, color: '#fff', fontWeight: 'bold' },
//     scrollContainer: { padding: 20 },
//     sectionTitle: {
//         fontSize: 22,
//         fontWeight: 'bold',
//         color: '#0a4a91',
//         marginBottom: 10,
//     },
//     listItem: {
//         backgroundColor: '#fff',
//         padding: 15,
//         marginBottom: 10,
//         borderRadius: 8,
//         elevation: 2,
//     },
//     message: { fontSize: 16, fontWeight: 'bold' },
//     date: { fontSize: 14, color: '#6c757d' },
//     emptyText: { textAlign: 'center', color: '#6c757d', marginTop: 20 },

//     // Table Styles
//     table: { marginTop: 10 },
//     tableRow: {
//         flexDirection: 'row',
//         padding: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ddd',
//     },
//     tableHeader: {
//         backgroundColor: '#0a4a91',
//     },
//     headerCell: {
//         fontWeight: 'bold',
//         color: '#fff',
//     },
//     tableCell: {
//         flex: 1,
//         textAlign: 'center',
//         fontSize: 14,
//     },
//     evenRow: { backgroundColor: '#f8f9fa' },
//     oddRow: { backgroundColor: '#fff' },
// });

// export default StudentAnnouncements;



// import React, { useEffect, useState } from 'react';
// import {
//     View,
//     Text,
//     FlatList,
//     ScrollView,
//     StyleSheet,
//     SafeAreaView,
//     TouchableOpacity,
//     Modal,
//     Pressable,
// } from 'react-native';
// import axios from 'axios';

// const StudentAnnouncements = () => {
//     const [announcements, setAnnouncements] = useState([]);
//     const [presentations, setPresentations] = useState([]);
//     const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
//     const [isModalVisible, setIsModalVisible] = useState(false);

//     useEffect(() => {
//         // Fetch Announcements
//         axios
//             .get('http://localhost/MobApp/my-app/php_api/getAnnouncements.php')
//             .then((response) => {
//                 console.log('Announcements:', response.data);
//                 setAnnouncements(Array.isArray(response.data) ? response.data : []);
//             })
//             .catch((error) => console.error('Error fetching announcements:', error));

//         // Fetch Presentations
//         axios
//             .get('http://localhost/MobApp/my-app/php_api/getPresentations.php')
//             .then((response) => {
//                 console.log('Presentations:', response.data);
//                 setPresentations(Array.isArray(response.data) ? response.data : []);
//             })
//             .catch((error) => console.error('Error fetching presentations:', error));
//     }, []);

//     const handleAnnouncementClick = (announcement) => {
//         setSelectedAnnouncement(announcement);
//         setIsModalVisible(true);
//     };

//     const closeModal = () => {
//         setIsModalVisible(false);
//         setSelectedAnnouncement(null);
//     };

//     return (
//         <SafeAreaView style={styles.safeArea}>
            

//             <ScrollView contentContainerStyle={styles.scrollContainer}>
//                 {/* Announcements Section */}
//                 <Text style={styles.sectionTitle}>Announcements</Text>
//                 <FlatList
//                     data={announcements}
//                     keyExtractor={(item, index) =>
//                         item?.id ? item.id.toString() : index.toString()
//                     }
//                     renderItem={({ item }) =>
//                         item ? (
//                             <TouchableOpacity
//                                 style={styles.listItem}
//                                 onPress={() => handleAnnouncementClick(item)}
//                             >
//                                 <Text style={styles.message}>
//                                     {item?.message || 'No message available'}
//                                 </Text>
//                                 <Text style={styles.date}>
//                                     {item?.created_at || 'Unknown date'}
//                                 </Text>
//                             </TouchableOpacity>
//                         ) : null
//                     }
//                     ListEmptyComponent={
//                         <Text style={styles.emptyText}>No announcements found.</Text>
//                     }
//                 />

//                 {/* Modal for Announcement Details */}
//                 <Modal
//                     animationType="slide"
//                     transparent={true}
//                     visible={isModalVisible}
//                     onRequestClose={closeModal}
//                 >
//                     <View style={styles.modalContainer}>
//                         <View style={styles.modalContent}>
//                             <Text style={styles.modalTitle}>Announcement Details</Text>
//                             {selectedAnnouncement && (
//                                 <>
//                                     <Text style={styles.modalMessage}>
//                                         {selectedAnnouncement?.message || 'No details available'}
//                                     </Text>
//                                     <Text style={styles.modalDate}>
//                                         Date: {selectedAnnouncement?.created_at || 'Unknown date'}
//                                     </Text>
//                                 </>
//                             )}
//                             <Pressable style={styles.closeButton} onPress={closeModal}>
//                                 <Text style={styles.closeButtonText}>Close</Text>
//                             </Pressable>
//                         </View>
//                     </View>
//                 </Modal>

//                 {/* Presentations Section */}
//                 <Text style={styles.sectionTitle}>Presentations</Text>
//                 <View style={styles.table}>
//                     {/* Table Header */}
//                     <View style={[styles.tableRow, styles.tableHeader]}>
//                         <Text style={[styles.tableCell, styles.headerCell]}>
//                             Project Title
//                         </Text>
//                         <Text style={[styles.tableCell, styles.headerCell]}>Date</Text>
//                         <Text style={[styles.tableCell, styles.headerCell]}>Time</Text>
//                         <Text style={[styles.tableCell, styles.headerCell]}>Room No</Text>
//                     </View>

//                     {/* Table Data */}
//                     {presentations.length > 0 ? (
//                         presentations.map((item, index) => (
//                             <View
//                                 key={index}
//                                 style={[
//                                     styles.tableRow,
//                                     index % 2 === 0
//                                         ? styles.evenRow
//                                         : styles.oddRow,
//                                 ]}
//                             >
//                                 <Text style={styles.tableCell}>
//                                     {item?.project_title || 'N/A'}
//                                 </Text>
//                                 <Text style={styles.tableCell}>
//                                     {item?.date || 'N/A'}
//                                 </Text>
//                                 <Text style={styles.tableCell}>
//                                     {item?.time || 'N/A'}
//                                 </Text>
//                                 <Text style={styles.tableCell}>
//                                     {item?.room_number || 'N/A'}
//                                 </Text>
//                             </View>
//                         ))
//                     ) : (
//                         <Text style={styles.emptyText}>
//                             No presentations scheduled.
//                         </Text>
//                     )}
//                 </View>
//             </ScrollView>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
//     header: {
//         padding: 15,
//         backgroundColor: '#0a4a91',
//         alignItems: 'center',
//     },
//     headerTitle: { fontSize: 20, color: '#fff', fontWeight: 'bold' },
//     scrollContainer: { padding: 20 },
//     sectionTitle: {
//         fontSize: 22,
//         fontWeight: 'bold',
//         color: '#0a4a91',
//         marginBottom: 10,
//     },
//     listItem: {
//         backgroundColor: '#fff',
//         padding: 15,
//         marginBottom: 10,
//         borderRadius: 8,
//         elevation: 2,
//     },
//     message: { fontSize: 16, fontWeight: 'bold' },
//     date: { fontSize: 14, color: '#6c757d' },
//     emptyText: { textAlign: 'center', color: '#6c757d', marginTop: 20 },

//     // Modal Styles
//     modalContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     },
//     modalContent: {
//         backgroundColor: '#fff',
//         padding: 20,
//         borderRadius: 10,
//         width: '80%',
//         alignItems: 'center',
//     },
//     modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
//     modalMessage: { fontSize: 16, marginBottom: 10 },
//     modalDate: { fontSize: 14, color: '#6c757d', marginBottom: 20 },
//     closeButton: {
//         backgroundColor: '#0a4a91',
//         padding: 10,
//         borderRadius: 5,
//         width: '100%',
//         alignItems: 'center',
//     },
//     closeButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },

//     // Table Styles
//     table: { marginTop: 10 },
//     tableRow: {
//         flexDirection: 'row',
//         padding: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ddd',
//     },
//     tableHeader: {
//         backgroundColor: '#0a4a91',
//     },
//     headerCell: {
//         fontWeight: 'bold',
//         color: '#fff',
//     },
//     tableCell: {
//         flex: 1,
//         textAlign: 'center',
//         fontSize: 14,
//     },
//     evenRow: { backgroundColor: '#f8f9fa' },
//     oddRow: { backgroundColor: '#fff' },
// });

// export default StudentAnnouncements;


// updated
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Modal,
    Pressable,
} from 'react-native';
import axios from 'axios';
import StuNav from './StuNav'; // Importing StuNav

const StudentAnnouncements = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [presentations, setPresentations] = useState([]);
    const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        // Fetch Announcements
        axios
            .get('http://localhost/MobApp/my-app/php_api/fetchAnnouncementsS.php')
            .then((response) => {
                console.log('Announcements:', response.data);
                setAnnouncements(Array.isArray(response.data) ? response.data : []);
            })
            .catch((error) => console.error('Error fetching announcements:', error));

        // Fetch Presentations
        axios
            .get('http://localhost/MobApp/my-app/php_api/fetchPresentationsS.php')
            .then((response) => {
                console.log('Presentations:', response.data);
                setPresentations(Array.isArray(response.data) ? response.data : []);
            })
            .catch((error) => console.error('Error fetching presentations:', error));
    }, []);

    const handleAnnouncementClick = (announcement) => {
        setSelectedAnnouncement(announcement);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setSelectedAnnouncement(null);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Including StuNav at the top */}
            <StuNav />

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/* Announcements Section */}
                <Text style={styles.sectionTitle}>Announcements</Text>
                <FlatList
                    data={announcements}
                    keyExtractor={(item, index) =>
                        item?.id ? item.id.toString() : index.toString()
                    }
                    renderItem={({ item }) =>
                        item ? (
                            <TouchableOpacity
                                style={styles.listItem}
                                onPress={() => handleAnnouncementClick(item)}
                            >
                                <Text style={styles.message}>
                                    {item?.message || 'No message available'}
                                </Text>
                                <Text style={styles.date}>
                                    {item?.created_at || 'Unknown date'}
                                </Text>
                            </TouchableOpacity>
                        ) : null
                    }
                    ListEmptyComponent={
                        <Text style={styles.emptyText}>No announcements found.</Text>
                    }
                />

                {/* Modal for Announcement Details */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={closeModal}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Announcement Details</Text>
                            {selectedAnnouncement && (
                                <>
                                    <Text style={styles.modalMessage}>
                                        {selectedAnnouncement?.message || 'No details available'}
                                    </Text>
                                    <Text style={styles.modalDate}>
                                        Date: {selectedAnnouncement?.created_at || 'Unknown date'}
                                    </Text>
                                </>
                            )}
                            <Pressable style={styles.closeButton} onPress={closeModal}>
                                <Text style={styles.closeButtonText}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

                {/* Presentations Section */}
                <Text style={styles.sectionTitle}>Presentations</Text>
                <View style={styles.table}>
                    {/* Table Header */}
                    <View style={[styles.tableRow, styles.tableHeader]}>
                        <Text style={[styles.tableCell, styles.headerCell]}>
                            Project Title
                        </Text>
                        <Text style={[styles.tableCell, styles.headerCell]}>Date</Text>
                        <Text style={[styles.tableCell, styles.headerCell]}>Time</Text>
                        <Text style={[styles.tableCell, styles.headerCell]}>Room No</Text>
                    </View>

                    {/* Table Data */}
                    {presentations.length > 0 ? (
                        presentations.map((item, index) => (
                            <View
                                key={index}
                                style={[
                                    styles.tableRow,
                                    index % 2 === 0
                                        ? styles.evenRow
                                        : styles.oddRow,
                                ]}
                            >
                                <Text style={styles.tableCell}>
                                    {item?.project_title || 'N/A'}
                                </Text>
                                <Text style={styles.tableCell}>
                                    {item?.date || 'N/A'}
                                </Text>
                                <Text style={styles.tableCell}>
                                    {item?.time || 'N/A'}
                                </Text>
                                <Text style={styles.tableCell}>
                                    {item?.room_number || 'N/A'}
                                </Text>
                            </View>
                        ))
                    ) : (
                        <Text style={styles.emptyText}>
                            No presentations scheduled.
                        </Text>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#f8f9fa' },
    header: {
        padding: 15,
        backgroundColor: '#0a4a91',
        alignItems: 'center',
    },
    
    headerTitle: { fontSize: 20, color: '#fff', fontWeight: 'bold' },
    scrollContainer: { padding: 20 },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#0a4a91',
        marginBottom: 10,
    },
    listItem: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        elevation: 2,
    },
    message: { fontSize: 16, fontWeight: 'bold' },
    date: { fontSize: 14, color: '#6c757d' },
    emptyText: { textAlign: 'center', color: '#6c757d', marginTop: 20 },

    // Modal Styles
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
    modalMessage: { fontSize: 16, marginBottom: 10 },
    modalDate: { fontSize: 14, color: '#6c757d', marginBottom: 20 },
    closeButton: {
        backgroundColor: '#0a4a91',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    closeButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },

    // Table Styles
    table: { marginTop: 10 },
    tableRow: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    tableHeader: {
        backgroundColor: '#f1f1f1',
        fontWeight: 'bold'
    },
    headerCell: {
        fontWeight: 'bold',
        color: 'black',
        
    },
    tableCell: {
        fontSize: 14,
         flex: 1,
          textAlign: 'center'
    },
    evenRow: { backgroundColor: '#f8f9fa' },
    oddRow: { backgroundColor: '#fff' },
});

export default StudentAnnouncements;
