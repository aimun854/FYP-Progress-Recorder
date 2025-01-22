// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
//   Linking,
//   StyleSheet,
//   Alert,
//   TextInput,
// } from 'react-native';
// import axios from 'axios';
// // Import Sidebar
// import Sidebar from '../Coordinator/Sidebar';


// const Template = () => {
//   const [templates, setTemplates] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchText, setSearchText] = useState('');

//   useEffect(() => {
//     const fetchTemplates = async () => {
//       try {
//         const response = await axios.get('http://localhost/MobApp/my-app/php_api/get_templates.php');
//         console.log('API Response:', response.data);

//         if (response.data && Array.isArray(response.data.templates)) {
//           setTemplates(response.data.templates);
//         } else {
//           Alert.alert('Error', 'No templates found');
//           setTemplates([]);
//         }
//       } catch (error) {
//         console.error('Error fetching templates:', error);
//         Alert.alert('Error', 'Failed to fetch templates');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchTemplates();
//   }, []);

//   const filteredTemplates = templates.filter((template) =>
//     template.document_name.toLowerCase().includes(searchText.toLowerCase())
//   );

//   const handleDownload = (filePath) => {
//     const fileUrl = `http://localhost/MobApp/my-app/php_api/${filePath}`;
//     Linking.openURL(fileUrl).catch((err) => {
//       console.error('Error opening file:', err);
//       Alert.alert('Error', 'Failed to download file');
//     });
//   };

//   const renderItem = ({ item, index }) => {
//     const { document_name, file_path, upload_date } = item;

//     return (
//       <View style={styles.row}>
//         <Text style={styles.cell}>{index + 1}</Text>
//         <Text style={styles.cell}>
//           <TouchableOpacity onPress={() => Linking.openURL(file_path)}>
//             <Text style={styles.link}>{document_name}</Text>
//           </TouchableOpacity>
//         </Text>
//         <Text style={styles.cell}>{upload_date}</Text>
//         <TouchableOpacity style={styles.downloadButton} onPress={() => handleDownload(file_path)}>
//           <Text style={styles.downloadText}>Download</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   if (loading) {
//     return <Text style={styles.loadingText}>Loading...</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       {/* Include Sidebar */}
//       <Sidebar />

//       <TextInput
//         style={styles.searchInput}
//         placeholder="Search templates..."
//         value={searchText}
//         onChangeText={setSearchText}
//       />
//       <View style={styles.table}>
//         <View style={styles.header}>
//           <Text style={styles.headerText}>S. No</Text>
//           <Text style={styles.headerText}>Document Name</Text>
//           <Text style={styles.headerText}>Upload Date</Text>
//           <Text style={styles.headerText}>Action</Text>
//         </View>
//         {filteredTemplates.length === 0 ? (
//           <Text style={styles.noDataText}>No templates found</Text>
//         ) : (
//           <FlatList
//             data={filteredTemplates}
//             renderItem={renderItem}
//             keyExtractor={(item) => item.Template_id.toString()}
//           />
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
    
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 10,
//   },
//   searchInput: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   table: {
//     marginTop: 10,
//   },
//   header: {
//     flexDirection: 'row',
//     backgroundColor: '#f4f4f4',
//     padding: 10,
//   },
//   headerText: {
//     flex: 1,
//     fontWeight: 'bold',
//   },
//   row: {
//     flexDirection: 'row',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   cell: {
//     flex: 1,
//     textAlign: 'center',
//   },
//   link: {
//     color: '#007bff',
//     textDecorationLine: 'underline',
//   },
//   downloadButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//   },
//   downloadText: {
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

// export default Template;


// // new
// // import React, { useEffect, useState } from 'react';
// // import {
// //   View,
// //   Text,
// //   FlatList,
// //   TouchableOpacity,
// //   Linking,
// //   StyleSheet,
// //   Alert,
// //   TextInput,
// // } from 'react-native';
// // import axios from 'axios';
// // import RNFS from 'react-native-fs'; // Importing react-native-fs for file handling
// // // Import Sidebar
// // import Sidebar from '../Coordinator/Sidebar';

