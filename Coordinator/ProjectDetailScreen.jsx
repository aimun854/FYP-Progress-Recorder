// import React, { useState, useEffect } from 'react';
// import { View, Text, Picker, Button, FlatList, StyleSheet, SafeAreaView } from 'react-native';
// import axios from 'axios';


// const ProjectDetailScreen = ({ navigation }) => {
//   const [durationId, setDurationId] = useState('');
//   const [batchId, setBatchId] = useState('');
//   const [durations, setDurations] = useState([]);
//   const [batches, setBatches] = useState([]);
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     // Fetch durations and batches when the component mounts
//     fetchFilters();
//   }, []);

//   useEffect(() => {
//     // Fetch projects whenever duration or batch filter changes
//     if (durationId || batchId) {
//       fetchProjects();
//     }
//   }, [durationId, batchId]);

//   const fetchFilters = async () => {
//     try {
//       const [durationRes, batchRes] = await Promise.all([
//         axios.get('https://localhost/MobApp/my-app/php_api/fetch-durations.php'),
//         axios.get('https://localhost/MobApp/my-app/php_api/fetch-batches.php')
//       ]);
//       setDurations(durationRes.data);
//       setBatches(batchRes.data);
//     } catch (error) {
//       console.error('Error fetching filters', error);
//     }
//   };

//   const fetchProjects = async () => {
//     try {
//       const response = await axios.get('https://localhost/MobApp/my-app/php_api/fetch-projects.php', {
//         params: { duration_id: durationId, batch_id: batchId },
//       });
//       setProjects(response.data);
//     } catch (error) {
//       console.error('Error fetching projects', error);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.filterSection}>
//         <Picker
//           selectedValue={durationId}
//           onValueChange={(itemValue) => setDurationId(itemValue)}
//           style={styles.picker}>
//           <Picker.Item label="Select Duration" value="" />
//           {durations.map((duration) => (
//             <Picker.Item key={duration.id} label={duration.title} value={duration.id} />
//           ))}
//         </Picker>
//         <Picker
//           selectedValue={batchId}
//           onValueChange={(itemValue) => setBatchId(itemValue)}
//           style={styles.picker}>
//           <Picker.Item label="Select Batch" value="" />
//           {batches.map((batch) => (
//             <Picker.Item key={batch.batchID} label={batch.BatchName} value={batch.batchID} />
//           ))}
//         </Picker>
//       </View>
//       <FlatList
//         data={projects}
//         keyExtractor={(item) => item.project_id.toString()}
//         renderItem={({ item, index }) => (
//           <View style={styles.projectRow}>
//             <Text>{index + 1}</Text>
//             <Text>{item.project_id}</Text>
//             <Text>{item.title}</Text>
//             <Text>{item.description}</Text>
//             <Text>{item.student1}</Text>
//             <Text>{item.student2}</Text>
//             <Text>{item.student3}</Text>
//             <Text>{item.student4}</Text>
//             <Text>{item.supervisor}</Text>
//             <Text>{item.co_supervisor}</Text>
//             <Text>{item.external_supervisor}</Text>
//             <Text>{item.batch}</Text>
//           </View>
//         )}
//       />
//     </SafeAreaView>
//   );
// };

// export default ProjectDetailScreen;




// import React, { useState, useEffect } from 'react';
// import { View, Text, Picker, Button, FlatList, StyleSheet, SafeAreaView } from 'react-native';
// import axios from 'axios';

// const ProjectDetailScreen = ({ navigation }) => {
//   const [durationId, setDurationId] = useState('');
//   const [batchId, setBatchId] = useState('');
//   const [durations, setDurations] = useState([]);
//   const [batches, setBatches] = useState([]);
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     // Fetch durations and batches when the component mounts
//     fetchFilters();
//   }, []);

//   useEffect(() => {
//     // Fetch projects whenever duration or batch filter changes
//     if (durationId || batchId) {
//       fetchProjects();
//     }
//   }, [durationId, batchId]);

//   const fetchFilters = async () => {
//     try {
//       const [durationRes, batchRes] = await Promise.all([
//         // axios.get('https://localhost/MobApp/my-app/php_api/fetch-durations.php'),
//         axios.get('http://localhost/MobApp/my-app/php_api/fetch-batches.php'),
//       ]);
//       setDurations(durationRes.data);
//       setBatches(batchRes.data);
//     } catch (error) {
//       console.error('Error fetching filters', error);
//     }
//   };

