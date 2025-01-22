// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, Alert, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
// import axios from 'axios';
// // Import Sidebar
// import Sidebar from '../Coordinator/Sidebar';

// const EditForm = ({ route, navigation }) => {
//   const { formId } = route.params;

//   const [title, setTitle] = useState('');
//   const [passingMarks, setPassingMarks] = useState('');
//   const [totalMarks, setTotalMarks] = useState('');
//   const [formDetails, setFormDetails] = useState([]);
//   const [titleError, setTitleError] = useState('');

//   useEffect(() => {
//     // Fetch form data when the component is mounted
//     axios.get(`http://localhost/MobApp/my-app/php_api/edit_form.php`)
//       .then(response => {
//         const data = response.data;
//         setTitle(data.title);
//         setPassingMarks(data.passing_marks);
//         setTotalMarks(data.total_marks);
//         setFormDetails(data.details);
//       })
//       .catch(error => {
//         console.error(error);
//         Alert.alert('Error', 'Failed to load form data');
//       });
//   }, []);

//   const handleSubmit = () => {
//     if (!title) {
//       setTitleError('Form title is required');
//       return;
//     }

//     // Validate passing marks and total marks
//     if (parseInt(passingMarks) > parseInt(totalMarks)) {
//       Alert.alert('Error', 'Passing marks cannot be greater than total marks');
//       return;
//     }

//     // Prepare data for submission
//     const formData = {
//       title,
//       passing_marks: passingMarks,
//       total_marks: totalMarks,
//       details: formDetails
//     };

//     axios.post(`http:/localhost/MobApp/my-app/php_api/edit_form.php`)
//       .then(response => {
//         Alert.alert('Success', 'Form updated successfully');
//         navigation.goBack();
//       })
//       .catch(error => {
//         console.error(error);
//         Alert.alert('Error', 'Failed to update form');
//       });
//   };

//   const handleAddDetail = () => {
//     setFormDetails([...formDetails, { description: '', max_marks: '' }]);
//   };

//   const handleDetailChange = (index, field, value) => {
//     const updatedDetails = [...formDetails];
//     updatedDetails[index][field] = value;
//     setFormDetails(updatedDetails);
//   };

//   const handleRemoveDetail = index => {
//     const updatedDetails = formDetails.filter((_, i) => i !== index);
//     setFormDetails(updatedDetails);
//   };

//   return (
//     <ScrollView style={styles.container}>
//     {/* Include Sidebar */}
//     <Sidebar />
//       <Text style={styles.heading}>Edit Customized Form</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Form Title"
//         value={title}
//         onChangeText={setTitle}
//       />
//       {titleError && <Text style={styles.error}>{titleError}</Text>}

//       <View style={styles.row}>
//         <TextInput
//           style={styles.input}
//           placeholder="Passing Marks"
//           value={passingMarks}
//           keyboardType="numeric"
//           onChangeText={setPassingMarks}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Total Marks"
//           value={totalMarks}
//           keyboardType="numeric"
//           onChangeText={setTotalMarks}
//         />
//       </View>

//       <Text style={styles.subheading}>Form Details</Text>
//       {formDetails.map((detail, index) => (
//         <View key={index} style={styles.detailRow}>
//           <TextInput
//             style={styles.input}
//             placeholder="Description"
//             value={detail.description}
//             onChangeText={value => handleDetailChange(index, 'description', value)}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Max Marks"
//             value={detail.max_marks}
//             keyboardType="numeric"
//             onChangeText={value => handleDetailChange(index, 'max_marks', value)}
//           />
//           <TouchableOpacity onPress={() => handleRemoveDetail(index)}>
//             <Text style={styles.removeButton}>Remove</Text>
//           </TouchableOpacity>
//         </View>
//       ))}

//       <Button title="Add Detail" onPress={handleAddDetail} />

//       <View style={styles.buttons}>
//         <Button title="Cancel" onPress={() => navigation.goBack()} />
//         <Button title="Save Form" onPress={handleSubmit} />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#cbcbcb',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   subheading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 20,
//   },
//   detailRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   error: {
//     color: 'red',
//   },
//   removeButton: {
//     color: 'red',
//     alignSelf: 'center',
//     marginTop: 10,
//   },
//   buttons: {
//     marginTop: 20,
//   },
// });

