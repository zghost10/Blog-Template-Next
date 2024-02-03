import { verify } from "jsonwebtoken";
import { NextResponse } from "next/server";

if(!process.env.APP_KEY){
  throw Error("Missing environment variable: APP_KEY")
}

const appKey = process.env.APP_KEY

export const POST = async (req: Request) => {
  const userToken = await req.json();

  if (!userToken) {
    return NextResponse.json({
      success: false,
      message: "No token found",
    }, { status: 404 })
  }

  try {
    const { username } = verify(userToken.token, appKey) as any
    
    if(username){
      return NextResponse.json({
        success: true,
        username
      })
    }else{
      return NextResponse.json({
        success: false,
        message: "Username not found!"
      },{ status: 401 })
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: error
    }, { status: 500 })
  }
}