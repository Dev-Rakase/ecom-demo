import { fetchProduct } from '@/api/product'
import { Button } from '@/components/Button'
import CommonError from '@/components/CommonError'
import ProductCard from '@/components/ProductCard'
import { useProductHook } from '@/hooks/useProductHook'
import { useQuery } from '@tanstack/react-query'
import { remapProps } from 'nativewind'
import { View, Text, FlatList, ActivityIndicator, RefreshControl } from 'react-native'
import Animated from 'react-native-reanimated';

remapProps(FlatList, {
    contentContainerClassName: "contentContainerStyle",
    className: "style"
})

export default function Home() {

    const { data, isLoading, isError, error, refetch } = useProductHook()

    if (isLoading) return <ActivityIndicator size="small" />


    if (isError && error) {
        return (
            <CommonError message={error.message}>
                <Button size="sm" onPress={() => refetch()}>
                    <Text className='text-white'>Reload</Text>
                </Button>
            </CommonError>
        )
    }

    return (
        <Animated.View sharedTransitionTag='product'>
            <FlatList
                data={data.rows}
                initialNumToRender={10}
                numColumns={2}
                className='p-2'
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={() => refetch()} />}
                contentContainerClassName='gap-2'
                columnWrapperStyle={{ gap: 8 }}
                showsVerticalScrollIndicator={false}
                renderItem={(({ item, index }) => (
                    <ProductCard key={index} {...item} index={index} >
                        <ProductCard.Image />
                        <View className='p-2'>
                            <ProductCard.Title />
                            <ProductCard.Price />
                        </View>
                    </ProductCard>
                ))} />
        </Animated.View>
    )
}