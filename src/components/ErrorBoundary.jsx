import { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    redirect: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }


  componentDidCatch(error, errorInfo) {
    console.error("Error boundary caught an error", error, errorInfo);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.hasError) {
      setTimeout(() => {
        this.setState({ redirect: true });
      }, 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          There was an error! <Link to="/">Click here.</Link>
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
