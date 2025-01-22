// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet } from 'react-native';
// import axios from 'axios'; // Make sure axios is installed

// const ViewResults = ({ navigation }) => {
//   const [batches, setBatches] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBatches = async () => {
//       try {
//         const response = await axios.get('http://localhost/MobApp/my-app/php_api/get_batches.php'); // Replace with your API URL
//         if (response.data && Array.isArray(response.data.batches)) {
//           setBatches(response.data.batches);
//         } else {
//           Alert.alert('Error', 'No batches found');
//         }
//       } catch (error) {
//         console.error('Error fetching batches:', error);
//         Alert.alert('Error', 'Failed to fetch batches');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBatches();
//   }, []);

//   const handleViewResults = (batchId) => {
//     navigation.navigate('ResultTable', { batch: batchId });
//   };

//   if (loading) {
//     return <Text style={styles.loadingText}>Loading...</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Select Batch</Text>
//       <TouchableOpacity
//         style={styles.viewSavedButton}
//         onPress={() => navigation.navigate('ViewSavedResults')}
//       >
//         <Text style={styles.viewSavedButtonText}>View Saved Results</Text>
//       </TouchableOpacity>

//       <FlatList
//         data={batches}
//         renderItem={({ item }) => (
//           <View style={styles.row}>
//             <Text style={styles.cell}>{item.BatchName}</Text>
//             <TouchableOpacity
//               style={styles.button}
//               onPress={() => handleViewResults(item.BatchID)}
//             >
//               <Text style={styles.buttonText}>View Results</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//         keyExtractor={(item) => item.BatchID.toString()}
//       />
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
//     color: '#0a4a91',
//   },
//   viewSavedButton: {
//     backgroundColor: '#28a745',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//     marginBottom: 20,
//     alignItems: 'center',
//   },
//   viewSavedButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   cell: {
//     flex: 1,
//     textAlign: 'left',
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: '#007bff',
//     paddingVertical: 5,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//     justifyContent: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 14,
//   },
//   loadingText: {
//     textAlign: 'center',
//     marginTop: 20,
//     fontSize: 18,
//   },
// });

// export default ViewResults;

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import axios from 'axios';
import Sidebar from '../Coordinator/Sidebar';
const ViewResults = ({ navigation }) => {
  const [batches, setBatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBatches = async () => {
      try {
        const response = await axios.get('http://localhost/MobApp/my-app/php_api/get_batches.php'); 
        console.log('API Response:', response.data); 
  
        if (response.data && Array.isArray(response.data.batches)) {
          setBatches(response.data.batches); 
        } else {
          console.log('Batches are not in the expected format or not found');
          Alert.alert('Error', 'No batches found');
        }
      } catch (error) {
        console.error('Error fetching batches:', error);
        Alert.alert('Error', 'Failed to fetch batches');
      } finally {
        setLoading(false);
      }
    };
  
    fetchBatches();
  }, []); // Empty dependency array ensures this runs only once when the component mounts
    // Empty dependency array, ensuring the effect runs only once on component mount

  useEffect(() => {
    console.log('Batches State:', batches);  // Log the batches state after it's updated
  }, [batches]); // Log whenever batches state changes

  const handleViewResults = (batchId) => {
    navigation.navigate('ResultTable', { batch: batchId });
  };

  if (loading) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  if (batches.length === 0) {
    return <Text style={styles.loadingText}>No batches available</Text>;
  }

  return (
    <View style={styles.container}>
    <Sidebar /> {/* Include Sidebar here for the navigation bar and sidebar */}
    <View style={styles.content}></View>
      <Text style={styles.heading}>Select Batch</Text>
      <TouchableOpacity
        style={styles.viewSavedButton}
        onPress={() => navigation.navigate('ResultList')}
      >
        <Text style={styles.viewSavedButtonText}>View Saved Results</Text>
      </TouchableOpacity>

      <FlatList
        data={batches}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.BatchName}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleViewResults(item.BatchID)}
            >
              <Text style={styles.buttonText}>View Results</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.BatchID.toString()}  // Ensure the key is unique
      />
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
  viewSavedButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
    marginLeft:15,
    marginRight:15,
  },
  viewSavedButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft:15,
    marginRight:15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginLeft:15,
    marginRight:15,
  },
  cell: {
    flex: 1,
    textAlign: 'left',
    fontSize: 16,
    marginLeft:15,
    marginRight:15,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    justifyContent: 'center',
    marginLeft:15,
    marginRight:15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    marginLeft:15,
    marginRight:15,
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    marginLeft:15,
    marginRight:15,
  },
});

export default ViewResults;
