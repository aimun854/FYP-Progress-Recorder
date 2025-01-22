// import React, { useEffect, useState } from 'react';
// import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
// import axios from 'axios';

// const ViewResults = () => {
//   const [projects, setProjects] = useState([]);
//   const [search, setSearch] = useState('');
//   const [sortOrder, setSortOrder] = useState('desc');
//   const [sortColumn, setSortColumn] = useState('total_marks');

//   useEffect(() => {
//     // Fetch the data when the component mounts or when dependencies change
//     fetchData();
//   }, [search, sortColumn, sortOrder]);

//   const fetchData = () => {
//     axios
//       .get('http://localhost/MobApp/my-app/php_api/getSProjectResult.php', {
//         params: {
//           search: search,
//           sort: sortColumn,
//           order: sortOrder,
//         },
//       })
//       .then((response) => {
//         if (response.data.success) {
//           setProjects(response.data.data);
//         } else {
//           console.log('Error fetching projects');
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const toggleSortOrder = (column) => {
//     setSortColumn(column);
//     setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.heading}>View Results</Text>
//       <TextInput
//         style={styles.searchInput}
//         placeholder="Search by Student Name or Project Title"
//         value={search}
//         onChangeText={(text) => setSearch(text)}
//       />
//       <FlatList
//         data={projects}
//         keyExtractor={(item) => item.student_id.toString()}
//         renderItem={({ item, index }) => (
//           <View style={styles.row}>
//             <Text>{index + 1}</Text>
//             <Text>{item.username}</Text>
//             <Text>{item.Proj_id}</Text>
//             <Text>{item.project_title}</Text>
//             <Text>{item.title}</Text>
//             <Text>{item.total}</Text>
//             <Text>{item.total_marks}</Text>
//             <Text>{item.gpa}</Text>
//             <Text>{item.grade}</Text>
//           </View>
//         )}
//       />
//       <Button title="Reload" onPress={fetchData} />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   searchInput: {
//     borderWidth: 1,
//     padding: 10,
//     marginBottom: 20,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//   },
// });

// export default ViewResults;


// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import SupNav from '../Supervisor/SupNav.jsx';

// const ViewResults = () => {
//   const [results, setResults] = useState([]);
//   const [search, setSearch] = useState('');
//   const [sortColumn, setSortColumn] = useState('total_marks');
//   const [sortOrder, setSortOrder] = useState('desc');

//   useEffect(() => {
//     fetchResults();
//   }, [search, sortColumn, sortOrder]);

//   const fetchResults = async () => {
//     try {
//       const response = await fetch(`http://localhost/MobApp/my-app/php_api/getSProjectResult.php?search=${search}&sort=${sortColumn}&order=${sortOrder}`);
//       const data = await response.json();
//       setResults(data.data);
//     } catch (error) {
//       console.error('Error fetching results:', error);
//     }
//   };

//   const toggleSortOrder = (column) => {
//     setSortColumn(column);
//     setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
//   };

//   const renderTableHeader = () => (
//     <View style={styles.tableHeader}>
//       {['username', 'Proj_id', 'project_title', 'title', 'total', 'total_marks', 'gpa', 'grade'].map((col) => (
//         <TouchableOpacity key={col} onPress={() => toggleSortOrder(col)} style={styles.tableHeaderCell}>
//           <Text style={styles.tableHeaderText}>
//             {col.charAt(0).toUpperCase() + col.slice(1)}{' '}
//             {sortColumn === col ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );

//   const renderTableRow = ({ item, index }) => (
//     <View style={styles.tableRow}>
//       <Text style={styles.tableCell}>{index + 1}</Text>
//       <Text style={styles.tableCell}>{item.username}</Text>
//       <Text style={styles.tableCell}>{item.Proj_id}</Text>
//       <Text style={styles.tableCell}>{item.project_title}</Text>
//       <Text style={styles.tableCell}>{item.title}</Text>
//       <Text style={styles.tableCell}>{item.total}</Text>
//       <Text style={styles.tableCell}>{item.total_marks}</Text>
//       <Text style={styles.tableCell}>{item.gpa}</Text>
//       <Text style={styles.tableCell}>{item.grade}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//      {/* SupNav Component */}
//      <SupNav />

// {/* Page Content */}
// <View style={styles.content}>
//   <Text style={styles.heading}>View Results</Text></View>

//       <TextInput
//         style={styles.searchInput}
//         placeholder="Search by Student Name or Project Title"
//         value={search}
//         onChangeText={(text) => setSearch(text)}
//       />
//       <Button title="Search" onPress={() => fetchResults()} />

//       {results.length > 0 ? (
//         <FlatList
//           data={results}
//           renderItem={renderTableRow}
//           keyExtractor={(item) => item.student_id.toString()}
//           ListHeaderComponent={renderTableHeader}
//         />
//       ) : (
//         <Text style={styles.noResult}>Results are not published yet or you have no results.</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   content: {
//     flex: 1,
//     padding: 20,
//     marginTop: 10, // Adds space between the header and content
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#0a4a91',
//     marginBottom: 20,
//   },
//   searchInput: {
//     borderColor: '#cbcbcb',
//     borderWidth: 1,
//     padding: 10,
//     marginBottom: 20,
//     borderRadius: 8,
//   },
//   tableHeader: {
//     flexDirection: 'row',
//     marginBottom: 10,
//     backgroundColor: '#f1f1f1',
//     borderRadius: 8,
//     overflow: 'hidden',
//   },
//   tableHeaderCell: {
//     flex: 1,
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#e9e9e9',
//     borderRightWidth: 1,
//     borderColor: '#cbcbcb',
//   },
//   tableHeaderText: {
//     fontWeight: 'bold',
//   },
//   tableRow: {
//     flexDirection: 'row',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderColor: '#cbcbcb',
//   },
//   tableCell: {
//     flex: 1,
//     textAlign: 'center',
//   },
//   noResult: {
//     textAlign: 'center',
//     color: '#dc3545',
//     fontWeight: 'bold',
//     marginTop:10,
//   },
// });

// export default ViewResults;


import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import SupNav from '../Supervisor/SupNav.jsx';

const ViewResults = () => {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');
  const [sortColumn, setSortColumn] = useState('total_marks');
  const [sortOrder, setSortOrder] = useState('desc');

  useEffect(() => {
    fetchResults();
  }, [search, sortColumn, sortOrder]);

  const fetchResults = async () => {
    try {
      const response = await fetch(
        `http://localhost/MobApp/my-app/php_api/getSProjectResult.php?search=${search}&sort=${sortColumn}&order=${sortOrder}`
      );
      const data = await response.json();
      setResults(data.data);
    } catch (error) {
      console.error('Error fetching results:', error);
    }
  };

  const toggleSortOrder = (column) => {
    setSortColumn(column);
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  const renderTableHeader = () => (
    <View style={styles.tableHeader}>
      {['username', 'Proj_id', 'project_title', 'title', 'total', 'total_marks', 'gpa', 'grade'].map((col) => (
        <TouchableOpacity key={col} onPress={() => toggleSortOrder(col)} style={styles.tableHeaderCell}>
          <Text style={styles.tableHeaderText}>
            {col.charAt(0).toUpperCase() + col.slice(1)}{' '}
            {sortColumn === col ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderTableRow = ({ item, index }) => (
    <View style={styles.tableRow}>
      <Text style={styles.tableCell}>{index + 1}</Text>
      <Text style={styles.tableCell}>{item.username}</Text>
      <Text style={styles.tableCell}>{item.Proj_id}</Text>
      <Text style={styles.tableCell}>{item.project_title}</Text>
      <Text style={styles.tableCell}>{item.title}</Text>
      <Text style={styles.tableCell}>{item.total}</Text>
      <Text style={styles.tableCell}>{item.total_marks}</Text>
      <Text style={styles.tableCell}>{item.gpa}</Text>
      <Text style={styles.tableCell}>{item.grade}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* SupNav Component */}
      <SupNav />

      {/* Page Content */}
      <View style={styles.content}>
        <Text style={styles.heading}>View Results</Text>

        <TextInput
          style={styles.searchInput}
          placeholder="Search by Student Name or Project Title"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
        <Button title="Search" onPress={() => fetchResults()} />

        {results.length > 0 ? (
          <FlatList
            data={results}
            renderItem={renderTableRow}
            keyExtractor={(item) => item.student_id.toString()}
            ListHeaderComponent={renderTableHeader}
          />
        ) : (
          <Text style={styles.noResult}>Results are not published yet or you have no results.</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
    marginTop: 10, // Adds space between the header and content
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0a4a91',
    marginBottom: 20,
  },
  searchInput: {
    borderColor: '#cbcbcb',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
  },
  tableHeader: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    overflow: 'hidden',
  },
  tableHeaderCell: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9e9e9',
    borderRightWidth: 1,
    borderColor: '#cbcbcb',
  },
  tableHeaderText: {
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#cbcbcb',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
  },
  noResult: {
    textAlign: 'center',
    color: '#dc3545',
    fontWeight: 'bold',
    marginTop:10,
  },
});

export default ViewResults;
