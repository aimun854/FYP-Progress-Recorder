// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Picker, ScrollView, Alert, StyleSheet } from 'react-native';
// import axios from 'axios';

// const SchedulePresentation = () => {
//   const [types, setTypes] = useState([]);
//   const [batches, setBatches] = useState([]);
//   const [projects, setProjects] = useState([]);
//   const [rooms, setRooms] = useState([]);
//   const [internalEvaluators, setInternalEvaluators] = useState([]);
//   const [externalEvaluators, setExternalEvaluators] = useState([]);

//   const [type, setType] = useState('');
//   const [batch, setBatch] = useState('');
//   const [project, setProject] = useState('');
//   const [room, setRoom] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [selectedInternalEvaluators, setSelectedInternalEvaluators] = useState([]);
//   const [selectedExternalEvaluators, setSelectedExternalEvaluators] = useState([]);

//   // Fetch data
//   useEffect(() => {
//     // Fetch event types
//     axios.get('http://localhost/MobApp/my-app/php_api/events.php')
//       .then(response => {
//         console.log('Event Types:', response.data); // Log response to verify structure
//         setTypes(response.data);
//       });

//     // Fetch batches
//     axios.get(`http://localhost/MobApp/my-app/php_api/getBatches.php`)
//   .then(response => {
//     if (Array.isArray(response.data)) {
//       setBatches(response.data);
//     } else {
//       console.error('Unexpected response data:', response.data);
//       setBatches([]);  // Handle empty or invalid data
//     }
//   })
//   .catch(error => {
//     console.error('Error fetching batches:', error);
//   });


//     // Fetch internal evaluators
//     axios.get('http://localhost/MobApp/my-app/php_api/GetInternalEvaluator.php')
//       .then(response => {
//         console.log('Internal Evaluators:', response.data); // Log response to verify structure
//         setInternalEvaluators(response.data);
//       });

//     // Fetch external evaluators
//     axios.get('http://localhost/MobApp/my-app/php_api/GetExternalEvaluator.php')
//       .then(response => {
//         console.log('External Evaluators:', response.data); // Log response to verify structure
//         setExternalEvaluators(response.data);
//       });
//   }, []);

//   const handleUpdateProjects = () => {
//     if (batch && type) {
//       axios.get('http://localhost/MobApp/my-app/php_api/project.php')
//         .then(response => {
//           console.log('Projects:', response.data); // Log response to verify structure
//           if (Array.isArray(response.data)) {
//             setProjects(response.data);  // Set valid projects data
//           } else {
//             console.error("Projects data is not an array", response.data);
//             setProjects([]);  // Default to empty array if data is invalid
//           }
//         });
//     }
//   };

//   const handleUpdateRooms = () => {
//     if (date && time) {
//       axios.get('http://localhost/MobApp/my-app/php_api/getRoom.php')
//         .then(response => {
//           console.log('Rooms:', response.data); // Log response to verify structure
//           if (Array.isArray(response.data)) {
//             setRooms(response.data);  // Set valid rooms data
//           } else {
//             console.error("Rooms data is not an array", response.data);
//             setRooms([]);  // Default to empty array if data is invalid
//           }
//         });
//     }
//   };

//   const handleSubmit = () => {
//     const currentDate = new Date().toISOString().split('T')[0];
//     if (date < currentDate) {
//       Alert.alert('Error', 'You cannot assign a presentation to a past date!');
//       return;
//     }

//     // Check if room is already reserved (based on date and time)
//     axios.post('http://localhost/MobApp/my-app/php_api/getRoom.php', { room, date, time })
//       .then(response => {
//         if (response.data.isAvailable) {
//           // Proceed with the scheduling
//           axios.post('http://localhost/MobApp/my-app/php_api/schedulePresentation.php', {
//             type,
//             batch,
//             room,
//             date,
//             time,
//             project,
//             internalEvaluators: selectedInternalEvaluators,
//             externalEvaluators: selectedExternalEvaluators
//           })
//             .then(response => {
//               if (response.data.success) {
//                 Alert.alert('Success', 'Presentation successfully scheduled!');
//               } else {
//                 Alert.alert('Error', response.data.error);
//               }
//             });
//         } else {
//           Alert.alert('Error', 'The selected room is already reserved at this time.');
//         }
//       });
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Schedule Presentation</Text>

//       {/* Event Type Picker */}
//       <Picker
//         selectedValue={type}
//         onValueChange={(itemValue) => {
//           setType(itemValue);
//           handleUpdateProjects();  // Update projects when event type changes
//         }}
//       >
//         <Picker.Item label="Select Event Type" value="" />
//         {types && types.length > 0 ? (
//           types.map((item) => (
//             <Picker.Item key={item.eventID} label={item.EventName} value={item.eventID} />
//           ))
//         ) : (
//           <Picker.Item label="No event types available" value="" />
//         )}
//       </Picker>

//       {/* Batch Picker */}
//       <Picker
//         selectedValue={batch}
//         onValueChange={(itemValue) => {
//           setBatch(itemValue);
//           handleUpdateProjects();  // Update projects when batch changes
//         }}
//       >
//         <Picker.Item label="Select Batch" value="" />
//         {batches && batches.length > 0 ? (
//           batches.map((item) => (
//             <Picker.Item key={item.batchID} label={item.batchName} value={item.batchID} />
//           ))
//         ) : (
//           <Picker.Item label="No batches available" value="" />
//         )}
//       </Picker>

//       {/* Project Picker */}
//       <Picker
//         selectedValue={project}
//         onValueChange={(itemValue) => setProject(itemValue)}
//       >
//         <Picker.Item label="Select Project" value="" />
//         {projects && projects.length > 0 ? (
//           projects.map((item) => (
//             <Picker.Item key={item.id} label={item.title} value={item.id} />
//           ))
//         ) : (
//           <Picker.Item label="No projects available" value="" />
//         )}
//       </Picker>

//       {/* Date Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Select Date"
//         value={date}
//         onChangeText={setDate}
//         onBlur={handleUpdateRooms}  // Update rooms when date is selected
//       />

//       {/* Time Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Select Time"
//         value={time}
//         onChangeText={setTime}
//         onBlur={handleUpdateRooms}  // Update rooms when time is selected
//       />

//       {/* Room Picker */}
//       <Picker
//         selectedValue={room}
//         onValueChange={(itemValue) => setRoom(itemValue)}
//       >
//         <Picker.Item label="Select Room" value="" />
//         {rooms && rooms.length > 0 ? (
//           rooms.map((item) => (
//             <Picker.Item key={item.room_id} label={item.room_number} value={item.room_id} />
//           ))
//         ) : (
//           <Picker.Item label="No rooms available" value="" />
//         )}
//       </Picker>

//       {/* Internal Evaluators */}
//       <View style={styles.evaluatorContainer}>
//         <Text>Internal Evaluators:</Text>
//         {selectedInternalEvaluators.map((id, index) => (
//           <Picker
//             key={index}
//             selectedValue={id}
//             onValueChange={(itemValue) => {
//               const updatedEvaluators = [...selectedInternalEvaluators];
//               updatedEvaluators[index] = itemValue;
//               setSelectedInternalEvaluators(updatedEvaluators);
//             }}
//           >
//             <Picker.Item label="Select Evaluator" value="" />
//             {internalEvaluators.map((evaluator) => (
//               <Picker.Item key={evaluator.faculty_id} label={evaluator.username} value={evaluator.faculty_id} />
//             ))}
//           </Picker>
//         ))}

//         <TouchableOpacity onPress={() => setSelectedInternalEvaluators([...selectedInternalEvaluators, ''])}>
//           <Text style={styles.addButton}>Add Internal Evaluator</Text>
//         </TouchableOpacity>
//       </View>

