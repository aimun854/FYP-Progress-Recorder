// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, FlatList, TouchableOpacity, Alert, StyleSheet } from 'react-native';

// // Backend API URL
// const apiUrl = 'http://localhost/MobApp/my-app/php_api/createForm.php';

// const CreateFormScreen = () => {
//   const [title, setTitle] = useState('');
//   const [passingMarks, setPassingMarks] = useState('');
//   const [totalMarks, setTotalMarks] = useState('');
//   const [description, setDescription] = useState('');
//   const [maxMarks, setMaxMarks] = useState('');
//   const [formDetails, setFormDetails] = useState([]);
//   const [titleError, setTitleError] = useState('');

//   useEffect(() => {
//     // Fetch data or perform initial setup if needed
//   }, []);

//   const handleAddDetail = () => {
//     if (description && maxMarks) {
//       setFormDetails([...formDetails, { description, maxMarks }]);
//       setDescription('');
//       setMaxMarks('');
//     } else {
//       Alert.alert('Please provide both description and max marks.');
//     }
//   };

//   const handleDeleteDetail = (index) => {
//     const updatedDetails = formDetails.filter((_, i) => i !== index);
//     setFormDetails(updatedDetails);
//   };

//   const handleSaveForm = async () => {
//     // Validate total marks distribution
//     const totalDetailMarks = formDetails.reduce((sum, detail) => sum + parseInt(detail.maxMarks), 0);
//     if (totalMarks != totalDetailMarks) {
//       Alert.alert('The sum of max marks does not match the total marks. Please adjust.');
//       return;
//     }

//     // Send form data to the backend
//     try {
//       const response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ title, passingMarks, totalMarks, formDetails }),
//       });

//       const result = await response.json();

//       if (result.success) {
//         Alert.alert('Form saved successfully!');
//         // Navigate to forms list or reset state as needed
//       } else {
//         Alert.alert('Error saving form. Please try again.');
//       }
//     } catch (error) {
//       Alert.alert('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Create Customized Form</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Form Title"
//         value={title}
//         onChangeText={setTitle}
//       />
//       {titleError ? <Text style={styles.error}>{titleError}</Text> : null}

//       <View style={styles.row}>
//         <TextInput
//           style={styles.input}
//           placeholder="Passing Marks"
//           keyboardType="numeric"
//           value={passingMarks}
//           onChangeText={setPassingMarks}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Total Marks"
//           keyboardType="numeric"
//           value={totalMarks}
//           onChangeText={setTotalMarks}
//         />
//       </View>

//       <Text style={styles.formDetailsHeading}>Form Details</Text>
//       <FlatList
//         data={formDetails}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item, index }) => (
//           <View style={styles.row}>
//             <Text style={styles.detailText}>{item.description}</Text>
//             <Text style={styles.detailText}>{item.maxMarks}</Text>
//             <TouchableOpacity onPress={() => handleDeleteDetail(index)}>
//               <Text style={styles.deleteText}>Delete</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />

//       <View style={styles.row}>
//         <TextInput
//           style={styles.input}
//           placeholder="Description"
//           value={description}
//           onChangeText={setDescription}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Max Marks"
//           keyboardType="numeric"
//           value={maxMarks}
//           onChangeText={setMaxMarks}
//         />
//       </View>

//       <Button title="Add More Details" onPress={handleAddDetail} />

//       <Button title="Save Form" onPress={handleSaveForm} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//     flex: 1,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   error: {
//     color: 'red',
//     marginBottom: 10,
//   },
//   formDetailsHeading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginVertical: 15,
//   },
//   detailText: {
//     flex: 1,
//   },
//   deleteText: {
//     color: 'red',
//   },
// });

// export default CreateFormScreen;




// 
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, FlatList, TouchableOpacity, Alert, StyleSheet } from 'react-native';

// const CreateFormScreen = () => {
//   const [title, setTitle] = useState('');
//   const [passingMarks, setPassingMarks] = useState('');
//   const [totalMarks, setTotalMarks] = useState('');
//   const [formDetails, setFormDetails] = useState([{ description: '', maxMarks: '' }]);

