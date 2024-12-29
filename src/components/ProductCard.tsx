import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { createContext, PropsWithChildren } from 'react'
import { IProductCard, ProductCardContext, useProductCardContext } from '@/context/product/product'
import { Image } from 'expo-image'




type ProductCardType = PropsWithChildren & IProductCard

export default function ProductCard({ children, ...product }: ProductCardType) {
    return (
        <ProductCardContext.Provider value={product}>
            <TouchableOpacity className='flex-1 border border-slate-300 rounded-lg overflow-hidden' activeOpacity={0.8}>
                {children}
            </TouchableOpacity>
        </ProductCardContext.Provider>
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

    const { image } = useProductCardContext()

    return <Image style={styles.productImage} source={image} placeholder={{ blurhash }} contentFit='cover' />
}


// using remapProps from nativewind more expensive just using  native style, specially in loop component
const styles = StyleSheet.create({
    productImage: {
        width: "100%",
        height: 200
    }
})