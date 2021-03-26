<script>
import { items } from "../stores";
$: itemCount = $items.length;
$: completedItemCount = $items.filter(item => item.completed).length;
</script>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 15px 20px;
    font-size: 1.5em;
  }
</style>

<div class="header">
  <span> ToDo List </span>
  <span> {completedItemCount}/{itemCount} </span>
</div>