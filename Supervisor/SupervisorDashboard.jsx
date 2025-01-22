// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   Image,
// } from 'react-native';
// import SupNav from '../Supervisor/SupNav.jsx';

// const SupervisorDashboard = ({ navigation }) => {
//   const handleNavigation = (route) => {
//     navigation.navigate(route); // Use React Navigation for navigation
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>JUW - FYP Progress Recorder</Text>
//       </View>

//       {/* Content */}
//       <ScrollView contentContainerStyle={styles.content}>
//         {/* Breadcrumb */}
//         <View style={styles.breadcrumb}>
//           <Text style={styles.breadcrumbText}>
//             JUW - FYP Progress Recorder {'>'} Dashboard
//           </Text>
//         </View>

//         {/* Page Heading */}
//         <Text style={styles.heading}>Dashboard</Text>

//         {/* Activities Section */}
//         <View style={styles.activitiesSection}>
//           <Text style={styles.activitiesTitle}>Activities</Text>
//           <View style={styles.gridContainer}>
//             <TouchableOpacity
//               style={styles.dashbtn}
//               onPress={() => handleNavigation('Announcement')}
//             >
//               <Image
//                 source={require('../assets/IconsSuper/announcement.png')}
//                 style={styles.icon}
//               />
//               <Text style={styles.dashbtnText}>Announcement</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.dashbtn}
//               onPress={() => handleNavigation('Meetings')}
//             >
//               <Image
//                 source={require('../assets/IconsSuper/meeting.png')}
//                 style={styles.icon}
//               />
//               <Text style={styles.dashbtnText}>Meetings</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.dashbtn}
//               onPress={() => handleNavigation('Projects')}
//             >
//               <Image
//                 source={require('../assets/IconsSuper/project.png')}
//                 style={styles.icon}
//               />
//               <Text style={styles.dashbtnText}>View Projects</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.dashbtn}
//               onPress={() => handleNavigation('Templates')}
//             >
//               <Image
//                 source={require('../assets/IconsSuper/template.png')}
//                 style={styles.icon}
//               />
//               <Text style={styles.dashbtnText}>Templates</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.dashbtn}
//               onPress={() => handleNavigation('OtherEvaluation')}
//             >
//               <Image
//                 source={require('../assets/IconsSuper/remarks.png')}
//                 style={styles.icon}
//               />
//               <Text style={styles.dashbtnText}>Other Project Evaluation</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.dashbtn}
//               onPress={() => handleNavigation('MyEvaluation')}
//             >
//               <Image
//                 source={require('../assets/IconsSuper/forms.png')}
//                 style={styles.icon}
//               />
//               <Text style={styles.dashbtnText}>My Project Evaluation</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.dashbtn}
//               onPress={() => handleNavigation('Results')}
//             >
//               <Image
//                 source={require('../assets/IconsSuper/results.png')}
//                 style={styles.icon}
//               />
//               <Text style={styles.dashbtnText}>Result</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   header: {
//     backgroundColor: '#051747',
//     height: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   headerTitle: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   breadcrumb: {
//     padding: 10,
//     backgroundColor: '#e9ecef',
//   },
//   breadcrumbText: {
//     fontSize: 14,
//     color: '#6c757d',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#0a4a91',
//     textAlign: 'center',
//     marginVertical: 10,
//   },
//   activitiesSection: {
//     margin: 10,
//   },
//   activitiesTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   gridContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   dashbtn: {
//     width: '30%',
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     alignItems: 'center',
//     marginBottom: 15,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#dee2e6',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   icon: {
//     width: 50,
//     height: 50,
//     marginBottom: 5,
//   },
//   dashbtnText: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default SupervisorDashboard;

// new code
// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   Image,
// } from 'react-native';
// import SupNav from '../Supervisor/SupNav.jsx';

// const SupervisorDashboard = ({ navigation }) => {
//   const handleNavigation = (route) => {
//     navigation.navigate(route); // Use React Navigation for navigation
//   };

//   return (
//     <View style={styles.container}>
//       {/* SupNav Component */}
//       <SupNav />

//       {/* Content */}
//       <ScrollView contentContainerStyle={styles.content}>
//         {/* Breadcrumb */}
//         <View style={styles.breadcrumb}>
//           <Text style={styles.breadcrumbText}>
//             JUW - FYP Progress Recorder {'>'} Dashboard
//           </Text>
//         </View>

//         {/* Page Heading */}
//         <Text style={styles.heading}>Dashboard</Text>