//       {/* External Evaluators */}
//       <View style={styles.evaluatorContainer}>
//         <Text>External Evaluators (Optional):</Text>
//         {selectedExternalEvaluators.map((id, index) => (
//           <Picker
//             key={index}
//             selectedValue={id}
//             onValueChange={(itemValue) => {
//               const updatedEvaluators = [...selectedExternalEvaluators];
//               updatedEvaluators[index] = itemValue;
//               setSelectedExternalEvaluators(updatedEvaluators);
//             }}
//           >
//             <Picker.Item label="Select Evaluator" value="" />
//             {externalEvaluators.map((evaluator) => (
//               <Picker.Item key={evaluator.external_id} label={evaluator.name} value={evaluator.external_id} />
//             ))}
//           </Picker>
//         ))}

//         <TouchableOpacity onPress={() => setSelectedExternalEvaluators([...selectedExternalEvaluators, ''])}>
//           <Text style={styles.addButton}>Add External Evaluator</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Submit Button */}
//       <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//         <Text style={styles.submitText}>Schedule Presentation</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { padding: 20 },
//   title: { fontSize: 24, fontWeight: 'bold' },
//   input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 8 },
//   evaluatorContainer: { marginBottom: 20 },
//   addButton: { color: 'blue' },
//   submitButton: { backgroundColor: 'blue', padding: 10, alignItems: 'center' },
//   submitText: { color: 'white', fontSize: 16 },
// });

// export default SchedulePresentation;


// 
// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Picker, ScrollView, Alert, StyleSheet } from 'react-native';
// import axios from 'axios';

// const SchedulePresentation = () => {
//   const [types, setTypes] = useState([]);
//   const [batches, setBatches] = useState([]);
//   const [projects, setProjects] = useState([]);
//   const [rooms, setRooms] = useState([]);
//   const [internalEvaluators, setInternalEvaluators] = useState([]);
//   const [externalEvaluators, setExternalEvaluators] = useState([]);

//   const [type, setType] = useState('');
//   const [batch, setBatch] = useState('');
//   const [project, setProject] = useState('');
//   const [room, setRoom] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [selectedInternalEvaluators, setSelectedInternalEvaluators] = useState([]);
//   const [selectedExternalEvaluators, setSelectedExternalEvaluators] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost/MobApp/my-app/php_api/events.php')
//       .then(response => setTypes(Array.isArray(response.data) ? response.data : []))
//       .catch(error => console.error('Error fetching event types:', error));

//     axios.get('http://localhost/MobApp/my-app/php_api/getBatches.php')
//       .then(response => setBatches(Array.isArray(response.data) ? response.data : []))
//       .catch(error => console.error('Error fetching batches:', error));

//     axios.get('http://localhost/MobApp/my-app/php_api/GetInternalEvaluator.php')
//       .then(response => setInternalEvaluators(Array.isArray(response.data) ? response.data : []))
//       .catch(error => console.error('Error fetching internal evaluators:', error));

//     axios.get('http://localhost/MobApp/my-app/php_api/GetExternalEvaluator.php')
//       .then(response => setExternalEvaluators(Array.isArray(response.data) ? response.data : []))
//       .catch(error => console.error('Error fetching external evaluators:', error));
//   }, []);

//   const handleUpdateProjects = () => {
//     if (batch && type) {
//       axios.get(`http://localhost/MobApp/my-app/php_api/project.php?batch=${batch}&type=${type}`)
//         .then(response => setProjects(Array.isArray(response.data) ? response.data : []))
//         .catch(error => console.error('Error fetching projects:', error));
//     }
//   };

//   const handleUpdateRooms = () => {
//     if (date && time) {
//       axios.get(`http://localhost/MobApp/my-app/php_api/getRoom.php?date=${date}&time=${time}`)
//         .then(response => setRooms(Array.isArray(response.data) ? response.data : []))
//         .catch(error => console.error('Error fetching rooms:', error));
//     }
//   };

//   const handleSubmit = () => {
//     const currentDate = new Date().toISOString().split('T')[0];
//     if (!date || date < currentDate) {
//       Alert.alert('Error', 'You cannot assign a presentation to a past date!');
//       return;
//     }

//     axios.post('http://localhost/MobApp/my-app/php_api/getRoom.php', { room, date, time })
//       .then(response => {
//         if (response.data.isAvailable) {
//           axios.post('http://localhost/MobApp/my-app/php_api/schedulePresentation.php', {
//             type,
//             batch,
//             room,
//             date,
//             time,
//             project,
//             internalEvaluators: selectedInternalEvaluators,
//             externalEvaluators: selectedExternalEvaluators
//           })
//             .then(response => {
//               if (response.data.success) {
//                 Alert.alert('Success', 'Presentation successfully scheduled!');
//               } else {
//                 Alert.alert('Error', response.data.error);
//               }
//             })
//             .catch(error => console.error('Error scheduling presentation:', error));
//         } else {
//           Alert.alert('Error', 'The selected room is already reserved at this time.');
//         }
//       })
//       .catch(error => console.error('Error checking room availability:', error));
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Schedule Presentation</Text>

//       {/* Event Type Picker */}
//       <Picker
//         selectedValue={type}
//         onValueChange={(itemValue) => {
//           setType(itemValue);
//           handleUpdateProjects();
//         }}
//       >
//         <Picker.Item label="Select Event Type" value="" />
//         {types.map((item) => (
//           <Picker.Item key={item.eventID} label={item.EventName} value={item.eventID} />
//         ))}
//       </Picker>

//       {/* Batch Picker */}
//       <Picker
//         selectedValue={batch}
//         onValueChange={(itemValue) => {
//           setBatch(itemValue);
//           handleUpdateProjects();
//         }}
//       >
//         <Picker.Item label="Select Batch" value="" />
//         {batches.map((item) => (
//           <Picker.Item key={item.batchID} label={item.batchName} value={item.batchID} />
//         ))}
//       </Picker>

//       {/* Project Picker */}
//       <Picker
//         selectedValue={project}
//         onValueChange={(itemValue) => setProject(itemValue)}
//       >
//         <Picker.Item label="Select Project" value="" />
//         {projects.map((item) => (
//           <Picker.Item key={item.id} label={item.title} value={item.id} />
//         ))}
//       </Picker>

//       {/* Date Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Select Date (YYYY-MM-DD)"
//         value={date}
//         onChangeText={(text) => {
//           setDate(text);
//           handleUpdateRooms();
//         }}
//       />

//       {/* Time Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Select Time (HH:MM)"
//         value={time}
//         onChangeText={(text) => {
//           setTime(text);
//           handleUpdateRooms();
//         }}
//       />

//       {/* Room Picker */}
//       <Picker
//         selectedValue={room}
//         onValueChange={(itemValue) => setRoom(itemValue)}
//       >
//         <Picker.Item label="Select Room" value="" />
//         {rooms.map((item) => (
//           <Picker.Item key={item.room_id} label={item.room_number} value={item.room_id} />
//         ))}
//       </Picker>

//       {/* Evaluator Pickers */}
//       <View style={styles.evaluatorContainer}>
//         <Text>Internal Evaluators:</Text>
//         {selectedInternalEvaluators.map((id, index) => (
//           <Picker
//             key={index}
//             selectedValue={id}
//             onValueChange={(itemValue) => {
//               const updatedEvaluators = [...selectedInternalEvaluators];
//               updatedEvaluators[index] = itemValue;
//               setSelectedInternalEvaluators(updatedEvaluators);
//             }}
//           >
//             <Picker.Item label="Select Evaluator" value="" />
//             {internalEvaluators.map((evaluator) => (
//               <Picker.Item key={evaluator.faculty_id} label={evaluator.username} value={evaluator.faculty_id} />
//             ))}
//           </Picker>
//         ))}

