"use client";
import { useEffect, useState } from "react";
import { Blueprint } from "@/lib/erp/types";
import { createBlueprint } from "@/lib/erp/demo";
export function useBlueprint(){const [blueprint,setBlueprint]=useState<Blueprint|null>(null);useEffect(()=>{try{const v=localStorage.getItem("erpforge-blueprint");setBlueprint(v?JSON.parse(v):createBlueprint("Urban Furniture Co manufactures furniture, buys materials, sells products, manages inventory, employees, invoices and expenses."));}catch{setBlueprint(createBlueprint("Urban Furniture Co manufactures furniture, buys materials, sells products, manages inventory, employees, invoices and expenses."))}},[]);return blueprint}
