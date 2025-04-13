AWS EventStream for Java

# AWS EventStream for Java

The AWS EventStream for Java library provides a robust implementation of the AWS Event Stream protocol, enabling real-time data streaming between applications. This library allows developers to easily work with and integrate Event Stream-based services and applications into their Java projects.

## Key Features

- **Message Encoding/Decoding**: Encode and decode Event Stream messages with support for various header types and payload formats.
- **Incremental Message Decoding**: Incrementally decode incoming Event Stream data and emit `Message` instances using the `MessageDecoder` class.
- **Message Customization**: Customize the creation of `Message` instances through the `MessageBuilder` interface.
- **Header and Value Handling**: Work with headers and header values, including creating, accessing, and manipulating them.

## Installation

Add the library as a dependency to your project using your preferred build tool (e.g., Maven, Gradle).

## Usage

```java
// Create a message with headers and payload
Map<String, HeaderValue> headers = new HashMap<>();
headers.put(":content-type", HeaderValue.fromString("application/json"));
byte[] payload = "{\"foo\": \"bar\"}".getBytes(UTF_8);
Message message = new Message(headers, payload);

// Encode the message to a ByteBuffer
ByteBuffer encoded = message.toByteBuffer();

// Decode the message from the encoded ByteBuffer
Message decoded = Message.decode(encoded);
```

For more advanced usage scenarios and examples, refer to the [Usage Guide](USAGE_GUIDE.md) and the [API Documentation](link/to/api/docs).

## Contributing

Contributions to the AWS EventStream for Java library are welcome! Please follow the guidelines in the [Contributing Guide](CONTRIBUTING.md) for submitting issues, pull requests, and code contributions.

## License

This library is licensed under the Apache 2.0 License. 
