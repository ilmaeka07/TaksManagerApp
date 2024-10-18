import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ToDoItem({ task, toggleTaskStatus, deleteTask }) {
    const { id, text, isCompleted } = task;

    return (
        <View style={styles.taskItem}>
            <Text style={[styles.taskText, isCompleted && styles.completedText]}>
                {text}
            </Text>
            <View style={styles.buttons}>
                <TouchableOpacity
                    onPress={() => toggleTaskStatus(id)}
                    style={[styles.button, { backgroundColor: isCompleted ? 'green' : 'orange' }]}
                >
                    <Text style={styles.buttonText}>
                        {isCompleted ? 'Selesai' : 'Belum Selesai'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => deleteTask(id)}
                    style={[styles.button, { backgroundColor: 'red' }]} // Mengganti warna tombol hapus menjadi merah
                >
                    <Text style={styles.buttonText}>Hapus</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    taskItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10, // Membuat border dengan radius
        marginVertical: 5, // Jarak antar item
        backgroundColor: '#f9f9f9',
    },
    taskText: {
        flex: 1,
        textDecorationLine: 'none',
        fontSize: 16,
    },
    completedText: {
        textDecorationLine: 'line-through', // Garis strikethrough untuk tugas selesai
        color: '#999', // Warna teks untuk tugas yang sudah selesai
    },
    buttons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        padding: 10,
        borderRadius: 5,
        marginLeft: 10,
    },
    buttonText: {
        color: '#fff', // Warna teks pada tombol
    },
});
