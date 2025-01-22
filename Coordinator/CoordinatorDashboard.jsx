// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Button,
//   ScrollView,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";

// const CoordinatorDashboard = ({ navigation }) => {
//     // const navigation = useNavigation();

//   // Dummy data for FYP Duration section
//   // const ongoingCourses = [
//   //   { title: "Course A", startDate: "Jan 01, 2024", endDate: "Dec 31, 2024" },
//   //   { title: "Course B", startDate: "Feb 01, 2024", endDate: "Nov 30, 2024" },
//   // ];

//   // Handle button clicks
//   const handleNavigation = (screen) => {
//     Alert.alert("Navigating to", screen);
//     navigation.navigate(screen);
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.heading}>JUW - FYP Progress Recorder</Text>
//       </View>

//       <Text style={styles.subheading}>Dashboard</Text>

//       {/* Manage Page Visibility */}
//       <TouchableOpacity
//         style={styles.manageButton}
//         onPress={() => handleNavigation("ManagePages")}
//       >
//         <Text style={styles.manageText}>Manage Page Visibility</Text>
//       </TouchableOpacity>

//       {/* More Activities */}
//       <Text style={styles.sectionTitle}>More Activities</Text>
//       <View style={styles.gridContainer}>
//         {dashboardItems.map((item, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.dashbtn}
//             onPress={() => handleNavigation(item.screen)}
//           >
//             <Image source={item.icon} style={styles.icon} />
//             <Text style={styles.iconText}>{item.title}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* FYP Duration */}
//       {/* <View style={styles.durationContainer}>
//         <Text style={styles.durationHeading}>FYP Duration</Text>
//         {ongoingCourses.length > 0 ? (
//           ongoingCourses.map((course, index) => (
//             <View key={index} style={styles.courseDuration}>
//               <Text style={styles.courseTitle}>{course.title}</Text>
//               <Text style={styles.courseDate}>Start: {course.startDate}</Text>
//               <Text style={styles.courseDate}>End: {course.endDate}</Text>
//             </View>
//           ))
//         ) : (
//           <Text>No ongoing courses.</Text>
//         )}
//       </View> */}
//     </ScrollView>
//   );
// };

// const dashboardItems = [
//   { title: "Announcement", icon: require("../assets/IconsC/announcement.png"), screen: "AnnouncementsList" },
//   { title: "Forms", icon: require("../assets/IconsC/forms.png"), screen: "FormList" },
//   { title: "Project Progress", icon: require("../assets/IconsC/progress.png"), screen: "ProjectProgress" },
//   { title: "Presentations", icon: require("../assets/IconsC/pp.png"), screen: "ViewSchedule" },
//   { title: "Projects", icon: require("../assets/IconsC/status board.png"), screen: "Projects" },
//   { title: "Templates", icon: require("../assets/IconsC/upload-file.png"), screen: "Templates" },
//   { title: "Assignments", icon: require("../assets/IconsC/portal.png"), screen: "ViewPortal" },
//   { title: "Gallery", icon: require("../assets/IconsC/gallery.png"), screen: "Gallery" },
//   { title: "Event", icon: require("../assets/IconsC/events.png"), screen: "Event" },
//   { title: "Result", icon: require("../assets/IconsC/evaluation.png"), screen: "ViewResult" },
  
// ];

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f9f9f9",
//     padding: 15,
//   },
//   header: {
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#0a4a91",
//   },
//   subheading: {
//     fontSize: 20,
//     fontWeight: "600",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   manageButton: {
//     backgroundColor: "#007bff",
//     padding: 15,
//     borderRadius: 5,
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   manageText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginVertical: 10,
//   },
//   gridContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   },
//   dashbtn: {
//     width: "30%",
//     backgroundColor: "#fff",
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 15,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.2,
//     shadowRadius: 1.41,
//     elevation: 2,
//   },
//   icon: {
//     width: 50,
//     height: 50,
//     marginBottom: 5,
//   },
//   iconText: {
//     fontSize: 14,
//     fontWeight: "600",
//     textAlign: "center",
//   },

//   courseTitle: {
//     fontSize: 16,
//     fontWeight: "600",
//   },
//   courseDate: {
//     fontSize: 14,
//   },
// });
// export default CoordinatorDashboard;





// 
// import React from "react";
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from "react-native";
// import Sidebar from './src/Coordinator/Sidebar';

// const CoordinatorDashboard = ({ navigation }) => {
//   // Handle button clicks with navigation and alert
//   const handleNavigation = (screen) => {
//     Alert.alert("Navigating to", screen);
//     navigation.navigate(screen);
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.heading}>JUW - FYP Progress Recorder</Text>
//       </View>

