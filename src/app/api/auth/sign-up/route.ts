import  bcrypt  from 'bcrypt';
import Response from "@/lib/api.response";
import { Prisma, User } from "@prisma/client";
import { prisma } from '@/lib/prisma';

export async function POST(req: Request){
    try {
        const payload  = await req.json();

        const data: Prisma.UserCreateInput = {
            name: payload.name,
            email: payload.email,
            password: bcrypt.hashSync(payload.password, 8),
        }

        const user = await prisma.user.create({
            data
        })

        const dataRes: Partial<User> = {
            ...user,
            password: undefined
          }

        return Response({
            message: "User registered successfully",
            data: dataRes
        })
    } catch (error: any) {
        return Response({
            message: "Registration failed",
            data: error,
            status: 500,
        })
    }
}