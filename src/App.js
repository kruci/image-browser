import React from "react";
import UrlSelector from "./components/UrlSelector";
import ImageList from "./components/ImageList";
import Footer from "./components/Footer";
import rangeUrlImageExtractor from "./extraction/extraction.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {refresh: false};
  }

  search = event => {
    if (this.state["pageUrl"]) {
      const pagesWithImages = rangeUrlImageExtractor(
        this.state["pageUrl"],
        this.state["rangeFrom"] || "0",
        this.state["rangeTo"] || "0",
        this.state["imageUrlPattern"] || undefined,
        this.state["imageTag"] || undefined
      )

      this.setState({ images: pagesWithImages, refresh:!this.state.refresh });
    } else {
      window.alert("Missing parameters");
    }
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="App">
        <UrlSelector
          search={this.search}
          handleInputChange={this.handleInputChange}
        />
        <ImageList
          images={this.state.images !== undefined && this.state.images}
          refresh={this.state.refresh}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