//         <TouchableOpacity onPress={() => setSelectedInternalEvaluators([...selectedInternalEvaluators, ''])}>
//           <Text style={styles.addButton}>Add Internal Evaluator</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.evaluatorContainer}>
//         <Text>External Evaluators:</Text>
//         {selectedExternalEvaluators.map((id, index) => (
//           <Picker
//             key={index}
//             selectedValue={id}
//             onValueChange={(itemValue) => {
//               const updatedEvaluators = [...selectedExternalEvaluators];
//               updatedEvaluators[index] = itemValue;
//               setSelectedExternalEvaluators(updatedEvaluators);
//             }}
//           >
//             <Picker.Item label="Select Evaluator" value="" />
//             {externalEvaluators.map((evaluator) => (
//               <Picker.Item key={evaluator.external_id} label={evaluator.name} value={evaluator.external_id} />
//             ))}
//           </Picker>
//         ))}

//         <TouchableOpacity onPress={() => setSelectedExternalEvaluators([...selectedExternalEvaluators, ''])}>
//           <Text style={styles.addButton}>Add External Evaluator</Text>
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//         <Text style={styles.submitText}>Schedule Presentation</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { padding: 20 },
//   title: { fontSize: 24, fontWeight: 'bold' },
//   input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 8 },
//   evaluatorContainer: { marginBottom: 20 },
//   addButton: { color: 'blue' },
//   submitButton: { backgroundColor: 'blue', padding: 10, alignItems: 'center' },
//   submitText: { color: 'white', fontSize: 16 },
// });

// export default SchedulePresentation;

// updated code with batch




// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Picker, ScrollView, Alert, StyleSheet } from 'react-native';
// import axios from 'axios';

// const SchedulePresentation = () => {
//   const [types, setTypes] = useState([]);
//   const [batches, setBatches] = useState([]);
//   const [projects, setProjects] = useState([]);
//   const [rooms, setRooms] = useState([]);
//   const [internalEvaluators, setInternalEvaluators] = useState([]);
//   const [externalEvaluators, setExternalEvaluators] = useState([]);

//   const [type, setType] = useState('');
//   const [batch, setBatch] = useState('');
//   const [project, setProject] = useState('');
//   const [room, setRoom] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [selectedInternalEvaluators, setSelectedInternalEvaluators] = useState([]);
//   const [selectedExternalEvaluators, setSelectedExternalEvaluators] = useState([]);

//   useEffect(() => {
//     // Fetch data for event types
//     axios.get('http://localhost/MobApp/my-app/php_api/events.php')
//       .then(response => {
//         console.log('Event Types:', response.data);
//         setTypes(Array.isArray(response.data) ? response.data : []);
//       })
//       .catch(error => console.error('Error fetching event types:', error));

//     // Fetch batches data
//     axios.get('http://localhost/MobApp/my-app/php_api/getBatches.php')
//       .then(response => {
//         console.log('Batches:', response.data);
//         if (response.data.success) {
//           setBatches(response.data.batches); // Make sure batches are fetched correctly
//         } else {
//           Alert.alert('Error', 'Failed to fetch batches.');
//         }
//       })
//       .catch(error => console.error('Error fetching batches:', error));

//     // Fetch evaluators data
//     axios.get('http://localhost/MobApp/my-app/php_api/GetInternalEvaluator.php')
//       .then(response => {
//         setInternalEvaluators(Array.isArray(response.data) ? response.data : []);
//       })
//       .catch(error => console.error('Error fetching internal evaluators:', error));

//     axios.get('http://localhost/MobApp/my-app/php_api/GetExternalEvaluator.php')
//       .then(response => {
//         setExternalEvaluators(Array.isArray(response.data) ? response.data : []);
//       })
//       .catch(error => console.error('Error fetching external evaluators:', error));
//   }, []);

//   const handleUpdateProjects = () => {
//     if (batch && type) {
//       axios.get(`http://localhost/MobApp/my-app/php_api/project.php?batch=${batch}&type=${type}`)
//         .then(response => {
//           setProjects(Array.isArray(response.data) ? response.data : []);
//         })
//         .catch(error => console.error('Error fetching projects:', error));
//     }
//   };

//   const handleUpdateRooms = () => {
//     if (date && time) {
//       axios.get(`http://localhost/MobApp/my-app/php_api/getRoom.php?date=${date}&time=${time}`)
//         .then(response => {
//           setRooms(Array.isArray(response.data) ? response.data : []);
//         })
//         .catch(error => console.error('Error fetching rooms:', error));
//     }
//   };

//   const handleSubmit = () => {
//     const currentDate = new Date().toISOString().split('T')[0];
//     if (!date || date < currentDate) {
//       Alert.alert('Error', 'You cannot assign a presentation to a past date!');
//       return;
//     }

//     axios.post('http://localhost/MobApp/my-app/php_api/getRoom.php', { room, date, time })
//       .then(response => {
//         if (response.data.isAvailable) {
//           axios.post('http://localhost/MobApp/my-app/php_api/schedulePresentation.php', {
//             type,
//             batch,
//             room,
//             date,
//             time,
//             project,
//             internalEvaluators: selectedInternalEvaluators,
//             externalEvaluators: selectedExternalEvaluators
//           })
//             .then(response => {
//               if (response.data.success) {
//                 Alert.alert('Success', 'Presentation successfully scheduled!');
//               } else {
//                 Alert.alert('Error', response.data.error);
//               }
//             })
//             .catch(error => console.error('Error scheduling presentation:', error));
//         } else {
//           Alert.alert('Error', 'The selected room is already reserved at this time.');
//         }
//       })
//       .catch(error => console.error('Error checking room availability:', error));
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Schedule Presentation</Text>

//       {/* Event Type Picker */}
//       <Picker
//         selectedValue={type}
//         onValueChange={(itemValue) => {
//           setType(itemValue);
//           handleUpdateProjects();
//         }}
//       >
//         <Picker.Item label="Select Event Type" value="" />
//         {types.map((item) => (
//           <Picker.Item key={item.eventID} label={item.EventName} value={item.eventID} />
//         ))}
//       </Picker>

//       {/* Batch Picker */}
//       <Picker
//         selectedValue={batch}
//         onValueChange={(itemValue) => {
//           setBatch(itemValue);
//           handleUpdateProjects();
//         }}
//       >
//         <Picker.Item label="Select Batch" value="" />
//         {batches.length > 0 ? (
//           batches.map((item) => (
//             <Picker.Item key={item.BatchID} label={item.BatchName} value={item.BatchID} />
//           ))
//         ) : (
//           <Picker.Item label="No Batches Available" value="" />
//         )}
//       </Picker>

//       {/* Project Picker */}
//       <Picker
//         selectedValue={project}
//         onValueChange={(itemValue) => setProject(itemValue)}
//       >
//         <Picker.Item label="Select Project" value="" />
//         {projects.length > 0 ? (
//           projects.map((item) => (
//             <Picker.Item key={item.id} label={item.title} value={item.id} />
//           ))
//         ) : (
//           <Picker.Item label="No Projects Available" value="" />
//         )}
//       </Picker>

//       {/* Date Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Select Date (YYYY-MM-DD)"
//         value={date}
//         onChangeText={(text) => {
//           setDate(text);
//           handleUpdateRooms();
//         }}
//       />

//       {/* Time Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Select Time (HH:MM)"
//         value={time}
//         onChangeText={(text) => {
//           setTime(text);
//           handleUpdateRooms();
//         }}
//       />