//   const handleAddDetail = () => {
//     setFormDetails([...formDetails, { description: '', maxMarks: '' }]);
//   };

//   const handleRemoveDetail = (index) => {
//     const updatedDetails = formDetails.filter((_, i) => i !== index);
//     setFormDetails(updatedDetails);
//   };

//   const handleSaveForm = () => {
//     // Add validation if needed before sending data
//     Alert.alert('Form saved successfully!');
//     // Here, you can send the data to your backend if needed
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Create Customized Form</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Form Title"
//         value={title}
//         onChangeText={setTitle}
//       />
      
//       <View style={styles.row}>
//         <TextInput
//           style={styles.input}
//           placeholder="Passing Marks"
//           keyboardType="numeric"
//           value={passingMarks}
//           onChangeText={setPassingMarks}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Total Marks"
//           keyboardType="numeric"
//           value={totalMarks}
//           onChangeText={setTotalMarks}
//         />
//       </View>

//       <Text style={styles.formDetailsHeading}>Form Details</Text>
//       <FlatList
//         data={formDetails}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item, index }) => (
//           <View style={styles.row}>
//             <TextInput
//               style={styles.input}
//               placeholder="Description"
//               value={item.description}
//               onChangeText={(text) => {
//                 const updatedDetails = [...formDetails];
//                 updatedDetails[index].description = text;
//                 setFormDetails(updatedDetails);
//               }}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Max Marks"
//               keyboardType="numeric"
//               value={item.maxMarks}
//               onChangeText={(text) => {
//                 const updatedDetails = [...formDetails];
//                 updatedDetails[index].maxMarks = text;
//                 setFormDetails(updatedDetails);
//               }}
//             />
//             <TouchableOpacity onPress={() => handleRemoveDetail(index)}>
//               <Text style={styles.deleteText}>Delete</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />

//       <Button title="Add More Details" onPress={handleAddDetail} />

//       <View style={styles.formPreview}>
//         <Text style={styles.previewHeading}>Form Preview</Text>
//         <Text>Passing Marks: {passingMarks}</Text>
//         <Text>Total Marks: {totalMarks}</Text>

//         <FlatList
//           data={formDetails}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={({ item }) => (
//             <View style={styles.previewRow}>
//               <Text>{item.description}</Text>
//               <Text>{item.maxMarks}</Text>
//             </View>
//           )}
//         />
//       </View>

//       <View style={styles.buttonContainer}>
//         <Button title="Cancel" onPress={() => { /* Handle cancel */ }} />
//         <Button title="Save Form" onPress={handleSaveForm} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//     flex: 1,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 15,
//   },
//   formDetailsHeading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginVertical: 15,
//   },
//   deleteText: {
//     color: 'red',
//     alignSelf: 'center',
//     marginLeft: 10,
//   },
//   formPreview: {
//     marginTop: 20,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 5,
//   },
//   previewHeading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   previewRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginVertical: 5,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
// });

// export default CreateFormScreen;




// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, FlatList, TouchableOpacity, Alert, StyleSheet } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons'; // Make sure to install expo-vector-icons for icons

// const CreateFormScreen = () => {
//   const [title, setTitle] = useState('');
//   const [passingMarks, setPassingMarks] = useState('');
//   const [totalMarks, setTotalMarks] = useState('');
//   const [formDetails, setFormDetails] = useState([{ description: '', maxMarks: '' }]);

//   const handleAddDetail = () => {
//     setFormDetails([...formDetails, { description: '', maxMarks: '' }]);
//   };

//   const handleRemoveDetail = (index) => {
//     const updatedDetails = formDetails.filter((_, i) => i !== index);
//     setFormDetails(updatedDetails);
//   };

//   const handleSaveForm = () => {
//     // Add validation if needed before sending data
//     Alert.alert('Form saved successfully!');
//     // Here, you can send the data to your backend if needed
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Create Customized Form</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Form Title"
//         value={title}
//         onChangeText={setTitle}
//       />
      
