// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, Picker, StyleSheet, Alert, ScrollView } from 'react-native';
// import axios from 'axios';

// const ScheduleMeeting = ({ navigation }) => {
//   const [title, setTitle] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [project, setProject] = useState('');
//   const [description, setDescription] = useState('');
//   const [projects, setProjects] = useState([]);
//   const [titleError, setTitleError] = useState('');
//   const [dateError, setDateError] = useState('');
//   const [timeError, setTimeError] = useState('');
//   const [projectError, setProjectError] = useState('');
//   const [descriptionError, setDescriptionError] = useState('');

//   // Fetch projects from API (simulated by static data for now)
//   useEffect(() => {
//     // Example: Fetch projects assigned to supervisor (using supervisor_id)
//     axios.get('http://localhost/MobApp/my-app/php_api/getProjectsForSupervisor.php')
//       .then(response => {
//         setProjects(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//         Alert.alert('Error', 'Unable to fetch projects.');
//       });
//   }, []);

//   const handleSubmit = () => {
//     // Validate form inputs
//     let valid = true;

//     if (!title) {
//       setTitleError('Title is required');
//       valid = false;
//     }
//     if (!date) {
//       setDateError('Date is required');
//       valid = false;
//     } else if (new Date(date) < new Date()) {
//       setDateError('The meeting date cannot be in the past.');
//       valid = false;
//     }
//     if (!time) {
//       setTimeError('Time is required');
//       valid = false;
//     }
//     if (!project) {
//       setProjectError('Project is required');
//       valid = false;
//     }
//     if (!description) {
//       setDescriptionError('Description is required');
//       valid = false;
//     }

//     if (!valid) return;

//     // If form is valid, send the data to the server
//     const meetingData = {
//       title,
//       date,
//       time,
//       project,
//       description,
//     };

//     axios.post('http://localhost/MobApp/my-app/php_api/scheduleMeeting.php', meetingData)
//       .then(response => {
//         Alert.alert('Success', 'Meeting scheduled successfully');
//         navigation.goBack();
//       })
//       .catch(error => {
//         console.error(error);
//         Alert.alert('Error', 'Error scheduling meeting');
//       });
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Schedule Meeting</Text>

//       {/* Title Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Meeting Title"
//         value={title}
//         onChangeText={setTitle}
//       />
//       {titleError ? <Text style={styles.error}>{titleError}</Text> : null}

//       {/* Description Input */}
//       <TextInput
//         style={styles.textarea}
//         placeholder="Enter Meeting Description"
//         value={description}
//         onChangeText={setDescription}
//         multiline
//       />
//       {descriptionError ? <Text style={styles.error}>{descriptionError}</Text> : null}

//       {/* Project Picker */}
//       <Picker
//         selectedValue={project}
//         onValueChange={setProject}
//         style={styles.picker}
//       >
//         <Picker.Item label="Select Project" value="" />
//         {projects.map(proj => (
//           <Picker.Item key={proj.id} label={proj.title} value={proj.id} />
//         ))}
//       </Picker>
//       {projectError ? <Text style={styles.error}>{projectError}</Text> : null}

//       {/* Date Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Select Meeting Date"
//         value={date}
//         onFocus={() => {
//           // Trigger date picker
//           const currentDate = new Date();
//           const formattedDate = currentDate.toISOString().split('T')[0];
//           setDate(formattedDate);
//         }}
//       />
//       {dateError ? <Text style={styles.error}>{dateError}</Text> : null}

//       {/* Time Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Select Meeting Time"
//         value={time}
//         onFocus={() => {
//           // Trigger time picker
//           const currentTime = new Date();
//           const formattedTime = currentTime.toISOString().split('T')[1].substring(0, 5);
//           setTime(formattedTime);
//         }}
//       />
//       {timeError ? <Text style={styles.error}>{timeError}</Text> : null}

//       {/* Submit Button */}
//       <Button title="Submit" onPress={handleSubmit} />