//         {/* Activities Section */}
//         <View style={styles.activitiesSection}>
//           <Text style={styles.activitiesTitle}>Activities</Text>
//           <View style={styles.gridContainer}>
//             <TouchableOpacity
//               style={styles.dashbtn}
//               onPress={() => handleNavigation('SupAnnouncement')}
//             >
//               <Image
//                 source={require('../assets/IconsSuper/announcement.png')}
//                 style={styles.icon}
//               />
//               <Text style={styles.dashbtnText}>Announcement</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.dashbtn}
//               onPress={() => handleNavigation('MeetingScreen')}
//             >
//               <Image
//                 source={require('../assets/IconsSuper/meeting.png')}
//                 style={styles.icon}
//               />
//               <Text style={styles.dashbtnText}>Meetings</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.dashbtn}
//               onPress={() => handleNavigation('FetchProjects')}
//             >
//               <Image
//                 source={require('../assets/IconsSuper/project.png')}
//                 style={styles.icon}
//               />
//               <Text style={styles.dashbtnText}>View Projects</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.dashbtn}
//               onPress={() => handleNavigation('TemplateScreen')}
//             >
//               <Image
//                 source={require('../assets/IconsSuper/template.png')}
//                 style={styles.icon}
//               />
//               <Text style={styles.dashbtnText}>Templates</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.dashbtn}
//               onPress={() => handleNavigation('Remarks')}
//             >
//               <Image
//                 source={require('../assets/IconsSuper/remarks.png')}
//                 style={styles.icon}
//               />
//               <Text style={styles.dashbtnText}>Other Project Evaluation</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.dashbtn}
//               onPress={() => handleNavigation('VisibleForms')}
//             >
//               <Image
//                 source={require('../assets/IconsSuper/forms.png')}
//                 style={styles.icon}
//               />
//               <Text style={styles.dashbtnText}>My Project Evaluation</Text>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={styles.dashbtn}
//               onPress={() => handleNavigation('ViewResults')}
//             >
//               <Image
//                 source={require('../assets/IconsSuper/results.png')}
//                 style={styles.icon}
//               />
//               <Text style={styles.dashbtnText}>Result</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   breadcrumb: {
//     padding: 10,
//     backgroundColor: '#e9ecef',
//   },
//   breadcrumbText: {
//     fontSize: 14,
//     color: '#6c757d',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#0a4a91',
//     textAlign: 'center',
//     marginVertical: 10,
//   },
//   activitiesSection: {
//     margin: 10,
//   },
//   activitiesTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   gridContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   dashbtn: {
//     width: '30%',
//     backgroundColor: '#fff',
//     borderRadius: 20,
//     alignItems: 'center',
//     marginBottom: 15,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#dee2e6',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   icon: {
//     width: 50,
//     height: 50,
//     marginBottom: 5,
//   },
//   dashbtnText: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default SupervisorDashboard;




import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import SupNav from '../Supervisor/SupNav.jsx';

const SupervisorDashboard = ({ navigation }) => {
  const handleNavigation = (route) => {
    navigation.navigate(route); // Use React Navigation for navigation
  };

  return (
    <View style={styles.container}>
      {/* SupNav Component */}
      <SupNav />

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Breadcrumb */}
        <View style={styles.breadcrumb}>
          <Text style={styles.breadcrumbText}>
            JUW - FYP Progress Recorder {'>'} Dashboard
          </Text>
        </View>

        {/* Page Heading */}
        <Text style={styles.heading}>Welcome to Your Dashboard</Text>

        {/* Activities Section */}
        <View style={styles.activitiesSection}>
          <View style={styles.gridContainer}>
            <TouchableOpacity
              style={styles.dashbtn}
              onPress={() => handleNavigation('SupAnnouncement')}
            >
              <Image
                source={require('../assets/IconsSuper/announcement.png')}
                style={styles.icon}
              />
              <Text style={styles.dashbtnText}>Announcement</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.dashbtn}
              onPress={() => handleNavigation('MeetingScreen')}
            >
              <Image
                source={require('../assets/IconsSuper/meeting.png')}
                style={styles.icon}
              />
              <Text style={styles.dashbtnText}>Meetings</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.dashbtn}
              onPress={() => handleNavigation('FetchProjects')}
            >
              <Image
                source={require('../assets/IconsSuper/project.png')}
                style={styles.icon}
              />
              <Text style={styles.dashbtnText}>View Projects</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.dashbtn}
              onPress={() => handleNavigation('TemplateScreen')}
            >
              <Image
                source={require('../assets/IconsSuper/template.png')}
                style={styles.icon}
              />
              <Text style={styles.dashbtnText}>Templates</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.dashbtn}
              onPress={() => handleNavigation('Remarks')}
            >
              <Image
                source={require('../assets/IconsSuper/remarks.png')}
                style={styles.icon}
              />
              <Text style={styles.dashbtnText}>Other Project Evaluation</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.dashbtn}
              onPress={() => handleNavigation('VisibleForms')}
            >
              <Image
                source={require('../assets/IconsSuper/forms.png')}
                style={styles.icon}
              />
              <Text style={styles.dashbtnText}>My Project Evaluation</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.dashbtn}
              onPress={() => handleNavigation('ViewResults')}
            >
              <Image
                source={require('../assets/IconsSuper/results.png')}
                style={styles.icon}
              />
              <Text style={styles.dashbtnText}>Result</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  breadcrumb: {
    padding: 10,
    backgroundColor: '#e9ecef',
  },
  breadcrumbText: {
    fontSize: 14,
    color: '#6c757d',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginVertical: 10,
    marginBottom:19,
  },
  activitiesSection: {
    margin: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
    elevation: 3,
    marginLeft: 20,
    marginRight:20,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  dashbtnText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SupervisorDashboard;
