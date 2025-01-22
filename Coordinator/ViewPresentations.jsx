// import React, { useEffect, useState } from 'react';
// import { 
//   View, 
//   Text, 
//   FlatList, 
//   StyleSheet, 
//   Alert, 
//   Modal, 
//   TouchableOpacity, 
//   Button, 
//   ScrollView 
// } from 'react-native';

// const ViewPresentations = ({ navigation }) => {
//   const [presentations, setPresentations] = useState([]);
//   const [forms, setForms] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedBatch, setSelectedBatch] = useState('');
//   const [selectedEvent, setSelectedEvent] = useState('');
//   const [selectedForm, setSelectedForm] = useState('');

//   const API_BASE = 'http://localhost/MobApp/my-app/php_api'; // Replace with your IP

//   useEffect(() => {
//     fetchPresentations();
//     fetchForms();
//   }, []);

//   const fetchPresentations = async () => {
//     try {
//       const response = await fetch(`http://localhost/MobApp/my-app/php_api/getPresentations.php`);
//       const data = await response.json();
//       setPresentations(data);
//     } catch (error) {
//       console.error(error);
//       Alert.alert('Error', 'Unable to fetch presentations.');
//     }
//   };

//   const fetchForms = async () => {
//     try {
//       const response = await fetch(`${API_BASE}/getFormsC.php`);
//       const data = await response.json();
//       setForms(data);
//     } catch (error) {
//       console.error(error);
//       Alert.alert('Error', 'Unable to fetch forms.');
//     }
//   };

//   const handlePublish = async (batch, event, action) => {
//     try {
//       const response = await fetch(`http://localhost/MobApp/my-app/php_api/publishPresentation.php`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ batch, event, action }),
//       });
//       const result = await response.json();
//       Alert.alert(result.message);
//       fetchPresentations();
//     } catch (error) {
//       console.error(error);
//       Alert.alert('Error', 'Unable to complete the action.');
//     }
//   };

//   const handleFormSave = async () => {
//     try {
//       const response = await fetch(`http://localhost/MobApp/my-app/php_api/saveForms.php`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ batch: selectedBatch, event: selectedEvent, form_id: selectedForm }),
//       });
//       const result = await response.json();
//       Alert.alert(result.message);
//       setModalVisible(false);
//       fetchPresentations();
//     } catch (error) {
//       console.error(error);
//       Alert.alert('Error', 'Unable to save form.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Presentations Management</Text>
//       </View>

//       {/* Table-like structure */}
//       <ScrollView>
//         <View style={styles.table}>
//           <View style={[styles.tableRow, styles.tableHeader]}>
//             <Text style={[styles.tableCell, styles.headerCell]}>Batch</Text>
//             <Text style={[styles.tableCell, styles.headerCell]}>Event</Text>
//             <Text style={[styles.tableCell, styles.headerCell]}>Form</Text>
//             <Text style={[styles.tableCell, styles.headerCell]}>Actions</Text>
//           </View>

//           <FlatList
//             data={presentations}
//             keyExtractor={(item) => `${item.batch}-${item.event}`}
//             ListEmptyComponent={<Text style={styles.emptyText}>No presentations available.</Text>}
//             renderItem={({ item }) => (
//               <View style={styles.tableRow}>
//                 <Text style={styles.tableCell}>{item.batch}</Text>
//                 <Text style={styles.tableCell}>{item.event}</Text>
//                 <TouchableOpacity
//                   style={styles.formButton}
//                   onPress={() => {
//                     setSelectedBatch(item.batch);
//                     setSelectedEvent(item.event);
//                     setModalVisible(true);
//                   }}
//                 >
//                   <Text>{item.form_title || 'Select Form'}</Text>
//                 </TouchableOpacity>
//                 <View style={styles.actionButtons}>
//                   <Button
//                     title="View"
//                     onPress={() => navigation.navigate('ViewRecords', { batch: item.batch, event: item.event })}
//                   />
//                   <Button
//                     title={item.send_to === 'all' ? 'Unpublish' : 'Publish'}
//                     color={item.send_to === 'all' ? 'gray' : 'orange'}
//                     onPress={() =>
//                       handlePublish(item.batch, item.event, item.send_to === 'all' ? 'unpublish' : 'publish')
//                     }
//                   />
//                 </View>
//               </View>
//             )}
//           />
//         </View>
//       </ScrollView>

