import Response from "@/lib/api.response";

export async function POST(req: Request){
    try {
        return Response({
            message: "User registered successfully",
            data: true
        })
    } catch (error: any) {
        return Response({
            message: "Registration failed",
            data: error,
            status: 500,
        })
    }
}