//       <View style={styles.row}>
//         <TextInput
//           style={[styles.input, styles.flexibleInput]}
//           placeholder="Passing Marks"
//           keyboardType="numeric"
//           value={passingMarks}
//           onChangeText={setPassingMarks}
//         />
//         <TextInput
//           style={[styles.input, styles.flexibleInput]}
//           placeholder="Total Marks"
//           keyboardType="numeric"
//           value={totalMarks}
//           onChangeText={setTotalMarks}
//         />
//       </View>

//       <Text style={styles.formDetailsHeading}>Form Details</Text>
//       <FlatList
//         data={formDetails}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item, index }) => (
//           <View style={styles.row}>
//             <TextInput
//               style={[styles.input, styles.flexibleInput]}
//               placeholder="Description"
//               value={item.description}
//               onChangeText={(text) => {
//                 const updatedDetails = [...formDetails];
//                 updatedDetails[index].description = text;
//                 setFormDetails(updatedDetails);
//               }}
//             />
//             <TextInput
//               style={[styles.input, styles.maxMarksInput]}
//               placeholder="Max Marks"
//               keyboardType="numeric"
//               value={item.maxMarks}
//               onChangeText={(text) => {
//                 const updatedDetails = [...formDetails];
//                 updatedDetails[index].maxMarks = text;
//                 setFormDetails(updatedDetails);
//               }}
//             />
//             <TouchableOpacity onPress={() => handleRemoveDetail(index)} style={styles.deleteIcon}>
//               <MaterialIcons name="delete" size={24} color="red" />
//             </TouchableOpacity>
//           </View>
//         )}
//       />

//       <Button title="Add More Details" onPress={handleAddDetail} />

//       <View style={styles.formPreview}>
//         <Text style={styles.previewHeading}>Form Preview</Text>
//         <Text>Passing Marks: {passingMarks}</Text>
//         <Text>Total Marks: {totalMarks}</Text>

//         <FlatList
//           data={formDetails}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={({ item }) => (
//             <View style={styles.previewRow}>
//               <Text>{item.description}</Text>
//               <Text>{item.maxMarks}</Text>
//             </View>
//           )}
//         />
//       </View>

//       <View style={styles.buttonContainer}>
//         <Button title="Cancel" onPress={() => { /* Handle cancel */ }} />
//         <Button title="Save Form" onPress={handleSaveForm} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//     flex: 1,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20, // Increased gap between fields
//   },
//   formDetailsHeading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginVertical: 15,
//   },
//   flexibleInput: {
//     flex: 2, // Ensures more space for description and passing/total marks
//     marginRight: 10, // Adds gap between fields
//   },
//   maxMarksInput: {
//     flex: 0.8, // Reduced the width of the Max Marks input field further to fit the delete icon
//     marginLeft: 10,
//   },
//   deleteIcon: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingLeft: 5,
//   },
//   formPreview: {
//     marginTop: 20,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 5,
//   },
//   previewHeading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   previewRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginVertical: 5,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
// });

// export default CreateFormScreen;




// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, FlatList, TouchableOpacity, Alert, StyleSheet } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons'; // Ensure you have expo-vector-icons installed for icons



// const CreateFormScreen = () => {
//   const [title, setTitle] = useState('');
//   const [passingMarks, setPassingMarks] = useState('');
//   const [totalMarks, setTotalMarks] = useState('');
//   const [formDetails, setFormDetails] = useState([{ description: '', maxMarks: '' }]);

//   const handleAddDetail = () => {
//     setFormDetails([...formDetails, { description: '', maxMarks: '' }]);
//   };

//   const handleRemoveDetail = (index) => {
//     const updatedDetails = formDetails.filter((_, i) => i !== index);
//     setFormDetails(updatedDetails);
//   };

//   const handleSaveForm = () => {
//     // Add validation if needed before sending data
//     Alert.alert('Form saved successfully!');
//     // Here, you can send the data to your backend if needed
//   };

