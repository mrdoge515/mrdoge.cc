<script lang="ts">
  import "@fontsource/ubuntu-mono";

  export let text: string;
  export let typewriterSpeed: number;

  let displayText: string = "";

  function addLetter(text: string, iteration: number): void {
    if (iteration >= text.length) {
      return;
    }

    setTimeout(() => {
      displayText += text.charAt(iteration);
      iteration++;
      addLetter(text, iteration);
      console.log("Git");
    }, typewriterSpeed);
  }

  addLetter(text, 0);
</script>

<h1>{displayText}</h1>

<style>
  h1 {
    font-family: "Ubuntu Mono", monospace;
    color: #4c4f69;
    font-size: 5em;
  }
</style>
