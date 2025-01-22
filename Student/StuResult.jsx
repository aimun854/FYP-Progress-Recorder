// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import StuNav from '../Student/StuNav.jsx';

// const StuResult = () => {
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
//     <View style={styles.container }>
//     {/* StuNav Component */}
//     <StuNav />
//       <Text style={styles.heading}>View Results</Text>

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
//     padding: 0,
//     margin:0,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#0a4a91',
//     marginBottom: 20,
//     marginTop:20,
//     marginLeft:20,
//   },
//   searchInput: {
//     borderColor: '#cbcbcb',
//     borderWidth: 1,
//     padding: 10,
//     marginBottom: 20,
//     borderRadius: 8,
//     marginLeft:20,
//     marginRight:20,
//   },
//   tableHeader: {
//     flexDirection: 'row',
//     marginBottom: 10,
//     backgroundColor: '#f1f1f1',
//     borderRadius: 8,
//     overflow: 'hidden',
//     marginLeft:20,
//     marginRight:20,
//   },
//   tableHeaderCell: {
//     flex: 1,
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#e9e9e9',
//     borderRightWidth: 1,
//     borderColor: '#cbcbcb',
//     marginLeft:20,
//     marginRight:20,
//   },
//   tableHeaderText: {
//     fontWeight: 'bold',
//     marginLeft:20,
//     marginRight:20,
//   },
//   tableRow: {
//     flexDirection: 'row',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderColor: '#cbcbcb',
//     marginLeft:20,
//     marginRight:20,
//   },
//   tableCell: {
//     flex: 1,
//     textAlign: 'center',
//     marginLeft:20,
//     marginRight:20,
//   },
//   searchbtn:{
//     marginLeft:20,
//     marginRight:20,
//   },
//   noResult: {
//     textAlign: 'center',
//     color: '#dc3545',
//     fontWeight: 'bold',
//     marginTop: 20,
//     marginLeft:20,
//   },
// });

// export default StuResult;



// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import StuNav from '../Student/StuNav.jsx';

// const StuResult = () => {
//   const [results, setResults] = useState([]);
//   const [search, setSearch] = useState('');
//   const [sortColumn, setSortColumn] = useState('total_marks');
//   const [sortOrder, setSortOrder] = useState('desc');

//   useEffect(() => {
//     fetchResults();
//   }, [search, sortColumn, sortOrder]);

//   const fetchResults = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost/MobApp/my-app/php_api/getSProjectResult.php?search=${search}&sort=${sortColumn}&order=${sortOrder}`
//       );
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
//       {/* StuNav Component */}
//       <View style={styles.StuNavheader}>
//         <StuNav />
//       </View>

//       <Text style={styles.heading}>View Results</Text>

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
//     padding: 20,
//     margin:0,
    
//   },
//   StuNavheader: {
//     margin: 0, // Reset margins
//     padding: 0, // Reset padding
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#0a4a91',
//     marginBottom: 20,
//     marginTop:20,
    
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
// },
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
//     marginLeft: 20,
//     marginRight: 20,
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
  
//   },
// });

// export default StuResult;



import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import StuNav from '../Student/StuNav.jsx';

const StuResult = () => {
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
      {/* StuNav Component */}
      <StuNav />

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

export default StuResult;
