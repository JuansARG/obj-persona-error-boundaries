import React, { Component, ReactNode } from "react";
import { CustomButton } from "./CustomButton";
import { CustomError } from "../types";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError?: boolean;
  error?: CustomError;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: undefined,
    };
  };

  //* Este metodo nos permite capturar errores en componentes hijos y setea el estado de nuestro componente ErrorBoundary
  //* Tambien podriamos modificar el estado de nuestro componente ErrorBoundary para mostrar un mensaje de error personalizado
  static getDerivedStateFromError(error: CustomError): ErrorBoundaryState {
    //* En este caso si no fue modificado viene el error por defecto
    if(!error.wasModified){
      error.message = "Mensaje customizado!😎";
    };
    
    return { hasError: true, error: error };
  };

  //* Aca podriamos agregar acciones adicionales como logear el error en un servicio de monitoreo de errores
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidCatch(_error: Error, _errorInfo: React.ErrorInfo) {
    console.warn("ErrorBoundary en acción");
  };

  resetState() {
    this.setState({ hasError: false, error: undefined });
  };

  handleReiniciar = () => {
    this.resetState();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary-container">
          {/* Esta seria una forma menos dinamica de mostrar el contenido de nuestro error... */}
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
