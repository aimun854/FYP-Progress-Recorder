import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import SupNav from '../Supervisor/SupNav.jsx';

export default function SupProjectList({ route, navigation }) {
  const { formId, supervisorId } = route.params; // Get dynamic parameters
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch(
        `http://localhost/MobApp/my-app/php_api/SFetchProjects.php?supervisor_id=${27}&form_id=${24}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (Array.isArray(data)) {
        setProjects(data);
      } else {
        throw new Error(data.error || "Invalid response from server");
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const renderProject = ({ item }) => (
    <View style={styles.projectRow}>
      <Text style={styles.projectTitle}>{item.title}</Text>
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() =>
          navigation.navigate(item.marks_submitted ? "ViewMarks" : "AssignMarks", {
            projectId: item.id,
            formId,
          })
        }
      >
        <Text style={styles.actionText}>
          {item.marks_submitted ? "View" : "Evaluate"}
        </Text>
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
      
        <ActivityIndicator size="large" color="#0a4a91" />
        <Text>Loading Projects...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
    {/* SupNav Component */}
    <SupNav />

{/* Page Content */}
<View style={styles.content}>
  <Text style={styles.heading}>Project List</Text></View>
      
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProject}
        ListEmptyComponent={<Text style={styles.emptyMessage}>No projects found.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    // flex: 1,
    // backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
    marginTop: 10, 
    marginLeft:20,
    marginRight:20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0a4a91",
    marginBottom: 16,
    marginLeft:1
  },
  projectRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#fff",
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    marginLeft:20,
    marginRight:20,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  actionButton: {
    backgroundColor: "#0a4a91",
    padding: 8,
    borderRadius: 4,
  },
  actionText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  errorText: {
    color: "red",
    fontSize: 16,
    textAlign: "center",
  },
  emptyMessage: {
    textAlign: "center",
    color: "#666",
  },
});
