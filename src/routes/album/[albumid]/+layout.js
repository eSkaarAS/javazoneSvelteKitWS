export async function load({ parent, params }) {
  const data = await parent();
  const album = data.albums.find((album) => album.id === params.albumid);
  const photos = album.images;
  return { album, photos, albumid: params.albumid };
}