// // const Template = () => {
// //   const [templates, setTemplates] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [searchText, setSearchText] = useState('');

// //   useEffect(() => {
// //     const fetchTemplates = async () => {
// //       try {
// //         const response = await axios.get('http://localhost/MobApp/my-app/php_api/get_templates.php');
// //         console.log('API Response:', response.data);

// //         if (response.data && Array.isArray(response.data.templates)) {
// //           setTemplates(response.data.templates);
// //         } else {
// //           Alert.alert('Error', 'No templates found');
// //           setTemplates([]);
// //         }
// //       } catch (error) {
// //         console.error('Error fetching templates:', error);
// //         Alert.alert('Error', 'Failed to fetch templates');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchTemplates();
// //   }, []);

// //   const filteredTemplates = templates.filter((template) =>
// //     template.document_name.toLowerCase().includes(searchText.toLowerCase())
// //   );

// //   const handleDownload = async (filePath, documentName) => {
// //     const fileUrl = `http://localhost/MobApp/my-app/php_api/${filePath}`;
// //     const downloadDest = `${RNFS.DocumentDirectoryPath}/${documentName}`;

// //     try {
// //       const downloadOptions = {
// //         fromUrl: fileUrl,
// //         toFile: downloadDest,
// //       };

// //       const result = await RNFS.downloadFile(downloadOptions).promise;
// //       if (result.statusCode === 200) {
// //         Alert.alert('Success', 'File downloaded successfully');
// //       } else {
// //         throw new Error('Download failed');
// //       }
// //     } catch (error) {
// //       console.error('Error downloading file:', error);
// //       Alert.alert('Error', 'Failed to download file');
// //     }
// //   };

// //   const renderItem = ({ item, index }) => {
// //     const { document_name, file_path, upload_date } = item;

// //     return (
// //       <View style={styles.row}>
// //         <Text style={styles.cell}>{index + 1}</Text>
// //         <Text style={styles.cell}>
// //           <TouchableOpacity onPress={() => Linking.openURL(file_path)}>
// //             <Text style={styles.link}>{document_name}</Text>
// //           </TouchableOpacity>
// //         </Text>
// //         <Text style={styles.cell}>{upload_date}</Text>
// //         <TouchableOpacity style={styles.downloadButton} onPress={() => handleDownload(file_path, document_name)}>
// //           <Text style={styles.downloadText}>Download</Text>
// //         </TouchableOpacity>
// //       </View>
// //     );
// //   };

// //   if (loading) {
// //     return <Text style={styles.loadingText}>Loading...</Text>;
// //   }

// //   return (
// //     <View style={styles.container}>
// //       {/* Include Sidebar */}
// //       <Sidebar />

// //       <TextInput
// //         style={styles.searchInput}
// //         placeholder="Search templates..."
// //         value={searchText}
// //         onChangeText={setSearchText}
// //       />
// //       <View style={styles.table}>
// //         <View style={styles.header}>
// //           <Text style={styles.headerText}>S. No</Text>
// //           <Text style={styles.headerText}>Document Name</Text>
// //           <Text style={styles.headerText}>Upload Date</Text>
// //           <Text style={styles.headerText}>Action</Text>
// //         </View>
// //         {filteredTemplates.length === 0 ? (
// //           <Text style={styles.noDataText}>No templates found</Text>
// //         ) : (
// //           <FlatList
// //             data={filteredTemplates}
// //             renderItem={renderItem}
// //             keyExtractor={(item) => item.Template_id.toString()}
// //           />
// //         )}
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     padding: 10,
// //   },
// //   searchInput: {
// //     borderWidth: 1,
// //     borderColor: '#ccc',
// //     padding: 10,
// //     borderRadius: 5,
// //     marginBottom: 10,
// //   },
// //   table: {
// //     marginTop: 10,
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     backgroundColor: '#f4f4f4',
// //     padding: 10,
// //   },
// //   headerText: {
// //     flex: 1,
// //     fontWeight: 'bold',
// //   },
// //   row: {
// //     flexDirection: 'row',
// //     padding: 10,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#ccc',
// //   },
// //   cell: {
// //     flex: 1,
// //     textAlign: 'center',
// //   },
// //   link: {
// //     color: '#007bff',
// //     textDecorationLine: 'underline',
// //   },
// //   downloadButton: {
// //     backgroundColor: '#007bff',
// //     paddingVertical: 5,
// //     paddingHorizontal: 10,
// //     borderRadius: 5,
// //   },
// //   downloadText: {
// //     color: '#fff',
// //     fontWeight: 'bold',
// //   },
// //   loadingText: {
// //     textAlign: 'center',
// //     marginTop: 20,
// //     fontSize: 18,
// //   },
// //   noDataText: {
// //     textAlign: 'center',
// //     marginTop: 20,
// //     fontSize: 16,
// //     color: '#666',
// //   },
// // });

