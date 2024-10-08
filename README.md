# Indexing Millions of Wikipedia Articles With Upstash Vector

This repository contains the code and documentation for our project on indexing millions of Wikipedia articles using Upstash Vector, as described in our [blog post](https://upstash.com/blog/indexing-wikipedia).

## Project Overview

We've created a semantic search engine and [Upstash RAG Chat SDK](https://github.com/upstash/rag-chat) using Wikipedia data to demonstrate the capabilities of Upstash Vector and RAG Chat SDK. The project involves:

1. Preparing and embedding Wikipedia articles
2. Indexing the vectors using Upstash Vector
3. Building a Wikipedia semantic search engine
4. Implementing a RAG chatbot

## Key Features

- Indexed over 144 million vectors from Wikipedia articles in 11 languages
- Used BGE-M3 embedding model for multilingual support
- Implemented semantic search with cross-lingual capabilities
- Created a RAG chatbot using Upstash RAG Chat SDK

## Technologies Used

- [Upstash Vector](https://upstash.com/docs/vector/overall/getstarted): For storing and querying vector embeddings
- [Upstash Redis](https://upstash.com/redis): For storing chat sessions
- [Upstash RAG Chat SDK](https://github.com/upstash/rag-chat): For building the RAG Chat application
- [SentenceTransformers](https://www.sbert.net/): For generating embeddings
- [Meta-Llama-3-8B-Instruct](https://ai.meta.com/blog/llama-3-available/): As the LLM provider through [QStash LLM APIs](https://upstash.com/docs/qstash/features/llm)

## Contributing

We welcome contributions to improve this project. Please feel free to submit issues or pull requests.

## Acknowledgements

- Wikipedia for providing the dataset
- Upstash for their vector database and RAG Chat SDK
- All contributors to the open-source libraries used in this project

## Contact

For any questions or feedback about the project or Upstash Vector, please reach out to us at (add contact information).

Check out our [live demo](https://wikipedia-semantic-search.vercel.app/) to see the project in action!
