// import React, { useEffect, useState } from 'react';
// import {
//     View,
//     Text,
//     FlatList,
//     Modal,
//     TouchableOpacity,
//     StyleSheet,
//     SafeAreaView,
// } from 'react-native';
// import axios from 'axios';

// const ViewMeetings = () => {
//     const [meetings, setMeetings] = useState([]);
//     const [selectedMeeting, setSelectedMeeting] = useState(null);
//     const [modalVisible, setModalVisible] = useState(false);

//     // Fetch meetings data
//     useEffect(() => {
//         axios
//             .get('http://localhost/MobApp/my-app/php_api/getMeetings.php') // Update the API URL as needed
//             .then((response) => {
//                 setMeetings(Array.isArray(response.data) ? response.data : []);
//             })
//             .catch((error) => {
//                 console.error('Error fetching meetings:', error);
//             });
//     }, []);

//     const openModal = (meeting) => {
//         setSelectedMeeting(meeting);
//         setModalVisible(true);
//     };

//     const closeModal = () => {
//         setModalVisible(false);
//         setSelectedMeeting(null);
//     };

//     return (
//         <SafeAreaView style={styles.safeArea}>
//             <View style={styles.container}>
//                 <Text style={styles.heading}>Scheduled Meetings</Text>
                
//                 {/* Table-like structure */}
//                 <View style={styles.tableContainer}>
//                     {/* Table Header */}
//                     <View style={styles.tableRow}>
//                         <Text style={[styles.tableCell, styles.tableHeader]}>Title</Text>
//                         <Text style={[styles.tableCell, styles.tableHeader]}>Date</Text>
//                         <Text style={[styles.tableCell, styles.tableHeader]}>Time</Text>
//                         <Text style={[styles.tableCell, styles.tableHeader]}>Project</Text>
//                     </View>

//                     {/* Table Rows */}
//                     <FlatList
//                         data={meetings}
//                         keyExtractor={(item) => item.id.toString()}
//                         renderItem={({ item }) => (
//                             <TouchableOpacity
//                                 style={styles.tableRow}
//                                 onPress={() => openModal(item)}
//                             >
//                                 <Text style={styles.tableCell}>{item.title || 'N/A'}</Text>
//                                 <Text style={styles.tableCell}>{item.date || 'N/A'}</Text>
//                                 <Text style={styles.tableCell}>{item.time || 'N/A'}</Text>
//                                 <Text style={styles.tableCell}>{item.project_title || 'N/A'}</Text>
//                             </TouchableOpacity>
//                         )}
//                         ListEmptyComponent={
//                             <Text style={styles.emptyText}>No meetings found.</Text>
//                         }
//                     />
//                 </View>
//             </View>

//             {/* Modal */}
//             {selectedMeeting && (
//                 <Modal
//                     transparent={true}
//                     visible={modalVisible}
//                     onRequestClose={closeModal}
//                 >
//                     <View style={styles.modalOverlay}>
//                         <View style={styles.modalContent}>
//                             <Text style={styles.modalTitle}>
//                                 {selectedMeeting.title || 'Meeting Details'}
//                             </Text>
//                             <Text style={styles.modalText}>
//                                 <Text style={styles.boldText}>Date: </Text>
//                                 {selectedMeeting.date || 'N/A'}
//                             </Text>
//                             <Text style={styles.modalText}>
//                                 <Text style={styles.boldText}>Time: </Text>
//                                 {selectedMeeting.time || 'N/A'}
//                             </Text>
//                             <Text style={styles.modalText}>
//                                 <Text style={styles.boldText}>Project: </Text>
//                                 {selectedMeeting.project_title || 'N/A'}
//                             </Text>
//                             <Text style={styles.modalText}>
//                                 <Text style={styles.boldText}>Description: </Text>
//                                 {selectedMeeting.description || 'N/A'}
//                             </Text>
//                             <TouchableOpacity
//                                 style={styles.closeButton}
//                                 onPress={closeModal}
//                             >
//                                 <Text style={styles.closeButtonText}>Close</Text>
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                 </Modal>
//             )}
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
//     container: { padding: 20 },
//     heading: { fontSize: 22, fontWeight: 'bold', color: '#0a4a91', marginBottom: 20 },
//     tableContainer: { backgroundColor: '#fff', borderRadius: 10, padding: 10 },
//     tableRow: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         padding: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ddd',
//     },
//     tableCell: { fontSize: 14, flex: 1, textAlign: 'center' },
//     tableHeader: { fontWeight: 'bold', backgroundColor: '#f1f1f1' },
//     emptyText: { textAlign: 'center', color: '#6c757d', marginTop: 20 },
//     modalOverlay: {
//         flex: 1,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     modalContent: {
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         padding: 20,
//         width: '80%',
//         alignItems: 'center',
//     },
//     modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
//     modalText: { fontSize: 16, marginBottom: 10 },
//     boldText: { fontWeight: 'bold' },
//     closeButton: {
//         backgroundColor: '#0a4a91',
//         borderRadius: 5,
//         padding: 10,
//         marginTop: 20,
//     },
//     closeButtonText: { color: '#fff', fontWeight: 'bold' },
// });

