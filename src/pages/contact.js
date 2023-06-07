import { Container, Text } from "@mantine/core";

export default function Contact() {
  return (
    <Container
      size="lg"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Text
        size="xl"
        style={{ marginBottom: "1rem", fontWeight: "bold", color: "#fff" }}
      >
        Contact us Page
      </Text>
      <Text size="sm" style={{ marginBottom: "1rem", color: "#999" }}>
        Note: This page is a work in progress and outside the scope for this
        iteration.
      </Text>
    </Container>
  );
}
