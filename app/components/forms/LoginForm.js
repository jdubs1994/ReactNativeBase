import React from "react";
import {
  View,
  Text,
  Form,
  Container,
  Item,
  Label,
  Input,
  Button
} from "native-base";
import { StyleSheet } from "react-native";
export default function LoginForm(props) {
  return (
    <Container
      style={{
        justifyContent: "center"
      }}
    >
      <Form>
        <Item inlineLabel>
          <Label>Username:</Label>
          <Input />
        </Item>
        <Item inlineLabel last>
          <Label>Password:</Label>
          <Input />
        </Item>
        <Button full>
          <Text>Login</Text>
        </Button>
        <Button onPress={() => props.navigation.navigate('RegisterScreen')} transparent style={{alignSelf: "center"}}>
          <Text>Don't have an account?</Text>
        </Button>
      </Form>
    </Container>
  );
}

const styles = StyleSheet.create({});
