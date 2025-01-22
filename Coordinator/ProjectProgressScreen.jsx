// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, Picker, StyleSheet, ScrollView, Alert } from 'react-native';
// import { LineChart } from 'react-native-chart-kit';

// const ProjectProgressScreen = () => {
//     const [selectedProjectId, setSelectedProjectId] = useState('');
//     const [projects, setProjects] = useState([]);
//     const [projectDetails, setProjectDetails] = useState(null);
//     const [presentationProgress, setPresentationProgress] = useState([]);
//     const [feedbackData, setFeedbackData] = useState([]);
//     const [assignments, setAssignments] = useState([]);
//     const [meetings, setMeetings] = useState([]);

//     // Fetching project list on initial load
//     useEffect(() => {
//         fetch('YOUR_API_URL_TO_FETCH_PROJECTS')
//             .then((response) => response.json())
//             .then((data) => setProjects(data))
//             .catch((error) => console.error('Error fetching projects:', error));
//     }, []);

//     const handleProjectSubmit = () => {
//         if (selectedProjectId) {
//             fetch(`http://localhost/MobApp/my-app/php_api/project.php`)
//                 .then((response) => response.json())
//                 .then((data) => {
//                     setProjectDetails(data.projectDetails);
//                     setPresentationProgress(data.presentationProgress);
//                     setFeedbackData(data.feedback);
//                     setAssignments(data.assignments);
//                     setMeetings(data.meetings);
//                 })
//                 .catch((error) => console.error('Error fetching project details:', error));
//         } else {
//             Alert.alert('Please select a project');
//         }
//     };

//     // Placeholder chart data
//     const chartData = {
//         labels: ['Meetings', 'Assignments', 'Presentations'],
//         datasets: [
//             {
//                 data: [60, 40, 80], // Example progress data
//                 color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`, // Color for meetings
//             },
//         ],
//     };

//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             {/* Project Dropdown */}
//             <View style={styles.card}>
//                 <Text style={styles.cardHeader}>Select Project</Text>
//                 <Picker
//                     selectedValue={selectedProjectId}
//                     style={styles.picker}
//                     onValueChange={(itemValue) => setSelectedProjectId(itemValue)}>
//                     <Picker.Item label="Select a project" value="" />
//                     {projects.map((project) => (
//                         <Picker.Item key={project.id} label={project.title} value={project.id} />
//                     ))}
//                 </Picker>
//                 <Button title="Submit" onPress={handleProjectSubmit} />
//             </View>

//             {/* Project Overview */}
//             {projectDetails && (
//                 <View style={styles.card}>
//                     <Text style={styles.cardHeader}>Project Overview</Text>
//                     <Text><Text style={styles.bold}>Project ID:</Text> {projectDetails.project_id}</Text>
//                     <Text><Text style={styles.bold}>Project Title:</Text> {projectDetails.title}</Text>
//                     <Text><Text style={styles.bold}>Project Description:</Text> {projectDetails.description}</Text>
//                     <Text><Text style={styles.bold}>Team Members:</Text> {projectDetails.team_members}</Text>
//                     <Text><Text style={styles.bold}>Supervisors:</Text> {projectDetails.supervisors}</Text>
//                 </View>
//             )}

//             {/* Presentation Progress */}
//             {presentationProgress.length > 0 && (
//                 <View style={styles.card}>
//                     <Text style={styles.cardHeader}>Presentation Progress</Text>
//                     {presentationProgress.map((progress, index) => (
//                         <View key={index} style={styles.tableRow}>
//                             <Text>{progress.title}</Text>
//                             <Text>{progress.internal_evaluator}</Text>
//                             <Text>{progress.external_evaluator}</Text>
//                             <Text>{progress.total_marks}</Text>
//                             <Text>{progress.obtained_marks}</Text>
//                             <Text>{progress.progress}</Text>
//                         </View>
//                     ))}
//                 </View>
//             )}

