
import React, {useState} from 'react'
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native'
import CustomButton from './components/CustomButton';
import CustomInput from './components/CustomInput';









const CreateScreen = () => {
    const [groupName, setGroupName] = useState('');
    const [groupSize, setGroupSize] = useState('');
    const [groupLoc, setGroupLoc] = useState('');
    

    const onCreateGroupPressed = () => {
        console.warn("Create Group");
    }
    return (
        <View>
            <View style={styles.root}>
                <Text style={styles.Header}>Create a Group</Text>

                <CustomInput 
                placeholder="Group Name" 
                value={groupName} 
                setValue={setGroupName} 
                />
                <CustomInput 
                placeholder="Group Size" 
                value={groupSize} 
                setValue={setGroupSize} 
                />

                <CustomInput 
                placeholder="Location" 
                value={groupLoc} 
                setValue={setGroupLoc} 
                />

                <CustomButton text="Create Group" onPress={onCreateGroupPressed}/>
            </View>
           

        
            

        </View>



        
    )
}

export default CreateScreen

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    root2: {
        allignItems: 'stretch',
    },

    Header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1B1B1B',
    },
})