//       {/* Room Picker */}
//       <Picker
//         selectedValue={room}
//         onValueChange={(itemValue) => setRoom(itemValue)}
//       >
//         <Picker.Item label="Select Room" value="" />
//         {rooms.length > 0 ? (
//           rooms.map((item) => (
//             <Picker.Item key={item.room_id} label={item.room_number} value={item.room_id} />
//           ))
//         ) : (
//           <Picker.Item label="No Rooms Available" value="" />
//         )}
//       </Picker>

//       {/* Evaluator Pickers */}
//       <View style={styles.evaluatorContainer}>
//         <Text>Internal Evaluators:</Text>
//         {selectedInternalEvaluators.map((id, index) => (
//           <Picker
//             key={index}
//             selectedValue={id}
//             onValueChange={(itemValue) => {
//               const updatedEvaluators = [...selectedInternalEvaluators];
//               updatedEvaluators[index] = itemValue;
//               setSelectedInternalEvaluators(updatedEvaluators);
//             }}
//           >
//             <Picker.Item label="Select Evaluator" value="" />
//             {internalEvaluators.map((evaluator) => (
//               <Picker.Item key={evaluator.faculty_id} label={evaluator.username} value={evaluator.faculty_id} />
//             ))}
//           </Picker>
//         ))}

//         <TouchableOpacity onPress={() => setSelectedInternalEvaluators([...selectedInternalEvaluators, ''])}>
//           <Text style={styles.addButton}>Add Internal Evaluator</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.evaluatorContainer}>
//         <Text>External Evaluators:</Text>
//         {selectedExternalEvaluators.map((id, index) => (
//           <Picker
//             key={index}
//             selectedValue={id}
//             onValueChange={(itemValue) => {
//               const updatedEvaluators = [...selectedExternalEvaluators];
//               updatedEvaluators[index] = itemValue;
//               setSelectedExternalEvaluators(updatedEvaluators);
//             }}
//           >
//             <Picker.Item label="Select Evaluator" value="" />
//             {externalEvaluators.map((evaluator) => (
//               <Picker.Item key={evaluator.external_id} label={evaluator.name} value={evaluator.external_id} />
//             ))}
//           </Picker>
//         ))}

//         <TouchableOpacity onPress={() => setSelectedExternalEvaluators([...selectedExternalEvaluators, ''])}>
//           <Text style={styles.addButton}>Add External Evaluator</Text>
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//         <Text style={styles.submitText}>Schedule Presentation</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { padding: 20 },
//   title: { fontSize: 24, fontWeight: 'bold' },
//   input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 8 },
//   evaluatorContainer: { marginBottom: 20 },
//   addButton: { color: 'blue' },
//   submitButton: { backgroundColor: 'blue', padding: 10, alignItems: 'center' },
//   submitText: { color: 'white', fontSize: 16 },
// });

// export default SchedulePresentation;


// more updation
// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Picker, ScrollView, Alert, StyleSheet } from 'react-native';
// import axios from 'axios';

// const SchedulePresentation = () => {
//   const [types, setTypes] = useState([]);
//   const [batches, setBatches] = useState([]);
//   const [projects, setProjects] = useState([]);
//   const [rooms, setRooms] = useState([]);
//   const [internalEvaluators, setInternalEvaluators] = useState([]);
//   const [externalEvaluators, setExternalEvaluators] = useState([]);

//   const [type, setType] = useState('');
//   const [batch, setBatch] = useState('');
//   const [project, setProject] = useState('');
//   const [room, setRoom] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [selectedInternalEvaluators, setSelectedInternalEvaluators] = useState([]);
//   const [selectedExternalEvaluators, setSelectedExternalEvaluators] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost/MobApp/my-app/php_api/events.php')
//       .then(response => setTypes(Array.isArray(response.data) ? response.data : []))
//       .catch(error => console.error('Error fetching event types:', error));

//     axios.get('http://localhost/MobApp/my-app/php_api/getBatches.php')
//       .then(response => setBatches(Array.isArray(response.data.batches) ? response.data.batches : []))
//       .catch(error => console.error('Error fetching batches:', error));

//     axios.get('http://localhost/MobApp/my-app/php_api/GetInternalEvaluator.php')
//       .then(response => setInternalEvaluators(Array.isArray(response.data) ? response.data : []))
//       .catch(error => console.error('Error fetching internal evaluators:', error));

//     axios.get('http://localhost/MobApp/my-app/php_api/GetExternalEvaluator.php')
//       .then(response => setExternalEvaluators(Array.isArray(response.data) ? response.data : []))
//       .catch(error => console.error('Error fetching external evaluators:', error));
//   }, []);

//   const handleUpdateProjects = () => {
//     console.log('Batch:', batch); // Log the batch value
//     console.log('Type:', type); // Log the type value
  
//     if (batch && type) {
//       axios.get(`http://localhost/MobApp/my-app/php_api/project.php?batch=${batch}&type=${type}`)
//         .then(response => {
//           console.log('Response from API:', response.data); // Log the full response
  
//           if (response.data && response.data.projects && response.data.projects.length > 0) {
//             setProjects(response.data.projects); // Set projects if data is valid
//           } else {
//             setProjects([]); // If no projects available, clear the list
//           }
//         })
//         .catch(error => {
//           console.error('Error fetching projects:', error);
//           setProjects([]); // Clear projects on error
//         });
//     } else {
//       setProjects([]); // Clear projects if batch or type is not selected
//     }
//   };
  
  

//   const handleUpdateRooms = () => {
//     if (date && time) {
//       axios.get(`http://localhost/MobApp/my-app/php_api/getRoom.php?date=${date}&time=${time}`)
//         .then(response => setRooms(Array.isArray(response.data.rooms) ? response.data.rooms : []))
//         .catch(error => console.error('Error fetching rooms:', error));
//     }
//   };

//   const handleSubmit = () => {
//     const currentDate = new Date().toISOString().split('T')[0];
//     if (!date || date < currentDate) {
//       Alert.alert('Error', 'You cannot assign a presentation to a past date!');
//       return;
//     }

//     axios.post('http://localhost/MobApp/my-app/php_api/getRoom.php', { room, date, time })
//       .then(response => {
//         if (response.data.isAvailable) {
//           axios.post('http://localhost/MobApp/my-app/php_api/schedulePresentation.php', {
//             type,
//             batch,
//             room,
//             date,
//             time,
//             project,
//             internalEvaluators: selectedInternalEvaluators,
//             externalEvaluators: selectedExternalEvaluators
//           })
//             .then(response => {
//               if (response.data.success) {
//                 Alert.alert('Success', 'Presentation successfully scheduled!');
//               } else {
//                 Alert.alert('Error', response.data.error);
//               }
//             })
//             .catch(error => console.error('Error scheduling presentation:', error));
//         } else {
//           Alert.alert('Error', 'The selected room is already reserved at this time.');
//         }
//       })
//       .catch(error => console.error('Error checking room availability:', error));
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Schedule Presentation</Text>

//       {/* Event Type Picker */}
//       <Picker
//         selectedValue={type}
//         onValueChange={(itemValue) => {
//           setType(itemValue);
//           handleUpdateProjects(); // Update projects when type is changed
//         }}
//       >
//         <Picker.Item label="Select Event Type" value="" />
//         {types.length > 0 ? types.map((item) => (
//           <Picker.Item key={item.eventID} label={item.EventName} value={item.eventID} />
//         )) : <Picker.Item label="No event types available" value="" />}
//       </Picker>

//       {/* Batch Picker */}
//       <Picker
//         selectedValue={batch}
//         onValueChange={(itemValue) => {
//           setBatch(itemValue);
//           handleUpdateProjects(); // Update projects when batch is changed
//         }}
//       >
//         <Picker.Item label="Select Batch" value="" />
//         {batches.length > 0 ? batches.map((item) => (
//           <Picker.Item key={item.BatchID} label={item.BatchName} value={item.BatchID} />
//         )) : <Picker.Item label="No batches available" value="" />}
//       </Picker>