//             {/* Presentation Feedback */}
//             {feedbackData.length > 0 && (
//                 <View style={styles.card}>
//                     <Text style={styles.cardHeader}>Presentation Feedback</Text>
//                     {feedbackData.map((feedback, index) => (
//                         <View key={index} style={styles.cardBody}>
//                             <Text><Text style={styles.bold}>Internal Evaluator:</Text> {feedback.internal_evaluator_name}</Text>
//                             <Text><Text style={styles.bold}>Feedback:</Text> {feedback.internal_feedback}</Text>
//                             <Text><Text style={styles.bold}>External Evaluator:</Text> {feedback.external_evaluator_name}</Text>
//                             <Text><Text style={styles.bold}>Feedback:</Text> {feedback.external_feedback}</Text>
//                             <Text><Text style={styles.bold}>Supervisor:</Text> {feedback.supervisor_name}</Text>
//                             <Text><Text style={styles.bold}>Feedback:</Text> {feedback.supervisor_feedback}</Text>
//                             {feedback.co_supervisor_name && feedback.co_supervisor_feedback && (
//                                 <>
//                                     <Text><Text style={styles.bold}>Co-Supervisor:</Text> {feedback.co_supervisor_name}</Text>
//                                     <Text><Text style={styles.bold}>Feedback:</Text> {feedback.co_supervisor_feedback}</Text>
//                                 </>
//                             )}
//                         </View>
//                     ))}
//                 </View>
//             )}

//             {/* Assignment Progress */}
//             {assignments.length > 0 && (
//                 <View style={styles.card}>
//                     <Text style={styles.cardHeader}>Assignment Progress</Text>
//                     <Text><Text style={styles.bold}>Total Assignments:</Text> {assignments.total}</Text>
//                     <Text><Text style={styles.bold}>Completed:</Text> {assignments.completed}</Text>
//                     <Text><Text style={styles.bold}>Pending:</Text> {assignments.pending}</Text>
//                     <LineChart
//                         data={chartData}
//                         width={320} // from react-native
//                         height={220}
//                         chartConfig={{
//                             backgroundColor: '#e26a00',
//                             backgroundGradientFrom: '#fb8c00',
//                             backgroundGradientTo: '#ffc107',
//                             decimalPlaces: 2, // optional
//                             color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//                         }}
//                         style={styles.chart}
//                     />
//                 </View>
//             )}

//             {/* Meeting Progress */}
//             {meetings.length > 0 && (
//                 <View style={styles.card}>
//                     <Text style={styles.cardHeader}>Meeting Progress</Text>
//                     {meetings.map((meeting, index) => (
//                         <View key={index} style={styles.tableRow}>
//                             <Text>{meeting.title}</Text>
//                             <Text>{meeting.feedback}</Text>
//                             <Text>{meeting.attendance_status}</Text>
//                         </View>
//                     ))}
//                 </View>
//             )}
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         padding: 16,
//         backgroundColor: '#fff',
//     },
//     card: {
//         marginBottom: 20,
//         padding: 16,
//         backgroundColor: '#f8f9fa',
//         borderRadius: 8,
//     },
//     cardHeader: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     cardBody: {
//         marginTop: 10,
//     },
//     bold: {
//         fontWeight: 'bold',
//     },
//     picker: {
//         height: 50,
//         marginBottom: 10,
//     },
//     tableRow: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginBottom: 5,
//     },
//     chart: {
//         marginTop: 10,
//     },
// });

// export default ProjectProgressScreen;

// working API code


// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, Picker, StyleSheet, ScrollView, Alert } from 'react-native';
// import { LineChart } from 'react-native-chart-kit';

// const ProjectProgressScreen = () => {
//     const [selectedProjectId, setSelectedProjectId] = useState('');
//     const [projects, setProjects] = useState([]);
//     const [projectDetails, setProjectDetails] = useState(null);
//     const [presentationProgress, setPresentationProgress] = useState([]);
//     const [feedbackData, setFeedbackData] = useState([]);
//     const [assignments, setAssignments] = useState([]);
//     const [meetings, setMeetings] = useState([]);

//     // Fetching project list on initial load
//     useEffect(() => {
//         fetch('http://localhost/MobApp/my-app/php_api/project.php')  // Adjust for your environment
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log('Fetched projects:', data); // Debugging line
//                 setProjects(data);
//             })
//             .catch((error) => {
//                 console.error('Error fetching projects:', error);
//                 Alert.alert('Failed to load projects', 'Please check your connection.');
//             });
//     }, []);

