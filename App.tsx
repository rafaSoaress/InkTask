import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>

      {/* Task's to do */}

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> Today's tasks</Text>
        <View style={styles.items}>
          {/* Here is where taks will go! */}
          <Task text={"Task 1"} />
          <Task text={"Task 2"} />
          <Text> hello world </Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {

  }
});
