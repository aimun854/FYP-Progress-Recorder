// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, Button, TouchableOpacity, Modal, TextInput, CheckBox, Alert } from 'react-native';
// import axios from 'axios';

// const ResultList = () => {
//   const [results, setResults] = useState([]);
//   const [isEditModalVisible, setEditModalVisible] = useState(false);
//   const [selectedResult, setSelectedResult] = useState(null);
//   const [isAudienceModalVisible, setAudienceModalVisible] = useState(false);
//   const [marks, setMarks] = useState('');
//   const [gpa, setGpa] = useState('');
//   const [grade, setGrade] = useState('');
//   const [audience, setAudience] = useState({
//     coordinator: false,
//     admin: false,
//     faculty: false,
//     all: false,
//   });

//   useEffect(() => {
//     // Fetch results from the server
//     axios.get('http://yourserver.com/api/results')
//       .then(response => setResults(response.data))
//       .catch(error => console.error('Error fetching results', error));
//   }, []);

//   const handleEdit = (result) => {
//     setSelectedResult(result);
//     setMarks(result.marks);
//     setGpa(result.gpa);
//     setGrade(result.grade);
//     setEditModalVisible(true);
//   };

//   const handlePublish = (resultId) => {
//     setAudienceModalVisible(true);
//     setSelectedResult(results.find(result => result.id === resultId));
//   };

//   const handleAudienceChange = (audienceType) => {
//     if (audienceType === 'all') {
//       setAudience({
//         coordinator: true,
//         admin: true,
//         faculty: true,
//         all: !audience.all,
//       });
//     } else {
//       setAudience(prevState => ({
//         ...prevState,
//         [audienceType]: !prevState[audienceType],
//       }));
//     }
//   };

//   const handleSaveEdit = () => {
//     if (marks <= selectedResult.totalMarks) {
//       axios.post('http://yourserver.com/api/updateResult', {
//         id: selectedResult.id,
//         marks,
//         gpa,
//         grade,
//       })
//       .then(response => {
//         alert('Result updated successfully');
//         setEditModalVisible(false);
//       })
//       .catch(error => alert('Error updating result'));
//     } else {
//       alert('Marks cannot exceed total marks');
//     }
//   };

//   const handlePublishResult = () => {
//     const audienceTypes = [];
//     if (audience.coordinator) audienceTypes.push('Coordinator');
//     if (audience.admin) audienceTypes.push('Admin');
//     if (audience.faculty) audienceTypes.push('Faculty');

//     if (audienceTypes.length > 0) {
//       axios.post('http://yourserver.com/api/publishResult', {
//         resultId: selectedResult.id,
//         audienceTypes,
//       })
//       .then(response => {
//         alert('Result published successfully');
//         setAudienceModalVisible(false);
//       })
//       .catch(error => alert('Error publishing result'));
//     } else {
//       alert('Please select an audience');
//     }
//   };

//   return (
//     <View style={{ flex: 1, padding: 20 }}>
//       <FlatList
//         data={results}
//         keyExtractor={item => (item && item.id ? item.id.toString() : 'default')}
//         renderItem={({ item }) => (
//           <View style={{ marginBottom: 20 }}>
//             <Text>Title: {item.title}</Text>
//             <Text>Marks: {item.marks}</Text>
//             <Text>GPA: {item.gpa}</Text>
//             <Text>Grade: {item.grade}</Text>
//             <TouchableOpacity onPress={() => handleEdit(item)}>
//               <Text style={{ color: 'blue' }}>Edit</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => handlePublish(item.id)}>
//               <Text style={{ color: 'green' }}>Publish</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />

//       {/* Edit Modal */}
//       <Modal visible={isEditModalVisible} onRequestClose={() => setEditModalVisible(false)} animationType="slide">
//         <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
//           <Text>Edit Result</Text>
//           <TextInput 
//             placeholder="Marks" 
//             value={marks} 
//             onChangeText={setMarks} 
//             keyboardType="numeric"
//           />
//           <TextInput 
//             placeholder="GPA" 
//             value={gpa} 
//             onChangeText={setGpa} 
//           />
//           <TextInput 
//             placeholder="Grade" 
//             value={grade} 
//             onChangeText={setGrade} 
//           />
//           <Button title="Save" onPress={handleSaveEdit} />
//           <Button title="Close" onPress={() => setEditModalVisible(false)} />
//         </View>
//       </Modal>

