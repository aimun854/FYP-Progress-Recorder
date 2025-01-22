import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import Video from 'react-native-video';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
// Import Sidebar
import Sidebar from '../Coordinator/Sidebar';

const GalleryScreen = () => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState('');

  const fetchVideos = async () => {
    try {
      const response = await axios.get(`http://localhost/MobApp/my-app/php_api/videos.php`);
      setVideos(response.data);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch videos.');
    }
  };

  const deleteVideo = async (videoId) => {
    try {
      await axios.post('http://localhost/MobApp/my-app/php_api/delete_video.php', { video_id: videoId });
      Alert.alert('Success', 'Video deleted successfully.');
      fetchVideos(); // Refresh the video list
    } catch (error) {
      Alert.alert('Error', 'Failed to delete the video.');
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [search]);

  const renderVideoItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Video
        source={{ uri: item.file_path }}
        style={styles.video}
        controls={true}
        resizeMode="cover"
      />
      <View style={styles.descriptionContainer}>
        <Text numberOfLines={2} style={styles.description}>
          {item.description}
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.dateText}>Uploaded on {item.uploaded_at}</Text>
        <TouchableOpacity onPress={() => deleteVideo(item.id)}>
          <Icon name="trash-bin" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
    
 {/* Include Sidebar */}
 <Sidebar />
      <Text style={styles.heading}>FYP Gallery</Text>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#666" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
        />
      </View>
      {videos.length === 0 ? (
        <Text style={styles.noVideos}>No videos available.</Text>
      ) : (
        <FlatList
          data={videos}
          renderItem={renderVideoItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f8f9fa' },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#0a4a91',
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  searchInput: { flex: 1, marginLeft: 8 },
  listContainer: { paddingBottom: 16 },
  noVideos: { textAlign: 'center', marginTop: 20, color: '#666' },
  card: { backgroundColor: '#fff', borderRadius: 8, marginBottom: 16, padding: 12 },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 8 },
  video: { width: '100%', height: 200, borderRadius: 8 },
  descriptionContainer: { marginVertical: 8 },
  description: { fontSize: 14, color: '#666' },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  dateText: { fontSize: 12, color: '#999' },
});

export default GalleryScreen;
