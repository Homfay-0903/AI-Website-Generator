import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight, Ghost } from 'lucide-react'

const menuOptions = [
    {
        key: 1,
        name: 'Pricing',
        path: '/pricing'
    },
    {
        key: 2,
        name: 'Contact Us',
        path: '/contact-us'
    }
]

export default function Header() {
    return (
        <div className='flex items-center justify-between p-4 shadow-md'>
            {/*logo */}
            <div className='flex gap-2 items-center'>
                <Image src={'/logo.svg'} alt='logo' width={25} height={25}></Image>
                <h2 className='font-bold text-xl'>AI Website Generator</h2>
            </div>

            {/*menu options */}
            <div className='flex gap-4'>
                {menuOptions.map((menuOption) => (
                    <Button key={menuOption.key} variant={'ghost'}>{menuOption.name}</Button>
                ))}
            </div>

            {/*get started */}
            <div>
                <Button>Get Started <ArrowRight></ArrowRight></Button>
            </div>
        </div>
    )
}
