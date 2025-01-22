// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, Alert, ScrollView } from 'react-native';

// const FormPreview = ({ route }) => {
//   const { formId } = route.params; // Get formId from the route parameters
//   const [formData, setFormData] = useState(null);

//   useEffect(() => {
//     fetchFormData();
//   }, []);

//   const fetchFormData = async () => {
//     try {
//       const response = await fetch(`http://localhost/MobApp/my-app/php_api/form_preview.php?form_id=${formId}`);
//       const data = await response.json();
      
//       if (data.success === false) {
//         Alert.alert('Error', data.message);
//         return;
//       }
      
//       setFormData(data); // Set form data on success
//     } catch (error) {
//       Alert.alert('Error', 'An error occurred while fetching data.');
//       console.error('Error fetching form data:', error);
//     }
//   };

//   if (!formData) {
//     return <Text>Loading...</Text>;
//   }

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.previewSection}>
//         <Text style={styles.previewHeading}>Form Preview</Text>

//         <Text style={styles.previewTitle}>{formData.form.title}</Text>

//         <View style={styles.previewMarks}>
//           <Text>Passing Marks: {formData.form.passing_marks}</Text>
//           <Text>Total Marks: {formData.form.total_marks}</Text>
//         </View>

//         <FlatList
//           data={formData.details}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={({ item }) => (
//             <View style={styles.tableRow}>
//               <Text style={styles.tableCell}>{item.description}</Text>
//               <Text style={styles.tableCell}>{item.max_marks}</Text>
//             </View>
//           )}
//           style={styles.table}
//         />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 10,
//     backgroundColor: '#f5f5f5',
//   },
//   previewSection: {
//     padding: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     marginBottom: 20,
//     borderWidth: 1,
//     borderColor: '#cbcbcb',
//   },
//   previewHeading: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#0a4a91',
//     textAlign: 'center',
//   },
//   previewTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 20,
//   },
//   previewMarks: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   table: {
//     width: '100%',
//     borderColor: '#cbcbcb',
//   },
//   tableRow: {
//     flexDirection: 'row',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderColor: '#cbcbcb',
//   },
//   tableCell: {
//     flex: 1,
//     textAlign: 'left',
//     paddingRight: 10,
//   },
// });

// export default FormPreview;

// new
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Alert, ScrollView } from 'react-native';
// Import Sidebar
import Sidebar from '../Coordinator/Sidebar';

const FormPreview = ({ route }) => {
  const { formId } = route.params; // Get formId from the route parameters
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    fetchFormData();
  }, []);

  const fetchFormData = async () => {
    try {
      const response = await fetch(`http://localhost/MobApp/my-app/php_api/form_preview.php?form_id=${formId}`);
      const data = await response.json();
      
      if (data.success === false) {
        Alert.alert('Error', data.message);
        return;
      }
      
      setFormData(data); // Set form data on success
    } catch (error) {
      Alert.alert('Error', 'An error occurred while fetching data.');
      console.error('Error fetching form data:', error);
    }
  };

  if (!formData) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
    {/* Include Sidebar */}
    <Sidebar />
      <View style={styles.previewSection}>
        <Text style={styles.previewHeading}>Form Preview</Text>

        <Text style={styles.previewTitle}>{formData.form.title}</Text>

        <View style={styles.previewMarks}>
          <Text>Passing Marks: {formData.form.passing_marks}</Text>
          <Text>Total Marks: {formData.form.total_marks}</Text>
        </View>

        {/* New Table for Description and Max Marks */}
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderCell}>Description</Text>
            <Text style={styles.tableHeaderCell}>Max Marks</Text>
          </View>
          <FlatList
            data={formData.details}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>{item.description}</Text>
                <Text style={styles.tableCell}>{item.max_marks}</Text>
              </View>
            )}
            style={styles.table}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  previewSection: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#cbcbcb',
  },
  previewHeading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0a4a91',
    textAlign: 'center',
  },
  previewTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  previewMarks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tableContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#cbcbcb',
    borderRadius: 5,
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: '#cbcbcb',
  },
  tableHeaderCell: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: '#cbcbcb',
  },
  tableCell: {
    flex: 1,
    textAlign: 'left',
  },
});

export default FormPreview;
