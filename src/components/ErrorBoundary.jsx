import React from "react";
import { ErrorBlock } from "antd-mobile";
import styled from "styled-components";
const StyledErrorBlock = styled(ErrorBlock)``;
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log(error.message);
    console.log(info.componentStack);
  }

  render() {
    return this.state.hasError ? (
      <StyledErrorBlock fullPage={true} />
    ) : (
      this.props.children
    );
  }
}
export default ErrorBoundary;
