import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '../components/Button'
import { useAppDispatch } from '../redux'
import { appActions } from '../redux/slices/appSlice';

export default function Onboarding() {
    const dispatch = useAppDispatch();


    const handlePress = () => {
        dispatch(appActions.setOnboarded())
    }

    return (
        <View className='flex-1 justify-center items-center'>
            <Text className='text-3xl font-semibold'>Welcome, User</Text>
            <Text className='text-sm my-2'>fake On-Boarding screen, no need special.</Text>

            <Button onPress={handlePress}>
                <Text className='text-white'>Get Started</Text>
            </Button>
        </View>
    )
}