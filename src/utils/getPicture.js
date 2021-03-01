const api_key = "niZVSOJ40Nb7weWx6264maBqHdwQJG3JtSShDAeM";

const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;

async function getPicture() {
  const result = await fetch(url);
  const data = await result.json();
  return data;
}

export default getPicture;
