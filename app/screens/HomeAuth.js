import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import { View, Container } from "native-base";
import LoginForm from "../components/forms/LoginForm";

export default class HomeAuth extends Component {
  componentDidMount() {
    // this.props.navigation.navigate("App")
  }

  render() {
    return (
      <Container style={styles.container}>
        <LoginForm />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink"
  }
});
