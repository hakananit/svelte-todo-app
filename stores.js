import { writable } from "svelte/store";

export const items = writable([
  {
    id: 1,
    text: "item 1",
    completed: false
  },
  {
    id: 2,
    text: "item 2",
    completed: false
  }
]);
