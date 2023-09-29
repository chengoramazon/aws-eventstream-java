# AWS EventStream for Java

This is a Java implementation of EventStream encoding, an extensible binary datagram encoding.

## About

AWS EventStream for Java is designed to provide a simple and efficient way to handle EventStream encoding in Java. The project aims to offer a robust solution for applications that require EventStream encoding.

## Implementation Details

The project mainly consists of three classes:

- `Message.java`: This class represents a single EventStream message.
- `MessageDecoder.java`: This class is responsible for decoding EventStream messages.
- `Prelude.java`: This class handles the prelude section of an EventStream message.

## Usage

Here is a comprehensive usage example:

```java
import software.amazon.eventstream.*;

// Step 1: Create a Message object
Map<String, HeaderValue> headers = new HashMap<>();
headers.put("headerKey", HeaderValue.fromString("headerValue"));
byte[] payload = "payload".getBytes(StandardCharsets.UTF_8);
Message message = new Message(headers, payload);

// Step 2: Encode the Message to a ByteBuffer
ByteBuffer encodedMessage = message.toByteBuffer();

// Step 3: Create a MessageDecoder object
MessageDecoder decoder = new MessageDecoder();

// Step 4: Feed the encoded message to the decoder
decoder.feed(encodedMessage.array());

// Step 5: Retrieve the decoded messages
List<Message> decodedMessages = decoder.getDecodedMessages();

// Step 6: Handle the prelude section of the Message
// The prelude section is handled internally by the Message and MessageDecoder classes.
// You can access the total length and headers length of the message through the Message object.
int totalLength = decodedMessages.get(0).getTotalLength();
long headersLength = decodedMessages.get(0).getHeadersLength();
```
```

## Prerequisites

Before you start using AWS EventStream for Java, make sure you have the following prerequisites:

- Java 8 or later
- Maven

## Contributing

We welcome contributions! Please see our [contributing guidelines](CONTRIBUTING.md) for more details.

## License

This library is licensed under the Apache 2.0 License.