// export default EditForm;



import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
// Import Sidebar
import Sidebar from '../Coordinator/Sidebar';

const EditForm = ({ route, navigation }) => {
  const { formId } = route.params;

  const [title, setTitle] = useState('');
  const [passingMarks, setPassingMarks] = useState('');
  const [totalMarks, setTotalMarks] = useState('');
  const [formDetails, setFormDetails] = useState([]);
  const [titleError, setTitleError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch form data when the component is mounted
    setIsLoading(true);
    axios
      .get(`http://localhost/MobApp/my-app/php_api/edit_form.php`, { params: { id: formId } })
      .then(response => {
        const data = response.data;
        setTitle(data.title || '');
        setPassingMarks(data.passing_marks || '');
        setTotalMarks(data.total_marks || '');
        setFormDetails(data.details || []);
      })
      .catch(error => {
        console.error(error);
        Alert.alert('Error', 'Failed to load form data');
      })
      .finally(() => setIsLoading(false));
  }, [formId]);

  const handleSubmit = () => {
    if (!title.trim()) {
      setTitleError('Form title is required');
      return;
    } else {
      setTitleError('');
    }

    if (parseInt(passingMarks) > parseInt(totalMarks)) {
      Alert.alert('Validation Error', 'Passing marks cannot be greater than total marks.');
      return;
    }

    setIsLoading(true);
    const formData = {
      id: formId,
      title,
      passing_marks: passingMarks,
      total_marks: totalMarks,
      details: formDetails,
    };

    axios
      .post(`http://localhost/MobApp/my-app/php_api/edit_form.php`, formData)
      .then(() => {
        Alert.alert('Success', 'Form updated successfully');
        navigation.goBack();
      })
      .catch(error => {
        console.error(error);
        Alert.alert('Error', 'Failed to update form');
      })
      .finally(() => setIsLoading(false));
  };

  const handleAddDetail = () => {
    setFormDetails([...formDetails, { description: '', max_marks: '' }]);
  };

  const handleDetailChange = (index, field, value) => {
    const updatedDetails = [...formDetails];
    updatedDetails[index][field] = value;
    setFormDetails(updatedDetails);
  };

  const handleRemoveDetail = index => {
    const updatedDetails = formDetails.filter((_, i) => i !== index);
    setFormDetails(updatedDetails);
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Sidebar />
      <Text style={styles.heading}>Edit Customized Form</Text>

      <TextInput
        style={styles.input}
        placeholder="Form Title"
        value={title}
        onChangeText={setTitle}
      />
      {titleError && <Text style={styles.error}>{titleError}</Text>}

      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="Passing Marks"
          value={passingMarks}
          keyboardType="numeric"
          onChangeText={setPassingMarks}
        />
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="Total Marks"
          value={totalMarks}
          keyboardType="numeric"
          onChangeText={setTotalMarks}
        />
      </View>

      <Text style={styles.subheading}>Form Details</Text>
      {formDetails.map((detail, index) => (
        <View key={index} style={styles.detailRow}>
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={detail.description}
            onChangeText={value => handleDetailChange(index, 'description', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Max Marks"
            value={detail.max_marks}
            keyboardType="numeric"
            onChangeText={value => handleDetailChange(index, 'max_marks', value)}
          />
          <TouchableOpacity onPress={() => handleRemoveDetail(index)}>
            <Text style={styles.removeButton}>Remove</Text>
          </TouchableOpacity>
        </View>
      ))}

      <TouchableOpacity onPress={handleAddDetail} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Detail</Text>
      </TouchableOpacity>

      <View style={styles.buttons}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button title="Save Form" onPress={handleSubmit} disabled={isLoading} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cbcbcb',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    flex: 0.48,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  removeButton: {
    color: 'red',
    marginLeft: 10,
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  buttons: {
    marginTop: 20,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EditForm;
