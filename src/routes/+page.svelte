<script>
  import { onMount } from "svelte";

  export let data;

  onMount(() => {
    setFirstPhoto();
  });

  function setFirstPhoto() {
    if (
      document.getElementById("cf2") &&
      document.getElementById("cf2").children.length > 0
    ) {
      document
        .getElementById("cf2")
        .children[0].classList.remove("transparent");
      setTimeout(() => {
        document.getElementById("cf2").children[0].classList.add("zoom");
      }, 1000);
    }
  }
</script>

<div id="cf2">
  {#each data.photos as photo}
    <div
      class="photo transparent"
      style="background-image: url('/images/{photo.id}')"
    />
  {/each}
</div>

<style>
  #cf2 {
    position: relative;
    width: 100vw;
    height: 80vh;
    overflow: hidden;
  }

  #cf2 div.transparent {
    opacity: 0;
  }

  #cf2 div.photo {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 80vh;
    object-fit: cover;
    transition: opacity 1s ease-in-out, transform 10s;
    background-size: cover;
    background-position: center;
  }

  :global(#cf2 div.zoom) {
    transform: scale(1.2);
  }
</style>
