// import React, { useEffect, useState } from 'react';
// import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

// const FetchProjects = () => {
//     const [projects, setProjects] = useState([]);
//     const [names, setNames] = useState({});
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchProjects = async () => {
//             try {
//                 const response = await fetch('http://localhost/MobApp/my-app/php_api/getProjectsS.php?faculty_id=27'); // Replace with your computer's local IP address
//                 const data = await response.json();
                
//                 // Check if data is in expected format
//                 if (data.projects && Array.isArray(data.projects)) {
//                     setProjects(data.projects);
//                     setNames(data.names || {});
//                 } else {
//                     setProjects([]);
//                 }
                
//                 setLoading(false);
//             } catch (error) {
//                 console.error("Error fetching projects:", error);
//                 setLoading(false);
//                 setProjects([]);
//             }
//         };
        
//         fetchProjects();
//     }, []);

//     if (loading) {
//         return (
//             <View style={styles.centered}>
//                 <Text>Loading...</Text>
//             </View>
//         );
//     }

//     if (projects.length === 0) {
//         return (
//             <View style={styles.centered}>
//                 <Text>No projects available.</Text>
//             </View>
//         );
//     }

//     return (
//         <ScrollView style={styles.container}>
//             {projects.map((project) => (
//                 <View key={project.id} style={styles.projectContainer}>
//                     <Text style={styles.projectTitle}>{project.title}</Text>
//                     <Text style={styles.projectDescription}>{project.description}</Text>
//                     <Text style={styles.projectLabel}>Students:</Text>
//                     <Text style={styles.projectInfo}>
//                         {project.student1 ? names[project.student1] : 'N/A'}, 
//                         {project.student2 ? names[project.student2] : 'N/A'}, 
//                         {project.student3 ? names[project.student3] : 'N/A'}, 
//                         {project.student4 ? names[project.student4] : 'N/A'}
//                     </Text>
//                     <Text style={styles.projectLabel}>Supervisor:</Text>
//                     <Text style={styles.projectInfo}>{names[project.supervisor] || 'N/A'}</Text>
//                     <Text style={styles.projectLabel}>Co-Supervisor:</Text>
//                     <Text style={styles.projectInfo}>{names[project.co_supervisor] || 'N/A'}</Text>
//                     <Text style={styles.projectLabel}>External Supervisor:</Text>
//                     <Text style={styles.projectInfo}>{names[project.external_supervisor] || 'N/A'}</Text>
//                     <Text style={styles.projectLabel}>Created At:</Text>
//                     <Text style={styles.projectInfo}>{new Date(project.created_at).toLocaleDateString()}</Text>
//                     <TouchableOpacity style={styles.viewButton} onPress={() => { /* Handle view project details */ }}>
//                         <Text style={styles.viewButtonText}>View Details</Text>
//                     </TouchableOpacity>
//                 </View>
//             ))}
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         padding: 16,
//     },
//     projectContainer: {
//         marginBottom: 20,
//         padding: 16,
//         borderRadius: 8,
//         backgroundColor: '#f8f9fa',
//         borderWidth: 1,
//         borderColor: '#dee2e6',
//     },
//     projectTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 8,
//     },
//     projectDescription: {
//         marginBottom: 8,
//         fontSize: 14,
//         color: '#555',
//     },
//     projectLabel: {
//         fontWeight: 'bold',
//         marginTop: 8,
//     },
//     projectInfo: {
//         fontSize: 14,
//         marginBottom: 8,
//     },
//     viewButton: {
//         marginTop: 12,
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//         backgroundColor: '#007bff',
//         borderRadius: 5,
//     },
//     viewButtonText: {
//         color: '#fff',
//         textAlign: 'center',
//     },
//     centered: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         flex: 1,
//     },
// });

// export default FetchProjects;

// new
// import React, { useEffect, useState } from 'react';
// import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
// import SupNav from '../Supervisor/SupNav'; // Import SupNav from the correct path

// const FetchProjects = () => {
//     const [projects, setProjects] = useState([]);
//     const [names, setNames] = useState({});
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchProjects = async () => {
//             try {
//                 const response = await fetch('http://localhost/MobApp/my-app/php_api/getProjectsS.php?faculty_id={27}'); // Replace with your computer's local IP address
//                 const data = await response.json();
                
//                 // Check if data is in expected format
//                 if (data.projects && Array.isArray(data.projects)) {
//                     setProjects(data.projects);
//                     setNames(data.names || {});
//                 } else {
//                     setProjects([]);
//                 }
                
//                 setLoading(false);
//             } catch (error) {
//                 console.error("Error fetching projects:", error);
//                 setLoading(false);
//                 setProjects([]);
//             }
//         };
        
//         fetchProjects();
//     }, []);

//     if (loading) {
//         return (
//             <View style={styles.centered}>
//                 <Text>Loading...</Text>
//             </View>
//         );
//     }

//     if (projects.length === 0) {
//         return (
//             <View style={styles.centered}>
//                 <Text>No projects available.</Text>
//             </View>
//         );
//     }

//     return (
//         <View style={{ flex: 1 }}>
//             {/* Include SupNav at the top */}
//             <SupNav />

//             <ScrollView style={styles.container}>
//                 {projects.map((project) => (
//                     <View key={project.id} style={styles.projectContainer}>
//                         <Text style={styles.projectTitle}>{project.title}</Text>
//                         <Text style={styles.projectDescription}>{project.description}</Text>
//                         <Text style={styles.projectLabel}>Students:</Text>
//                         <Text style={styles.projectInfo}>
//                             {project.student1 ? names[project.student1] : 'N/A'}, 
//                             {project.student2 ? names[project.student2] : 'N/A'}, 
//                             {project.student3 ? names[project.student3] : 'N/A'}, 
//                             {project.student4 ? names[project.student4] : 'N/A'}
//                         </Text>
//                         <Text style={styles.projectLabel}>Supervisor:</Text>
//                         <Text style={styles.projectInfo}>{names[project.supervisor] || 'N/A'}</Text>
//                         <Text style={styles.projectLabel}>Co-Supervisor:</Text>
//                         <Text style={styles.projectInfo}>{names[project.co_supervisor] || 'N/A'}</Text>
//                         <Text style={styles.projectLabel}>External Supervisor:</Text>
//                         <Text style={styles.projectInfo}>{names[project.external_supervisor] || 'N/A'}</Text>
//                         <Text style={styles.projectLabel}>Created At:</Text>
//                         <Text style={styles.projectInfo}>{new Date(project.created_at).toLocaleDateString()}</Text>
//                         <TouchableOpacity style={styles.viewButton} onPress={() => { /* Handle view project details */ }}>
//                             <Text style={styles.viewButtonText}>View Details</Text>
//                         </TouchableOpacity>
//                     </View>
//                 ))}
//             </ScrollView>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         padding: 16,
//     },
//     projectContainer: {
//         marginBottom: 20,
//         padding: 16,
//         borderRadius: 8,
//         backgroundColor: '#f8f9fa',
//         borderWidth: 1,
//         borderColor: '#dee2e6',
//     },
//     projectTitle: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 8,
//     },
//     projectDescription: {
//         marginBottom: 8,
//         fontSize: 14,
//         color: '#555',
//     },
//     projectLabel: {
//         fontWeight: 'bold',
//         marginTop: 8,
//     },
//     projectInfo: {
//         fontSize: 14,
//         marginBottom: 8,
//     },
//     viewButton: {
//         marginTop: 12,
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//         backgroundColor: '#007bff',
//         borderRadius: 5,
//     },
//     viewButtonText: {
//         color: '#fff',
//         textAlign: 'center',
//     },
//     centered: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         flex: 1,
//     },
// });

// export default FetchProjects;



import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import SupNav from '../Supervisor/SupNav'; // Import SupNav from the correct path

const FetchProjects = () => {
    const [projects, setProjects] = useState([]);
    const [names, setNames] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const facultyId = 27;  // Replace with actual faculty ID or get from context/state
                const response = await fetch(`http://localhost/MobApp/my-app/php_api/getProjectsS.php?faculty_id=${facultyId}`);

                // Check if the response is valid JSON
                const data = await response.json();

                if (data.success) {
                    setProjects(data.projects);
                    setNames(data.names || {});
                } else {
                    console.error('Error:', data.message);
                    setProjects([]);
                }

                setLoading(false);
            } catch (error) {
                console.error("Error fetching projects:", error);
                setLoading(false);
                setProjects([]);
            }
        };

        fetchProjects();
    }, []);  // Empty dependency array means this runs once when component mounts

    if (loading) {
        return (
            <View style={styles.centered}>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (projects.length === 0) {
        return (
            <View style={styles.centered}>
                <Text>No projects available.</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            {/* Include SupNav at the top */}
            <SupNav />

            <ScrollView style={styles.container}>
                {projects.map((project) => (
                    <View key={project.project_id} style={styles.projectContainer}>
                        <Text style={styles.projectTitle}>{project.title}</Text>
                        <Text style={styles.projectDescription}>{project.description}</Text>
                        <Text style={styles.projectLabel}>Students:</Text>
                        <Text style={styles.projectInfo}>
                            {project.student1 ? names[project.student1] : 'N/A'}, 
                            {project.student2 ? names[project.student2] : 'N/A'}, 
                            {project.student3 ? names[project.student3] : 'N/A'}, 
                            {project.student4 ? names[project.student4] : 'N/A'}
                        </Text>
                        <Text style={styles.projectLabel}>Supervisor:</Text>
                        <Text style={styles.projectInfo}>{names[project.supervisor] || 'N/A'}</Text>
                        <Text style={styles.projectLabel}>Co-Supervisor:</Text>
                        <Text style={styles.projectInfo}>{names[project.co_supervisor] || 'N/A'}</Text>
                        <Text style={styles.projectLabel}>External Supervisor:</Text>
                        <Text style={styles.projectInfo}>{names[project.external_supervisor] || 'N/A'}</Text>
                        <Text style={styles.projectLabel}>Created At:</Text>
                        <Text style={styles.projectInfo}>{new Date(project.created_at).toLocaleDateString()}</Text>
                        <TouchableOpacity style={styles.viewButton} onPress={() => { /* Handle view project details */ }}>
                            <Text style={styles.viewButtonText}>View Details</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    projectContainer: {
        marginBottom: 20,
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#f8f9fa',
        borderWidth: 1,
        borderColor: '#dee2e6',
    },
    projectTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    projectDescription: {
        marginBottom: 8,
        fontSize: 14,
        color: '#555',
    },
    projectLabel: {
        fontWeight: 'bold',
        marginTop: 8,
    },
    projectInfo: {
        fontSize: 14,
        marginBottom: 8,
    },
    viewButton: {
        marginTop: 12,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#007bff',
        borderRadius: 5,
    },
    viewButtonText: {
        color: '#fff',
        textAlign: 'center',
    },
    centered: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});

export default FetchProjects;
