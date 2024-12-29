import { View, Text, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAppDispatch, useAppSelector } from '@/redux'
import { Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Button } from '@/components/Button'
import { userActions } from '@/redux/slices/userSlice'
import { themes, themesVariant } from '@/context/theme/themeConstant'
import { appActions } from '@/redux/slices/appSlice'
import { cn } from '@/lib/utils'



export default function Profile() {
    const { data } = useAppSelector(state => state.user)
    const { theme } = useAppSelector(state => state.app)
    const dispatch = useAppDispatch();
    const availableTheme = Object.keys(themes) as themesVariant[]

    if (data == null) {
        return <Text>No Auth</Text>
    }

    const handleLogout = () => {
        dispatch(userActions.logoutUser())
    }

    const handleThemeSwitch = (theme: themesVariant) => {
        // can save in db to keep user preferred theme 
        dispatch(appActions.switchTheme(theme))
    }

    return (
        <ScrollView className='flex-1' contentContainerClassName='px-4' showsVerticalScrollIndicator={false} bounces={false}>
            <View className='relative self-center my-8'>
                <Image source={{ uri: data.profile }} className='w-[100] h-[100]  border-2 border-slate-400 rounded-full' />
                <Pressable className='absolute bottom-0 right-0 rounded-full bg-white p-1 border border-gray-400'>
                    <MaterialCommunityIcons name='circle-edit-outline' size={22} color="#f87171" />
                </Pressable>
            </View>

            <View className='gap-4 flex-1'>
                <View className='flex-row justify-between'>
                    <Text className='font-semibold'>Name:</Text>
                    <Text className='font-semibold'>{data.username}</Text>
                </View>
                <View className='flex-row justify-between'>
                    <Text className='font-semibold'>Email:</Text>
                    <Text className='font-semibold'>{data.email}</Text>
                </View>
                <View className='flex-row justify-between'>
                    <Text className='font-semibold'>Phone:</Text>
                    <Text className='font-semibold'>{data.phone}</Text>
                </View>
                <View className='flex-row justify-between'>
                    <Text className='font-semibold'>Theme:</Text>
                    <Text className='font-semibold'>{data.theme}</Text>
                </View>
            </View>
            <View className='flex-1 flex-wrap flex-row gap-4 my-8'>
                {
                    availableTheme.map(key => (
                        <TouchableOpacity onPress={() => handleThemeSwitch(key)} activeOpacity={0.8} key={key}
                            className={
                                cn('w-16 h-16 justify-center items-center border rounded-lg border-slate-300',
                                    key == theme && "border-2 border-slate-500"
                                )
                            }>
                            <Text>{key}</Text>
                        </TouchableOpacity>

                    ))
                }
            </View>
            <Button size="sm" variant="secondary" className='mt-4' onPress={handleLogout}>
                <Text>Logout</Text>
            </Button>
        </ScrollView>
    )
}