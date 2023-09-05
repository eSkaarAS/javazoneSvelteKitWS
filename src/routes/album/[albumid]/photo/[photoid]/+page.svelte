<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  export let data;

  onMount(() => {
    console.log($page.params);

    if ($page.params.albumid) console.log($page.params.photoid);
  });
</script>

<img class="full-image" src="/images/{data.photo}" alt="asdas" />

<div class="photo-albums-area">
  <div class="photo-album-grid">
    {#each data.album.images as image}
      <a href="/album/{data.albumid}/photo/{image}">
        <div class="grid-item">
          <img
            class="grid-item-photo"
            src="/images/{image}"
            alt="Makro album"
          />
          <div class="grid-item-caption">
            <h1>{image}</h1>
          </div>
        </div>
      </a>
    {:else}
      <div>no images</div>
    {/each}
  </div>
</div>

<style>
  .full-image {
    width: 100vw;
    height: 75vh;
    text-align: center;
    margin-bottom: 5vh;
  }

  .full-image img {
    max-width: 100%;
    height: clamp(10vh, 1000px, 75vh);
    object-fit: contain;
    transition: all 0.5s;
  }
  .photo-albums-area h1 {
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
    font-weight: 100;
    font-size: 4rem;
  }

  .photo-album-grid {
    display: grid;
    grid-template-columns: repeat(3, 30vw);
    grid-gap: 3%;
    margin-left: 1%;
  }

  .grid-item {
    width: 30vw;
    height: 20vh;
    transition: opacity 0.3s ease-in-out, transform 0.5s;
    overflow: hidden;
  }

  .grid-item img {
    width: 30vw;
    height: 20vh;
    object-fit: cover;
    transition: opacity 0.3s ease-in-out, transform 2s;
  }

  .grid-item:hover img {
    transform: scale(1.7);
  }

  .grid-item-caption {
    position: relative;
    top: -120px;
    opacity: 0;
  }

  .grid-item:hover {
    transform: scale(1.15);
  }

  .in-album .grid-item-caption {
    top: -100px;
  }

  .in-album .grid-item:hover {
    transform: scale(1);
  }

  .in-album .grid-item-caption h1 {
    font-size: 1em;
  }

  .grid-item-caption {
    animation: ease-in-out 1s;
  }

  .grid-item:hover .grid-item-caption {
    opacity: 1;
    background: rgba(0, 0, 0, 0.5);
  }

  .grid-item-caption h1 {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-size: 3em;
    color: white;
    font-weight: 100;
  }
</style>
