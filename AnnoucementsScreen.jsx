import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import { fetchAnnouncements, fetchPresentations } from "../api/api";

const AnnouncementsScreen = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [presentations, setPresentations] = useState([]);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [selectedPresentation, setSelectedPresentation] = useState(null);
  const [announcementModalVisible, setAnnouncementModalVisible] =
    useState(false);
  const [presentationModalVisible, setPresentationModalVisible] =
    useState(false);

  useEffect(() => {
    // Fetch data from the API
    fetchAnnouncements().then(setAnnouncements);
    fetchPresentations().then(setPresentations);
  }, []);

  const renderAnnouncement = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        setSelectedAnnouncement(item);
        setAnnouncementModalVisible(true);
      }}
    >
      <View style={styles.card}>
        <Text style={styles.cardText}>{item.message}</Text>
        <Text style={styles.cardDate}>{item.created_at}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderPresentation = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        setSelectedPresentation(item);
        setPresentationModalVisible(true);
      }}
    >
      <View style={styles.card}>
        <Text style={styles.cardText}>{item.project_title}</Text>
        <Text style={styles.cardDate}>
          {item.date} | {item.time}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Announcements</Text>
      <FlatList
        data={announcements}
        renderItem={renderAnnouncement}
        keyExtractor={(item) => item.id.toString()}
      />

      <Modal visible={announcementModalVisible} animationType="slide">
        <View style={styles.modalContent}>
          {selectedAnnouncement && (
            <>
              <Text style={styles.modalTitle}>Announcement</Text>
              <Text>{selectedAnnouncement.message}</Text>
              <Text>{selectedAnnouncement.created_at}</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setAnnouncementModalVisible(false)}
              >
                <Text>Close</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </Modal>

      <Text style={styles.heading}>Presentations</Text>
      <FlatList
        data={presentations}
        renderItem={renderPresentation}
        keyExtractor={(item) => item.presentation_id.toString()}
      />

      <Modal visible={presentationModalVisible} animationType="slide">
        <View style={styles.modalContent}>
          {selectedPresentation && (
            <>
              <Text style={styles.modalTitle}>Presentation Details</Text>
              <Text>{selectedPresentation.project_title}</Text>
              <Text>{selectedPresentation.description}</Text>
              <Text>
                {selectedPresentation.date} | {selectedPresentation.time}
              </Text>
              <Text>Room: {selectedPresentation.room_number}</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setPresentationModalVisible(false)}
              >
                <Text>Close</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  heading: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  cardText: { fontSize: 16 },
  cardDate: { fontSize: 14, color: "#777" },
  modalContent: { flex: 1, padding: 20, justifyContent: "center" },
  modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  closeButton: { marginTop: 20, alignItems: "center" },
});

export default AnnouncementsScreen;