//       {/* Audience Selection Modal */}
//       <Modal visible={isAudienceModalVisible} onRequestClose={() => setAudienceModalVisible(false)} animationType="slide">
//         <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
//           <Text>Select Audience</Text>
//           <CheckBox value={audience.all} onValueChange={() => handleAudienceChange('all')} />
//           <Text>All</Text>
//           <CheckBox value={audience.coordinator} onValueChange={() => handleAudienceChange('coordinator')} />
//           <Text>Coordinator</Text>
//           <CheckBox value={audience.admin} onValueChange={() => handleAudienceChange('admin')} />
//           <Text>Admin</Text>
//           <CheckBox value={audience.faculty} onValueChange={() => handleAudienceChange('faculty')} />
//           <Text>Faculty</Text>
//           <Button title="Publish" onPress={handlePublishResult} />
//           <Button title="Close" onPress={() => setAudienceModalVisible(false)} />
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default ResultList;



// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, TouchableOpacity, Modal, TextInput, CheckBox, Button, StyleSheet } from 'react-native';
// import axios from 'axios';

// const ResultList = () => {
//   const [results, setResults] = useState([]);
//   const [isEditModalVisible, setEditModalVisible] = useState(false);
//   const [selectedResult, setSelectedResult] = useState(null);
//   const [isAudienceModalVisible, setAudienceModalVisible] = useState(false);
//   const [marks, setMarks] = useState('');
//   const [gpa, setGpa] = useState('');
//   const [grade, setGrade] = useState('');
//   const [audience, setAudience] = useState({
//     coordinator: false,
//     admin: false,
//     faculty: false,
//     all: false,
//   });

//   useEffect(() => {
//     // Fetch results from the server
//     axios.get('http://localhost/MobApp/my-app/php_api/results.php')
//       .then(response => setResults(response.data))
//       .catch(error => console.error('Error fetching results', error));
//   }, []);

//   const handleEdit = (result) => {
//     setSelectedResult(result);
//     setMarks(result.marks);
//     setGpa(result.gpa);
//     setGrade(result.grade);
//     setEditModalVisible(true);
//   };

//   const handlePublish = (resultId) => {
//     setAudienceModalVisible(true);
//     setSelectedResult(results.find(result => result.id === resultId));
//   };

//   const handleAudienceChange = (audienceType) => {
//     if (audienceType === 'all') {
//       setAudience({
//         coordinator: true,
//         admin: true,
//         faculty: true,
//         all: !audience.all,
//       });
//     } else {
//       setAudience(prevState => ({
//         ...prevState,
//         [audienceType]: !prevState[audienceType],
//       }));
//     }
//   };

//   const handleSaveEdit = () => {
//     if (marks <= selectedResult.totalMarks) {
//       axios.post('http://localhost/MobApp/my-app/php_api/updateResult.php', {
//         id: selectedResult.id,
//         marks,
//         gpa,
//         grade,
//       })
//       .then(response => {
//         alert('Result updated successfully');
//         setEditModalVisible(false);
//       })
//       .catch(error => alert('Error updating result'));
//     } else {
//       alert('Marks cannot exceed total marks');
//     }
//   };

//   const handlePublishResult = () => {
//     const audienceTypes = [];
//     if (audience.coordinator) audienceTypes.push('Coordinator');
//     if (audience.admin) audienceTypes.push('Admin');
//     if (audience.faculty) audienceTypes.push('Faculty');

//     if (audienceTypes.length > 0) {
//       axios.post('http://localhost/MobApp/my-app/php_api/publishResult.php', {
//         resultId: selectedResult.id,
//         audienceTypes,
//       })
//       .then(response => {
//         alert('Result published successfully');
//         setAudienceModalVisible(false);
//       })
//       .catch(error => alert('Error publishing result'));
//     } else {
//       alert('Please select an audience');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Student Results</Text>
      
//       {/* Select Title & Fetch Results */}
//       <View style={styles.actionContainer}>
//         <TextInput style={styles.selectInput} placeholder="Select Title" />
//         <TouchableOpacity style={styles.button} onPress={() => {}}>
//           <Text style={styles.buttonText}>Fetch Results</Text>
//         </TouchableOpacity>
//       </View>
      
//       {/* Publish Button */}
//       <TouchableOpacity style={[styles.button, { backgroundColor: 'red' }]} onPress={() => {}}>
//         <Text style={styles.buttonText}>Select Audience & Publish</Text>
//       </TouchableOpacity>

