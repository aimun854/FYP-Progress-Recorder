// import React, { useState, useEffect } from "react";
// import { View, Text, FlatList, StyleSheet } from "react-native";

// const ResultScreen = () => {
//     const [results, setResults] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState("");

//     useEffect(() => {
//         fetchResults();
//     }, []);

//     const fetchResults = async () => {
//         try {
//             const response = await fetch("http://localhost/MobApp/my-app/php_api/getResults.php"); // Update with your backend URL
//             const json = await response.json();
//             if (json.status === "success") {
//                 setResults(json.data);
//             } else {
//                 setError(json.message);
//             }
//         } catch (err) {
//             setError("Failed to fetch results.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     const renderResultItem = ({ item, index }) => (
//         <View style={styles.tableRow}>
//             <Text style={styles.cell}>{index + 1}</Text>
//             <Text style={styles.cell}>{item.username}</Text>
//             <Text style={styles.cell}>{item.Proj_id}</Text>
//             <Text style={styles.cell}>{item.project_title}</Text>
//             <Text style={styles.cell}>{item.title}</Text>
//             <Text style={styles.cell}>{item.total}</Text>
//             <Text style={styles.cell}>{item.total_marks}</Text>
//             <Text style={styles.cell}>{item.gpa}</Text>
//             <Text style={styles.cell}>{item.grade}</Text>
//         </View>
//     );

//     if (loading) {
//         return <Text style={styles.message}>Loading...</Text>;
//     }

//     if (error) {
//         return <Text style={[styles.message, styles.error]}>{error}</Text>;
//     }

//     return (
//         <View style={styles.container}>
//             <Text style={styles.heading}>View Results</Text>
//             <View style={styles.table}>
//                 <View style={styles.tableHeader}>
//                     <Text style={styles.headerCell}>S No.</Text>
//                     <Text style={styles.headerCell}>Student Name</Text>
//                     <Text style={styles.headerCell}>Project ID</Text>
//                     <Text style={styles.headerCell}>Project Title</Text>
//                     <Text style={styles.headerCell}>Title</Text>
//                     <Text style={styles.headerCell}>Total Marks</Text>
//                     <Text style={styles.headerCell}>Obtained Marks</Text>
//                     <Text style={styles.headerCell}>GPA</Text>
//                     <Text style={styles.headerCell}>Grade</Text>
//                 </View>
//                 <FlatList
//                     data={results}
//                     keyExtractor={(item) => item.project_id.toString()}
//                     renderItem={renderResultItem}
//                 />
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,
//         backgroundColor: "#f5f5f5",
//     },
//     heading: {
//         fontSize: 24,
//         fontWeight: "700",
//         color: "#0a4a91",
//         marginBottom: 16,
//         textAlign: "center",
//     },
//     table: {
//         borderWidth: 1,
//         borderColor: "#cbcbcb",
//         borderRadius: 10,
//         backgroundColor: "#ffffff",
//     },
//     tableHeader: {
//         flexDirection: "row",
//         backgroundColor: "#e9ecef",
//         padding: 8,
//         borderBottomWidth: 1,
//         borderColor: "#cbcbcb",
//     },
//     headerCell: {
//         flex: 1,
//         fontWeight: "700",
//         fontSize: 14,
//         textAlign: "center",
//     },
//     tableRow: {
//         flexDirection: "row",
//         padding: 8,
//         borderBottomWidth: 1,
//         borderColor: "#cbcbcb",
//     },
//     cell: {
//         flex: 1,
//         fontSize: 14,
//         textAlign: "center",
//     },
//     message: {
//         textAlign: "center",
//         fontSize: 16,
//         marginTop: 20,
//     },
//     error: {
//         color: "#dc3545",
//         fontWeight: "bold",
//     },
// });

// export default ResultScreen;


// 
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, Alert, ActivityIndicator, Button } from 'react-native';
// import { useRoute } from '@react-navigation/native';

// const ResultScreen = () => {
//   const route = useRoute();
  
//   // Check if studentId is passed in params
//   const studentId = route?.params?.studentId;

//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (!studentId) {
//       setError("Student ID is missing or invalid");
//       setLoading(false);
//       return;
//     }

//     const fetchResults = async () => {
//       try {
//         const response = await fetch(`http://localhost/MobApp/my-app/php_api/getResults.php?student_id=${14}`);
//         const result = await response.json();

//         if (result.status === "error") {
//           setError(result.message);
//         } else {
//           setResults(result);
//         }
//       } catch (error) {
//         setError("Failed to fetch results: " + error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchResults();
//   }, [studentId]);

//   const renderItem = ({ item, index }) => (
//     <View style={styles.row}>
//       <Text style={styles.cell}>{index + 1}</Text>
//       <Text style={styles.cell}>{item.username}</Text>
//       <Text style={styles.cell}>{item.Proj_id}</Text>
//       <Text style={styles.cell}>{item.project_title}</Text>
//       <Text style={styles.cell}>{item.title}</Text>
//       <Text style={styles.cell}>{item.total}</Text>
//       <Text style={styles.cell}>{item.total_marks}</Text>
//       <Text style={styles.cell}>{item.gpa}</Text>
//       <Text style={styles.cell}>{item.grade}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>View Result</Text>

//       {loading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : error ? (
//         <Text style={styles.errorText}>{error}</Text>
//       ) : (
//         <FlatList
//           data={results}
//           renderItem={renderItem}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       )}
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
//   row: {
//     flexDirection: 'row',
//     marginBottom: 10,
//   },
//   cell: {
//     flex: 1,
//     padding: 5,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     textAlign: 'center',
//   },
//   errorText: {
//     color: '#dc3545',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginTop: 20,
//   },
// });

// export default ResultScreen;


// update
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, ActivityIndicator, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';
import StuNav from './StuNav'; // Import StuNav component

const ResultScreen = () => {
  const route = useRoute();
  
  // Check if studentId is passed in params
  const studentId = route?.params?.studentId;

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!studentId) {
      setError("Student ID is missing or invalid");
      setLoading(false);
      return;
    }

    const fetchResults = async () => {
      try {
        const response = await fetch(`http://localhost/MobApp/my-app/php_api/getResults.php?student_id=${14}`);
        const result = await response.json();

        if (result.status === "error") {
          setError(result.message);
        } else {
          setResults(result);
        }
      } catch (error) {
        setError("Failed to fetch results: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [studentId]);

  const renderItem = ({ item, index }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{index + 1}</Text>
      <Text style={styles.cell}>{item.username}</Text>
      <Text style={styles.cell}>{item.Proj_id}</Text>
      <Text style={styles.cell}>{item.project_title}</Text>
      <Text style={styles.cell}>{item.title}</Text>
      <Text style={styles.cell}>{item.total}</Text>
      <Text style={styles.cell}>{item.total_marks}</Text>
      <Text style={styles.cell}>{item.gpa}</Text>
      <Text style={styles.cell}>{item.grade}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StuNav /> {/* Include StuNav here */}
      <Text style={styles.heading}>View Result</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <FlatList
          data={results}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0a4a91',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  cell: {
    flex: 1,
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
  },
  errorText: {
    color: '#dc3545',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ResultScreen;
