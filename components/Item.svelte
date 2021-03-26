<script>
  export let id, text, completed;
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function triggerUpdate() {
    dispatch("update", { id, text, completed });
  }

  function handleDoubleClick() {
    const yes = confirm("are u sure?");
    if (yes) {
      dispatch("delete", id);
    }
  }
</script>

<style>
  .item {
    display: flex;
    align-items: center;
    padding: 15px;
    background: white;
  }
  .text-input {
    flex-grow: 1;
  }

  .item.completed {
    background: red;
  }
</style>

<div class="item" class:completed on:dblclick={handleDoubleClick}>
<input 
class="text-input" 
type="text" bind:value={text} readonly={completed}
on:keyup={(key, target)=> key==="Enter" && target.blur()}
on:blur={()=>triggerUpdate()}/>
<input class="completed-checkbox" type="checkbox" bind:checked={completed} 
on:change={()=>triggerUpdate()}

/>
</div>