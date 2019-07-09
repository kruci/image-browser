const proxyurl = "https://cors-anywhere.herokuapp.com/";

function getIamgesFromPage(url, tag) {
  return fetch(proxyurl+url)
    .then(function(response) {
      // When the page is loaded convert it to text
      return response.text();
    })
    .then(function(html) {
      // Initialize the DOM parser
      var parser = new DOMParser();

      // Parse the text
      var doc = parser.parseFromString(html, "text/html");

      return Array.from(
        doc.querySelectorAll((tag && tag !== "" ? tag + " " : "") + "img")
      )
        .filter(img => {
          console.log(tag, window.location.hostname);
          // removes git deploy urls (caused by proxiy)
          if (img.src.substring(window.location.hostname) >= 0) {
            return false;
          }
          return true;
        })
        .map(img => img.src);
    });
}

export default function rangeUrlImageExtractor(
  url,
  from,
  to,
  imageUrlContains,
  tag
) {
  let urlsToVisit = [];
  for (let i = parseInt(from); i <= parseInt(to); ++i) {
    const thisUrl = url.replace(" ", i.toString());

    urlsToVisit[thisUrl] = getIamgesFromPage(thisUrl, tag);
  }
  return urlsToVisit;
}
