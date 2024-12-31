import React, { Component, ReactNode } from "react";
import { CustomButton } from "./CustomButton";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError?: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: undefined,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // error.message = "Ops! Algo salio mal!";
    return { hasError: true, error: error };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidCatch(_error: Error, _errorInfo: React.ErrorInfo) {
    console.log("ErrorBoundary en acción");
  }

  resetState() {
    this.setState({ hasError: false });
  }

  handleReiniciar = () => {
    this.resetState();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-container">
          {/* <h1 className="error">Ops! Algo salio mal!</h1> */}
          <h1 className="error">{this.state.error?.message}</h1>
          <CustomButton onClick={this.handleReiniciar}>Reiniciar</CustomButton>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