//   const handleNumberChange = (type, value, index) => {
//     const numericValue = value.replace(/\D/g, ''); // Remove non-numeric characters
//     if (type === 'passing') {
//       setPassingMarks(numericValue);
//     } else if (type === 'total') {
//       setTotalMarks(numericValue);
//     } else {
//       const updatedDetails = [...formDetails];
//       updatedDetails[index].maxMarks = numericValue;
//       setFormDetails(updatedDetails);
//     }
//   };

//   const incrementDecrementMarks = (type, action, index) => {
//     const updatedDetails = [...formDetails];
//     if (type === 'passing') {
//       let newValue = parseInt(passingMarks || 0);
//       if (action === 'increase') newValue++;
//       else if (action === 'decrease') newValue--;
//       setPassingMarks(newValue.toString());
//     } else if (type === 'total') {
//       let newValue = parseInt(totalMarks || 0);
//       if (action === 'increase') newValue++;
//       else if (action === 'decrease') newValue--;
//       setTotalMarks(newValue.toString());
//     } else {
//       let newValue = parseInt(updatedDetails[index].maxMarks || 0);
//       if (action === 'increase') newValue++;
//       else if (action === 'decrease') newValue--;
//       updatedDetails[index].maxMarks = newValue.toString();
//       setFormDetails(updatedDetails);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Create Customized Form</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Form Title"
//         value={title}
//         onChangeText={setTitle}
//       />

//       <View style={styles.row}>
//         <TextInput
//           style={[styles.input, styles.flexibleInput]}
//           placeholder="Passing Marks"
//           keyboardType="number-pad" // Use 'number-pad' for numeric input on mobile
//           value={passingMarks}
//           onChangeText={(value) => handleNumberChange('passing', value)}
//         />
//         <View style={styles.counterContainer}>
//           <TouchableOpacity onPress={() => incrementDecrementMarks('passing', 'decrease')}>
//             <MaterialIcons name="remove-circle" size={30} color="gray" />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => incrementDecrementMarks('passing', 'increase')}>
//             <MaterialIcons name="add-circle" size={30} color="gray" />
//           </TouchableOpacity>
//         </View>

//         <TextInput
//           style={[styles.input, styles.flexibleInput]}
//           placeholder="Total Marks"
//           keyboardType="number-pad" // Use 'number-pad' for numeric input on mobile
//           value={totalMarks}
//           onChangeText={(value) => handleNumberChange('total', value)}
//         />
//         <View style={styles.counterContainer}>
//           <TouchableOpacity onPress={() => incrementDecrementMarks('total', 'decrease')}>
//             <MaterialIcons name="remove-circle" size={30} color="gray" />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => incrementDecrementMarks('total', 'increase')}>
//             <MaterialIcons name="add-circle" size={30} color="gray" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       <Text style={styles.formDetailsHeading}>Form Details</Text>
//       <FlatList
//         data={formDetails}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item, index }) => (
//           <View style={styles.row}>
//             <TextInput
//               style={[styles.input, styles.flexibleInput]}
//               placeholder="Description"
//               value={item.description}
//               onChangeText={(text) => {
//                 const updatedDetails = [...formDetails];
//                 updatedDetails[index].description = text;
//                 setFormDetails(updatedDetails);
//               }}
//             />
//             <View style={styles.maxMarksRow}>
//               <TextInput
//                 style={[styles.input, styles.maxMarksInput]}
//                 placeholder="Max Marks"
//                 keyboardType="number-pad" // Use 'number-pad' for numeric input on mobile
//                 value={item.maxMarks}
//                 onChangeText={(value) => handleNumberChange('maxMarks', value, index)}
//               />
//               <TouchableOpacity onPress={() => handleRemoveDetail(index)} style={styles.deleteIcon}>
//                 <MaterialIcons name="delete" size={24} color="red" />
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//       />

//       <Button title="Add More Details" onPress={handleAddDetail} />

//       <View style={styles.formPreview}>
//         <Text style={styles.previewHeading}>Form Preview</Text>
//         <View style={styles.tableRow}>
//           <Text>Passing Marks:</Text>
//           <Text>{passingMarks}</Text>
//         </View>
//         <View style={styles.tableRow}>
//           <Text>Total Marks:</Text>
//           <Text>{totalMarks}</Text>
//         </View>

