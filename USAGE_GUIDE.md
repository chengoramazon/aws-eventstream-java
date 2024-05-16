# AWS EventStream for Java - Usage Guide

This guide provides an overview of the key components and usage patterns of the AWS EventStream for Java library.

## Message

The `Message` class represents an individual Event Stream message, consisting of headers and a payload. You can create a `Message` instance by providing a map of headers and a byte array payload:

```java
Map<String, HeaderValue> headers = new HashMap<>();
headers.put(":content-type", HeaderValue.fromString("application/json"));
byte[] payload = "{\"foo\": \"bar\"}".getBytes(UTF_8);

Message message = new Message(headers, payload);
```

You can encode the `Message` into a `ByteBuffer` using the `toByteBuffer()` method, and decode a `ByteBuffer` into a `Message` using the static `decode()` method.

## MessageDecoder

The `MessageDecoder` class is responsible for incrementally decoding incoming Event Stream data and emitting `Message` instances as they are received. You can create a `MessageDecoder` instance and feed it with byte arrays or `ByteBuffer` instances:

```java
MessageDecoder decoder = new MessageDecoder();
decoder.feed(byteArray);

List<Message> messages = decoder.getDecodedMessages();
```

Alternatively, you can provide a custom message consumer to the `MessageDecoder` constructor, and it will invoke the consumer for each decoded message.

## MessageBuilder

The `MessageBuilder` interface allows you to customize the creation of `Message` instances. You can implement a custom `MessageBuilder` and pass it to the `Message` constructor to modify the headers, payload, or other aspects of the message creation process.

## Header and HeaderValue

The `Header` class represents a single header within an Event Stream message, consisting of a name and a `HeaderValue`. The `HeaderValue` class encapsulates the value of a header and supports various data types, such as boolean, integer, string, byte array, and more.

For more advanced usage scenarios and examples, refer to the [API Documentation](link/to/api/docs).

## Testing

The library includes a comprehensive test suite to ensure the correctness and reliability of the implementation. The test cases cover various scenarios, including:

- Encoding and decoding messages with different header and payload combinations
- Handling edge cases, such as empty headers or payloads
- Verifying the correctness of the `MessageDecoder` class under different conditions
- Testing the `MessageBuilder` interface and custom implementations
- Validating the behavior of the `Header` and `HeaderValue` classes

You can run the test suite using your preferred testing framework or build tool.
