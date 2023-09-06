const API_KEY = process.env.REACT_APP_API_KEY;

const searchVideo = (searchValue) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5"+ `&q=${searchValue} ?${searchValue} :react`+`&key=${API_KEY}`, true)
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          let response = JSON.parse(xhr.response);                                                                                       
          return {
            type : "VIDEO_RESPONSE",
            payload : response.items
          }
        } else {
          console.error(xhr.statusText)
        }
      }
    }
    xhr.onerror = function (e) {
      console.error(xhr.statusText)
    }
    xhr.send(null)
}

export default searchVideo;