//         <FlatList
//           data={formDetails}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={({ item }) => (
//             <View style={styles.tableRow}>
//               <Text>{item.description}</Text>
//               <Text>{item.maxMarks}</Text>
//             </View>
//           )}
//         />
//       </View>

//       <View style={styles.buttonContainer}>
//         <Button title="Cancel" onPress={() => { /* Handle cancel */ }} />
//         <Button title="Save Form" onPress={handleSaveForm} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 10,
//     borderRadius: 5,
//     flex: 1,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20, // Increased gap between fields
//   },
//   counterContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   formDetailsHeading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginVertical: 15,
//   },
//   flexibleInput: {
//     flex: 2, // Ensures more space for description and passing/total marks
//     marginRight: 10, // Adds gap between fields
//   },
//   maxMarksRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   maxMarksInput: {
//     flex: 0.8, // Further reduced width for Max Marks input
//     marginLeft: 10,
//   },
//   deleteIcon: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingLeft: 5,
//   },
//   formPreview: {
//     marginTop: 20,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 5,
//   },
//   previewHeading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   tableRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginVertical: 5,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
// });

// export default CreateFormScreen;


// new
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Ensure you have expo-vector-icons installed for icons
// Import Sidebar
import Sidebar from '../Coordinator/Sidebar';

