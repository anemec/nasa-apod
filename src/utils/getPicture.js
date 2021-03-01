import { DateTime } from "luxon";

const api_key = "niZVSOJ40Nb7weWx6264maBqHdwQJG3JtSShDAeM";

const defaultUrl = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;

export async function getPrevPicture(date) {
  const d = DateTime.fromISO(date);
  const dateMinusOne = d.minus({ days: 1 });
  const url = `${defaultUrl}&date=${dateMinusOne.toISODate()}`;
  return await getPicture(url);
}

export async function getNextPicture(date) {
  const d = DateTime.fromISO(date);
  const now = DateTime.now();
  const datePlusOne = d.plus({ days: 1 });
  let url = `${defaultUrl}&date=${
    datePlusOne < now ? datePlusOne.toISODate() : now.toISODate()
  }`;
  return await getPicture(url);
}

export async function getPicture(url = defaultUrl) {
  const result = await fetch(url);
  const data = await result.json();
  return data;
}

// export default getPicture;
