import React from 'react'
import { SidebarTrigger } from '../ui/sidebar'
import { UserButton } from '@clerk/nextjs'

export default function WorkspaceHeader() {
    return (
        <div className='flex items-center justify-between p-4 shadow-md'>
            <SidebarTrigger></SidebarTrigger>
            <UserButton></UserButton>
        </div>
    )
}
