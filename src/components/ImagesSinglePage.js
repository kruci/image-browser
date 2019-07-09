import React from "react";

export default class ImagesSinglePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: this.props.images, loaded: false };
  }

  componentDidMount = () => {
    this.state.images.then(images =>
      this.setState({ images: images, loaded: true, refresh: this.props.refresh })
    );
  };


  render() {
    return (
      <ErrorBoundary>
        <div className={"PageImages " + this.state.refresh}>
          {this.state.loaded &&
            this.state.images.map(image => <img key={image+this.state.refresh}  src={image}/>)}
          <p>{this.props.url}</p>
        </div>
      </ErrorBoundary>
    );
  }
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
