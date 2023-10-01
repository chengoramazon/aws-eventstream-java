AWS EventStream for Java

# AWS EventStream for Java

This is a Java implementation of EventStream encoding, an extensible binary datagram encoding. The purpose of this project is to provide a robust and efficient way to encode and decode EventStream messages in Java. Some of the key features of this project include support for both synchronous and asynchronous operations, and a flexible API that allows for easy customization and extension.

## Usage

To use this library, you first need to create an instance of the `Message` class:

```java
Message message = new Message();
```

You can then use the `MessageDecoder` class to decode an EventStream message:

```java
MessageDecoder decoder = new MessageDecoder();
Message decodedMessage = decoder.decode(message);
```

Please refer to the `Message.java` and `MessageDecoder.java` files for more detailed examples.

## Contributing

We welcome contributions to this project. If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them to your branch.
4. Submit a pull request with your changes.

Please ensure that your code adheres to our coding standards and that all tests pass before submitting your pull request.

## License

This library is licensed under the Apache 2.0 License. The Apache 2.0 License is a permissive license that allows you to freely use, modify, and distribute the software, subject to certain conditions. For more information, please see the [full license text](LICENSE).
