export const getGif = async ( category ) => {
  //const url = `${ searchUrl }?q=${ category }&limit=10&api_key=${apiKey}`;
  const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${ encodeURI(category) }&api_key=zwZGFmdPvQYGAu2QVKdK9hpdYy5Ni4N9`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    };
  });

  return gifs;
}