//       {/* Results Table */}
//       <FlatList
//         data={results}
//         keyExtractor={item => (item && item.id ? item.id.toString() : 'default')}
//         renderItem={({ item, index }) => (
//           <View style={styles.resultRow}>
//             <Text style={styles.rowText}>{index + 1}</Text>
//             <Text style={styles.rowText}>{item.projectId}</Text>
//             <Text style={styles.rowText}>{item.projectTitle}</Text>
//             <Text style={styles.rowText}>{item.studentId}</Text>
//             <Text style={styles.rowText}>{item.obtainedMarks}</Text>
//             <Text style={styles.rowText}>{item.totalMarks}</Text>
//             <Text style={styles.rowText}>{item.gpa}</Text>
//             <Text style={styles.rowText}>{item.grade}</Text>
//             <TouchableOpacity onPress={() => handleEdit(item)}>
//               <Text style={styles.actionText}>Edit</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => handlePublish(item.id)}>
//               <Text style={styles.actionText}>Publish</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />

//       {/* Edit Modal */}
//       <Modal visible={isEditModalVisible} onRequestClose={() => setEditModalVisible(false)} animationType="slide">
//         <View style={styles.modalContainer}>
//           <Text>Edit Result</Text>
//           <TextInput style={styles.input} placeholder="Marks" value={marks} onChangeText={setMarks} keyboardType="numeric" />
//           <TextInput style={styles.input} placeholder="GPA" value={gpa} onChangeText={setGpa} />
//           <TextInput style={styles.input} placeholder="Grade" value={grade} onChangeText={setGrade} />
//           <Button title="Save" onPress={handleSaveEdit} />
//           <Button title="Close" onPress={() => setEditModalVisible(false)} />
//         </View>
//       </Modal>

//       {/* Audience Selection Modal */}
//       <Modal visible={isAudienceModalVisible} onRequestClose={() => setAudienceModalVisible(false)} animationType="slide">
//         <View style={styles.modalContainer}>
//           <Text>Select Audience</Text>
//           <CheckBox value={audience.all} onValueChange={() => handleAudienceChange('all')} />
//           <Text>All</Text>
//           <CheckBox value={audience.coordinator} onValueChange={() => handleAudienceChange('coordinator')} />
//           <Text>Coordinator</Text>
//           <CheckBox value={audience.admin} onValueChange={() => handleAudienceChange('admin')} />
//           <Text>Admin</Text>
//           <CheckBox value={audience.faculty} onValueChange={() => handleAudienceChange('faculty')} />
//           <Text>Faculty</Text>
//           <Button title="Publish" onPress={handlePublishResult} />
//           <Button title="Close" onPress={() => setAudienceModalVisible(false)} />
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   actionContainer: {
//     flexDirection: 'row',
//     marginBottom: 20,
//   },
//   selectInput: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     width: '60%',
//     marginRight: 10,
//   },
//   button: {
//     backgroundColor: 'green',
//     padding: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//   },
//   resultRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//     borderBottomWidth: 1,
//     paddingVertical: 10,
//     borderBottomColor: '#ccc',
//   },
//   rowText: {
//     width: '10%',
//     textAlign: 'center',
//   },
//   actionText: {
//     color: 'blue',
//     marginLeft: 10,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 10,
//   },
// });

// export default ResultList;


import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, TextInput, CheckBox, Button, StyleSheet, Alert } from 'react-native';

import axios from 'axios';

