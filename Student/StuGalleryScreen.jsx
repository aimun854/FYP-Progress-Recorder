// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TextInput,
//   TouchableOpacity,
//   ActivityIndicator,
//   Video,
// } from 'react-native';

// const StuGalleryScreen = ({ navigation }) => {
//   const [videos, setVideos] = useState([]);
//   const [search, setSearch] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchVideos();
//   }, []);

//   const fetchVideos = async (searchQuery = '') => {
//     setLoading(true);
//     try {
//       const response = await fetch(`http://localhost/MobApp/my-app/php_api/getVideos.php`);
//       const data = await response.json();
//       setVideos(data);
//     } catch (error) {
//       console.error('Error fetching videos:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = () => {
//     fetchVideos(search);
//   };

//   const renderVideoItem = ({ item }) => (
//     <View style={styles.card}>
//       <Text style={styles.cardTitle}>{item.title}</Text>
//       <View style={styles.videoContainer}>
//         <Video
//           source={{ uri: 'http://localhost/MobApp/my-app/php_api/uploadVideo.php' }}
//           style={styles.video}
//           controls
//         />
//       </View>
//       <Text style={styles.cardDescription}><Text style={{ fontWeight: 'bold' }}>Description:</Text> {item.description}</Text>
//       <Text style={styles.cardDate}>Uploaded on {item.uploaded_at}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.heading}>FYP Gallery</Text>
//         <TouchableOpacity
//           style={styles.uploadButton}
//           onPress={() => navigation.navigate('UploadVideoScreen')}
//         >
//           <Text style={styles.uploadButtonText}>Upload Video</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.searchContainer}>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search"
//           value={search}
//           onChangeText={setSearch}
//         />
//         <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
//           <Text style={styles.searchButtonText}>Search</Text>
//         </TouchableOpacity>
//       </View>
//       {loading ? (
//         <ActivityIndicator size="large" color="#0a4a91" />
//       ) : videos.length > 0 ? (
//         <FlatList
//           data={videos}
//           renderItem={renderVideoItem}
//           keyExtractor={(item) => item.id.toString()}
//         />
//       ) : (
//         <Text style={styles.noVideosText}>No videos available.</Text>
//       )}
//     </View>
//   );
// };

// export default StuGalleryScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#0a4a91',
//   },
//   uploadButton: {
//     backgroundColor: '#0a4a91',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   uploadButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: '500',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   searchInput: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginRight: 10,
//   },
//   searchButton: {
//     backgroundColor: '#0a4a91',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   searchButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   card: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     marginBottom: 20,
//     overflow: 'hidden',
//     backgroundColor: '#fff',
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     padding: 10,
//     backgroundColor: '#f8f9fa',
//   },
//   videoContainer: {
//     aspectRatio: 16 / 9,
//     backgroundColor: '#000',
//   },
//   video: {
//     width: '100%',
//     height: '100%',
//   },
//   cardDescription: {
//     padding: 10,
//     fontSize: 14,
//     color: '#333',
//   },
//   cardDate: {
//     padding: 10,
//     fontSize: 12,
//     color: '#666',
//     textAlign: 'right',
//   },
//   noVideosText: {
//     textAlign: 'center',
//     color: '#666',
//     fontSize: 16,
//     marginTop: 20,
//   },
// });


// updated
// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   TextInput,
//   TouchableOpacity,
//   ActivityIndicator,
//   Video,
// } from 'react-native';
// import StuNav from './StuNav'; // Importing the StuNav component

// const StuGalleryScreen = ({ navigation }) => {
//   const [videos, setVideos] = useState([]);
//   const [search, setSearch] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchVideos();
//   }, []);

//   const fetchVideos = async (searchQuery = '') => {
//     setLoading(true);
//     try {
//       const response = await fetch(`http://localhost/MobApp/my-app/php_api/getVideos.php`);
//       const data = await response.json();
//       setVideos(data);
//     } catch (error) {
//       console.error('Error fetching videos:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = () => {
//     fetchVideos(search);
//   };