//       {/* Project Picker */}
//       {/* Project Picker */}
// <Picker
//   selectedValue={project}
//   onValueChange={(itemValue) => setProject(itemValue)}
// >
//   <Picker.Item label="Select Project" value="" />
//   {projects.length > 0 ? projects.map((item) => (
//     <Picker.Item key={item.project_id} label={item.title} value={item.project_id} />
//   )) : <Picker.Item label="No projects available" value="" />}
// </Picker>


//       {/* Date Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Select Date (YYYY-MM-DD)"
//         value={date}
//         onChangeText={(text) => {
//           setDate(text);
//           handleUpdateRooms();
//         }}
//       />

//       {/* Time Input */}
//       <TextInput
//         style={styles.input}
//         placeholder="Select Time (HH:MM)"
//         value={time}
//         onChangeText={(text) => {
//           setTime(text);
//           handleUpdateRooms();
//         }}
//       />

//       {/* Room Picker */}
//       <Picker
//         selectedValue={room}
//         onValueChange={(itemValue) => setRoom(itemValue)}
//       >
//         <Picker.Item label="Select Room" value="" />
//         {rooms.length > 0 ? rooms.map((item) => (
//           <Picker.Item key={item.room_id} label={item.room_number} value={item.room_id} />
//         )) : <Picker.Item label="No rooms available" value="" />}
//       </Picker>

//       {/* Internal Evaluator Pickers */}
//       <View style={styles.evaluatorContainer}>
//         <Text>Internal Evaluators:</Text>
//         {selectedInternalEvaluators.map((id, index) => (
//           <Picker
//             key={index}
//             selectedValue={id}
//             onValueChange={(itemValue) => {
//               const updatedEvaluators = [...selectedInternalEvaluators];
//               updatedEvaluators[index] = itemValue;
//               setSelectedInternalEvaluators(updatedEvaluators);
//             }}
//           >
//             <Picker.Item label="Select Evaluator" value="" />
//             {internalEvaluators.map((evaluator) => (
//               <Picker.Item key={evaluator.faculty_id} label={evaluator.username} value={evaluator.faculty_id} />
//             ))}
//           </Picker>
//         ))}

//         <TouchableOpacity onPress={() => setSelectedInternalEvaluators([...selectedInternalEvaluators, ''])}>
//           <Text style={styles.addButton}>Add Internal Evaluator</Text>
//         </TouchableOpacity>
//       </View>

//       {/* External Evaluator Pickers */}
//       <View style={styles.evaluatorContainer}>
//         <Text>External Evaluators:</Text>
//         {selectedExternalEvaluators.map((id, index) => (
//           <Picker
//             key={index}
//             selectedValue={id}
//             onValueChange={(itemValue) => {
//               const updatedEvaluators = [...selectedExternalEvaluators];
//               updatedEvaluators[index] = itemValue;
//               setSelectedExternalEvaluators(updatedEvaluators);
//             }}
//           >
//             <Picker.Item label="Select Evaluator" value="" />
//             {externalEvaluators.map((evaluator) => (
//               <Picker.Item key={evaluator.external_id} label={evaluator.name} value={evaluator.external_id} />
//             ))}
//           </Picker>
//         ))}

//         <TouchableOpacity onPress={() => setSelectedExternalEvaluators([...selectedExternalEvaluators, ''])}>
//           <Text style={styles.addButton}>Add External Evaluator</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Submit Button */}
//       <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//         <Text style={styles.submitText}>Schedule Presentation</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { padding: 20 },
//   title: { fontSize: 24, fontWeight: 'bold' },
//   input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 8 },
//   evaluatorContainer: { marginBottom: 20 },
//   addButton: { color: 'blue' },
//   submitButton: { backgroundColor: 'blue', padding: 10, alignItems: 'center' },
//   submitText: { color: 'white', fontSize: 16 },
// });

// export default SchedulePresentation;

// corrected project issue
// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Picker, ScrollView, Alert, StyleSheet } from 'react-native';
// import axios from 'axios';

// const SchedulePresentation = () => {
//   const [types, setTypes] = useState([]);
//   const [batches, setBatches] = useState([]);
//   const [projects, setProjects] = useState([]);
//   const [rooms, setRooms] = useState([]);
//   const [internalEvaluators, setInternalEvaluators] = useState([]);
//   const [externalEvaluators, setExternalEvaluators] = useState([]);

//   const [type, setType] = useState('');
//   const [batch, setBatch] = useState('');
//   const [project, setProject] = useState('');
//   const [room, setRoom] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [selectedInternalEvaluators, setSelectedInternalEvaluators] = useState([]);
//   const [selectedExternalEvaluators, setSelectedExternalEvaluators] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost/MobApp/my-app/php_api/events.php')
//       .then(response => {
//         setTypes(Array.isArray(response.data) ? response.data : []);
//       })
//       .catch(error => console.error('Error fetching event types:', error));

//     axios.get('http://localhost/MobApp/my-app/php_api/getBatches.php')
//       .then(response => {
//         setBatches(Array.isArray(response.data.batches) ? response.data.batches : []);
//       })
//       .catch(error => console.error('Error fetching batches:', error));

//     axios.get('http://localhost/MobApp/my-app/php_api/GetInternalEvaluator.php')
//       .then(response => {
//         setInternalEvaluators(Array.isArray(response.data) ? response.data : []);
//       })
//       .catch(error => console.error('Error fetching internal evaluators:', error));

//     axios.get('http://localhost/MobApp/my-app/php_api/GetExternalEvaluator.php')
//       .then(response => {
//         setExternalEvaluators(Array.isArray(response.data) ? response.data : []);
//       })
//       .catch(error => console.error('Error fetching external evaluators:', error));
//   }, []);

//   useEffect(() => {
//     if (batch && type) {
//       axios.get(`http://localhost/MobApp/my-app/php_api/project.php?`)
//         .then(response => {
//           console.log(response); // Check the full response
//           try {
//             const data = response.data;
//             if (data && data.projects && data.projects.length > 0) {
//               setProjects(data.projects);
//             } else {
//               setProjects([]); 
//             }
//           } catch (error) {
//             console.error('Error parsing JSON:', error);
//           }
//         })
//         .catch(error => {
//           console.error('Error fetching projects:', error);
//         });
//     }
//   }, [batch, type]);

//   const handleUpdateRooms = () => {
//     if (date && time) {
//       axios.get(`http://localhost/MobApp/my-app/php_api/getRoom.php?date=${date}&time=${time}`)
//         .then(response => {
//           setRooms(Array.isArray(response.data.rooms) ? response.data.rooms : []);
//         })
//         .catch(error => console.error('Error fetching rooms:', error));
//     }
//   };

//   const handleSubmit = () => {
//     const currentDate = new Date().toISOString().split('T')[0];
//     if (!date || date < currentDate) {
//       Alert.alert('Error', 'You cannot assign a presentation to a past date!');
//       return;
//     }

//     axios.post('http://localhost/MobApp/my-app/php_api/getRoom.php', { room, date, time })
//       .then(response => {
//         if (response.data.isAvailable) {
//           axios.post('http://localhost/MobApp/my-app/php_api/schedulePresentation.php', {
//             type,
//             batch,
//             room,
//             date,
//             time,
//             project,
//             internalEvaluators: selectedInternalEvaluators,
//             externalEvaluators: selectedExternalEvaluators
//           })
//             .then(response => {
//               if (response.data.success) {
//                 Alert.alert('Success', 'Presentation successfully scheduled!');
//               } else {
//                 Alert.alert('Error', response.data.error);
//               }
//             })
//             .catch(error => console.error('Error scheduling presentation:', error));
//         } else {
//           Alert.alert('Error', 'The selected room is already reserved at this time.');
//         }
//       })
//       .catch(error => console.error('Error checking room availability:', error));
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Schedule Presentation</Text>

