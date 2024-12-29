import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'

interface ICommonError {
    message: string;
    children: ReactNode
}


export default function CommonError({ children, message }: ICommonError) {
    return (
        <View className='flex-1 justify-center items-center'>
            <Text className='text-red-500 font-semibold mb-2'>{message}</Text>
            {children}
        </View>
    )
}