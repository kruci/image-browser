const proxyurl = "https://cors-anywhere.herokuapp.com/";

function getIamgesFromPage(url) {
  return fetch(proxyurl + url)
    .then(function(response) {
      // When the page is loaded convert it to text
      return response.text();
    })
    .then(function(html) {
      // Initialize the DOM parser
      var parser = new DOMParser();

      // Parse the text
      var doc = parser.parseFromString(html, "text/html");

      // You can now even select part of that html as you would in the regular DOM
      // Example:
      // var docArticle = doc.querySelector('article').innerHTML;

      //console.log(doc);
      return Array.from(doc.getElementsByTagName("img")).map(img => img.src);
    });
}

export default function rangeUrlImageExtractor(url, from, to) {
  let urlsToVisit = [];
  for (let i = from; i <= to; ++i) {
    const thisUrl = url.replace(" ", i.toString());

    urlsToVisit[thisUrl] = getIamgesFromPage(thisUrl);
  }
  return urlsToVisit;
}
