import { NextResponse } from "next/server";

export const badRequest = () => NextResponse.json({},{
  status: 400
})

export const unAuthorized = () => NextResponse.json({},{
  status: 401
})

export const notFound = () => NextResponse.json({},{
  status: 404
})

export const internalError = () => NextResponse.json({},{
  status: 500
})