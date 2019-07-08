import React from "react";
import UrlSelector from "./components/UrlSelector";
import ImageList from "./components/ImageList";
import Footer from "./components/Footer";
import ImagesSinglePage from "./components/ImagesSinglePage";
import rangeUrlImageExtractor from "./extraction/extraction.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  search = event => {
    if (
      this.state["pageUrl"] &&
      this.state["rangeFrom"] &&
      this.state["rangeTo"]
    ) {
      const pagesWithImages = rangeUrlImageExtractor(
        this.state["pageUrl"],
        this.state["rangeFrom"],
        this.state["rangeTo"]
      );
      this.setState({ images: pagesWithImages });
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
        <ImageList images={this.state.images !== undefined && this.state.images} />
        <Footer />
      </div>
    );
  }
}

export default App;
