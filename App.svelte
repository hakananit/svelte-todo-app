<script>
  import Header from "./components/Header.svelte";
  import List from "./components/List.svelte";
</script>

<style>
  .container {
    width: 500px;
    background: red;
  }
  :global(.container *) {
    font-family: sans-serif;
    text-align: center;
  }
</style>

<div class="container">
  <Header></Header>
  <List></List>
</div>