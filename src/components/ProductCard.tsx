import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native'
import React, { createContext, PropsWithChildren } from 'react'
import { IProductCard, ProductCardContext, useProductCardContext } from '@/context/product/product'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from '@/navigation/RootStackNavigator'
import Animated, { FadeInDown } from 'react-native-reanimated'



type ProductCardType = PropsWithChildren & IProductCard & { index: number }

export default function ProductCard({ children, index, ...product }: ProductCardType) {
    const navigation = useNavigation<NavigationProp>()
    return (
        <Animated.View className='flex-1 border border-slate-300 rounded-lg overflow-hidden' entering={FadeInDown.delay(200 * index)}>
            <ProductCardContext.Provider value={product}>
                <TouchableOpacity onPress={() => navigation.navigate("product-detail", { productId: product.id, title: product.title })} activeOpacity={0.8}>
                    {children}
                </TouchableOpacity>
            </ProductCardContext.Provider>
        </Animated.View>
    )
}


ProductCard.Title = () => {
    const { title } = useProductCardContext()
    return <Text className='font-semibold text-lg text-primary'>{title}</Text>
}

ProductCard.Price = () => {
    const { price } = useProductCardContext()
    return <Text className='text-sm'>{price}</Text>
}

ProductCard.Image = () => {
    const blurhash =
        '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

    const { image, title } = useProductCardContext()

    return <Image style={styles.productImage} source={image} placeholder={{ blurhash }} contentFit='cover' />
}


// using remapProps from nativewind more expensive just using  native style, specially in loop component
const styles = StyleSheet.create({
    productImage: {
        width: "100%",
        height: 200
    }
})