//     const handleProjectSubmit = () => {
//         if (selectedProjectId) {
//             fetch(`http://localhost/MobApp/my-app/php_api/project.php?id=${selectedProjectId}`)
//                 .then((response) => response.json())
//                 .then((data) => {
//                     setProjectDetails(data.projectDetails);
//                     setPresentationProgress(data.presentationProgress);
//                     setFeedbackData(data.feedback);
//                     setAssignments(data.assignments);
//                     setMeetings(data.meetings);
//                 })
//                 .catch((error) => {
//                     console.error('Error fetching project details:', error);
//                     Alert.alert('Failed to load project details', 'Please check your connection.');
//                 });
//         } else {
//             Alert.alert('Please select a project');
//         }
//     };

//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             {/* Project Dropdown */}
//             <View style={styles.card}>
//                 <Text style={styles.cardHeader}>Select Project</Text>
//                 <Picker
//                     selectedValue={selectedProjectId}
//                     style={styles.picker}
//                     onValueChange={(itemValue) => setSelectedProjectId(itemValue)}>
//                     <Picker.Item label="Select a project" value="" />
//                     {projects.map((project) => (
//                         <Picker.Item key={project.id} label={project.title} value={project.id} />
//                     ))}
//                 </Picker>
//                 <Button title="Submit" onPress={handleProjectSubmit} />
//             </View>

//             {/* Project Overview */}
//             {projectDetails && (
//                 <View style={styles.card}>
//                     <Text style={styles.cardHeader}>Project Overview</Text>
//                     <Text><Text style={styles.bold}>Project ID:</Text> {projectDetails.project_id}</Text>
//                     <Text><Text style={styles.bold}>Project Title:</Text> {projectDetails.title}</Text>
//                     <Text><Text style={styles.bold}>Project Description:</Text> {projectDetails.description}</Text>
//                     <Text><Text style={styles.bold}>Team Members:</Text> {projectDetails.team_members}</Text>
//                     <Text><Text style={styles.bold}>Supervisors:</Text> {projectDetails.supervisors}</Text>
//                 </View>
//             )}

//             {/* Additional sections... */}
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         padding: 16,
//         backgroundColor: '#fff',
//     },
//     card: {
//         marginBottom: 20,
//         padding: 16,
//         backgroundColor: '#f8f9fa',
//         borderRadius: 8,
//     },
//     cardHeader: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     picker: {
//         height: 50,
//         marginBottom: 10,
//     },
//     bold: {
//         fontWeight: 'bold',
//     },
// });

// export default ProjectProgressScreen;




import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet, ScrollView, Alert } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
// Import Sidebar
import Sidebar from '../Coordinator/Sidebar';