// // export default Template;




// // import React, { useEffect, useState } from 'react';
// // import {
// //   View,
// //   Text,
// //   FlatList,
// //   TouchableOpacity,
// //   Linking,
// //   StyleSheet,
// //   Alert,
// //   TextInput,
// //   Button, // Import Button for navigation
// // } from 'react-native';
// // import axios from 'axios';
// // // Import Sidebar
// // import Sidebar from '../Coordinator/Sidebar';

// // const Template = ({ navigation }) => {
// //   const [templates, setTemplates] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [searchText, setSearchText] = useState('');

// //   useEffect(() => {
// //     const fetchTemplates = async () => {
// //       try {
// //         const response = await axios.get('http://localhost/MobApp/my-app/php_api/get_templates.php');
// //         console.log('API Response:', response.data);

// //         if (response.data && Array.isArray(response.data.templates)) {
// //           setTemplates(response.data.templates);
// //         } else {
// //           Alert.alert('Error', 'No templates found');
// //           setTemplates([]);
// //         }
// //       } catch (error) {
// //         console.error('Error fetching templates:', error);
// //         Alert.alert('Error', 'Failed to fetch templates');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchTemplates();
// //   }, []);

// //   const filteredTemplates = templates.filter((template) =>
// //     template.document_name.toLowerCase().includes(searchText.toLowerCase())
// //   );

// //   const handleDownload = (filePath) => {
// //     const fileUrl = `http://localhost/MobApp/my-app/php_api/${filePath}`;
// //     Linking.openURL(fileUrl).catch((err) => {
// //       console.error('Error opening file:', err);
// //       Alert.alert('Error', 'Failed to download file');
// //     });
// //   };

// //   const renderItem = ({ item, index }) => {
// //     const { document_name, file_path, upload_date } = item;

// //     return (
// //       <View style={styles.row}>
// //         <Text style={styles.cell}>{index + 1}</Text>
// //         <Text style={styles.cell}>
// //           <TouchableOpacity onPress={() => Linking.openURL(file_path)}>
// //             <Text style={styles.link}>{document_name}</Text>
// //           </TouchableOpacity>
// //         </Text>
// //         <Text style={styles.cell}>{upload_date}</Text>
// //         <TouchableOpacity style={styles.downloadButton} onPress={() => handleDownload(file_path)}>
// //           <Text style={styles.downloadText}>Download</Text>
// //         </TouchableOpacity>
// //       </View>
// //     );
// //   };

// //   if (loading) {
// //     return <Text style={styles.loadingText}>Loading...</Text>;
// //   }

// //   return (
// //     <View style={styles.container}>
// //       {/* Include Sidebar */}
// //       <Sidebar />

// //       {/* Upload Template Button */}
// //       <Button
// //         title="Upload Template"
// //         onPress={() => navigation.navigate('UploadTemplate')} // Navigates to UploadTemplate page
// //       />

