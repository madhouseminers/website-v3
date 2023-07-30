import { add } from "./main.ts";

Deno.bench(function addSmall() {
  add(1, 2);
});

Deno.bench(function addBig() {
  add(2 ** 32, 2 ** 32);
});

Deno.bench(function addVeryBig() {
  add(2 ** 256, 2 ** 256);
});
