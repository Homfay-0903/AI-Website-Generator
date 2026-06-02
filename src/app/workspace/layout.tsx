import { SidebarProvider } from '@/components/ui/sidebar';
import WorkspaceHeader from '@/components/workspace/WorkspaceHeader';
import { WorkspaceSidebar } from '@/components/workspace/WorkspaceSidebar';
import React from 'react'

export default function WorkspaceLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
            <WorkspaceSidebar></WorkspaceSidebar>
            <div className='w-full'>
                <WorkspaceHeader></WorkspaceHeader>
                {children}
            </div>
        </SidebarProvider>
    )
}
