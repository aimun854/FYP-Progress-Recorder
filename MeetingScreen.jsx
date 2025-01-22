import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

// Replace with your actual backend API endpoint
const API_URL = "http://yourserver.com/getMeetings.php";

const MeetingsScreen = () => {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMeeting, setSelectedMeeting] = useState(null);

  // Fetch meetings data from the backend
  const fetchMeetings = async () => {
    try {
      const response = await fetch(API_URL, {
        method: "GET",
        credentials: "include", // For session handling
      });
      if (!response.ok) throw new Error("Failed to fetch meetings.");
      const data = await response.json();
      setMeetings(data);
    } catch (error) {
      console.error("Error fetching meetings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeetings();
  }, []);

  // Render individual meeting card
  const renderMeeting = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => setSelectedMeeting(item)}
    >
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDetails}>Date: {item.date}</Text>
      <Text style={styles.cardDetails}>Time: {item.time}</Text>
      <Text style={styles.cardDetails}>Project: {item.project_title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Scheduled Meetings</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0a4a91" />
      ) : (
        <FlatList
          data={meetings}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderMeeting}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No meetings found.</Text>
          }
        />
      )}

      {/* Meeting Details Modal */}
      <Modal
        visible={!!selectedMeeting}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setSelectedMeeting(null)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedMeeting && (
              <>
                <Text style={styles.modalTitle}>{selectedMeeting.title}</Text>
                <Text style={styles.modalText}>
                  <Text style={styles.bold}>Date:</Text> {selectedMeeting.date}
                </Text>
                <Text style={styles.modalText}>
                  <Text style={styles.bold}>Time:</Text> {selectedMeeting.time}
                </Text>
                <Text style={styles.modalText}>
                  <Text style={styles.bold}>Project:</Text>{" "}
                  {selectedMeeting.project_title}
                </Text>
                <Text style={styles.modalText}>
                  <Text style={styles.bold}>Description:</Text>{" "}
                  {selectedMeeting.description}
                </Text>
              </>
            )}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setSelectedMeeting(null)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0a4a91",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  cardDetails: {
    fontSize: 14,
    color: "#666",
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "#aaa",
    marginTop: 20,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0a4a91",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  bold: {
    fontWeight: "700",
  },
  closeButton: {
    backgroundColor: "#0a4a91",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
  },
});

export default MeetingsScreen;
