// import React, { useEffect, useState } from 'react';
// import { View, Text, TouchableOpacity, FlatList, StyleSheet, Alert, ScrollView } from 'react-native';
// import { ListItem } from 'react-native-elements';
// import axios from 'axios';

// const Remarks = ({ navigation }) => {
//   const [presentations, setPresentations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const faculty_id = '27'; // Replace with session faculty ID
//   const apiUrl = 'http://localhost/MobApp/my-app/php_api/SPresentations.php'; // Replace with your actual backend URL

//   // Fetch presentations data
//   const fetchPresentations = async () => {
//     try {
//       const response = await axios.get(`http://localhost/MobApp/my-app/php_api/SPresentations.php`, {
//         params: { internal_evaluator_id: 27 },
//       });
//       setPresentations(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//       Alert.alert('Error', 'Failed to fetch presentations data.');
//     }
//   };

//   // Function to format date (dd-mm-yyyy)
//   const formatDate = (date) => {
//     const formattedDate = new Date(date);
//     return `${formattedDate.getDate()}-${formattedDate.getMonth() + 1}-${formattedDate.getFullYear()}`;
//   };

//   // Function to format time (hh:mm AM/PM)
//   const formatTime = (time) => {
//     const formattedTime = new Date(time);
//     return formattedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//   };

//   useEffect(() => {
//     fetchPresentations();
//   }, []);

//   // Handle navigate to evaluation or view marks
//   const handleAction = (presentation) => {
//     if (presentation.form_available) {
//       if (presentation.marks_submitted) {
//         navigation.navigate('ViewMarks', { presentationId: presentation.id });
//       } else {
//         navigation.navigate('Evaluate', { presentationId: presentation.id, formId: presentation.form_id });
//       }
//     } else {
//       Alert.alert('No Form Available', 'No form is available for this presentation.');
//     }
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.row}>
//       <View style={styles.cell}>
//         <Text style={styles.cellText}>{item.project_title}</Text>
//       </View>
//       <View style={styles.cell}>
//         <Text style={styles.cellText}>{item.eventName}</Text>
//       </View>
//       <View style={styles.cell}>
//         <Text style={styles.cellText}>{formatDate(item.date)}</Text>
//       </View>
//       <View style={styles.cell}>
//         <Text style={styles.cellText}>{formatTime(item.time)}</Text>
//       </View>
//       <View style={styles.cell}>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => handleAction(item)}
//         >
//           <Text style={styles.buttonText}>Action</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Presentations</Text>

//       {loading ? (
//         <Text>Loading...</Text>
//       ) : (
//         <ScrollView style={styles.table}>
//           <View style={styles.headerRow}>
//             <View style={styles.cell}>
//               <Text style={styles.headerText}>Project Title</Text>
//             </View>
//             <View style={styles.cell}>
//               <Text style={styles.headerText}>Event</Text>
//             </View>
//             <View style={styles.cell}>
//               <Text style={styles.headerText}>Date</Text>
//             </View>
//             <View style={styles.cell}>
//               <Text style={styles.headerText}>Time</Text>
//             </View>
//             <View style={styles.cell}>
//               <Text style={styles.headerText}>Action</Text>
//             </View>
//           </View>

//           <FlatList
//             data={presentations}
//             renderItem={renderItem}
//             keyExtractor={(item) => item.id.toString()}
//           />
//         </ScrollView>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//     padding: 10,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#0a4a91',
//     marginBottom: 20,
//   },
//   table: {
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   headerRow: {
//     flexDirection: 'row',
//     backgroundColor: '#0a4a91',
//     padding: 10,
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   cell: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 5,
//   },
//   cellText: {
//     fontSize: 14,
//     color: '#333',
//   },
//   headerText: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   row: {
//     flexDirection: 'row',
//     padding: 10,
//     backgroundColor: 'white',
//     marginBottom: 5,
//     borderRadius: 8,
//   },
//   button: {
//     backgroundColor: '#0a4a91',
//     padding: 5,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 12,
//   },
// });

// export default Remarks;


import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Alert, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import SupNav from '../Supervisor/SupNav.jsx';
import axios from 'axios';


const Remarks = ({ navigation }) => {
  const [presentations, setPresentations] = useState([]);
  const [loading, setLoading] = useState(true);
  const faculty_id = '27'; // Replace with session faculty ID
  const apiUrl = 'http://localhost/MobApp/my-app/php_api'; // Replace with your actual backend URL

  // Fetch presentations data
  const fetchPresentations = async () => {
    try {
      const response = await axios.get(`http://localhost/MobApp/my-app/php_api/SPresentations.php`, {
        params: { faculty_id: 27 }, // Pass faculty_id as parameter
      });
      if (response.data.error) {
        Alert.alert('Error', response.data.error);
      } else {
        setPresentations(response.data);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      Alert.alert('Error', 'Failed to fetch presentations data.');
    }
  };

  // Function to format date (dd-mm-yyyy)
  const formatDate = (date) => {
    const formattedDate = new Date(date);
    return `${formattedDate.getDate()}-${formattedDate.getMonth() + 1}-${formattedDate.getFullYear()}`;
  };

  // Function to format time (hh:mm AM/PM)
  const formatTime = (time) => {
    const formattedTime = new Date(time);
    return formattedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  useEffect(() => {
    fetchPresentations();
  }, []);

  // Handle navigate to evaluation or view marks
  const handleAction = (presentation) => {
    if (presentation.form_available) {
      if (presentation.marks_submitted) {
        navigation.navigate('ViewMarks', { presentationId: presentation.id });
      } else {
        navigation.navigate('Evaluate', { presentationId: presentation.id, formId: presentation.form_id });
      }
    } else {
      Alert.alert('No Form Available', 'No form is available for this presentation.');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <View style={styles.cell}>
        <Text style={styles.cellText}>{item.project_title}</Text>
      </View>
      <View style={styles.cell}>
        <Text style={styles.cellText}>{item.eventName}</Text>
      </View>
      <View style={styles.cell}>
        <Text style={styles.cellText}>{formatDate(item.date)}</Text>
      </View>
      <View style={styles.cell}>
        <Text style={styles.cellText}>{formatTime(item.time)}</Text>
      </View>
      <View style={styles.cell}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAction(item)}
        >
          <Text style={styles.buttonText}>Action</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
    {/* SupNav Component */}
    <SupNav />
      <Text style={styles.heading}>Presentations</Text>

      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView style={styles.table}>
          <View style={styles.headerRow}>
            <View style={styles.cell}>
              <Text style={styles.headerText}>Project Title</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.headerText}>Event</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.headerText}>Date</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.headerText}>Time</Text>
            </View>
            <View style={styles.cell}>
              <Text style={styles.headerText}>Action</Text>
            </View>
          </View>

          <FlatList
            data={presentations}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0a4a91',
    marginBottom: 20,
  },
  table: {
    marginTop: 10,
    marginBottom: 10,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#0a4a91',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  cellText: {
    fontSize: 14,
    color: '#333',
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 5,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#0a4a91',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
  },
});

export default Remarks;
