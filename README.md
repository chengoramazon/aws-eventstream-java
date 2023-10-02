# AWS EventStream for Java

AWS EventStream for Java is a Java implementation of EventStream encoding. It provides an extensible binary datagram encoding that is used for communication between AWS services.

## Usage

To use this library, you need to create an instance of `MessageDecoder` and `Message`. Here is an example:

```java
MessageDecoder decoder = new MessageDecoder();
Message message = decoder.decode(inputStream);
```

You can also create a message using the `Message` class:

```java
Message message = new Message(headers, payload);
```

## Contribution

We welcome contributions from the community. If you would like to contribute, please follow these steps:

1. Fork the repository
2. Create a new branch for your changes
3. Make your changes in the new branch
4. Submit a pull request

## License

This library is licensed under the Apache 2.0 License. For more details, please see the [LICENSE](LICENSE) file. The copyright notice can be found in the [NOTICE](NOTICE) file.