// //       <TextInput
// //         style={styles.searchInput}
// //         placeholder="Search templates..."
// //         value={searchText}
// //         onChangeText={setSearchText}
// //       />
// //       <View style={styles.table}>
// //         <View style={styles.header}>
// //           <Text style={styles.headerText}>S. No</Text>
// //           <Text style={styles.headerText}>Document Name</Text>
// //           <Text style={styles.headerText}>Upload Date</Text>
// //           <Text style={styles.headerText}>Action</Text>
// //         </View>
// //         {filteredTemplates.length === 0 ? (
// //           <Text style={styles.noDataText}>No templates found</Text>
// //         ) : (
// //           <FlatList
// //             data={filteredTemplates}
// //             renderItem={renderItem}
// //             keyExtractor={(item) => item.Template_id.toString()}
// //           />
// //         )}
// //       </View>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     padding: 10,
// //   },
// //   searchInput: {
// //     borderWidth: 1,
// //     borderColor: '#ccc',
// //     padding: 10,
// //     borderRadius: 5,
// //     marginBottom: 10,
// //   },
// //   table: {
// //     marginTop: 10,
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     backgroundColor: '#f4f4f4',
// //     padding: 10,
// //   },
// //   headerText: {
// //     flex: 1,
// //     fontWeight: 'bold',
// //   },
// //   row: {
// //     flexDirection: 'row',
// //     padding: 10,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#ccc',
// //   },
// //   cell: {
// //     flex: 1,
// //     textAlign: 'center',
// //   },
// //   link: {
// //     color: '#007bff',
// //     textDecorationLine: 'underline',
// //   },
// //   downloadButton: {
// //     backgroundColor: '#007bff',
// //     paddingVertical: 5,
// //     paddingHorizontal: 10,
// //     borderRadius: 5,
// //   },
// //   downloadText: {
// //     color: '#fff',
// //     fontWeight: 'bold',
// //   },
// //   loadingText: {
// //     textAlign: 'center',
// //     marginTop: 20,
// //     fontSize: 18,
// //   },
// //   noDataText: {
// //     textAlign: 'center',
// //     marginTop: 20,
// //     fontSize: 16,
// //     color: '#666',
// //   },
// // });

// // export default Template;



import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import axios from 'axios';

const Template = ({ navigation }) => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    try {
      const response = await axios.get('http://localhost/MobApp/my-app/php_api/get_templates.php');
      
      // Check if response contains templates key
      if (response.data && response.data.templates) {
        const formattedTemplates = response.data.templates.map((template) => ({
          template_id: template.Template_id, // Map backend's Template_id to front-end's template_id
          document_name: template.document_name,
          file_path: template.file_path,
          send_to: "all", // Assuming a static value, update if necessary
        }));
        setTemplates(formattedTemplates);
      } else {
        setTemplates([]); // Handle empty response
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch templates.');
    }
  };
  

  const deleteTemplate = async (templateId) => {
    try {
      const response = await axios.delete(`http://localhost/MobApp/my-app/php_api/get_templates.php/${templateId}`);
      if (response.data.success) {
        Alert.alert('Success', 'Template deleted successfully.');
        fetchTemplates(); // Refresh the list
      } else {
        Alert.alert('Error', response.data.message);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to delete template.');
    }
  };

  const renderTemplate = ({ item, index }) => (
    <View style={styles.row}>
      <Text style={styles.column}>{index + 1}</Text>
      <Text style={styles.column}>{item.document_name}</Text>
      <Text style={styles.column}>{item.send_to}</Text>
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.viewButton}
          onPress={() => navigation.navigate('WebViewScreen', { uri: item.file_path })}
        >
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteTemplate(item.template_id)}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Templates</Text>
      <TouchableOpacity
        style={styles.uploadButton}
        onPress={() => navigation.navigate('UploadTemplate')}
      >
        <Text style={styles.uploadButtonText}>Upload New Template</Text>
      </TouchableOpacity>
      <FlatList
        data={templates}
        keyExtractor={(item) => item.template_id.toString()}
        renderItem={renderTemplate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  uploadButton: {
    backgroundColor: '#0a4a91',
    padding: 12,
    borderRadius: 5,
    marginBottom: 16,
    alignItems: 'center',
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  column: {
    flex: 1,
    fontSize: 14,
  },
  actions: {
    flexDirection: 'row',
  },
  viewButton: {
    backgroundColor: '#007bff',
    padding: 8,
    borderRadius: 5,
    marginRight: 8,
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Template;
