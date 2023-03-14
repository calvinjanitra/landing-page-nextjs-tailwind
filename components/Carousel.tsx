import React from 'react'
import Image from 'next/image'
import CarouselItem from './CarouselItem'
export interface CarouselProps {
    width?: number
    height?: number
    items: React.ReactNode[]
}

export default function Carousel({ width, height, items }: CarouselProps) {
    return (
        <div>
            {items.map((item, index) => (
                <CarouselItem key={index}></CarouselItem>
            ))}
        </div>
    )
}