const ResultList = () => {
  const [results, setResults] = useState([]);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [selectedResult, setSelectedResult] = useState(null);
  const [isAudienceModalVisible, setAudienceModalVisible] = useState(false);
  const [marks, setMarks] = useState('');
  const [gpa, setGpa] = useState('');
  const [grade, setGrade] = useState('');
  const [audience, setAudience] = useState({
    coordinator: false,
    admin: false,
    faculty: false,
    all: false,
  });

  useEffect(() => {
    // Fetch results from the server
    axios.get('http://localhost/MobApp/my-app/php_api/results.php')
      .then(response => setResults(response.data))
      .catch(error => console.error('Error fetching results', error));
  }, []);

  const handleEdit = (result) => {
    setSelectedResult(result);
    setMarks(result.marks);
    setGpa(result.gpa);
    setGrade(result.grade);
    setEditModalVisible(true);
  };

  const handlePublish = (resultId) => {
    setAudienceModalVisible(true);
    setSelectedResult(results.
find(result => result.id === resultId));

  };

  const handleAudienceChange = (audienceType) => {
    if (audienceType === 'all') {
      setAudience({
        coordinator: true,
        admin: true,
        faculty: true,
        all: !audience.all,
      });
    } else {
      setAudience(prevState => ({
        ...prevState,
        [audienceType]: !prevState[audienceType],
      }));
    }
  };

  const handleSaveEdit = () => {
    if (marks <= selectedResult.totalMarks) {
      axios.post('http://localhost/MobApp/my-app/php_api/updateResult.php', {
        id: selectedResult.id,
        marks,
        gpa,
        grade,
      })
        .then(response => {
          alert('Result updated successfully');
          setEditModalVisible(false);
        })
        .catch(error => alert('Error updating result'));
    } else {
      alert('Marks cannot exceed total marks');
    }
  };

  const handlePublishResult = () => {
    const audienceTypes = [];
    if (audience.coordinator) audienceTypes.push('Coordinator');

    if (audience.admin) audienceTypes.push('Admin');
    if (audience.faculty) audienceTypes.push('Faculty');

    if (audienceTypes.length > 0) {
      axios.post('http://localhost/MobApp/my-app/php_api/publishResult.php', {
        resultId: selectedResult.id,
        audienceTypes,
      })
        .then(response => {
          alert('Result published successfully');
          setAudienceModalVisible(false)
;

        })
        .catch(error => alert('Error publishing result'));
    } else {
      alert('Please select an audience');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Student Results</Text>

      {/* Results Table */}
      <FlatList
  data={results}
  keyExtractor={item => (item && item.project_id ? item.project_id.toString() : `${Math.random()}`)}  // Fallback to a random string if `id` is undefined
  renderItem={({ item, index }) => (
    <View style={styles.resultRow}>
      <Text style={[styles.rowText, styles.indexColumn]}>{index + 1}</Text>
      <Text style={styles.rowText}>{item.projectId}</Text>
      <Text style={styles.rowText}>{item.projectTitle}</Text>
      <Text style={styles.rowText}>{item.studentId}</Text>
      <Text style={styles.rowText}>{item.obtainedMarks}</Text>
      <Text style={styles.rowText}>{item.totalMarks}</Text>
      <Text style={styles.rowText}>{item.gpa}</Text>
      <Text style={styles.rowText}>{item.grade}</Text>
      <TouchableOpacity onPress={() => handleEdit(item)} style={styles.actionButton}>
        <Text style={styles.actionText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePublish(item.id)} style={styles.actionButton}>
        <Text style={styles.actionText}>Publish</Text>
      </TouchableOpacity>
    </View>
  )}
/>

      {/* Edit Modal */}
      <Modal visible={isEditModalVisible} onRequestClose={() => setEditModalVisible(false)} animationType="slide">
        <View style={styles.modalContainer}>
          <Text>Edit Result</Text>
          <TextInput
            style={styles.input}
            placeholder="Marks"
            value={marks}
            onChangeText={setMarks}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="GPA"
            value={gpa}
            onChangeText={setGpa}
          />
          <TextInput
            style={styles.input}
            placeholder="Grade"
            value={grade}
            onChangeText={setGrade}
          />
          <Button title="Save" onPress={handleSaveEdit} />
          <Button title="Close" onPress={() => setEditModalVisible(false)} />
        </View>
      </Modal>

      {/* Audience Selection Modal */}
      <Modal visible={isAudienceModalVisible} onRequestClose={() => setAudienceModalVisible(false)} animationType="slide">

        <View style={styles.modalContainer}>
          <Text>Select Audience</Text>
          <CheckBox value={audience.all} onValueChange={() => handleAudienceChange('all')} />
          <Text>All</Text>
          <CheckBox value={audience.coordinator} onValueChange={() => handleAudienceChange('coordinator')} />

          <Text>Coordinator</Text>
          <CheckBox value={audience.admin} onValueChange={() => handleAudienceChange('admin')} />
          <Text>Admin</Text>
          <CheckBox value={audience.faculty} onValueChange={() => handleAudienceChange('faculty'
)} />

          <Text>Faculty</Text>
          <Button title="Publish" onPress={handlePublishResult} />
          <Button title="Close" onPress={() => setAudienceModalVisible(false)
} />

        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resultRow: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  rowText: {
    flex: 1,
    textAlign: 'center',
    padding: 5,
  },
  indexColumn: {
    width: '5%',
  },
  actionButton: {
    marginLeft: 10,
  },
  actionText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default ResultList;