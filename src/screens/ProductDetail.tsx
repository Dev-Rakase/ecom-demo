import { View, Text, ActivityIndicator, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { ScreenProps } from '@/navigation/RootStackNavigator'
import { useMutation, useQuery } from '@tanstack/react-query'
import { fetchProductById, purchaseProduct } from '@/api/product'
import CommonError from '@/components/CommonError'
import { Button } from '@/components/Button'
import { ScrollView } from 'react-native'
import LottieView from 'lottie-react-native';
import { useFocusEffect } from '@react-navigation/native'


export default function ProductDetail({ route, navigation }: ScreenProps<"product-detail">) {
    const { productId, title } = route.params;
    const animation = useRef<LottieView>(null);

    const { mutate, isPending, isSuccess } = useMutation({
        mutationFn: (data: {}) => purchaseProduct()
    });

    const { isLoading, isError, error, data, refetch, isRefetching } = useQuery({
        queryKey: [productId],
        queryFn: () => fetchProductById(productId),
        staleTime: 0 // for product with data change frequently 
    })

    useFocusEffect(() => {
        // Temp solution to reset on mount
        animation.current?.reset()
    })

    useEffect(() => {
        navigation.setOptions({
            title
        })
    }, [title, productId]);

    useEffect(() => {
        if (isSuccess) {
            animation.current?.play()
        }
    }, [isSuccess]);





    if (isLoading || data == undefined) return <View className='flex-1 justify-center items-center'><ActivityIndicator size="small" /></View>

    if (isError) {
        return (
            <CommonError message={error.message}>
                <Button size="sm" onPress={() => refetch()}>
                    <Text className='text-white'>Reload</Text>
                </Button>
            </CommonError>
        )
    }

    return (
        <ScrollView className='flex-1' bounces={false}>
            <Image source={{ uri: data.image }} className='w-full aspect-square object-contain' />
            <View className='p-4'>
                <Text className='text-2xl text-primary font-semibold'>{data.title}</Text>
                <Text className='leading-6'>{data.description}</Text>
                <Text>Price: {data.price}</Text>

                <Button className='mt-4' disabled={isPending} onPress={() => mutate({})}>
                    {
                        isPending ? <ActivityIndicator size="small" /> : <Text className='text-white'>Buy Now</Text>
                    }

                </Button>
                {/* Last frame must be empty or show/hide within modal */}
                <LottieView
                    ref={animation}
                    autoPlay={false}
                    loop={false}
                    style={{
                        width: "100%",
                        height: 200,
                    }}
                    source={require('../../assets/animation/purchase-success.json')}

                />
            </View>
        </ScrollView>
    )
}