//       {/* Modal for selecting a form */}
//       <Modal visible={modalVisible} transparent={true} animationType="slide">
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Select Form</Text>
//             <FlatList
//               data={forms}
//               keyExtractor={(item) => item.id.toString()}
//               renderItem={({ item }) => (
//                 <TouchableOpacity
//                   onPress={() => setSelectedForm(item.id)}
//                   style={[
//                     styles.formItem,
//                     selectedForm === item.id && styles.selectedFormItem,
//                   ]}
//                 >
//                   <Text>{item.title}</Text>
//                 </TouchableOpacity>
//               )}
//             />
//             <Button title="Save" onPress={handleFormSave} />
//             <Button title="Close" color="red" onPress={() => setModalVisible(false)} />
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#f0f0f0', padding: 10 },
//   header: { padding: 10, backgroundColor: '#6200ee', alignItems: 'center' },
//   headerText: { fontSize: 18, color: '#fff', fontWeight: 'bold' },
//   table: { marginTop: 20 },
//   tableRow: { flexDirection: 'row', paddingVertical: 10, borderBottomWidth: 1, borderColor: '#ccc' },
//   tableHeader: { backgroundColor: '#e0e0e0' },
//   tableCell: { flex: 1, textAlign: 'center', fontSize: 14, padding: 5 },
//   headerCell: { fontWeight: 'bold' },
//   formButton: { padding: 5, backgroundColor: '#e6f7ff', borderRadius: 5 },
//   actionButtons: { flexDirection: 'row', justifyContent: 'space-evenly', flex: 1 },
//   emptyText: { textAlign: 'center', marginVertical: 20, fontSize: 16 },
//   modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
//   modalContent: { width: '80%', padding: 20, backgroundColor: '#fff', borderRadius: 10 },
//   modalTitle: { fontSize: 18, marginBottom: 10, textAlign: 'center', fontWeight: 'bold' },
//   formItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' },
//   selectedFormItem: { backgroundColor: '#d4f1f9' },
// });

// export default ViewPresentations;

// new code
import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  Alert, 
  Modal, 
  TouchableOpacity, 
  Button, 
  ScrollView 
} from 'react-native';
// Import Sidebar
import Sidebar from '../Coordinator/Sidebar';

