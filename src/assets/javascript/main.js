//const fetch = require('node-fetch');

const url = 'https://youtube-v31.p.rapidapi.com/search?q=platzi&part=snippet%2Cid&regionCode=US&maxResults=50&order=date';

const content = null || document.getElementById('content');

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '2130d32ee0mshcf465c8dca030dep10d194jsn2785721177f6',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
try{
 const videos = await fetchData(url);
 let view  = `
 ${videos.items.map(video => `
 <div class="group relative">
 <div
   class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
   <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
 </div>
 <div class="mt-4 flex justify-between">
   <h3 class="text-sm text-gray-700">
     <span aria-hidden="true" class="absolute inset-0"></span>
      ${video.snippet.channelTitle}
   </h3>
 </div>
</div>
 `).slice(0,4).join('')} 

 `;
 console.log(view)
 content.innerHTML = view; 
} catch (error){
 console.log(error);
 alert(`Error: API not available 
 More information: ${error}`)
}
})();