//   const fetchProjects = async () => {
//     try {
//       const response = await axios.get('http://localhost/MobApp/my-app/php_api/fetch-projects.php', {
//         params: { duration_id: durationId, batch_id: batchId },
//       });
//       setProjects(response.data);
//     } catch (error) {
//       console.error('Error fetching projects', error);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.filterSection}>
//         <Picker
//           selectedValue={durationId}
//           onValueChange={(itemValue) => setDurationId(itemValue)}
//           style={styles.picker}>
//           <Picker.Item label="Select Duration" value="" />
//           {durations.map((duration) => (
//             <Picker.Item key={duration.id} label={duration.title} value={duration.id} />
//           ))}
//         </Picker>
//         <Picker
//           selectedValue={batchId}
//           onValueChange={(itemValue) => setBatchId(itemValue)}
//           style={styles.picker}>
//           <Picker.Item label="Select Batch" value="" />
//           {batches.map((batch) => (
//             <Picker.Item key={batch.batchID} label={batch.BatchName} value={batch.batchID} />
//           ))}
//         </Picker>
//       </View>
//       <FlatList
//         data={projects}
//         keyExtractor={(item) => item.project_id.toString()}
//         renderItem={({ item, index }) => (
//           <View style={styles.projectRow}>
//             <Text style={styles.projectDetail}>Project {index + 1}</Text>
//             <Text style={styles.projectDetail}>Project ID: {item.project_id}</Text>
//             <Text style={styles.projectDetail}>Title: {item.title}</Text>
//             <Text style={styles.projectDetail}>Description: {item.description}</Text>
//             <Text style={styles.projectDetail}>Student 1: {item.student1}</Text>
//             <Text style={styles.projectDetail}>Student 2: {item.student2}</Text>
//             <Text style={styles.projectDetail}>Student 3: {item.student3}</Text>
//             <Text style={styles.projectDetail}>Student 4: {item.student4}</Text>
//             <Text style={styles.projectDetail}>Supervisor: {item.supervisor}</Text>
//             <Text style={styles.projectDetail}>Co-Supervisor: {item.co_supervisor}</Text>
//             <Text style={styles.projectDetail}>External Supervisor: {item.external_supervisor}</Text>
//             <Text style={styles.projectDetail}>Batch: {item.batch}</Text>
//           </View>
//         )}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   filterSection: {
//     marginBottom: 20,
//   },
//   picker: {
//     height: 50,
//     width: '100%',
//     marginVertical: 10,
//   },
//   projectRow: {
//     marginBottom: 15,
//     padding: 10,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   projectDetail: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
// });

// export default ProjectDetailScreen;
// import React, { useState, useEffect } from 'react';
// import { View, Text, Picker, FlatList, StyleSheet, SafeAreaView, Alert } from 'react-native';
// import axios from 'axios';

// const ProjectDetailScreen = () => {
//   const [batchId, setBatchId] = useState('');
//   const [batches, setBatches] = useState([]);
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     // Fetch batches when the component mounts
//     fetchBatches();
//   }, []);

//   useEffect(() => {
//     // Fetch projects whenever batch filter changes
//     if (batchId) {
//       fetchProjects();
//     } else {
//       setProjects([]); // Clear projects if no batch is selected
//     }
//   }, [batchId]);

//   const fetchBatches = async () => {
//     try {
//       const response = await axios.get('http://localhost/MobApp/my-app/php_api/fetch-batches.php');
//       console.log('Batches API Response:', response.data); // Debugging
//       setBatches(response.data);
//     } catch (error) {
//       console.error('Error fetching batches:', error);
//       Alert.alert('Error', 'Unable to fetch batches. Please try again.');
//     }
//   };

//   const fetchProjects = async () => {
//     try {
//       const response = await axios.get('http://localhost/MobApp/my-app/php_api/fetch-projects.php', {
//         params: { batch_id: batchId },
//       });
//       console.log('Projects API Response:', response.data); // Debugging
//       setProjects(response.data);
//     } catch (error) {
//       console.error('Error fetching projects:', error);
//       Alert.alert('Error', 'Unable to fetch projects. Please try again.');
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.filterSection}>
//         <Picker
//           selectedValue={batchId}
//           onValueChange={(itemValue) => setBatchId(itemValue)}
//           style={styles.picker}>
//           <Picker.Item label="Select Batch" value="" />
//           {batches.map((batch) => (
//             <Picker.Item key={batch.batchID} label={batch.BatchName} value={batch.batchID} />
//           ))}
//         </Picker>
//       </View>
//       <FlatList
//         data={projects}
//         keyExtractor={(item) => item.project_id.toString()}
//         renderItem={({ item, index }) => (
//           <View style={styles.projectRow}>
//             <Text style={styles.projectDetail}>Project {index + 1}</Text>
//             <Text style={styles.projectDetail}>Project ID: {item.project_id}</Text>
//             <Text style={styles.projectDetail}>Title: {item.title}</Text>
//             <Text style={styles.projectDetail}>Description: {item.description}</Text>
//             <Text style={styles.projectDetail}>Student 1: {item.student1}</Text>
//             <Text style={styles.projectDetail}>Student 2: {item.student2}</Text>
//             <Text style={styles.projectDetail}>Student 3: {item.student3}</Text>
//             <Text style={styles.projectDetail}>Student 4: {item.student4}</Text>
//             <Text style={styles.projectDetail}>Supervisor: {item.supervisor}</Text>
//             <Text style={styles.projectDetail}>Co-Supervisor: {item.co_supervisor}</Text>
//             <Text style={styles.projectDetail}>External Supervisor: {item.external_supervisor}</Text>
//             <Text style={styles.projectDetail}>Batch: {item.batch}</Text>
//           </View>
//         )}
//         ListEmptyComponent={() => (
//           <Text style={styles.noDataText}>No projects available for the selected batch.</Text>
//         )}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   filterSection: {
//     marginBottom: 20,
//   },
//   picker: {
//     height: 50,
//     width: '100%',
//     marginVertical: 10,
//   },
//   projectRow: {
//     marginBottom: 15,
//     padding: 10,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   projectDetail: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   noDataText: {
//     textAlign: 'center',
//     marginTop: 20,
//     fontSize: 16,
//     color: '#888',
//   },
// });

