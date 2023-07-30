export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}

import { assertEquals } from "https://deno.land/std@0.196.0/assert/mod.ts";

assertEquals(add(2, 4), 6);
