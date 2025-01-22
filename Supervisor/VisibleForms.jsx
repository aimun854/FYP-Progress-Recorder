// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
// } from 'react-native';
// import axios from 'axios';

// const MyProjectEvaluationScreen = () => {
//   const [forms, setForms] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchForms = async () => {
//       try {
//         const response = await axios.get('http://localhost/MobApp/my-app/php_api/get_forms.php');
//         if (response.data && response.data.forms) {
//           setForms(response.data.forms);
//         } else {
//           Alert.alert('Error', 'No forms found.');
//           setForms([]);
//         }
//       } catch (error) {
//         console.error('Error fetching forms:', error);
//         Alert.alert('Error', 'Failed to fetch forms.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchForms();
//   }, []);

//   const renderItem = ({ item, index }) => {
//     return (
//       <View style={styles.row}>
//         <Text style={styles.cell}>{index + 1}</Text>
//         <Text style={styles.cell}>{item.title}</Text>
//         <TouchableOpacity
//           style={styles.assignButton}
//           onPress={() => Alert.alert('Assign Marks', `Form ID: ${item.id}`)}
//         >
//           <Text style={styles.buttonText}>Assign Marks</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   if (loading) {
//     return <Text style={styles.loadingText}>Loading...</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>My Project Evaluation</Text>
//       <FlatList
//         data={forms}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//         ListEmptyComponent={
//           <Text style={styles.noDataText}>No forms found.</Text>
//         }
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f8f9fa',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#0a4a91',
//     marginBottom: 10,
//   },
//   row: {
//     flexDirection: 'row',
//     padding: 10,
//     backgroundColor: '#fff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   cell: {
//     flex: 1,
//     fontSize: 16,
//     color: '#333',
//   },
//   assignButton: {
//     backgroundColor: '#28a745',
//     paddingVertical: 5,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   loadingText: {
//     textAlign: 'center',
//     marginTop: 20,
//     fontSize: 18,
//   },
//   noDataText: {
//     textAlign: 'center',
//     marginTop: 20,
//     fontSize: 16,
//     color: '#666',
//   },
// });

// export default MyProjectEvaluationScreen;

// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, SafeAreaView } from 'react-native';

// const VisibleForms = () => {
//     const [forms, setForms] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         fetchForms();
//     }, []);

//     const fetchForms = async () => {
//         try {
//             const response = await fetch('http://localhost/MobApp/my-app/php_api/getVisibleForms.php'); // Update with your server URL
//             const data = await response.json();
//             if (response.ok) {
//                 setForms(data.forms);
//             } else {
//                 Alert.alert('Error', 'Failed to fetch forms.');
//             }
//         } catch (error) {
//             Alert.alert('Error', 'Unable to connect to the server.');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     const renderFormItem = ({ item, index }) => (
//         <View style={styles.tableRow}>
//             <Text style={styles.tableCell}>{index + 1}</Text>
//             <Text style={styles.tableCell}>{item.title}</Text>
//             <TouchableOpacity
//                 style={styles.assignButton}
//                 onPress={() => {
//                     // Navigate to project list page
//                     Alert.alert('Navigate', `Navigate to Assign Marks for Form ID: ${item.id}`);
//                 }}
//             >
//                 <Text style={styles.buttonText}>Assign Marks</Text>
//             </TouchableOpacity>
//         </View>
//     );

//     return (
//         <SafeAreaView style={styles.container}>
//             <Text style={styles.heading}>My Project Evaluation</Text>
//             <View style={styles.tableContainer}>
//                 <View style={styles.tableHeader}>
//                     <Text style={[styles.tableCell, styles.tableHeaderText]}>S.No</Text>
//                     <Text style={[styles.tableCell, styles.tableHeaderText]}>Form Title</Text>
//                     <Text style={[styles.tableCell, styles.tableHeaderText]}>Assign Marks</Text>
//                 </View>
//                 {isLoading ? (
//                     <Text style={styles.loadingText}>Loading...</Text>
//                 ) : (
//                     <FlatList
//                         data={forms}
//                         keyExtractor={(item) => item.id.toString()}
//                         renderItem={renderFormItem}
//                     />
//                 )}
//             </View>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,
//         backgroundColor: '#f5f5f5',
//     },
//     heading: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: '#0a4a91',
//         marginBottom: 16,
//     },
//     tableContainer: {
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         padding: 16,
//         shadowColor: '#000',
//         shadowOpacity: 0.1,
//         shadowRadius: 5,
//         elevation: 3,
//     },
//     tableHeader: {
//         flexDirection: 'row',
//         borderBottomWidth: 1,
//         borderColor: '#ccc',
//         paddingBottom: 8,
//     },
//     tableHeaderText: {
//         fontWeight: 'bold',
//         fontSize: 16,
//         color: '#333',
//     },
//     tableRow: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginVertical: 8,
//     },
//     tableCell: {
//         flex: 1,
//         fontSize: 14,
//         color: '#555',
//     },
//     assignButton: {
//         backgroundColor: '#28a745',
//         padding: 8,
//         borderRadius: 5,
//     },
//     buttonText: {
//         color: '#fff',
//         textAlign: 'center',
//     },
//     loadingText: {
//         textAlign: 'center',
//         color: '#888',
//     },
// });

// export default VisibleForms;


import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import SupNav from '../Supervisor/SupNav.jsx';

const VisibleForms = () => {
    const [forms, setForms] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigation = useNavigation(); // Initialize navigation hook

    useEffect(() => {
        fetchForms();
    }, []);

    const fetchForms = async () => {
        try {
            const response = await fetch('http://localhost/MobApp/my-app/php_api/getVisibleForms.php'); 
            const data = await response.json();
            if (response.ok) {
                setForms(data.forms);
            } else {
                Alert.alert('Error', 'Failed to fetch forms.');
            }
        } catch (error) {
            Alert.alert('Error', 'Unable to connect to the server.');
        } finally {
            setIsLoading(false);
        }
    };

    const renderFormItem = ({ item, index }) => (
        <View style={styles.tableRow}>
            <Text style={styles.tableCell}>{index + 1}</Text>
            <Text style={styles.tableCell}>{item.title}</Text>
            <TouchableOpacity
                style={styles.assignButton}
                onPress={() => {
                    navigation.navigate('SupProjectList', { formId: item.id }); // Navigate with form ID
                }}
            >
                <Text style={styles.buttonText}>Assign Marks</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
        {/* SupNav Component */}
    <SupNav />
            <Text style={styles.heading}>My Project Evaluation</Text>
            <View style={styles.tableContainer}>
                <View style={styles.tableHeader}>
                    <Text style={[styles.tableCell, styles.tableHeaderText]}>S.No</Text>
                    <Text style={[styles.tableCell, styles.tableHeaderText]}>Form Title</Text>
                    <Text style={[styles.tableCell, styles.tableHeaderText]}>Assign Marks</Text>
                </View>
                {isLoading ? (
                    <Text style={styles.loadingText}>Loading...</Text>
                ) : (
                    <FlatList
                        data={forms}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderFormItem}
                    />
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#0a4a91',
        marginBottom: 16,
        marginTop:19,
        marginLeft:15,
    },
    tableContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginLeft:15,
        marginRight:15,
    },
    tableHeader: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingBottom: 8,
    },
    tableHeaderText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#333',
    },
    tableRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    tableCell: {
        flex: 1,
        fontSize: 14,
        color: '#555',
    },
    assignButton: {
        backgroundColor: '#28a745',
        padding: 8,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    loadingText: {
        textAlign: 'center',
        color: '#888',
    },
});

export default VisibleForms;
