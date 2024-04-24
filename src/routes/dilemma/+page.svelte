<script>
  import LogoutButton from "../../components/LogoutButton.svelte";
  import { calculateVotePercentage } from "../../util/calculateTotalvotes";

  let count1 = 0;
  let count2 = 0;

  const selectDilemmaOne = () => {
    console.log("Dilemma one selected");
    count1++;
  };
  const selectDilemmaTwo = () => {
    console.log("Dilemma two selected");
    count2++;
  };
</script>

<nav>
  <a href="/">Back to welcome screen</a>
  <LogoutButton />
</nav>

<main>
  <h1>Ponder this...🤔</h1>
  <div class="container">
    <span>
      <button on:click={selectDilemmaOne}
        >What if you could create a website with just a few clicks?</button
      >
    </span>
    <p>OR</p>
    <span>
      <button on:click={selectDilemmaTwo}
        >What if you could create a website with just a few clicks?</button
      >
    </span>
  </div>
  <p>{calculateVotePercentage(count1, 123)}</p>
</main>

<style>
  h1 {
    text-align: center;
  }
  .container {
    display: flex;
    align-items: center;
  }

  button {
    margin: 10px;
    padding: 10px;
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #ddd;
    }
  }
</style>