//   const renderVideoItem = ({ item }) => (
//     <View style={styles.card}>
//       <Text style={styles.cardTitle}>{item.title}</Text>
//       <View style={styles.videoContainer}>
//         <Video
//           source={{ uri: 'http://localhost/MobApp/my-app/php_api/uploadVideo.php' }}
//           style={styles.video}
//           controls
//         />
//       </View>
//       <Text style={styles.cardDescription}><Text style={{ fontWeight: 'bold' }}>Description:</Text> {item.description}</Text>
//       <Text style={styles.cardDate}>Uploaded on {item.uploaded_at}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <StuNav /> {/* Include StuNav here for the navigation bar and sidebar */}
//       <View style={styles.header}>
      
//         <Text style={styles.heading}>FYP Gallery</Text>
//         {/* <TouchableOpacity
//           style={styles.uploadButton}
//           onPress={() => navigation.navigate('UploadVideoScreen')}
//         >
//           <Text style={styles.uploadButtonText}>Upload Video</Text>
//         </TouchableOpacity> */}
//       </View>
//       <View style={styles.searchContainer}>
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search"
//           value={search}
//           onChangeText={setSearch}
//         />
//         <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
//           <Text style={styles.searchButtonText}>Search</Text>
//         </TouchableOpacity>
//       </View>
//       {loading ? (
//         <ActivityIndicator size="large" color="#0a4a91" />
//       ) : videos.length > 0 ? (
//         <FlatList
//           data={videos}
//           renderItem={renderVideoItem}
//           keyExtractor={(item) => item.id.toString()}
//         />
//       ) : (
//         <Text style={styles.noVideosText}>No videos available.</Text>
//       )}
//     </View>
//   );
// };

// export default StuGalleryScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 20,
    
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#0a4a91',
//     marginTop: 20.
//   },
//   // uploadButton: {
//   //   backgroundColor: '#0a4a91',
//   //   paddingVertical: 10,
//   //   paddingHorizontal: 20,
//   //   borderRadius: 5,
//   // },
//   // uploadButtonText: {
//   //   color: '#fff',
//   //   fontSize: 16,
//   //   fontWeight: '500',
//   // },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   searchInput: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginRight: 10,
//   },
//   searchButton: {
//     backgroundColor: '#0a4a91',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   searchButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   card: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     marginBottom: 20,
//     overflow: 'hidden',
//     backgroundColor: '#fff',
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     padding: 10,
//     backgroundColor: '#f8f9fa',
//   },
//   videoContainer: {
//     aspectRatio: 16 / 9,
//     backgroundColor: '#000',
//   },
//   video: {
//     width: '100%',
//     height: '100%',
//   },
//   cardDescription: {
//     padding: 10,
//     fontSize: 14,
//     color: '#333',
//   },
//   cardDate: {
//     padding: 10,
//     fontSize: 12,
//     color: '#666',
//     textAlign: 'right',
//   },
//   noVideosText: {
//     textAlign: 'center',
//     color: '#666',
//     fontSize: 16,
//     marginTop: 20,
//   },
// });


import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import StuNav from './StuNav'; // Importing the StuNav component

const StuGalleryScreen = ({ navigation }) => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async (searchQuery = '') => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost/MobApp/my-app/php_api/getVideos.php`);
      const data = await response.json();
      setVideos(data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchVideos(search);
  };

  const renderVideoItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <View style={styles.videoContainer}>
        <Text style={styles.cardDescription}>[Video Component Placeholder]</Text>
      </View>
      <Text style={styles.cardDescription}><Text style={{ fontWeight: 'bold' }}>Description:</Text> {item.description}</Text>
      <Text style={styles.cardDate}>Uploaded on {item.uploaded_at}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StuNav /> {/* Include StuNav here for the navigation bar and sidebar */}
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.heading}>FYP Gallery</Text>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={search}
            onChangeText={setSearch}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
        {loading ? (
          <ActivityIndicator size="large" color="#0a4a91" />
        ) : videos.length > 0 ? (
          <FlatList
            data={videos}
            renderItem={renderVideoItem}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <Text style={styles.noVideosText}>No videos available.</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default StuGalleryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    
    paddingHorizontal: 16,
   marginTop:10, // Adjusts content below StuNav
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0a4a91',
    marginTop: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#0a4a91',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    padding: 10,
    backgroundColor: '#f8f9fa',
  },
  videoContainer: {
    aspectRatio: 16 / 9,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardDescription: {
    padding: 10,
    fontSize: 14,
    color: '#333',
  },
  cardDate: {
    padding: 10,
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
  },
  noVideosText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 16,
    marginTop: 20,
  },
});
