const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCOsVSkmXD1tc6uiJ2hc0wYQ&part=snippet%2Cid&order=date&maxResults=6';
const url2 = "https://www.youtube.com/@EAStarWars";

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9a94c7a414msh46a8ca072c0a2e9p19ebd3jsn358e90d63ec4',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch (urlApi, options);
    const data = await response.json();
    return data;
}

function redirectToVideo(url) {
  window.location.href = url;
}

(async () => {
  try{
      const videos = await fetchData(API);
      let view = `
      ${videos.items.map(video => `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
          click="redirectToVideo('https://www.youtube.com/watch?v=${video.id.videoId}')">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
      `).slice(0,4).join('')}
      `;
      content.innerHTML = view;
  } catch (error){
      console.log(error);
      alert(error);
  }
})();





