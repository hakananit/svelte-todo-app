<script>
  import { onMount } from "svelte";
  import TodoApi from "../TodoApi";
  import { items } from "../stores";
  import Item from "./Item";
  import NewItem from "./NewItem.svelte";
  import { v4 as uuidv4 } from "uuid";
  function handleNewItem(event) {
    console.log(event);
    $items = [...$items, { id: uuidv4(), text: event.detail, completed: false }];
    TodoApi.save($items);
  }

  function handleUpdate(event) {
    console.log("updating");
    const index = $items.findIndex(item => item.id === event.detail.id);
    $items[index] = event.detail;
    TodoApi.save($items);
  }

  function handleDelete(event) {
    console.log("deleting");
    $items = $items.filter(item => item.id != e.detail);
    TodoApi.save($items);
  }

  onMount(async () => {
    $items = await TodoApi.getAll();
  });

  let itemsSorted = [];
  // reactive statement
  $: {
    itemsSorted = [...$items];
    itemsSorted.sort((a, b) => {
      if (a.completed && b.completed) {
        return 0;
      }
      if (a.completed) {
        return 1;
      }
      if (a.completed) {
        return -1;
      }
    });
  }
</script>

<style>
  .list {
    padding: 15px;
  }
  .list-status {
    margin: 0px;
  }
</style>

<div class="list">
  <NewItem on:newItem={handleNewItem}/>
  {#each itemsSorted as item (item)}
    <Item {...item} on:update={handleUpdate} on:delete={handleDelete}/>
  {:else}
    <p class="list-status">no items in list</p>
  {/each}
</div>