const ProjectProgressScreen = () => {
    const [selectedProjectId, setSelectedProjectId] = useState('');
    const [projects, setProjects] = useState([]);
    const [projectDetails, setProjectDetails] = useState(null);
    const [presentationProgress, setPresentationProgress] = useState([]);
    const [feedbackData, setFeedbackData] = useState([]);
    const [assignments, setAssignments] = useState([]);
    const [meetings, setMeetings] = useState([]);

    // Fetching project list on initial load
    useEffect(() => {
        fetch('http://localhost/MobApp/my-app/php_api/project.php')  // Adjust for your environment
            .then((response) => response.json())
            .then((data) => {
                console.log('Fetched projects:', data); // Debugging line
                setProjects(data);
            })
            .catch((error) => {
                console.error('Error fetching projects:', error);
                Alert.alert('Failed to load projects', 'Please check your connection.');
            });
    }, []);

    const handleProjectSubmit = () => {
        if (selectedProjectId) {
            fetch(`http://localhost/MobApp/my-app/php_api/project.php?id=${selectedProjectId}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log('Fetched project details:', data); // Debugging line
                    setProjectDetails(data.projectDetails || {});
                    setPresentationProgress(data.presentationProgress || []);
                    setFeedbackData(data.feedback || []);
                    setAssignments(data.assignments || []);
                    setMeetings(data.meetings || []);
                })
                .catch((error) => {
                    console.error('Error fetching project details:', error);
                    Alert.alert('Failed to load project details', 'Please check your connection.');
                });
        } else {
            Alert.alert('Please select a project');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
         {/* Include Sidebar */}
    <Sidebar />
            {/* Project Dropdown */}
            <View style={styles.card}>
                <Text style={styles.cardHeader}>Select Project</Text>
                <Picker
                    selectedValue={selectedProjectId}
                    style={styles.picker}
                    onValueChange={(itemValue) => setSelectedProjectId(itemValue)}>
                    <Picker.Item label="Select a project" value="" />
                    {projects.map((project) => (
                        <Picker.Item key={project.id} label={project.title} value={project.id} />
                    ))}
                </Picker>
                <Button title="Submit" onPress={handleProjectSubmit} />
            </View>

            {/* Project Overview */}
            {projectDetails && Object.keys(projectDetails).length > 0 && (
                <View style={styles.card}>
                    <Text style={styles.cardHeader}>Project Overview</Text>
                    <Text><Text style={styles.bold}>Project ID:</Text> {projectDetails.project_id}</Text>
                    <Text><Text style={styles.bold}>Project Title:</Text> {projectDetails.title}</Text>
                    <Text><Text style={styles.bold}>Project Description:</Text> {projectDetails.description}</Text>
                    <Text><Text style={styles.bold}>Team Members:</Text> {projectDetails.team_members}</Text>
                    <Text><Text style={styles.bold}>Supervisors:</Text> {projectDetails.supervisors}</Text>
                </View>
            )}

            {/* Presentation Progress */}
            {presentationProgress && presentationProgress.length > 0 && (
                <View style={styles.card}>
                    <Text style={styles.cardHeader}>Presentation Progress</Text>
                    <LineChart
                        data={{
                            labels: presentationProgress.map((item) => item.date),
                            datasets: [
                                {
                                    data: presentationProgress.map((item) => item.progress),
                                },
                            ],
                        }}
                        width={320} // from react-native
                        height={220}
                        yAxisLabel="%"
                        chartConfig={{
                            backgroundColor: '#e26a00',
                            backgroundGradientFrom: '#fb8c00',
                            backgroundGradientTo: '#ffa726',
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16,
                            },
                            propsForDots: {
                                r: '6',
                                strokeWidth: '2',
                                stroke: '#ffa726',
                            },
                        }}
                    />
                </View>
            )}

            {/* Feedback Data */}
            {feedbackData && feedbackData.length > 0 && (
                <View style={styles.card}>
                    <Text style={styles.cardHeader}>Feedback</Text>
                    {feedbackData.map((feedback, index) => (
                        <Text key={index}>
                            <Text style={styles.bold}>Feedback #{index + 1}:</Text> {feedback.comment}
                        </Text>
                    ))}
                </View>
            )}

            {/* Assignments */}
            {assignments && assignments.length > 0 && (
                <View style={styles.card}>
                    <Text style={styles.cardHeader}>Assignments</Text>
                    {assignments.map((assignment, index) => (
                        <Text key={index}>
                            <Text style={styles.bold}>Assignment #{index + 1}:</Text> {assignment.title}
                        </Text>
                    ))}
                </View>
            )}

            {/* Meetings */}
            {meetings && meetings.length > 0 && (
                <View style={styles.card}>
                    <Text style={styles.cardHeader}>Meetings</Text>
                    {meetings.map((meeting, index) => (
                        <Text key={index}>
                            <Text style={styles.bold}>Meeting #{index + 1}:</Text> {meeting.date} - {meeting.details}
                        </Text>
                    ))}
                </View>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
    },
    card: {
        marginBottom: 20,
        padding: 16,
        backgroundColor: '#f8f9fa',
        borderRadius: 8,
    },
    cardHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    picker: {
        height: 50,
        marginBottom: 10,
    },
    bold: {
        fontWeight: 'bold',
    },
});

export default ProjectProgressScreen;