//       <View style={styles.formContainer}>
//         {/* Event Type Picker */}
//         <Picker
//           selectedValue={type}
//           onValueChange={(itemValue) => {
//             setType(itemValue);
//           }}
//         >
//           <Picker.Item label="Select Event Type" value="" />
//           {types.length > 0 ? types.map((item) => (
//             <Picker.Item key={item.eventID} label={item.EventName} value={item.eventID} />
//           )) : <Picker.Item label="No event types available" value="" />}
//         </Picker>

//         {/* Batch Picker */}
//         <Picker
//           selectedValue={batch}
//           onValueChange={(itemValue) => {
//             setBatch(itemValue);
//           }}
//         >
//           <Picker.Item label="Select Batch" value="" />
//           {batches.length > 0 ? batches.map((item) => (
//             <Picker.Item key={item.BatchID} label={item.BatchName} value={item.BatchID} />
//           )) : <Picker.Item label="No batches available" value="" />}
//         </Picker>

//         {/* Project Picker */}
//         <Picker
//           selectedValue={project}
//           onValueChange={(itemValue) => setProject(itemValue)}
//         >
//           <Picker.Item label="Select Project" value="" />
//           {projects && projects.length > 0 ? (
//             projects.map((item) => (
//               <Picker.Item key={item.project_id} label={item.title} value={item.project_id} />
//             ))
//           ) : (
//             <Picker.Item label="No projects available" value="" />
//           )}
//         </Picker>

//         {/* Date Input */}
//         <TextInput
//           style={styles.input}
//           placeholder="Select Date (YYYY-MM-DD)"
//           value={date}
//           onChangeText={(text) => {
//             setDate(text);
//             handleUpdateRooms();
//           }}
//         />

//         {/* Time Input */}
//         <TextInput
//           style={styles.input}
//           placeholder="Select Time (HH:MM)"
//           value={time}
//           onChangeText={(text) => {
//             setTime(text);
//             handleUpdateRooms();
//           }}
//         />

//         {/* Room Picker */}
//         <Picker
//           selectedValue={room}
//           onValueChange={(itemValue) => setRoom(itemValue)}
//         >
//           <Picker.Item label="Select Room" value="" />
//           {rooms.length > 0 ? rooms.map((item) => (
//             <Picker.Item key={item.room_id} label={item.room_number} value={item.room_id} />
//           )) : <Picker.Item label="No rooms available" value="" />}
//         </Picker>

//         {/* Internal Evaluator Pickers */}
//         <View style={styles.evaluatorContainer}>
//           <Text>Internal Evaluators:</Text>
//           {selectedInternalEvaluators.map((id, index) => (
//             <Picker
//               key={index}
//               selectedValue={id}
//               onValueChange={(itemValue) => {
//                 const updatedEvaluators = [...selectedInternalEvaluators];
//                 updatedEvaluators[index] = itemValue;
//                 setSelectedInternalEvaluators(updatedEvaluators);
//               }}
//             >
//               <Picker.Item label="Select Evaluator" value="" />
//               {internalEvaluators.map((evaluator) => (
//                 <Picker.Item key={evaluator.faculty_id} label={evaluator.username} value={evaluator.faculty_id} />
//               ))}
//             </Picker>
//           ))}

//           <TouchableOpacity onPress={() => setSelectedInternalEvaluators([...selectedInternalEvaluators, ''])}>
//             <Text style={styles.addButton}>Add Internal Evaluator</Text>
//           </TouchableOpacity>
//         </View>

//         {/* External Evaluator Pickers */}
//         <View style={styles.evaluatorContainer}>
//           <Text>External Evaluators:</Text>
//           {selectedExternalEvaluators.map((id, index) => (
//             <Picker
//               key={index}
//               selectedValue={id}
//               onValueChange={(itemValue) => {
//                 const updatedEvaluators = [...selectedExternalEvaluators];
//                 updatedEvaluators[index] = itemValue;
//                 setSelectedExternalEvaluators(updatedEvaluators);
//               }}
//             >
//               <Picker.Item label="Select Evaluator" value="" />
//               {externalEvaluators.map((evaluator) => (
//                 <Picker.Item key={evaluator.external_id} label={evaluator.name} value={evaluator.external_id} />
//               ))}
//             </Picker>
//           ))}

//           <TouchableOpacity onPress={() => setSelectedExternalEvaluators([...selectedExternalEvaluators, ''])}>
//             <Text style={styles.addButton}>Add External Evaluator</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Submit Button */}
//         <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//           <Text style={styles.submitText}>Schedule Presentation</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { padding: 20 },
//   title: { fontSize: 24, fontWeight: 'bold' },
//   formContainer: {
//     backgroundColor: '#f0f0f0', 
//     padding: 20, 
//     borderRadius: 10, 
//     marginTop: 20
//   },
//   input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 8 },
//   evaluatorContainer: { marginBottom: 20 },
//   addButton: { color: 'blue' },
//   submitButton: { backgroundColor: 'blue', padding: 10, alignItems: 'center' },
//   submitText: { color: 'white', fontSize: 16 },
// });

// export default SchedulePresentation;


// 
// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Picker, ScrollView, Alert, StyleSheet } from 'react-native';
// import axios from 'axios';

// const SchedulePresentation = () => {
//   const [types, setTypes] = useState([]);
//   const [batches, setBatches] = useState([]);
//   const [projects, setProjects] = useState([]);
//   const [rooms, setRooms] = useState([]);
//   const [internalEvaluators, setInternalEvaluators] = useState([]);
//   const [externalEvaluators, setExternalEvaluators] = useState([]);

//   const [type, setType] = useState('');
//   const [batch, setBatch] = useState('');
//   const [project, setProject] = useState('');
//   const [room, setRoom] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [selectedInternalEvaluators, setSelectedInternalEvaluators] = useState([]);
//   const [selectedExternalEvaluators, setSelectedExternalEvaluators] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost/MobApp/my-app/php_api/events.php')
//       .then(response => {
//         setTypes(Array.isArray(response.data) ? response.data : []);
//       })
//       .catch(error => console.error('Error fetching event types:', error));

//     axios.get('http://localhost/MobApp/my-app/php_api/getBatches.php')
//       .then(response => {
//         setBatches(Array.isArray(response.data.batches) ? response.data.batches : []);
//       })
//       .catch(error => console.error('Error fetching batches:', error));

//     axios.get('http://localhost/MobApp/my-app/php_api/GetInternalEvaluator.php')
//       .then(response => {
//         setInternalEvaluators(Array.isArray(response.data) ? response.data : []);
//       })
//       .catch(error => console.error('Error fetching internal evaluators:', error));

//     axios.get('http://localhost/MobApp/my-app/php_api/GetExternalEvaluator.php')
//       .then(response => {
//         setExternalEvaluators(Array.isArray(response.data) ? response.data : []);
//       })
//       .catch(error => console.error('Error fetching external evaluators:', error));
//   }, []);

//   useEffect(() => {
//     if (batch && type) {
//       axios.get(`http://localhost/MobApp/my-app/php_api/project.php?`)
//         .then(response => {
//           console.log(response); // Check the full response
//           try {
//             const data = response.data;
//             if (data && data.projects && data.projects.length > 0) {
//               setProjects(data.projects);
//             } else {
//               setProjects([]);
//             }
//           } catch (error) {
//             console.error('Error parsing JSON:', error);
//           }
//         })
//         .catch(error => {
//           console.error('Error fetching projects:', error);
//         });
//     }
//   }, [batch, type]);

