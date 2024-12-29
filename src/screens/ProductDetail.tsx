import { View, Text, ActivityIndicator, Image } from 'react-native'
import React, { useEffect } from 'react'
import { ScreenProps } from '@/navigation/RootStackNavigator'
import { useQuery } from '@tanstack/react-query'
import { fetchProductById } from '@/api/product'
import CommonError from '@/components/CommonError'
import { Button } from '@/components/Button'
import { ScrollView } from 'react-native'
import Animated from 'react-native-reanimated'



export default function ProductDetail({ route, navigation }: ScreenProps<"product-detail">) {
    const { productId, title } = route.params
    const { isLoading, isError, error, data, refetch, isRefetching } = useQuery({
        queryKey: [productId],
        queryFn: () => fetchProductById(productId),
        staleTime: 0 // for product with data change frequently 
    })
    useEffect(() => {
        navigation.setOptions({
            title
        })
    }, [title, productId]);

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
        <ScrollView className='flex-1' bounces={false} >
            <Image source={{ uri: data.image }} className='w-full aspect-square object-contain' />
            <View className='p-4'>
                <Text className='text-2xl text-primary font-semibold'>{data.title}</Text>
                <Text className='leading-6'>{data.description}</Text>
                <Text>Price: {data.price}</Text>

                <Button className='mt-4'>
                    <Text className='text-white'>Buy Now</Text>
                </Button>
            </View>
        </ScrollView>
    )
}