const CreateFormScreen = () => {
  const [title, setTitle] = useState('');
  const [passingMarks, setPassingMarks] = useState('');
  const [totalMarks, setTotalMarks] = useState('');
  const [formDetails, setFormDetails] = useState([{ description: '', maxMarks: '' }]);



  // Function to add more details to the form
  const handleAddDetail = () => {
    setFormDetails([...formDetails, { description: '', maxMarks: '' }]);
  };

  // Function to remove a detail from the form
  const handleRemoveDetail = (index) => {
    const updatedDetails = formDetails.filter((_, i) => i !== index);
    setFormDetails(updatedDetails);
  };

  // Function to handle the save form action
  const handleSaveForm = async () => {
    // Validate form data
    if (!title || !passingMarks || !totalMarks || formDetails.some(detail => !detail.description || !detail.maxMarks)) {
      Alert.alert('Please fill in all fields');
      return;
    }
  
    const formData = {
      title,
      passingMarks,
      totalMarks,
      formDetails
    };
  
    console.log('Form Data:', formData);  // Log the data to the console
  
    try {
      const response = await fetch('http://localhost/MobApp/my-app/php_api/save_form.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      console.log('Server Response:', result);  // Log the server response
  
      if (result.success) {
        Alert.alert(result.message);
      } else {
        Alert.alert(result.message);
      }
    } catch (error) {
      console.error('Error saving form:', error);
      Alert.alert('An error occurred while saving the form.');
    }
  };
  
  // Function to handle number inputs (passing marks, total marks, and max marks)
  const handleNumberChange = (type, value, index) => {
    const numericValue = value.replace(/\D/g, ''); // Remove non-numeric characters
    if (type === 'passing') {
      setPassingMarks(numericValue);
    } else if (type === 'total') {
      setTotalMarks(numericValue);
    } else {
      const updatedDetails = [...formDetails];
      updatedDetails[index].maxMarks = numericValue;
      setFormDetails(updatedDetails);
    }
  };

  // Increment or decrement the marks
  const incrementDecrementMarks = (type, action, index) => {
    const updatedDetails = [...formDetails];
    if (type === 'passing') {
      let newValue = parseInt(passingMarks || 0);
      if (action === 'increase') newValue++;
      else if (action === 'decrease') newValue--;
      setPassingMarks(newValue.toString());
    } else if (type === 'total') {
      let newValue = parseInt(totalMarks || 0);
      if (action === 'increase') newValue++;
      else if (action === 'decrease') newValue--;
      setTotalMarks(newValue.toString());
    } else {
      let newValue = parseInt(updatedDetails[index].maxMarks || 0);
      if (action === 'increase') newValue++;
      else if (action === 'decrease') newValue--;
      updatedDetails[index].maxMarks = newValue.toString();
      setFormDetails(updatedDetails);
    }
  };

  return (
    <View style={styles.container}>
    <Sidebar /> {/* Include Sidebar here for the navigation bar and sidebar */}
    <View style={styles.content}></View>
      <Text style={styles.heading}>Create Customized Form</Text>

      <TextInput
        style={styles.input}
        placeholder="Form Title"
        value={title}
        onChangeText={setTitle}
      />

      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.flexibleInput]}
          placeholder="Passing Marks"
          keyboardType="number-pad"
          value={passingMarks}
          onChangeText={(value) => handleNumberChange('passing', value)}
        />
        <View style={styles.counterContainer}>
          <TouchableOpacity onPress={() => incrementDecrementMarks('passing', 'decrease')}>
            <MaterialIcons name="remove-circle" size={30} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => incrementDecrementMarks('passing', 'increase')}>
            <MaterialIcons name="add-circle" size={30} color="gray" />
          </TouchableOpacity>
        </View>

        <TextInput
          style={[styles.input, styles.flexibleInput]}
          placeholder="Total Marks"
          keyboardType="number-pad"
          value={totalMarks}
          onChangeText={(value) => handleNumberChange('total', value)}
        />
        <View style={styles.counterContainer}>
          <TouchableOpacity onPress={() => incrementDecrementMarks('total', 'decrease')}>
            <MaterialIcons name="remove-circle" size={30} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => incrementDecrementMarks('total', 'increase')}>
            <MaterialIcons name="add-circle" size={30} color="gray" />
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.formDetailsHeading}>Form Details</Text>
      <FlatList
        data={formDetails}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.flexibleInput]}
              placeholder="Description"
              value={item.description}
              onChangeText={(text) => {
                const updatedDetails = [...formDetails];
                updatedDetails[index].description = text;
                setFormDetails(updatedDetails);
              }}
            />
            <View style={styles.maxMarksRow}>
              <TextInput
                style={[styles.input, styles.maxMarksInput]}
                placeholder="Max Marks"
                keyboardType="number-pad"
                value={item.maxMarks}
                onChangeText={(value) => handleNumberChange('maxMarks', value, index)}
              />
              <TouchableOpacity onPress={() => handleRemoveDetail(index)} style={styles.deleteIcon}>
                <MaterialIcons name="delete" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <Button title="Add More Details" onPress={handleAddDetail} />

      <View style={styles.formPreview}>
        <Text style={styles.previewHeading}>Form Preview</Text>
        <View style={styles.tableRow}>
          <Text>Passing Marks:</Text>
          <Text>{passingMarks}</Text>
        </View>
        <View style={styles.tableRow}>
          <Text>Total Marks:</Text>
          <Text>{totalMarks}</Text>
        </View>

        <FlatList
          data={formDetails}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.tableRow}>
              <Text>{item.description}</Text>
              <Text>{item.maxMarks}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Cancel" onPress={() => { /* Handle cancel */ }} />
        <Button title="Save Form" onPress={handleSaveForm} />
      </View>
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
    textAlign: 'center',
    marginLeft:15,
        marginRight:15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    flex: 1,
    marginLeft:15,
        marginRight:15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft:15,
        marginRight:15,
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft:15,
        marginRight:15,
  },
  formDetailsHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
    marginLeft:15,
        marginRight:15,
  },
  flexibleInput: {
    flex: 2,
    marginRight: 10,
    marginLeft:15,
        marginRight:15,
  },
  maxMarksRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:15,
        marginRight:15,
  },
  maxMarksInput: {
    flex: 0.8,
    marginLeft: 10,
    marginLeft:15,
        marginRight:15,
  },
  deleteIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
    marginLeft:15,
        marginRight:15,
  },
  formPreview: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginLeft:15,
        marginRight:15,
  },
  previewHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft:15,
        marginRight:15,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    marginLeft:15,
        marginRight:15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft:15,
        marginRight:15,
  },
});

export default CreateFormScreen;