//   const handleUpdateRooms = () => {
//     if (date && time) {
//       axios.get(`http://localhost/MobApp/my-app/php_api/getRoom.php?date=${date}&time=${time}`)
//         .then(response => {
//           setRooms(Array.isArray(response.data.rooms) ? response.data.rooms : []);
//         })
//         .catch(error => console.error('Error fetching rooms:', error));
//     }
//   };

//   const handleSubmit = () => {
//     const currentDate = new Date().toISOString().split('T')[0];
//     if (!date || date < currentDate) {
//       Alert.alert('Error', 'You cannot assign a presentation to a past date!');
//       return;
//     }

//     axios.post('http://localhost/MobApp/my-app/php_api/getRoom.php', { room, date, time })
//       .then(response => {
//         if (response.data.isAvailable) {
//           axios.post('http://localhost/MobApp/my-app/php_api/schedulePresentation.php', {
//             type,
//             batch,
//             room,
//             date,
//             time,
//             project,
//             internalEvaluators: selectedInternalEvaluators,
//             externalEvaluators: selectedExternalEvaluators
//           })
//             .then(response => {
//               if (response.data.success) {
//                 Alert.alert('Success', 'Presentation successfully scheduled!');
//               } else {
//                 Alert.alert('Error', response.data.error);
//               }
//             })
//             .catch(error => console.error('Error scheduling presentation:', error));
//         } else {
//           Alert.alert('Error', 'The selected room is already reserved at this time.');
//         }
//       })
//       .catch(error => console.error('Error checking room availability:', error));
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Schedule Presentation</Text>

//       <View style={styles.formContainer}>
//         {/* Event Type Picker */}
//         <Picker
//           selectedValue={type}
//           onValueChange={(itemValue) => {
//             setType(itemValue);
//           }}
//         >
//           <Picker.Item label="Select Event Type" value="" />
//           {types.length > 0 ? types.map((item) => (
//             <Picker.Item key={item.eventID} label={item.EventName} value={item.eventID} />
//           )) : <Picker.Item label="No event types available" value="" />}
//         </Picker>

//         {/* Batch Picker */}
//         <Picker
//           selectedValue={batch}
//           onValueChange={(itemValue) => {
//             setBatch(itemValue);
//           }}
//         >
//           <Picker.Item label="Select Batch" value="" />
//           {batches.length > 0 ? batches.map((item) => (
//             <Picker.Item key={item.BatchID} label={item.BatchName} value={item.BatchID} />
//           )) : <Picker.Item label="No batches available" value="" />}
//         </Picker>

//         {/* Project Picker */}
//         <Picker
//           selectedValue={project}
//           onValueChange={(itemValue) => setProject(itemValue)}
//         >
//           <Picker.Item label="Select Project" value="" />
//           {projects && projects.length > 0 ? (
//             projects.map((item) => (
//               <Picker.Item key={item.project_id} label={item.title} value={item.project_id} />
//             ))
//           ) : (
//             <Picker.Item label="No projects available" value="" />
//           )}
//         </Picker>

//         {/* Date Input */}
//         <TextInput
//           style={styles.input}
//           placeholder="Select Date (YYYY-MM-DD)"
//           value={date}
//           onChangeText={(text) => {
//             setDate(text);
//             handleUpdateRooms();
//           }}
//         />

//         {/* Time Input */}
//         <TextInput
//           style={styles.input}
//           placeholder="Select Time (HH:MM)"
//           value={time}
//           onChangeText={(text) => {
//             setTime(text);
//             handleUpdateRooms();
//           }}
//         />

//         {/* Room Picker */}
//         <Picker
//           selectedValue={room}
//           onValueChange={(itemValue) => setRoom(itemValue)}
//         >
//           <Picker.Item label="Select Room" value="" />
//           {rooms.length > 0 ? rooms.map((item) => (
//             <Picker.Item key={item.room_id} label={item.room_number} value={item.room_id} />
//           )) : <Picker.Item label="No rooms available" value="" />}
//         </Picker>

//         {/* Internal Evaluator Pickers */}
//         <View style={styles.evaluatorContainer}>
//           <Text>Internal Evaluators:</Text>
//           {selectedInternalEvaluators.map((id, index) => (
//             <Picker
//               key={index}
//               selectedValue={id}
//               onValueChange={(itemValue) => {
//                 const updatedEvaluators = [...selectedInternalEvaluators];
//                 updatedEvaluators[index] = itemValue;
//                 setSelectedInternalEvaluators(updatedEvaluators);
//               }}
//             >
//               <Picker.Item label="Select Evaluator" value="" />
//               {internalEvaluators.map((evaluator) => (
//                 <Picker.Item key={evaluator.faculty_id} label={evaluator.username} value={evaluator.faculty_id} />
//               ))}
//             </Picker>
//           ))}

//           <TouchableOpacity onPress={() => setSelectedInternalEvaluators([...selectedInternalEvaluators, ''])}>
//             <Text style={styles.addButton}>Add Internal Evaluator</Text>
//           </TouchableOpacity>
//         </View>

//         {/* External Evaluator Pickers */}
//         <View style={styles.evaluatorContainer}>
//           <Text>External Evaluators:</Text>
//           {selectedExternalEvaluators.map((id, index) => (
//             <Picker
//               key={index}
//               selectedValue={id}
//               onValueChange={(itemValue) => {
//                 const updatedEvaluators = [...selectedExternalEvaluators];
//                 updatedEvaluators[index] = itemValue;
//                 setSelectedExternalEvaluators(updatedEvaluators);
//               }}
//             >
//               <Picker.Item label="Select Evaluator" value="" />
//               {externalEvaluators.map((evaluator) => (
//                 <Picker.Item key={evaluator.external_id} label={evaluator.name} value={evaluator.external_id} />
//               ))}
//             </Picker>
//           ))}

//           <TouchableOpacity onPress={() => setSelectedExternalEvaluators([...selectedExternalEvaluators, ''])}>
//             <Text style={styles.addButton}>Add External Evaluator</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Submit Button */}
//         <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//           <Text style={styles.submitText}>Schedule Presentation</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { padding: 20 },
//   title: { fontSize: 24, fontWeight: 'bold' },
//   formContainer: {
//     backgroundColor: '#f0f0f0', 
//     padding: 20, 
//     borderRadius: 10, 
//     marginTop: 20
//   },
//   input: { height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingLeft: 8 },
//   evaluatorContainer: { marginBottom: 20 },
//   addButton: { color: 'blue' },
//   submitButton: { backgroundColor: 'blue', padding: 10, alignItems: 'center' },
//   submitText: { color: 'white', fontSize: 16 },
// });

// export default SchedulePresentation;


import React, { useState, useEffect } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, Picker, ScrollView, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
// Import Sidebar
import Sidebar from '../Coordinator/Sidebar';

