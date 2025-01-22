// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, TouchableOpacity, Linking, StyleSheet, Alert, TextInput } from 'react-native';
// import axios from 'axios';
// import * as FileSystem from 'react-native-fs';

// const TemplateListScreen = () => {
//   const [templates, setTemplates] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchText, setSearchText] = useState('');

//   useEffect(() => {
//     const fetchTemplates = async () => {
//       try {
//         const response = await axios.get('http://localhost/MobApp/my-app/php_api/get_templates.php');
//         console.log("API Response:", response.data);

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

//   const handleDownload = async (filePath) => {
//     try {
//       const url = `http://localhost/coordinator/uploads/${filePath}`;
//       const downloadDest = `${FileSystem.DocumentDirectoryPath}/${filePath}`;
      
//       const download = await FileSystem.downloadFileAsync(url, downloadDest);
//       console.log('File downloaded to:', download.uri);
//       Alert.alert('Success', 'File downloaded successfully!');
//     } catch (error) {
//       console.error('Download error:', error);
//       Alert.alert('Error', 'Failed to download the file');
//     }
//   };

//   const filteredTemplates = templates.filter(template => 
//     template.document_name.toLowerCase().includes(searchText.toLowerCase())
//   );

//   const renderItem = ({ item, index }) => {
//     const { document_name, file_path, upload_date } = item;
//     const filePath = file_path;

//     return (
//       <View style={styles.row}>
//         <Text style={styles.cell}>{index + 1}</Text>
//         <Text style={styles.cell}>
//           <TouchableOpacity onPress={() => Linking.openURL('http://localhost/MobApp/my-app/php_api/get_templates.php')}>
//             <Text style={styles.link}>{document_name}</Text>
//           </TouchableOpacity>
//         </Text>
//         <Text style={styles.cell}>{upload_date}</Text>
//         <TouchableOpacity
//           style={styles.downloadButton}
//           onPress={() => handleDownload(filePath)}>
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
//     padding: 10,
//     backgroundColor: '#f4f4f4',
//   },
//   searchInput: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingLeft: 10,
//     marginBottom: 15,
//   },
//   table: {
//     backgroundColor: 'white',
//     padding: 10,
//     borderRadius: 10,
//     elevation: 5,
//   },
//   header: {
//     flexDirection: 'row',
//     backgroundColor: '#f0f0f0',
//     padding: 10,
//     borderRadius: 5,
//   },
//   headerText: {
//     flex: 1,
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 14,
//     color: '#333',
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
//     fontSize: 14,
//     color: '#333',
//   },
//   link: {
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
//   downloadButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 8,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//   },
//   downloadText: {
//     color: 'white',
//     fontSize: 14,
//   },
//   loadingText: {
//     textAlign: 'center',
//     fontSize: 18,
//     marginTop: 50,
//   },
//   noDataText: {
//     textAlign: 'center',
//     fontSize: 16,
//     marginTop: 20,
//     color: '#777',
//   },
// });

// export default TemplateListScreen;



// 
// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, TouchableOpacity, Linking, StyleSheet, Alert, TextInput } from 'react-native';
// import axios from 'axios';


// const TemplateListScreen = () => {
//   const [templates, setTemplates] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchText, setSearchText] = useState('');

//   useEffect(() => {
//     const fetchTemplates = async () => {
//       try {
//         const response = await axios.get('http://localhost/MobApp/my-app/php_api/get_templates.php');
//         console.log("API Response:", response.data);

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

// //   const handleDownload = async (filePath) => {
// //     try {
// //       const url = `http://localhost/coordinator/uploads/${filePath}`; // Correct the URL
// //       const downloadDest = `${FileSystem.DocumentDirectoryPath}/${filePath}`;
      
// //       const download = await FileSystem.downloadFileAsync(url, downloadDest);
// //       console.log('File downloaded to:', download.uri);
// //       Alert.alert('Success', 'File downloaded successfully!');
// //     } catch (error) {
// //       console.error('Download error:', error);
// //       Alert.alert('Error', 'Failed to download the file');
// //     }
// //   };

//   const filteredTemplates = templates.filter(template => 
//     template.document_name.toLowerCase().includes(searchText.toLowerCase())
//   );

//   const renderItem = ({ item, index }) => {
//     const { document_name, file_path, upload_date } = item;

