import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

const SidebarS = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <Text style={styles.headerTitle}>FYP Progress Recorder</Text>
        <TouchableOpacity onPress={toggleSidebar}>
          <Text style={styles.toggleBtn}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Sidebar */}
      {sidebarVisible && (
        <View style={styles.sidebar}>
          <TouchableOpacity>
            <Text style={styles.sidebarLink}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sidebarLink}>Projects</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.sidebarLink}>Feedback</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Recent Updates */}
        <View style={styles.recent}>
          <Text style={styles.recentContent}>
            <Text style={styles.icon}>📊</Text> Recent Updates
          </Text>
        </View>

        {/* Dashboard Buttons */}
        <View style={styles.dashbtnParent}>
          <TouchableOpacity style={styles.dashbtn}>
            <Text>View Projects</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dashbtn}>
            <Text>Manage Teams</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dashbtn}>
            <Text>Feedback</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(236, 236, 236)',
  },
  header: {
    backgroundColor: '#051747',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  logo: {
    width: 40,
    height: 40,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  toggleBtn: {
    color: '#fff',
    fontSize: 24,
  },
  sidebar: {
    position: 'absolute',
    top: 60,
    left: 0,
    height: Dimensions.get('window').height - 60,
    width: 250,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  sidebarLink: {
    padding: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#051747',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  content: {
    padding: 20,
  },
  recent: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#D9D9D9',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  recentContent: {
    color: '#081F62',
    fontSize: 25,
  },
  icon: {
    fontSize: 27,
    marginRight: 10,
  },
  dashbtnParent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  dashbtn: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    margin: 7,
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
});

export default SidebarS;