//       {/* Cancel Button */}
//       <Button title="Cancel" onPress={() => navigation.goBack()} />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#0a4a91',
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingLeft: 10,
//   },
//   textarea: {
//     height: 100,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingLeft: 10,
//     textAlignVertical: 'top',
//   },
//   picker: {
//     height: 50,
//     marginBottom: 10,
//   },
//   error: {
//     color: 'red',
//     marginBottom: 10,
//   },
// });

// export default ScheduleMeeting;


// new
// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, Picker, StyleSheet, Alert, TouchableOpacity } from 'react-native';
// import axios from 'axios';

// const ScheduleMeeting = ({ navigation }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [project, setProject] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
  
//   const [projects, setProjects] = useState([]);  // Make sure this is initialized as an empty array
//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     // Fetch projects for the supervisor
//     axios.get('http://localhost/MobApp/my-app/php_api/get_projects.php?faculty_id= 27')
//   .then(response => {
//     console.log('Projects Data:', response.data);
//     setProjects(response.data.projects || []); // Adjust according to response structure
//   })
//   .catch(error => {
//     console.error('API Error:', error);
//   });
// },[])

//   const validateForm = () => {
//     const errors = {};
//     if (!title) errors.title = 'Title is required';
//     if (!date) errors.date = 'Date is required';
//     if (!time) errors.time = 'Time is required';
//     if (!project) errors.project = 'Project is required';
//     if (!description) errors.description = 'Description is required';

//     // Check if the selected date is in the past
//     if (date && new Date(date) < new Date()) {
//       errors.date = 'The meeting date cannot be in the past.';
//     }

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = () => {
//     if (!validateForm()) return;

//     // Prepare data to be sent to the backend
//     const meetingData = {
//       title,
//       description,
//       date,
//       time,
//       project_id: project,
//     };

//     axios.post('http://localhost/MobApp/my-app/php_api/scheduleMeeting.php', meetingData)
//       .then(response => {
//         if (response.data.success) {
//           Alert.alert('Success', 'Meeting scheduled successfully');
//           navigation.goBack();
//         } else {
//           Alert.alert('Error', response.data.error || 'Error scheduling meeting');
//         }
//       })
//       .catch(error => {
//         console.error('API Error:', error);
//         Alert.alert('Error', 'An error occurred while scheduling the meeting');
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Schedule Meeting</Text>

//       <View style={styles.formGroup}>
//         <Text>Meeting Title:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Meeting Title"
//           value={title}
//           onChangeText={setTitle}
//         />
//         {errors.title && <Text style={styles.error}>{errors.title}</Text>}
//       </View>

//       <View style={styles.formGroup}>
//         <Text>Meeting Description:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Description"
//           value={description}
//           onChangeText={setDescription}
//           multiline
//         />
//         {errors.description && <Text style={styles.error}>{errors.description}</Text>}
//       </View>

//       <View style={styles.formGroup}>
//         <Text>Project Name:</Text>
//         <Picker
//           selectedValue={project}
//           onValueChange={setProject}
//           style={styles.picker}
//         >
//           <Picker.Item label="Select project" value="" />
//           {projects.length > 0 ? (
//             projects.map((project) => (
//               <Picker.Item key={project.id} label={title} value={project.id} />
//             ))
//           ) : (
//             <Picker.Item label="No projects available" value="" />
//           )}
//         </Picker>
//         {errors.project && <Text style={styles.error}>{errors.project}</Text>}
//       </View>

//       <View style={styles.formGroup}>
//         <Text>Meeting Date:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Select Date"
//           value={date}
//           onFocus={() => setDate(new Date().toISOString().split('T')[0])}
//           onChangeText={setDate}
//           keyboardType="default"
//         />
//         {errors.date && <Text style={styles.error}>{errors.date}</Text>}
//       </View>

//       <View style={styles.formGroup}>
//         <Text>Meeting Time:</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Select Time"
//           value={time}
//           onChangeText={setTime}
//           keyboardType="default"
//         />
//         {errors.time && <Text style={styles.error}>{errors.time}</Text>}
//       </View>

//       <View style={styles.buttons}>
//         <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
//           <Text style={styles.cancelButtonText}>Cancel</Text>
//         </TouchableOpacity>

//         <Button title="Submit" onPress={handleSubmit} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: 'white',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#0a4a91',
//     marginBottom: 20,
//   },
//   formGroup: {
//     marginBottom: 15,
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingLeft: 10,
//   },
//   picker: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//   },
//   error: {
//     color: 'red',
//     fontSize: 12,
//   },
//   buttons: {
//     marginTop: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   cancelButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     backgroundColor: '#ddd',
//     borderRadius: 5,
//   },
//   cancelButtonText: {
//     color: '#333',
//     fontSize: 16,
//   },
// });

// export default ScheduleMeeting;






// 
// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, Alert, StyleSheet, Picker, ScrollView } from 'react-native';
// import axios from 'axios';

// const ScheduleMeeting = ({ navigation }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [project, setProject] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [projects, setProjects] = useState([]);
//   const [errorMessages, setErrorMessages] = useState({});

//   useEffect(() => {
//     axios
//       .get('http://localhost/MobApp/my-app/php_api/getProjectsS.php?faculty_id=27')
//       .then((response) => {
//         console.log('API Response:', response.data); // Log the response for debugging
//         if (response.data.success) {
//           setProjects(response.data.data || []); // Update to match the correct data key
//         } else {
//           Alert.alert('Error', response.data.message || 'Failed to fetch projects');
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching projects:', error); // Log the error for debugging
//         Alert.alert('Error', 'Failed to fetch projects');
//       });
//   }, []);
  
//   const validateForm = () => {
//     const errors = {};
//     if (!title) errors.title = 'Title is required';
//     if (!description) errors.description = 'Description is required';
//     if (!project) errors.project = 'Project selection is required';
//     if (!date) errors.date = 'Date is required';
//     if (!time) errors.time = 'Time is required';
//     else if (new Date(date) < new Date()) errors.date = 'Date cannot be in the past';
//     setErrorMessages(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleSubmit = () => {
//     if (!validateForm()) return;

//     axios
//       .post('http://localhost/MobApp/my-app/php_api/schedule_meeting.php', {
//         title,
//         description,
//         project_id: project,
//         date,
//         time,
//         supervisor_id: 27, // Replace with session-based supervisor ID
//       })
//       .then((response) => {
//         Alert.alert('Success', 'Meeting scheduled successfully', [
//           { text: 'OK', onPress: () => navigation.goBack() },
//         ]);
//       })
//       .catch((error) => {
//         Alert.alert('Error', 'Failed to schedule meeting');
//       });
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.heading}>Schedule Meeting</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Meeting Title"
//         value={title}
//         onChangeText={setTitle}
//       />
//       {errorMessages.title && <Text style={styles.error}>{errorMessages.title}</Text>}

