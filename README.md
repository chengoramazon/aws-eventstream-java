# AWS EventStream for Java

The AWS EventStream for Java library provides an implementation of the AWS Event Stream protocol, a binary protocol for efficient and reliable data streaming between distributed applications. This library allows Java applications to encode, decode, and work with AWS Event Stream messages.

## Installation

To use the AWS EventStream for Java library in your Maven project, add the following dependency:

```xml
<dependency>
  <groupId>software.amazon.eventstream</groupId>
  <artifactId>eventstream</artifactId>
  <version>1.0.1</version>
</dependency>
```

## Usage

Here's an example of encoding and decoding an AWS Event Stream message:

```java
// Encode a message
Map<String, HeaderValue> headers = new HashMap<>();
headers.put(":content-type", HeaderValue.fromString("application/json"));
byte[] payload = "{\"foo\":\"bar\"}".getBytes(StandardCharsets.UTF_8);
Message message = new Message(headers, payload);
ByteBuffer buffer = message.toByteBuffer();

// Decode a message
Message decodedMessage = Message.decode(buffer);
```

For more examples and detailed usage instructions, please refer to the [project documentation](https://github.com/awslabs/aws-eventstream-java).

## Contributing

Contributions to the AWS EventStream for Java library are welcome! Please follow the guidelines in the [CONTRIBUTING.md](https://github.com/awslabs/aws-eventstream-java/blob/master/.github/CONTRIBUTING.md) file.

## License

This library is licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0).
