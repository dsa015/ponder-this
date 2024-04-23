<script>
  import LogoutButton from "../components/LogoutButton.svelte";

  const selectDilemmaOne = () => {
    console.log("Dilemma one selected");
  };
  const selectDilemmaTwo = () => {
    console.log("Dilemma two selected");
  };
</script>

<LogoutButton />

<main>
  <h1>Ponder this...🤔</h1>
  <div>
    <div>
      <p>What if you could create a website with just a few clicks?</p>
      <button on:click={selectDilemmaOne}>Yeah sure...</button>
    </div>
    <div>
      <p>What if you could create a website with just a few clicks?</p>
      <button on:click={selectDilemmaTwo}>Maybe this...</button>
    </div>
  </div>
</main>

<style>
</style>
