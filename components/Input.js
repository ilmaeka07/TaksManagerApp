// components/Input.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const Input = ({ addTask }) => {
    const [taskText, setTaskText] = useState('');

    const handleAddTask = () => {
        if (taskText.trim()) {
            addTask(taskText);
            setTaskText('');
        }
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Add New task"
                value={taskText}
                onChangeText={setTaskText}
                editable={true}
                onFocus={() => console.log("Input focused")}
            />
            <Button title="Add Task" onPress={handleAddTask} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10, // Optional for spacing
        zIndex: 1, // Ensures it is on top of other views
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginRight: 10,
        borderRadius: 5, // Optional for rounded corners
        zIndex: 1, // Ensures input is clickable
    },
});

export default Input;
