// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
// import axios from 'axios';
// import { useNavigation } from '@react-navigation/native';

// const MeetingScreen = () => {
//   const [meetings, setMeetings] = useState([]);
//   const navigation = useNavigation();

//   useEffect(() => {
//     // Replace this URL with the PHP endpoint that fetches meeting data
//     axios.get('http://localhost/MobApp/my-app/php_api/getMeetingsS.php')
//       .then(response => {
//         setMeetings(response.data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   const renderItem = ({ item }) => (
//     <View style={styles.card}>
//       <Text style={styles.title}>{item.title}</Text>
//       <Text>Project: {item.project_title}</Text>
//       <Text>Date: {item.date}</Text>
//       <Text>Time: {item.time}</Text>
//       <Text>Feedback: {item.feedback}</Text>
//       <Text>Attendance: {item.attendance_status}</Text>
//       <View style={styles.buttonsContainer}>
//         <Button title="Give Remarks" onPress={() => navigation.navigate('MeetingDetails', { meetingId: item.id })} />
//         <Button title="Send Email" onPress={() => sendEmail(item.id)} />
//       </View>
//     </View>
//   );

//   const sendEmail = (meetingId) => {
//     // Call the PHP script to send an email
//     axios.post('https://yourbackend.com/sendEmail.php', { meeting_id: meetingId })
//       .then(response => {
//         console.log('Email sent successfully');
//       })
//       .catch(error => {
//         console.error('Failed to send email', error);
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Meetings</Text>
//       <FlatList
//         data={meetings}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderItem}
//       />
//       <Button title="Set Meeting" onPress={() => navigation.navigate('ScheduleMeeting')} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#0a4a91',
//   },
//   card: {
//     backgroundColor: '#f1f1f1',
//     padding: 15,
//     marginBottom: 10,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
//   buttonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   }
// });

// export default MeetingScreen;



import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import SupNav from '../Supervisor/SupNav.jsx';

const MeetingScreen = () => {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    axios.get('http://localhost/MobApp/my-app/php_api/getMeetingsS.php')
      .then(response => {
        console.log('API Response:', response.data);
        setMeetings(response.data); // Update the state with fetched meetings data
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch(error => {
        console.error('Error fetching meetings:', error);
        setError('Failed to load meetings');
        setLoading(false);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>Project: {item.project_title || 'No title available'}</Text>
      <Text>Date: {item.date || 'N/A'}</Text>
      <Text>Time: {item.time || 'N/A'}</Text>
      <Text>Feedback: {item.feedback || 'No feedback available'}</Text>
      <Text>Attendance: {item.attendance_status || 'No status available'}</Text>
      <View style={styles.buttonsContainer}>
        <Button title="Give Remarks" onPress={() => navigation.navigate('MeetingDetails', { meetingId: item.id })} />
        <Button title="Send Email" onPress={() => sendEmail(item.id)} />
      </View>
    </View>
  );

  const sendEmail = (meetingId) => {
    axios.post('https://yourbackend.com/sendEmail.php', { meeting_id: meetingId })
      .then(response => {
        console.log('Email sent successfully');
      })
      .catch(error => {
        console.error('Failed to send email', error);
      });
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
    <SupNav /> {/* Include SupNav here for the navigation bar and sidebar */}
      <View style={styles.content}></View>
        {/* <View style={styles.header}>
          <Text style={styles.heading}>FYP Gallery</Text>
        </View> */}
      <Text style={styles.heading}>Meetings</Text>
      {meetings.length === 0 ? (
        <Text>No meetings available</Text>
      ) : (
        <FlatList
          data={meetings}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
      <Button title="Set Meeting" onPress={() => navigation.navigate('ScheduleMeeting')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
   marginTop:10, // Adjusts content below StuNav
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0a4a91',
  },
  card: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  }
});

export default MeetingScreen;
