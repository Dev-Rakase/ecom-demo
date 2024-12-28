import { View, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { Button } from '@/components/Button'

export default function Login() {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='flex-1 justify-center items-center bg-white'>
            <View className='bg-white border border-slate-400 p-4 w-2/3 rounded-lg'>
                <Text className='text-lg font-semibold text-primary text-center'>Login</Text>
                <View className='gap-2 my-4 '>
                    <TextInput className='border border-slate-400 p-2 rounded-lg' placeholder='Username' keyboardType='default' />
                    <TextInput className='border border-slate-400 p-2 rounded-lg' placeholder='Password' />
                </View>
                <Button size="sm">
                    <Text className='text-white font-semibold'>Login</Text>
                </Button>
            </View>
        </KeyboardAvoidingView>
    )
}