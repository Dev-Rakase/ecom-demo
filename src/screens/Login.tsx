import { View, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { Button } from '@/components/Button'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { userLoginSchema } from 'schema/user.schema'
import { z } from 'zod'
import { userLoginAction } from '@/redux/actions/userActions'
import { useAppDispatch } from '@/redux'

export default function Login() {
    const dispatch = useAppDispatch()
    const { control, handleSubmit, formState: { errors } } = useForm<z.infer<typeof userLoginSchema>>({
        resolver: zodResolver(userLoginSchema),
        defaultValues: {
            username: "",
            password: ""
        }
    })


    const handleLogin = (data: z.infer<typeof userLoginSchema>) => {
        dispatch(userLoginAction(data));
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='flex-1 justify-center items-center bg-white'>
            <View className='bg-white border border-slate-400 p-4 w-2/3 rounded-lg'>
                <Text className='text-lg font-semibold text-primary text-center'>Login</Text>
                <View className='gap-2 my-4 '>
                    <Controller
                        control={control}
                        name='username'
                        render={({ field }) => (
                            <>
                                <TextInput
                                    {...field}
                                    className='border border-slate-400 p-2 rounded-lg'
                                    placeholder='Username'
                                    keyboardType='default'
                                    onChangeText={field.onChange} />
                                {errors.username?.message && <Text className='text-xs text-red-400'>{errors.username.message}</Text>}
                            </>
                        )}
                    />
                    <Controller
                        control={control}
                        name='password'
                        render={({ field }) => (
                            <>
                                <TextInput
                                    {...field}
                                    className='border border-slate-400 p-2 rounded-lg'
                                    placeholder='Password'
                                    keyboardType='default'
                                    onChangeText={field.onChange} />
                                {errors.password?.message && <Text className='text-xs text-red-400'>{errors.password.message}</Text>}
                            </>
                        )}
                    />
                </View>
                <Button size="sm" onPress={handleSubmit(handleLogin)}>
                    <Text className='text-white font-semibold'>Login</Text>
                </Button>
            </View>
        </KeyboardAvoidingView>
    )
}