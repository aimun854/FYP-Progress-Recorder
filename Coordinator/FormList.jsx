// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal } from 'react-native';
// import axios from 'axios';

// const FormsList = ({ navigation }) => {
//   const [forms, setForms] = useState([]);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [modalMessage, setModalMessage] = useState('');

//   // Fetch forms from the server
//   useEffect(() => {
//     const fetchForms = async () => {
//       try {
//         const response = await axios.get('http://localhost/MobApp/my-app/php_api/getForms.php');
//         setForms(response.data);
//       } catch (error) {
//         console.error('Error fetching forms:', error);
//       }
//     };

//     fetchForms();
//   }, []);

//   // Show Modal with message
//   const showModal = (message) => {
//     setModalMessage(message);
//     setModalVisible(true);
//   };

//   // Handle delete action
//   const deleteForm = (id) => {
//     axios
//       .post('http://localhost/MobApp/my-app/php_api/deleteForm.php', { id })
//       .then((response) => {
//         showModal('Form deleted successfully.');
//         setForms((prevForms) => prevForms.filter((form) => form.id !== id));
//       })
//       .catch((error) => {
//         showModal('Error: Could not delete form.');
//         console.error('Error deleting form:', error);
//       });
//   };

//   // Render each form row
//   const renderFormRow = ({ item, index }) => (
//     <View style={styles.row}>
//       <Text style={styles.column}>{index + 1}</Text>
//       <Text style={styles.column}>{item.title}</Text>
//       <TouchableOpacity
//         style={[styles.button, styles.previewButton]}
//         onPress={() => navigation.navigate('FormPreview', { formId: item.id })}
//       >
//         <Text style={styles.buttonText}>Preview</Text>
//       </TouchableOpacity>
//       <View style={styles.actions}>
//         <TouchableOpacity
//           style={[styles.button, styles.editButton]}
//           onPress={() => navigation.navigate('EditForm', { id: item.id })}
//         >
//           <Text style={styles.buttonText}>Edit</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.button, styles.deleteButton]}
//           onPress={() => deleteForm(item.id)}
//         >
//           <Text style={styles.buttonText}>Delete</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Forms</Text>
//       <TouchableOpacity
//         style={[styles.button, styles.createButton]}
//         onPress={() => navigation.navigate('CreateForm')}
//       >
//         <Text style={styles.buttonText}>Create Form</Text>
//       </TouchableOpacity>
//       <FlatList
//         data={forms}
//         renderItem={renderFormRow}
//         keyExtractor={(item) => item.id.toString()}
//         ListEmptyComponent={
//           <Text style={styles.emptyText}>No forms found. Please create one.</Text>
//         }
//       />
//       <Modal
//         visible={modalVisible}
//         transparent={true}
//         animationType="fade"
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContainer}>
//             <Text style={styles.modalText}>{modalMessage}</Text>
//             <TouchableOpacity
//               style={styles.button}
//               onPress={() => setModalVisible(false)}
//             >
//               <Text style={styles.buttonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f7f7f7',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#0a4a91',
//   },
//   button: {
//     borderRadius: 8,
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   createButton: {
//     backgroundColor: '#007bff',
//     marginBottom: 20,
//   },
//   previewButton: {
//     backgroundColor: '#28a745',
//   },
//   editButton: {
//     backgroundColor: '#ffc107',
//     marginRight: 10,
//   },
//   deleteButton: {
//     backgroundColor: '#dc3545',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//     padding: 10,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   column: {
//     flex: 1,
//     fontSize: 14,
//     fontWeight: '500',
//   },
//   actions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   emptyText: {
//     textAlign: 'center',
//     color: '#6c757d',
//     marginTop: 20,
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContainer: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   modalText: {
//     fontSize: 16,
//     marginBottom: 20,
//     color: '#333',
//   },
// });

// export default FormsList;



import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';  // Importing FontAwesome icons
// Import Sidebar
import Sidebar from '../Coordinator/Sidebar';

const FormsList = ({ navigation }) => {
  const [forms, setForms] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // Fetch forms from the server
  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await axios.get('http://localhost/MobApp/my-app/php_api/getForms.php');
        setForms(response.data);
      } catch (error) {
        console.error('Error fetching forms:', error);
      }
    };

    fetchForms();
  }, []);

  // Show Modal with message
  const showModal = (message) => {
    setModalMessage(message);
    setModalVisible(true);
  };

  // Handle delete action
  const deleteForm = (id) => {
    axios
      .post('http://localhost/MobApp/my-app/php_api/deleteForm.php', { id })
      .then((response) => {
        showModal('Form deleted successfully.');
        setForms((prevForms) => prevForms.filter((form) => form.id !== id));
      })
      .catch((error) => {
        showModal('Error: Could not delete form.');
        console.error('Error deleting form:', error);
      });
  };

  // Render each form row
  const renderFormRow = ({ item, index }) => (
    <View style={styles.row}>
      <Text style={styles.column}>{index + 1}</Text>
      <Text style={styles.column}>{item.title}</Text>

      {/* Preview Button */}
      <TouchableOpacity
        style={[styles.button, styles.previewButton]}
        onPress={() => navigation.navigate('FormPreview', { formId: item.id })}
      >
        <Text style={styles.buttonText}>Preview</Text>
      </TouchableOpacity>

      {/* Actions column: Edit and Delete */}
      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.button, styles.editButton]}
          onPress={() => navigation.navigate('EditForm', { id: item.id })}
        >
          <Icon name="edit" size={20} color="#fff" /> {/* Edit Icon */}
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={() => deleteForm(item.id)}
        >
          <Icon name="trash" size={20} color="#fff" /> {/* Trash Icon */}
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
    <Sidebar /> {/* Include Sidebar here for the navigation bar and sidebar */}
    <View style={styles.content}></View>
      <Text style={styles.heading}>Forms</Text>
      <TouchableOpacity
        style={[styles.button, styles.createButton]}
        onPress={() => navigation.navigate('CreateFormScreen')}
      >
        <Text style={styles.buttonText}>Create Form</Text>
      </TouchableOpacity>

      {/* Column Headings */}
      <View style={styles.row}>
        <Text style={[styles.column, styles.headingText]}>S.No</Text>
        <Text style={[styles.column, styles.headingText]}>Title</Text>
        <Text style={[styles.column, styles.headingText]}>Preview</Text>
        <Text style={[styles.column, styles.headingText]}>Actions</Text>
      </View>

      <FlatList
        data={forms}
        renderItem={renderFormRow}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No forms found. Please create one.</Text>
        }
      />

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0a4a91',
    marginLeft:15,
    marginRight:15,
  },
  button: {
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:15,
    marginRight:15,
  },
  createButton: {
    backgroundColor: '#007bff',
    marginBottom: 20,
    marginLeft:15,
    marginRight:15,
  },
  previewButton: {
    backgroundColor: '#28a745',
    marginLeft:15,
    marginRight:15, // Adding space between "Preview" and "Edit"
  },
  editButton: {
    backgroundColor: '#ffc107',
    marginLeft:15,
    marginRight:15,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 8,
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 8,
    marginLeft:15,
    marginRight:15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft:15,
    marginRight:15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    marginLeft:15,
    marginRight:15,
  },
  column: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    marginLeft:15,
    marginRight:15,
  },
  headingText: {
    fontWeight: 'bold',
    color: '#0a4a91',
    marginLeft:15,
    marginRight:15,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // Align actions together horizontally
    width: '30%', // Control the width of the actions column
    justifyContent: 'space-between', // Space between buttons
    marginLeft:15,
    marginRight:15,
  },
  emptyText: {
    textAlign: 'center',
    color: '#6c757d',
    marginTop: 20,
    marginLeft:15,
    marginRight:15,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginLeft:15,
    marginRight:15,
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:15,
    marginRight:15,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
    marginLeft:15,
    marginRight:15,
  },
});

export default FormsList;
