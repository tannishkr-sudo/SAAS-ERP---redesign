import { NextRequest, NextResponse } from "next/server";
import { ZodError, z } from "zod";
import { createBlueprint } from "@/lib/erp/demo";
import { BlueprintSchema } from "@/lib/erp/types";
const Input=z.object({requirement:z.string().min(20).max(10000)});
export async function POST(request:NextRequest){
 try {
  const {requirement}=Input.parse(await request.json());
  const blueprint=BlueprintSchema.parse(createBlueprint(requirement));
  return NextResponse.json({blueprint,mode:"deterministic-demo"});
 } catch(error) {
  if(error instanceof ZodError) return NextResponse.json({error:"Validation failed",issues:error.issues.map(issue=>({path:issue.path.join("."),message:issue.message,code:issue.code}))},{status:400});
  if(error instanceof SyntaxError) return NextResponse.json({error:"Invalid JSON request body"},{status:400});
  return NextResponse.json({error:"Unable to analyze requirements"},{status:400});
 }
}
