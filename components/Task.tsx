
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = (props: any) => {
  return (
    <View>
      <Text>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({

});


export default Task;
