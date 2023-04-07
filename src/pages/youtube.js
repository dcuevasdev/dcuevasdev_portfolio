const API_VIDEOS =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UCilt3NJtU0tHvoFjo-OHL3A&part=snippet%2Cid&order=date&maxResults=9";

const OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.API,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

async function fetchData(urlApi, obj) {
  const response = await fetch(urlApi, obj);
  const data = await response.json();
  return data;
}

const containerVideos = document.querySelector(".youtube__videos");

async function generateVideos(urlApi, obj) {
  try {
    const videos = await fetchData(urlApi, obj);

    const toRender = videos.items
      .map((element) => {
        return `
          <div class="youtube__videos-card">
            <img src="${element.snippet.thumbnails.medium.url}" alt="${element.snippet.thumbnails.title}" />
            <p> <a href="https://www.youtube.com/watch?v=${element.id.videoId}" target="_blank">${element.snippet.title}</a></p>
          </div>
      `;
      })
      .join("");

    containerVideos.innerHTML = toRender;
  } catch (error) {
    console.log(error);
  }
}

export { API_VIDEOS, OPTIONS, generateVideos };

//export default { generateVideos };