// export default ProjectDetailScreen;


// neewwwww
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Picker, FlatList, SafeAreaView, ScrollView, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';
// Import Sidebar
import Sidebar from '../Coordinator/Sidebar';

const ProjectDetailsScreen = () => {
  const [durationId, setDurationId] = useState('');
  const [batchId, setBatchId] = useState('');
  const [durationOptions, setDurationOptions] = useState([]);
  const [batchOptions, setBatchOptions] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch filter options when the component mounts
    fetchDurations();
    fetchBatches();
  }, []);

  useEffect(() => {
    // Fetch projects when filters change
    if (durationId || batchId) {
      fetchProjects();
    } else {
      setProjects([]);
    }
  }, [durationId, batchId]);

  // const fetchDurations = async () => {
  //   try {
  //     const response = await axios.get('http://localhost/MobApp/my-app/php_api/fetch-durations.php');
  //     setDurationOptions(response.data);
  //   } catch (error) {
  //     console.error('Error fetching durations:', error);
  //     Alert.alert('Error', 'Unable to fetch durations.');
  //   }
  // };

  const fetchBatches = async () => {
    try {
      const response = await axios.get('http://localhost/MobApp/my-app/php_api/fetch-batches.php');
      setBatchOptions(response.data);
    } catch (error) {
      console.error('Error fetching batches:', error);
      Alert.alert('Error', 'Unable to fetch batches.');
    }
  };

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost/MobApp/my-app/php_api/fetch-projects.php', {
        params: {
          duration_id: durationId,
          batch_id: batchId,
        },
      });
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
      Alert.alert('Error', 'Unable to fetch projects.');
    } finally {
      setLoading(false);
    }
  };

  const renderProject = ({ item, index }) => (
    <View style={styles.projectCard}>
      <Text style={styles.projectDetail}>S. No.: {index + 1}</Text>
      <Text style={styles.projectDetail}>Project ID: {item.project_id}</Text>
      <Text style={styles.projectDetail}>Title: {item.title}</Text>
      <Text style={styles.projectDetail}>Description: {item.description}</Text>
      <Text style={styles.projectDetail}>Student 1: {item.student1}</Text>
      <Text style={styles.projectDetail}>Student 2: {item.student2}</Text>
      <Text style={styles.projectDetail}>Student 3: {item.student3}</Text>
      <Text style={styles.projectDetail}>Student 4: {item.student4}</Text>
      <Text style={styles.projectDetail}>Supervisor: {item.supervisor}</Text>
      <Text style={styles.projectDetail}>Co-Supervisor: {item.co_supervisor}</Text>
      <Text style={styles.projectDetail}>External Supervisor: {item.external_supervisor}</Text>
      <Text style={styles.projectDetail}>Batch: {item.batch}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
     {/* Include Sidebar */}
     <Sidebar />
      <ScrollView>
        <Text style={styles.heading}>Project Details</Text>
        <View style={styles.filterContainer}>
          <Picker
            selectedValue={durationId}
            onValueChange={(value) => setDurationId(value)}
            style={styles.picker}>
            <Picker.Item label="Select Duration" value="" />
            {durationOptions.map((option) => (
              <Picker.Item key={option.id} label={option.title} value={option.id} />
            ))}
          </Picker>
          <Picker
            selectedValue={batchId}
            onValueChange={(value) => setBatchId(value)}
            style={styles.picker}>
            <Picker.Item label="Select Batch" value="" />
            {batchOptions.map((option) => (
              <Picker.Item key={option.batchID} label={option.BatchName} value={option.batchID} />
            ))}
          </Picker>
        </View>
        {loading ? (
          <ActivityIndicator size="large" color="#0a4a91" />
        ) : (
          <FlatList
            data={projects}
            keyExtractor={(item) => item.project_id.toString()}
            renderItem={renderProject}
            ListEmptyComponent={<Text style={styles.noDataText}>No projects found for the selected filters.</Text>}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0a4a91',
    textAlign: 'center',
    marginVertical: 10,
  },
  filterContainer: {
    marginBottom: 20,
  },
  picker: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 10,
  },
  projectCard: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  projectDetail: {
    fontSize: 16,
    marginBottom: 5,
  },
  noDataText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
});

export default ProjectDetailsScreen;