//       <Text style={styles.subheading}>Dashboard</Text>

//       {/* Manage Page Visibility */}
//       <TouchableOpacity
//         style={styles.manageButton}
//         onPress={() => handleNavigation("ManagePages")}
//       >
//         <Text style={styles.manageText}>Manage Page Visibility</Text>
//       </TouchableOpacity>

//       {/* More Activities Section */}
//       <Text style={styles.sectionTitle}>More Activities</Text>
//       <View style={styles.gridContainer}>
//         {dashboardItems.map((item, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.dashbtn}
//             onPress={() => handleNavigation(item.screen)}
//           >
//             <Image source={item.icon} style={styles.icon} />
//             <Text style={styles.iconText}>{item.title}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </ScrollView>
//   );
// };

// const dashboardItems = [
//   { title: "Announcement", icon: require("../assets/IconsC/announcement.png"), screen: "AnnouncementsList" },
//   { title: "Forms", icon: require("../assets/IconsC/forms.png"), screen: "FormList" },
//   { title: "Project Progress", icon: require("../assets/IconsC/progress.png"), screen: "ProjectProgress" },
//   { title: "Presentations", icon: require("../assets/IconsC/pp.png"), screen: "ViewSchedule" },
//   { title: "Projects", icon: require("../assets/IconsC/status board.png"), screen: "Projects" },
//   { title: "Templates", icon: require("../assets/IconsC/upload-file.png"), screen: "Templates" },
//   { title: "Assignments", icon: require("../assets/IconsC/portal.png"), screen: "ViewPortal" },
//   { title: "Gallery", icon: require("../assets/IconsC/gallery.png"), screen: "Gallery" },
//   { title: "Event", icon: require("../assets/IconsC/events.png"), screen: "Event" },
//   { title: "Result", icon: require("../assets/IconsC/evaluation.png"), screen: "ViewResult" },
// ];

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f9f9f9",
//     padding: 15,
//   },
//   header: {
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#0a4a91",
//   },
//   subheading: {
//     fontSize: 20,
//     fontWeight: "600",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   manageButton: {
//     backgroundColor: "#007bff",
//     padding: 15,
//     borderRadius: 5,
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   manageText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginVertical: 10,
//   },
//   gridContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   },
//   dashbtn: {
//     width: "30%",
//     backgroundColor: "#fff",
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 15,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.2,
//     shadowRadius: 1.41,
//     elevation: 2,
//   },
//   icon: {
//     width: 50,
//     height: 50,
//     marginBottom: 5,
//   },
//   iconText: {
//     fontSize: 14,
//     fontWeight: "600",
//     textAlign: "center",
//   },
// });

// export default CoordinatorDashboard;


// 
// CoordinatorDashboard.js
// import React from "react";
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from "react-native";
// import Sidebar from '../Coordinator/Sidebar.jsx';  // Import Sidebar

// const CoordinatorDashboard = ({ navigation }) => {
//   // Handle button clicks with navigation and alert
//   const handleNavigation = (screen) => {
//     Alert.alert("Navigating to", screen);
//     navigation.navigate(screen);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Sidebar Component */}
//       <Sidebar />

//       <ScrollView style={styles.content}>
//         <View style={styles.header}>
//           <Text style={styles.heading}>JUW - FYP Progress Recorder</Text>
//         </View>

//         <Text style={styles.subheading}>Dashboard</Text>

//         {/* Manage Page Visibility */}
//         <TouchableOpacity
//           style={styles.manageButton}
//           onPress={() => handleNavigation("ManagePages")}
//         >
//           <Text style={styles.manageText}>Manage Page Visibility</Text>
//         </TouchableOpacity>

