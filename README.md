AWS EventStream for Java

AWS EventStream is an extensible binary datagram encoding used for communication between AWS services. This Java implementation allows you to encode and decode EventStream messages in your Java applications.

## MessageDecoder.java

The MessageDecoder class is a key part of this library. It is responsible for decoding EventStream messages. The `feed` method is used to feed data into the decoder, and the `getDecodedMessages` method is used to retrieve the decoded messages.

## Usage

Here is a simple example of how to use this library:

```java
MessageDecoder decoder = new MessageDecoder();
decoder.feed(data);
List<Message> messages = decoder.getDecodedMessages();
```

## Contributing

We welcome contributions to this project. If you find a bug or have a feature request, please submit an issue. If you would like to contribute code, please submit a pull request. We follow the standard Java coding conventions, so please make sure your code adheres to these standards.

## License

This library is licensed under the Apache 2.0 License.
