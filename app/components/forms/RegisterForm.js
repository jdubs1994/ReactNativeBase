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
export default function LoginForm() {
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
        <Item inlineLabel>
          <Label>Email:</Label>
          <Input />
        </Item>
        <Item inlineLabel last>
          <Label>Password:</Label>
          <Input />
        </Item>
        <Button full>
          <Text>Register</Text>
        </Button>
        <Button transparent style={{alignSelf: "center"}}>
          <Text>Cancel</Text>
        </Button>
      </Form>
    </Container>
  );
}

const styles = StyleSheet.create({});