//         {/* More Activities Section */}
//         <Text style={styles.sectionTitle}>More Activities</Text>
//         <View style={styles.gridContainer}>
//           {dashboardItems.map((item, index) => (
//             <TouchableOpacity
//               key={index}
//               style={styles.dashbtn}
//               onPress={() => handleNavigation(item.screen)}
//             >
//               <Image source={item.icon} style={styles.icon} />
//               <Text style={styles.iconText}>{item.title}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const dashboardItems = [
//   { title: "Announcement", icon: require("../assets/IconsC/announcement.png"), screen: "AnnouncementsList" },
//   { title: "Forms", icon: require("../assets/IconsC/forms.png"), screen: "FormList" },
//   { title: "Project Progress", icon: require("../assets/IconsC/progress.png"), screen: "ProjectProgress" },
//   { title: "Presentations", icon: require("../assets/IconsC/pp.png"), screen: "ViewSchedule" },
//   { title: "Projects", icon: require("../assets/IconsC/status board.png"), screen: "Projects" },
//   { title: "Templates", icon: require("../assets/IconsC/upload-file.png"), screen: "Templates" },
//   { title: "Assignments", icon: require("../assets/IconsC/portal.png"), screen: "ViewPortal" },
//   { title: "Gallery", icon: require("../assets/IconsC/gallery.png"), screen: "Gallery" },
//   { title: "Event", icon: require("../assets/IconsC/events.png"), screen: "Event" },
//   { title: "Result", icon: require("../assets/IconsC/evaluation.png"), screen: "ViewResult" },
// ];

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row', // to allow Sidebar and content to be side by side
//   },
//   content: {
//     flex: 1,  // Content will take the remaining space
//     padding: 15,
//   },
//   header: {
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#0a4a91",
//   },
//   subheading: {
//     fontSize: 20,
//     fontWeight: "600",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   manageButton: {
//     backgroundColor: "#007bff",
//     padding: 15,
//     borderRadius: 5,
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   manageText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginVertical: 10,
//   },
//   gridContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-between",
//   },
//   dashbtn: {
//     width: "30%",
//     backgroundColor: "#fff",
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 15,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.2,
//     shadowRadius: 1.41,
//     elevation: 2,
//   },
//   icon: {
//     width: 50,
//     height: 50,
//     marginBottom: 5,
//   },
//   iconText: {
//     fontSize: 14,
//     fontWeight: "600",
//     textAlign: "center",
//   },
// });

// export default CoordinatorDashboard;

// newwwwww
import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from "react-native";
import Sidebar from '../Coordinator/Sidebar.jsx';  // Import Sidebar

const CoordinatorDashboard = ({ navigation }) => {
  // Handle button clicks with navigation and alert
  const handleNavigation = (screen) => {
    Alert.alert("Navigating to", screen);
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      {/* Sidebar Component as header */}
      <Sidebar />

      <ScrollView style={styles.content}>
        <Text style={styles.subheading}>Welcome to Your Dashboard</Text>
        {/* More Activities Section */}
        {/* <Text style={styles.sectionTitle}>Activities</Text> */}
        <View style={styles.gridContainer}>
          {dashboardItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.dashbtn}
              onPress={() => handleNavigation(item.screen)}
            >
              <Image source={item.icon} style={styles.icon} />
              <Text style={styles.iconText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const dashboardItems = [
  { title: "Announcement", icon: require("../assets/IconsC/announcement.png"), screen: "AnnouncementsList" },
  { title: "Forms", icon: require("../assets/IconsC/forms.png"), screen: "FormList" },
  { title: "Result", icon: require("../assets/IconsC/evaluation.png"), screen: "ViewResult" },
  { title: "Presentations", icon: require("../assets/IconsC/pp.png"), screen: "ViewPresentations" },
  { title: "Projects", icon: require("../assets/IconsC/status board.png"), screen: "ProjectList" },
  { title: "Templates", icon: require("../assets/IconsC/upload-file.png"), screen: "Template" },
  { title: "Assignments", icon: require("../assets/IconsC/portal.png"), screen: "ViewAssignmentScreen" },
  { title: "Gallery", icon: require("../assets/IconsC/gallery.png"), screen: "GalleryScreen" },
  
  // { title: "Event", icon: require("../assets/IconsC/events.png"), screen: "Event" },
  // { title: "Result", icon: require("../assets/IconsC/evaluation.png"), screen: "ViewResult" },
   // { title: "Project Progress", icon: require("../assets/IconsC/progress.png"), screen: "ProjectProgressScreen" },
];

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',  // Arrange sidebar and content vertically
  },
  content: {
    // flex: 1,  // Content takes up the rest of the space
    // paddingHorizontal: 15,  // Added horizontal padding for content
  },
  header: {
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  subheading: {
    fontSize: 25,
    fontWeight: "650",
    color: "black",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 30, 
  },
  manageButton: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 5,
    marginBottom: 15,  // Reduced margin
    alignItems: "center",
  },
  manageText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 5,
    marginLeft: 30,
    marginBottom: 20,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 25,  // Added padding to the left and right of the grid
  },
  dashbtn: {
    width: '40%',
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#dee2e6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    // elevation: 3,
    marginLeft: 10,
    marginRight:10,
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  iconText: {
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default CoordinatorDashboard;
