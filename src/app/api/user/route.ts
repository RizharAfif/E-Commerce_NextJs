import Response from "@/lib/api.response";
import { NextResponse } from "next/server";

export async function GET() {
    return Response({
        message: "Get All Users",
        data: [
            {
              id: 1,
              name: "Taufan",
            },
            {
              id: 2,
              name: "Rahmat",
            },
          ],
          status: 200,
    
    })
}

export async function POST() {
    return Response({
        message: "New User Created",
        data: [
            {
              id: 3,
              name: "Taufan Ali",
            },
          ],
    })
  }
