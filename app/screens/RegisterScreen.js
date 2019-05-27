import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import { View, Container } from "native-base";
import RegisterForm from "../components/forms/RegisterForm";


export default class HomeAuth extends Component {
  componentDidMount() {
    // this.props.navigation.navigate("App")
  }

  render() {
    return (
      <Container style={styles.container}>
        <RegisterForm />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink"
  }
});
