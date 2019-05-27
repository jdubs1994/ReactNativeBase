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
        <Item inlineLabel last>
          <Label>Password:</Label>
          <Input />
        </Item>
        <Button full>
          <Text>Primary</Text>
        </Button>
      </Form>
    </Container>
  );
}

const styles = StyleSheet.create({});