//       <TextInput
//         style={styles.textarea}
//         placeholder="Meeting Description"
//         value={description}
//         onChangeText={setDescription}
//         multiline
//       />
//       {errorMessages.description && <Text style={styles.error}>{errorMessages.description}</Text>}

//       <Picker
//         selectedValue={project}
//         style={styles.picker}
//         onValueChange={(itemValue) => setProject(itemValue)}
//       >
//         <Picker.Item label="Select Project" value="" />
//         {projects.map((project) => (
//           <Picker.Item key={project.id} label={project.title} value={project.id} />
//         ))}
//       </Picker>
//       {errorMessages.project && <Text style={styles.error}>{errorMessages.project}</Text>}

//       <TextInput
//         style={styles.input}
//         placeholder="Meeting Date"
//         value={date}
//         onChangeText={setDate}
//         onFocus={(e) => (e.target.type = 'date')} // Date picker for mobile
//       />
//       {errorMessages.date && <Text style={styles.error}>{errorMessages.date}</Text>}

//       <TextInput
//         style={styles.input}
//         placeholder="Meeting Time"
//         value={time}
//         onChangeText={setTime}
//         onFocus={(e) => (e.target.type = 'time')} // Time picker for mobile
//       />
//       {errorMessages.time && <Text style={styles.error}>{errorMessages.time}</Text>}

