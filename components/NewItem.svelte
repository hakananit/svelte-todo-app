<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  function handleKeyUp({ key }) {
    if (key !== "Enter" || value.length === 0) {
      return;
    }
    dispatch("newItem", value);
    value = "";
  }
  let value = "";
</script>

<input type="text" on:keyup={handleKeyUp} bind:value placeholder="+ add"/>