const ViewPresentations = ({ navigation }) => {
  const [presentations, setPresentations] = useState([]);
  const [forms, setForms] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [selectedForm, setSelectedForm] = useState('');

  const API_BASE = 'http://localhost/MobApp/my-app/php_api'; // Replace with your IP

  useEffect(() => {
    fetchPresentations();
    fetchForms();
  }, []);

  const fetchPresentations = async () => {
    try {
      const response = await fetch(`http://localhost/MobApp/my-app/php_api/getPresentations.php`);
      const data = await response.json();
      setPresentations(data);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Unable to fetch presentations.');
    }
  };

  const fetchForms = async () => {
    try {
      const response = await fetch(`http://localhost/MobApp/my-app/php_api/getFormsC.php`);
      const data = await response.json();
      setForms(data);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Unable to fetch forms.');
    }
  };

  const handlePublish = async (batch, event, action) => {
    try {
      const response = await fetch(`http://localhost/MobApp/my-app/php_api/publishPresentation.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ batch, event, action }),
      });
      const result = await response.json();
      Alert.alert(result.message);
      fetchPresentations();
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Unable to complete the action.');
    }
  };

  const handleFormSave = async () => {
    try {
      const response = await fetch(`http://localhost/MobApp/my-app/php_api/saveForms.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ batch: selectedBatch, event: selectedEvent, form_id: selectedForm }),
      });
      const result = await response.json();
      Alert.alert(result.message);
      setModalVisible(false);
      fetchPresentations();
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Unable to save form.');
    }
  };

  return (
    <View style={styles.container}>
    
 {/* Include Sidebar */}
 <Sidebar />
      {/* Header Section */}
    
        <Text style={styles.headerText}>Presentations</Text>
      

      {/* Buttons for Report and Assign Presentation */}
      <View style={styles.buttonRow}>
        <Button title="Report" onPress={() => alert('Report button clicked')} />
        <Button title="Schedule Presentation" onPress={() => navigation.navigate('SchedulePresentation')} />
      </View>

      {/* Table-like structure */}
      <ScrollView>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={[styles.tableCell, styles.headerCell]}>Schedule Events</Text>
            <Text style={[styles.tableCell, styles.headerCell]}>Details</Text>
            <Text style={[styles.tableCell, styles.headerCell]}>Form Selection</Text>
            <Text style={[styles.tableCell, styles.headerCell]}>Actions</Text>
          </View>

          <FlatList
            data={presentations}
            keyExtractor={(item) => `${item.batch}-${item.event}`}
            ListEmptyComponent={<Text style={styles.emptyText}>No presentations available.</Text>}
            renderItem={({ item }) => (
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>{item.batch} - {item.event}</Text>
                <Text style={styles.tableCell}>{item.details}</Text>
                <TouchableOpacity
                  style={styles.formButton}
                  onPress={() => {
                    setSelectedBatch(item.batch);
                    setSelectedEvent(item.event);
                    setModalVisible(true);
                  }}
                >
                  <Text>{item.form_title || 'Select Form'}</Text>
                </TouchableOpacity>
                <View style={styles.actionButtons}>
                  <Button
                    title="View"
                    onPress={() => navigation.navigate('ViewRecords', { batch: item.batch, event: item.event })}
                  />
                  <Button
                    title={item.send_to === 'all' ? 'Unpublish' : 'Publish'}
                    color={item.send_to === 'all' ? 'gray' : 'orange'}
                    onPress={() =>
                      handlePublish(item.batch, item.event, item.send_to === 'all' ? 'unpublish' : 'publish')
                    }
                  />
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>

      {/* Modal for selecting a form */}
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Form</Text>
            <FlatList
              data={forms}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => setSelectedForm(item.id)}
                  style={[
                    styles.formItem,
                    selectedForm === item.id && styles.selectedFormItem,
                  ]}
                >
                  <Text>{item.title}</Text>
                </TouchableOpacity>
              )}
            />
            <Button title="Save" onPress={handleFormSave} />
            <Button title="Close" color="red" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0', padding: 10 },
  header: { padding: 10, backgroundColor: '#6200ee', alignItems: 'center' },
  headerText: { fontSize: 40, color: 'navyblue', fontWeight: 'bold', textAlign: 'center', marginTop: 20 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, marginTop: 10 },
  table: { marginTop: 20 },
  tableRow: { flexDirection: 'row', paddingVertical: 10, borderBottomWidth: 1, borderColor: '#ccc' },
  tableHeader: { backgroundColor: '#e0e0e0' },
  tableCell: { flex: 1, textAlign: 'center', fontSize: 14, padding: 5 },
  headerCell: { fontWeight: 'bold' },
  formButton: { padding: 5, backgroundColor: '#e6f7ff', borderRadius: 5 },
  actionButtons: { flexDirection: 'row', justifyContent: 'space-evenly', flex: 1 },
  emptyText: { textAlign: 'center', marginVertical: 20, fontSize: 16 },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContent: { width: '80%', padding: 20, backgroundColor: '#fff', borderRadius: 10 },
  modalTitle: { fontSize: 18, marginBottom: 10, textAlign: 'center', fontWeight: 'bold' },
  formItem: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  selectedFormItem: { backgroundColor: '#d4f1f9' },
});

export default ViewPresentations;
