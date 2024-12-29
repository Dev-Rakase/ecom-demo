import { View, Text, TextInput, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { Button } from '@/components/Button'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { userLoginSchema } from '@/schema/user.schema'
import { z } from 'zod'
import { userLoginAction } from '@/redux/actions/userActions'
import { useAppDispatch, useAppSelector } from '@/redux'

export default function Login() {
    const dispatch = useAppDispatch()
    const { loading, error } = useAppSelector(state => state.user);

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

    useEffect(() => {
        // use unwarp approach from redux
        if (error) {
            Alert.alert("Oops!", error)
        }
    }, [error])

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
                                    placeholder='user1'
                                    keyboardType='default'
                                    autoCorrect={false}
                                    autoCapitalize='none'
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
                                    placeholder='password'
                                    keyboardType='default'
                                    autoCorrect={false}
                                    autoCapitalize='none'
                                    onChangeText={field.onChange} />
                                {errors.password?.message && <Text className='text-xs text-red-400'>{errors.password.message}</Text>}
                            </>
                        )}
                    />
                </View>
                <Button disabled={loading} size="sm" onPress={handleSubmit(handleLogin)}>
                    <Text className='text-white font-semibold'>Login Now</Text>
                </Button>
            </View>
        </KeyboardAvoidingView>
    )
}