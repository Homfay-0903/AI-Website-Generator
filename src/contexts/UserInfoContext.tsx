'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useUser } from '@clerk/nextjs'
import { userApi, User } from '@/lib/axios/user'

interface UserInfoContextType {
    userInfo: User | null
    isLoading: boolean
    error: Error | null
    refreshUser: () => Promise<void>
}

const UserInfoContext = createContext<UserInfoContextType | undefined>(undefined)

export function UserInfoProvider({ children }: { children: ReactNode }) {
    const { user } = useUser()
    const [userInfo, setUserInfo] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    const syncUserWithDatabase = async () => {
        if (!user) return

        setIsLoading(true)
        setError(null)

        try {
            const res = await userApi.createOrGetUser()
            setUserInfo(res.user)
        } catch (err) {
            const error = err instanceof Error ? err : new Error('Failed to sync user')
            setError(error)
            console.error('Failed to sync user:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const refreshUser = async () => {
        await syncUserWithDatabase()
    }

    useEffect(() => {
        syncUserWithDatabase()
    }, [user])

    return (
        <UserInfoContext value={{ userInfo, isLoading, error, refreshUser }}>
            {children}
        </UserInfoContext>
    )
}

export function useUserInfo() {
    const context = useContext(UserInfoContext)
    if (context === undefined) {
        throw new Error('useUserInfo must be used within a UserInfoProvider')
    }
    return context
}