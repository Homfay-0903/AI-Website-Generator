import { usersTable } from "@/db/schema";
import { db } from "@/index";
import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const curUser = await currentUser()

    //if user alreadt exits ?
    const userSearchResult = await db.select().from(usersTable)
        //@ts-ignore
        .where(eq(usersTable.email, curUser?.primaryEmailAddress?.emailAddress))

    //if not, insert new user
    if (!userSearchResult.length) {
        const userData = {
            name: curUser?.fullName ?? 'unknown',
            email: curUser?.primaryEmailAddress?.emailAddress ?? '',
            credits: 2
        }

        await db.insert(usersTable).values({
            ...userData
        })

        return NextResponse.json({ user: userData })
    }

    return NextResponse.json({ user: userSearchResult[0] })
}