import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { Button, Card, Paragraph } from 'react-native-paper';

const ViewAssignments = ({ route, navigation }) => {
  const studentId = route?.params?.studentId || null; // Safely access studentId
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (studentId) {
      fetchAssignments(studentId);
    } else {
      Alert.alert("Error", "Student ID is not provided.");
      setLoading(false);
    }
  }, [studentId]);

  const fetchAssignments = async (studentId) => {
    try {
      const response = await axios.get(
        `http://localhost/MobApp/my-app/php_api/getStuAssignments.php?student_id=${11}` // Correct dynamic studentId
      );
      console.log('API Response:', response.data); // Log the entire response to check structure

      if (response.data.success && response.data.assignments && response.data.assignments.length > 0) {
        setAssignments(response.data.assignments);
      } else {
        Alert.alert("No assignments", "No assignments available for this student.");
      }
    } catch (error) {
      console.error("Error fetching assignments:", error);
      Alert.alert("Error", "Failed to fetch assignments.");
    } finally {
      setLoading(false);
    }
  };

  const renderAssignment = ({ item }) => {
    const deadline = new Date(item.deadline);
    const now = new Date();
    const timeLeft = deadline - now;
    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const deadlineText =
      timeLeft > 0 ? `${daysLeft} days, ${hoursLeft} hours left` : 'Past deadline';

    return (
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.assignmentName}>{item.assignment_name}</Text>
          <Paragraph>Deadline: {deadline.toLocaleString()}</Paragraph>
          <Paragraph>Time Left: {deadlineText}</Paragraph>
          <Paragraph>Status: {item.submission_id ? 'Submitted' : 'Not Submitted'}</Paragraph>
        </Card.Content>
        <Card.Actions>
          {item.submission_id ? (
            <Button
              mode="contained"
              onPress={() => navigation.navigate('Preview', { url: item.submission_path })}
            >
              Preview
            </Button>
          ) : (
            <Button
              mode="contained"
              onPress={() =>
                navigation.navigate('Submit', { assignmentId: item.id, studentId })
              }
            >
              Submit
            </Button>
          )}
        </Card.Actions>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Assignments</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={assignments}
          renderItem={renderAssignment}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0a4a91',
    marginBottom: 20,
  },
  card: {
    marginBottom: 10,
    padding: 10,
  },
  assignmentName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ViewAssignments;
