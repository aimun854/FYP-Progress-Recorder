// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView, CheckBox } from 'react-native';
// import axios from 'axios';

// const API_URL = 'http://localhost/MobApp/my-app/php_api/postAnnouncement.php';

// const PostAnnouncement = () => {
//   const [announcement, setAnnouncement] = useState('');
//   const [audiences, setAudiences] = useState({
//     all: false,
//     supervisor: false,
//     students: false,
//     external: false,
//   });

//   const handleAudienceChange = (audience) => {
//     setAudiences(prevState => ({
//       ...prevState,
//       [audience]: !prevState[audience],
//     }));
//   };

//   const handleSubmit = async () => {
//     if (!announcement) {
//       Alert.alert('Error', 'Announcement is required');
//       return;
//     }

//     const selectedAudiences = Object.keys(audiences).filter(audience => audiences[audience]);
//     if (selectedAudiences.length === 0) {
//       Alert.alert('Error', 'At least one audience type should be selected');
//       return;
//     }

//     try {
//       const response = await axios.post(API_URL, {
//         announcement: announcement,
//         audience: selectedAudiences,
//       });
//       if (response.data.success) {
//         Alert.alert('Success', 'Announcement posted successfully!');
//       } else {
//         Alert.alert('Error', 'Failed to post announcement');
//       }
//     } catch (error) {
//       Alert.alert('Error', 'An error occurred while posting the announcement');
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.heading}>Post Announcement</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Announcement message"
//         multiline
//         value={announcement}
//         onChangeText={setAnnouncement}
//       />

//       <Text style={styles.subHeading}>Audience:</Text>
//       <View style={styles.checkboxContainer}>
//         <View style={styles.checkbox}>
//           <CheckBox
//             value={audiences.all}
//             onValueChange={() => {
//               setAudiences({
//                 all: !audiences.all,
//                 supervisor: false,
//                 students: false,
//                 external: false,
//               });
//             }}
//           />
//           <Text>All</Text>
//         </View>

//         <View style={styles.checkbox}>
//           <CheckBox
//             value={audiences.supervisor}
//             onValueChange={() => handleAudienceChange('supervisor')}
//             disabled={audiences.all}
//           />
//           <Text>Supervisor</Text>
//         </View>

//         <View style={styles.checkbox}>
//           <CheckBox
//             value={audiences.students}
//             onValueChange={() => handleAudienceChange('students')}
//             disabled={audiences.all}
//           />
//           <Text>Students</Text>
//         </View>

//         <View style={styles.checkbox}>
//           <CheckBox
//             value={audiences.external}
//             onValueChange={() => handleAudienceChange('external')}
//             disabled={audiences.all}
//           />
//           <Text>External</Text>
//         </View>
//       </View>

//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.cancelButton} onPress={() => alert('Cancel')}>
//           <Text style={styles.buttonText}>Cancel</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//           <Text style={styles.buttonText}>Post Announcement</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
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
//   subHeading: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   input: {
//     height: 100,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     padding: 10,
//     marginBottom: 20,
//     borderRadius: 5,
//   },
//   checkboxContainer: {
//     marginBottom: 20,
//   },
//   checkbox: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   cancelButton: {
//     backgroundColor: '#f44336',
//     padding: 10,
//     borderRadius: 5,
//     width: '45%',
//     alignItems: 'center',
//   },
//   submitButton: {
//     backgroundColor: '#4CAF50',
//     padding: 10,
//     borderRadius: 5,
//     width: '45%',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default PostAnnouncement;


// newwwwwwwwwwwwwwwwwwwwwwwwwwwwww
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView, CheckBox } from 'react-native';
import axios from 'axios';
// Import Sidebar
import Sidebar from '../Coordinator/Sidebar';

const API_URL = 'http://localhost/MobApp/my-app/php_api/postAnnouncement.php';

const PostAnnouncement = () => {
  const [announcement, setAnnouncement] = useState('');
  const [audiences, setAudiences] = useState({
    all: false,
    supervisor: false,
    students: false,
    external: false,
  });

  const handleAudienceChange = (audience) => {
    setAudiences(prevState => ({
      ...prevState,
      [audience]: !prevState[audience],
    }));
  };

  const handleSubmit = async () => {
    if (!announcement) {
      Alert.alert('Error', 'Announcement is required');
      return;
    }

    const selectedAudiences = Object.keys(audiences).filter(audience => audiences[audience]);
    if (selectedAudiences.length === 0) {
      Alert.alert('Error', 'At least one audience type should be selected');
      return;
    }

    try {
      const response = await axios.post(API_URL, {
        announcement: announcement,
        audience: selectedAudiences,
      });

      if (response.data.success) {
        // Show success alert when the announcement is posted successfully
        Alert.alert('Success', 'Announcement posted successfully!');
        setAnnouncement(''); // Optionally clear the input field
        setAudiences({
          all: false,
          supervisor: false,
          students: false,
          external: false,
        }); // Reset audience selections
      } else {
        Alert.alert('Error', 'Failed to post announcement');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred while posting the announcement');
    }
  };

  return (
    <ScrollView style={styles.container}>
    
 {/* Include Sidebar */}
 <Sidebar />
      <Text style={styles.heading}>Post Announcement</Text>

      <TextInput
        style={styles.input}
        placeholder="Announcement message"
        multiline
        value={announcement}
        onChangeText={setAnnouncement}
      />

      <Text style={styles.subHeading}>Audience:</Text>
      <View style={styles.checkboxContainer}>
        <View style={styles.checkbox}>
          <CheckBox
            value={audiences.all}
            onValueChange={() => {
              setAudiences({
                all: !audiences.all,
                supervisor: false,
                students: false,
                external: false,
              });
            }}
          />
          <Text>All</Text>
        </View>

        <View style={styles.checkbox}>
          <CheckBox
            value={audiences.supervisor}
            onValueChange={() => handleAudienceChange('supervisor')}
            disabled={audiences.all}
          />
          <Text>Supervisor</Text>
        </View>

        <View style={styles.checkbox}>
          <CheckBox
            value={audiences.students}
            onValueChange={() => handleAudienceChange('students')}
            disabled={audiences.all}
          />
          <Text>Students</Text>
        </View>

        <View style={styles.checkbox}>
          <CheckBox
            value={audiences.external}
            onValueChange={() => handleAudienceChange('external')}
            disabled={audiences.all}
          />
          <Text>External</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => alert('Cancel')}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Post Announcement</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  checkboxContainer: {
    marginBottom: 20,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PostAnnouncement;
