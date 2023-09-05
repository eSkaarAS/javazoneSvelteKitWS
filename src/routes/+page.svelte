<script>
  import { onMount } from "svelte";
  import Slideshow from "$lib/components/Slideshow.svelte";
  import PhotoAlbumIndex from "../lib/components/PhotoAlbumIndex.svelte";

  export let data;

  onMount(() => {});
</script>

<Slideshow photos={data.photos} />
<PhotoAlbumIndex albums={data.albums} />

<style>
</style>