//       <View style={styles.buttonContainer}>
//         <Button title="Cancel" onPress={() => navigation.goBack()} />
//         <Button title="Submit" onPress={handleSubmit} />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#fff',
//     flexGrow: 1,
//   },
//   heading: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//   },
//   textarea: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     height: 100,
//     marginBottom: 10,
//   },
//   picker: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   error: {
//     color: 'red',
//     marginBottom: 10,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
// });

// export default ScheduleMeeting;




import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Picker, ScrollView } from 'react-native';
import axios from 'axios';
import SupNav from '../Supervisor/SupNav.jsx';

const ScheduleMeeting = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [project, setProject] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [projects, setProjects] = useState([]);
  const [errorMessages, setErrorMessages] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost/MobApp/my-app/php_api/getProjectsS.php?faculty_id=27')
      .then((response) => {
        console.log('API Response:', response.data); 
        if (response.data.success) {
          setProjects(response.data.data || []); 
        } else {
          Alert.alert('Error', response.data.message || 'Failed to fetch projects');
        }
      })
      .catch((error) => {
        console.error('Error fetching projects:', error); 
        Alert.alert('Error', 'Failed to fetch projects');
      });
  }, []);
  
  const validateForm = () => {
    const errors = {};
    if (!title) errors.title = 'Title is required';
    if (!description) errors.description = 'Description is required';
    if (!project) errors.project = 'Project selection is required';
    if (!date) errors.date = 'Date is required';
    if (!time) errors.time = 'Time is required';
    else if (new Date(date) < new Date()) errors.date = 'Date cannot be in the past';
    setErrorMessages(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    axios
      .post('http://localhost/MobApp/my-app/php_api/schedule_meeting.php', {
        title,
        description,
        project_id: project,
        date,
        time,
        supervisor_id: 27, // Replace with session-based supervisor ID
      })
      .then((response) => {
        if (response.data.success) {
          Alert.alert(
            'Success',
            'Meeting scheduled successfully',
            [
              { text: 'OK', onPress: () => navigation.goBack() }, // Close the modal on "OK"
            ],
            { cancelable: false } // Prevent closing the alert by tapping outside
          );
        } else {
          Alert.alert('Error', response.data.message || 'Failed to schedule meeting');
        }
      })
      .catch((error) => {
        Alert.alert('Error', 'Failed to schedule meeting');
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
<SupNav /> {/* Include SupNav here for the navigation bar and sidebar */}
<View style={styles.content}></View>
      <Text style={styles.heading}>Schedule Meeting</Text>

      <TextInput
        style={styles.input}
        placeholder="Meeting Title"
        value={title}
        onChangeText={setTitle}
      />
      {errorMessages.title && <Text style={styles.error}>{errorMessages.title}</Text>}

      <TextInput
        style={styles.textarea}
        placeholder="Meeting Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      {errorMessages.description && <Text style={styles.error}>{errorMessages.description}</Text>}

      <Picker
        selectedValue={project}
        style={styles.picker}
        onValueChange={(itemValue) => setProject(itemValue)}
      >
        <Picker.Item label="Select Project" value="" />
        {projects.map((project) => (
          <Picker.Item key={project.id} label={project.title} value={project.id} />
        ))}
      </Picker>
      {errorMessages.project && <Text style={styles.error}>{errorMessages.project}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Meeting Date"
        value={date}
        onChangeText={setDate}
        onFocus={(e) => (e.target.type = 'date')} // Date picker for mobile
      />
      {errorMessages.date && <Text style={styles.error}>{errorMessages.date}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Meeting Time"
        value={time}
        onChangeText={setTime}
        onFocus={(e) => (e.target.type = 'time')} // Time picker for mobile
      />
      {errorMessages.time && <Text style={styles.error}>{errorMessages.time}</Text>}

      <View style={styles.buttonContainer}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
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
    marginBottom: 20,
    marginLeft:20,
    marginRight:20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    marginLeft:20,
    marginRight:20,
  },
  textarea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    height: 100,
    marginBottom: 10,
    marginLeft:20,
    marginRight:20,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    marginLeft:20,
    marginRight:20,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    marginLeft:20,
    marginRight:20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft:20,
    marginRight:20,
  },
});

export default ScheduleMeeting;