//     return (
//       <View style={styles.row}>
//         <Text style={styles.cell}>{index + 1}</Text>
//         <Text style={styles.cell}>
//           <TouchableOpacity onPress={() => Linking.openURL('http://localhost/MobApp/my-app/php_api/get_templates.php')}>
//             <Text style={styles.link}>{document_name}</Text>
//           </TouchableOpacity>
//         </Text>
//         <Text style={styles.cell}>{upload_date}</Text>
//         <TouchableOpacity
//           style={styles.downloadButton}
//           onPress={() => handleDownload(file_path)}>
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
//     padding: 10,
//     backgroundColor: '#f4f4f4',
//   },
//   searchInput: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingLeft: 10,
//     marginBottom: 15,
//   },
//   table: {
//     backgroundColor: 'white',
//     padding: 10,
//     borderRadius: 10,
//     elevation: 5,
//   },
//   header: {
//     flexDirection: 'row',
//     backgroundColor: '#f0f0f0',
//     padding: 10,
//     borderRadius: 5,
//   },
//   headerText: {
//     flex: 1,
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 14,
//     color: '#333',
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
//     fontSize: 14,
//     color: '#333',
//   },
//   link: {
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
//   downloadButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 8,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//   },
//   downloadText: {
//     color: 'white',
//     fontSize: 14,
//   },
//   loadingText: {
//     textAlign: 'center',
//     fontSize: 18,
//     marginTop: 50,
//   },
//   noDataText: {
//     textAlign: 'center',
//     fontSize: 16,
//     marginTop: 20,
//     color: '#777',
//   },
// });

// export default TemplateListScreen;


import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Linking, StyleSheet, Alert, TextInput } from 'react-native';
import axios from 'axios';
import StuNav from './StuNav'; // Importing the StuNav component

const TemplateListScreen = () => {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await axios.get('http://localhost/MobApp/my-app/php_api/get_templates.php');
        console.log("API Response:", response.data);

        if (response.data && Array.isArray(response.data.templates)) {
          setTemplates(response.data.templates);
        } else {
          Alert.alert('Error', 'No templates found');
          setTemplates([]);
        }
      } catch (error) {
        console.error('Error fetching templates:', error);
        Alert.alert('Error', 'Failed to fetch templates');
      } finally {
        setLoading(false);
      }
    };
    fetchTemplates();
  }, []);

  const filteredTemplates = templates.filter(template => 
    template.document_name.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({ item, index }) => {
    const { document_name, file_path, upload_date } = item;

    return (
      <View style={styles.row}>
        <Text style={styles.cell}>{index + 1}</Text>
        <Text style={styles.cell}>
          <TouchableOpacity onPress={() => Linking.openURL('http://localhost/MobApp/my-app/php_api/get_templates.php')}>
            <Text style={styles.link}>{document_name}</Text>
          </TouchableOpacity>
        </Text>
        <Text style={styles.cell}>{upload_date}</Text>
        <TouchableOpacity
          style={styles.downloadButton}
          onPress={() => handleDownload(file_path)}>
          <Text style={styles.downloadText}>Download</Text>
        </TouchableOpacity>
      </View>
    );
  };

  if (loading) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <StuNav /> {/* Include StuNav here for the navigation bar and sidebar */}
      <View style={styles.content}></View>
        <View style={styles.header}>
          <Text style={styles.heading}>View Templates</Text>
        </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search templates..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <View style={styles.table}>
        <View style={styles.header}>
          <Text style={styles.headerText}>S. No</Text>
          <Text style={styles.headerText}>Document Name</Text>
          <Text style={styles.headerText}>Upload Date</Text>
          <Text style={styles.headerText}>Action</Text>
        </View>
        {filteredTemplates.length === 0 ? (
          <Text style={styles.noDataText}>No templates found</Text>
        ) : (
          <FlatList
            data={filteredTemplates}
            renderItem={renderItem}
            keyExtractor={(item) => item.Template_id.toString()}
          />
        )}
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
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
    marginTop: 15,
    marginLeft:20,
    marginRight:20,
  },
  table: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    marginLeft:20,
    marginRight:20,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    
  },
  heading:{
   fontSize: 24,
    fontWeight: 'bold',
    color: '#0a4a91',
    marginLeft:13,

  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 10,
    color: '#333',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  downloadButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  downloadText: {
    color: 'white',
    fontSize: 14,
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 50,
  },
  noDataText: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
    color: '#777',
  },
});

export default TemplateListScreen;
