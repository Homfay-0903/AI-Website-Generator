'use client'

import { useContext, useState } from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { useUserInfo } from '@/contexts/UserInfoContext'
import { Progress } from '../ui/progress'

export function WorkspaceSidebar() {
  const [projectList, setProjectList] = useState([])
  const { userInfo, isLoading } = useUserInfo()

  return (
    <Sidebar>
      <SidebarHeader>
        <div className='flex items-center gap-2'>
          <Image src={'/logo.svg'} alt='logo' width={30} height={30}></Image>
          <h2 className='font-bold'>AI Website Generator</h2>
        </div>

        <Link href={'/workspace'}>
          <Button className='w-full mt-5'>
            +Add New Project
          </Button>
        </Link>
      </SidebarHeader>
      <SidebarContent className='p-2'>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          {!projectList.length && <h2 className='text-sm px-2 text-gray-500'>No projects here!</h2>}
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <div className='p-3 border rounded-xl space-y-3 bg-secondary'>
          <h2 className='flex items-center justify-between'>
            Remaining Credits <span className='font-bold'>{userInfo?.credits}</span>
          </h2>
          <Progress value={33}></Progress>
          <Button className='w-full'>
            upgrate for unlimited
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}