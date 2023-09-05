export async function load({ parent, params }) {
  const data = await parent();
  const photo = data.photos.find((photo) => photo === params.photoid);
  return { photo };
}