const SchedulePresentation = () => {
  const [types, setTypes] = useState([]);
  const [batches, setBatches] = useState([]);
  const [projects, setProjects] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [internalEvaluators, setInternalEvaluators] = useState([]);
  const [externalEvaluators, setExternalEvaluators] = useState([]);

  const [type, setType] = useState('');
  const [batch, setBatch] = useState('');
  const [project, setProject] = useState('');
  const [room, setRoom] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [selectedInternalEvaluators, setSelectedInternalEvaluators] = useState([]);
  const [selectedExternalEvaluators, setSelectedExternalEvaluators] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/MobApp/my-app/php_api/events.php')
      .then(response => {
        setTypes(Array.isArray(response.data) ? response.data : []);
      })
      .catch(error => console.error('Error fetching event types:', error));

    axios.get('http://localhost/MobApp/my-app/php_api/getBatches.php')
      .then(response => {
        setBatches(Array.isArray(response.data.batches) ? response.data.batches : []);
      })
      .catch(error => console.error('Error fetching batches:', error));

    axios.get('http://localhost/MobApp/my-app/php_api/GetInternalEvaluator.php')
      .then(response => {
        setInternalEvaluators(Array.isArray(response.data) ? response.data : []);
      })
      .catch(error => console.error('Error fetching internal evaluators:', error));

    axios.get('http://localhost/MobApp/my-app/php_api/GetExternalEvaluator.php')
      .then(response => {
        setExternalEvaluators(Array.isArray(response.data) ? response.data : []);
      })
      .catch(error => console.error('Error fetching external evaluators:', error));
  }, []);

  useEffect(() => {
    if (batch && type) {
      axios.get(`http://localhost/MobApp/my-app/php_api/project.php?batch=${batch}&type=${type}`)
        .then(response => {
          console.log(response); // Check the full response
          try {
            const data = response.data;
            if (data && data.projects && data.projects.length > 0) {
              setProjects(data.projects);
            } else {
              setProjects([]);
            }
          } catch (error) {
            console.error('Error parsing JSON:', error);
          }
        })
        .catch(error => {
          console.error('Error fetching projects:', error);
        });
    }
  }, [batch, type]);

  const handleUpdateRooms = () => {
    if (date && time) {
      axios.get(`http://localhost/MobApp/my-app/php_api/getRoom.php?date=${date}&time=${time}`)
        .then(response => {
          setRooms(Array.isArray(response.data.rooms) ? response.data.rooms : []);
        })
        .catch(error => console.error('Error fetching rooms:', error));
    }
  };

  const handleSubmit = () => {
    const currentDate = new Date().toISOString().split('T')[0];
    const currentTime = new Date().toLocaleTimeString('en-US', { hour12: false }).split(':').slice(0, 2).join(':');
    
    // Validate if the selected date is in the future
    if (!date || date < currentDate) {
      Alert.alert('Error', 'You cannot assign a presentation to a past date!');
      return;
    }

    // Validate if the selected time is in the future
    if (date === currentDate && time < currentTime) {
      Alert.alert('Error', 'You cannot assign a presentation to a past time!');
      return;
    }

    if (!type || !batch || !project || !room || !date || !time || selectedInternalEvaluators.length === 0 || selectedExternalEvaluators.length === 0) {
      Alert.alert('Error', 'Please fill in all required fields!');
      return;
    }

    axios.post('http://localhost/MobApp/my-app/php_api/schedulePresentation.php', {
      type,
      batch,
      room,
      date,
      time,
      project,
      internalEvaluators: selectedInternalEvaluators,
      externalEvaluators: selectedExternalEvaluators
    })
      .then(response => {
        if (response.data.success) {
          Alert.alert('Success', 'Presentation successfully scheduled!');
        } else {
          Alert.alert('Error', response.data.error || 'Something went wrong.');
        }
      })
      .catch(error => {
        console.error('Error scheduling presentation:', error);
        Alert.alert('Error', 'There was an issue scheduling the presentation.');
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
     {/* Include Sidebar */}
     <Sidebar />
      <Text style={styles.title}>Schedule Presentation</Text>

      <View style={styles.formContainer}>
        {/* Event Type Picker */}
        <Picker
          selectedValue={type}
          onValueChange={(itemValue) => setType(itemValue)}
        >
          <Picker.Item label="Select Event Type" value="" />
          {types.length > 0 ? types.map((item) => (
            <Picker.Item key={item.eventID} label={item.EventName} value={item.eventID} />
          )) : <Picker.Item label="No event types available" value="" />}
        </Picker>

        {/* Batch Picker */}
        <Picker
          selectedValue={batch}
          onValueChange={(itemValue) => setBatch(itemValue)}
        >
          <Picker.Item label="Select Batch" value="" />
          {batches.length > 0 ? batches.map((item) => (
            <Picker.Item key={item.BatchID} label={item.BatchName} value={item.BatchID} />
          )) : <Picker.Item label="No batches available" value="" />}
        </Picker>

        {/* Project Picker */}
        <Picker
          selectedValue={project}
          onValueChange={(itemValue) => setProject(itemValue)}
        >
          <Picker.Item label="Select Project" value="" />
          {projects && projects.length > 0 ? (
            projects.map((item) => (
              <Picker.Item key={item.project_id} label={item.title} value={item.project_id} />
            ))
          ) : (
            <Picker.Item label="No projects available" value="" />
          )}
        </Picker>

        {/* Date Input */}
        <TextInput
          style={styles.input}
          placeholder="Select Date (YYYY-MM-DD)"
          value={date}
          onChangeText={(text) => {
            setDate(text);
            handleUpdateRooms();
          }}
        />

        {/* Time Input */}
        <TextInput
          style={styles.input}
          placeholder="Select Time (HH:MM)"
          value={time}
          onChangeText={(text) => {
            setTime(text);
            handleUpdateRooms();
          }}
        />

        {/* Room Picker */}
        <Picker
          selectedValue={room}
          onValueChange={(itemValue) => setRoom(itemValue)}
        >
          <Picker.Item label="Select Room" value="" />
          {rooms.length > 0 ? rooms.map((item) => (
            <Picker.Item key={item.room_id} label={item.room_number} value={item.room_id} />
          )) : <Picker.Item label="No rooms available" value="" />}
        </Picker>

        {/* Internal Evaluator Pickers */}
        <View style={styles.evaluatorContainer}>
          <Text>Internal Evaluators:</Text>
          {selectedInternalEvaluators.map((id, index) => (
            <Picker
              key={index}
              selectedValue={id}
              onValueChange={(itemValue) => {
                const updatedEvaluators = [...selectedInternalEvaluators];
                updatedEvaluators[index] = itemValue;
                setSelectedInternalEvaluators(updatedEvaluators);
              }}
            >
              <Picker.Item label="Select Evaluator" value="" />
              {internalEvaluators.map((evaluator) => (
                <Picker.Item key={evaluator.faculty_id} label={evaluator.username} value={evaluator.faculty_id} />
              ))}
            </Picker>
          ))}
          <TouchableOpacity onPress={() => setSelectedInternalEvaluators([...selectedInternalEvaluators, ''])}>
            <Text style={styles.addButton}>Add Internal Evaluator</Text>
          </TouchableOpacity>
        </View>

        {/* External Evaluator Pickers */}
        <View style={styles.evaluatorContainer}>
          <Text>External Evaluators:</Text>
          {selectedExternalEvaluators.map((id, index) => (
            <Picker
              key={index}
              selectedValue={id}
              onValueChange={(itemValue) => {
                const updatedEvaluators = [...selectedExternalEvaluators];
                updatedEvaluators[index] = itemValue;
                setSelectedExternalEvaluators(updatedEvaluators);
              }}
            >
              <Picker.Item label="Select Evaluator" value="" />
              {externalEvaluators.map((evaluator) => (
                <Picker.Item key={evaluator.external_id} label={evaluator.name} value={evaluator.external_id} />
              ))}
            </Picker>
          ))}
          <TouchableOpacity onPress={() => setSelectedExternalEvaluators([...selectedExternalEvaluators, ''])}>
            <Text style={styles.addButton}>Add External Evaluator</Text>
          </TouchableOpacity>
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  formContainer: {
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    color: '#007BFF',
    marginTop: 10,
  },
  evaluatorContainer: {
    marginBottom: 20,
  },
});

export default SchedulePresentation;