// export default ViewMeetings;


// updated
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    Modal,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import axios from 'axios';
import StuNav from './StuNav'; // Importing StuNav component

const ViewMeetings = () => {
    const [meetings, setMeetings] = useState([]);
    const [selectedMeeting, setSelectedMeeting] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    // Fetch meetings data
    useEffect(() => {
        axios
            .get('http://localhost/MobApp/my-app/php_api/getMeetings.php') 
            .then((response) => {
                setMeetings(Array.isArray(response.data) ? response.data : []);
            })
            .catch((error) => {
                console.error('Error fetching meetings:', error);
            });
    }, []);

    const openModal = (meeting) => {
        setSelectedMeeting(meeting);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedMeeting(null);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Include StuNav component at the top */}
            <StuNav />

            <View style={styles.container}>
                <Text style={styles.heading}>Scheduled Meetings</Text>
                
                {/* Table-like structure */}
                <View style={styles.tableContainer}>
                    {/* Table Header */}
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableCell, styles.tableHeader]}>Title</Text>
                        <Text style={[styles.tableCell, styles.tableHeader]}>Date</Text>
                        <Text style={[styles.tableCell, styles.tableHeader]}>Time</Text>
                        <Text style={[styles.tableCell, styles.tableHeader]}>Project</Text>
                    </View>

                    {/* Table Rows */}
                    <FlatList
                        data={meetings}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.tableRow}
                                onPress={() => openModal(item)}
                            >
                                <Text style={styles.tableCell}>{item.title || 'N/A'}</Text>
                                <Text style={styles.tableCell}>{item.date || 'N/A'}</Text>
                                <Text style={styles.tableCell}>{item.time || 'N/A'}</Text>
                                <Text style={styles.tableCell}>{item.project_title || 'N/A'}</Text>
                            </TouchableOpacity>
                        )}
                        ListEmptyComponent={
                            <Text style={styles.emptyText}>No meetings found.</Text>
                        }
                    />
                </View>
            </View>

            {/* Modal */}
            {selectedMeeting && (
                <Modal
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={closeModal}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>
                                {selectedMeeting.title || 'Meeting Details'}
                            </Text>
                            <Text style={styles.modalText}>
                                <Text style={styles.boldText}>Date: </Text>
                                {selectedMeeting.date || 'N/A'}
                            </Text>
                            <Text style={styles.modalText}>
                                <Text style={styles.boldText}>Time: </Text>
                                {selectedMeeting.time || 'N/A'}
                            </Text>
                            <Text style={styles.modalText}>
                                <Text style={styles.boldText}>Project: </Text>
                                {selectedMeeting.project_title || 'N/A'}
                            </Text>
                            <Text style={styles.modalText}>
                                <Text style={styles.boldText}>Description: </Text>
                                {selectedMeeting.description || 'N/A'}
                            </Text>
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={closeModal}
                            >
                                <Text style={styles.closeButtonText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )}
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
    container: { padding: 20 },
    heading: { fontSize: 22, fontWeight: 'bold', color: '#0a4a91', marginBottom: 20 },
    tableContainer: { backgroundColor: '#fff', borderRadius: 10, padding: 10 },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    tableCell: { fontSize: 14, flex: 1, textAlign: 'center' },
    tableHeader: { fontWeight: 'bold', backgroundColor: '#f1f1f1' },
    emptyText: { textAlign: 'center', color: '#6c757d', marginTop: 20 },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        width: '80%',
        alignItems: 'center',
    },
    modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
    modalText: { fontSize: 16, marginBottom: 10 },
    boldText: { fontWeight: 'bold' },
    closeButton: {
        backgroundColor: '#0a4a91',
        borderRadius: 5,
        padding: 10,
        marginTop: 20,
    },
    closeButtonText: { color: '#fff', fontWeight: 'bold' },
});

export default ViewMeetings;
