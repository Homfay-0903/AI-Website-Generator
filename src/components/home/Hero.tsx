'use client'

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { ArrowUp, HomeIcon, ImagePlus, Key, LayoutDashboard, User } from 'lucide-react'

const suggestions = [
    {
        label: 'Dashboard',
        prompt: 'Create an analytics dashboard to track customers and revenue data for a SaaS',
        icon: LayoutDashboard
    },
    {
        label: 'SignUp Form',
        prompt: 'Create a modern sign up form with email/password fields, Google and Github login options, and terms checkbox',
        icon: Key
    },
    {
        label: 'Hero',
        prompt: 'Create a modern header and centered hero section for a productivity SaaS. Include a badge for feature announcement, a title with a subtle gradient effect',
        icon: HomeIcon
    },
    {
        label: 'User Profile Card',
        prompt: 'Create a modern user profile card component for a social media website',
        icon: User
    }
]

export default function Hero() {
    const [userInput, setUserInput] = useState<string>()

    return (
        <div className='flex flex-col items-center justify-center h-[80vh]'>
            {/*description */}
            <h2 className='font-bold text-6xl'>What Should We Design</h2>
            <p className='mt-2 text-xl text-gray-500'>
                Generator, Edit and Explore design with AI, Export as well
            </p>

            {/*input */}
            <div className='w-full max-w-2xl p-5 mt-5 border rounded-2xl'>
                <textarea
                    value={userInput}
                    onChange={(event) => setUserInput(event.target.value)}
                    placeholder='Describe your design'
                    className='w-full h-24 focus: outline-none focus: ring-0 resize-none'
                >
                </textarea>
                <div className='flex justify-between items-center'>
                    <Button variant={'ghost'}><ImagePlus></ImagePlus></Button>
                    <Button><ArrowUp></ArrowUp></Button>
                </div>
            </div>

            {/*suggestion */}
            <div className='flex items-center justify-center mt-4 gap-2'>
                {suggestions.map((suggestion) => (
                    <Button
                        key={suggestion.label}
                        variant={'outline'}
                        onClick={() => setUserInput(suggestion.prompt)}
                    >
                        <suggestion.icon></suggestion.icon>
                        {suggestion.label}
                    </Button>
                ))}
            </div>
        </div>
    )
}
