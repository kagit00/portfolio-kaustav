import type { ProjectDatabase } from "@/types/project";

export const projectDatabase: ProjectDatabase = {
  ScheduleX: {
      title: "ScheduleX",
      tagline: "High-volume distributed graph based matching pipeline for large-scale resource/entity pairing with extreme throughput and reliability.",

      role: "Sole backend architect and implementer",

      problemStatement: "Built to solve large-scale entity matching problems (dating, jobs, logistics, marketplaces) without real-time compute explosion or O(n²) similarity scans.",

      metrics: [
          { value: "3M+", label: "edges generated/hour" },
          { value: "100k+", label: "Nodes expanded into match graph" },
          { value: "99.99%", label: "Processing Reliability" },
          { value: "4-Stage", label: "Pipeline Architecture" },
      ],

      overview: "A scalable, fault-tolerant matching engine that ingests raw entity data, computes potential compatibility using LSH and metadata strategies, refines matches using Top-K pruning and business rules, and delivers deterministic match results to downstream systems. Designed for multi-tenancy with strict domain and group isolation.",

      architecture: "Four-stage pipeline: Nodes Import (bulk load via PostgreSQL COPY from S3/Kafka) → Potential Matches (LSH computation with candidate edges stored in LMDB for fast streaming) → Perfect Match Selection (Top-K weighted greedy refinement with business constraints) → Match Transfer (JDBC streaming to Parquet/JSON export with Kafka notification). PostgreSQL acts as the source of truth, while LMDB is used as a regenerable high-performance edge store.",

      designHighlights: [
          "Used LSH-based candidate generation to avoid O(n²) similarity computation at scale.",
          "Chose LMDB over Redis for regenerable edge storage to reduce memory footprint and infra cost.",
          "Implemented cursor-based streaming from LMDB to prevent JVM heap pressure while exporting millions of edges.",
          "Applied bounded queues and backpressure-aware producer–consumer patterns during match export.",
          "Designed idempotent batch jobs with partial failure recovery using reference-based imports.",
      ],

      keyChallenges: [
          "Efficient large-scale similarity computation without quadratic blow-up.",
          "Streaming millions of edges without loading the full graph into JVM memory.",
          "Ensuring exactly-once delivery semantics for exported matches.",
          "Handling partial failures and restarts in long-running batch jobs.",
          "Maintaining isolation and fairness across multiple tenants and domains.",
      ],

      stack: [
          "Java",
          "Spring Boot",
          "Postgre",
          "Kafka",
          "LMDB",
          "MinIO",
          "Parquet/GZIP Export",
          "Resilience4j",
          "LSH / Graph Algorithms",
      ],

      links: {
          demo: "https://github.com/kagit00/schedule_x",
          docs: "https://github.com/kagit00/schedule_x/tree/master/docs",
          github: "https://github.com/kagit00/schedule_x/tree/master",
      },
      year: 2025,
    category: "Backend",
    description: ""
  },
  FlairBit: {
  title: "FlairBit",
  tagline:
    "Real-world dating application built on top of ScheduleX, showcasing large-scale matching, profile discovery, and real-time user interaction.",

  role: "Backend architect & core platform engineer",

  problemStatement:
    "Built to validate ScheduleX in a real consumer-facing environment, handling user profiles, preferences, discovery feeds, and match consumption without embedding matching logic inside the application layer.",

  metrics: [
    { value: "ScheduleX", label: "Matching engine integration" },
    { value: "LSH-based", label: "Discovery candidate sourcing" },
    { value: "Real-time", label: "User interaction layer" },
    { value: "Graph-backed", label: "Match consumption model" },
  ],

  overview:
    "Flarebit is a consumer dating application that acts as a client of the ScheduleX matching engine. The application focuses on user experience, profile discovery, and interaction workflows, while all heavy matching computation is delegated to ScheduleX. This separation allows Flarebit to scale user-facing features independently of batch and graph processing workloads.",

  architecture:
    "Client-facing services handle authentication, profiles, preferences, and interaction events. Potential matches are fetched from ScheduleX as precomputed graph edges, enabling fast feed generation without on-demand similarity computation. Real-time actions such as likes and chats are handled asynchronously and persisted independently from the matching pipeline.",

  designHighlights: [
    "Decoupled consumer application from matching computation using ScheduleX as a dedicated engine.",
    "Avoided real-time similarity computation by consuming precomputed match edges.",
    "Designed discovery feeds around graph traversal rather than dynamic scoring.",
    "Enabled independent scaling of user-facing APIs and batch matching workloads.",
  ],

  keyChallenges: [
    "Integrating batch-generated matches into a real-time consumer experience.",
    "Maintaining responsiveness without embedding heavy computation in request paths.",
    "Designing clean boundaries between product logic and matching infrastructure.",
  ],

  stack: [
    "Java",
    "Postgre",
    "ScheduleX",
    "Kafka",
    "Redis",
    "REST APIs",
  ],

  links: {
    github: "https://github.com/kagit00/flarebit",
  },

  year: 2025,
  category: "Backend",
  description: "",
},

Chats: {
  title: "Chats",
  tagline:
    "Distributed chat system designed for real-time messaging with reliable delivery, ordering, and horizontal scalability.",

  role: "Backend engineer & system designer",

  problemStatement:
    "Built to support real-time one-to-one messaging for Flarebit users, ensuring message durability, ordering, and scalable fanout without relying on tightly coupled synchronous APIs.",

  metrics: [
    { value: "Storm Relay", label: "WebSocket relay layer" },
    { value: "RabbitMQ", label: "Message broker backbone" },
    { value: "Async", label: "End-to-end message delivery" },
    { value: "Distributed", label: "Chat processing model" },
  ],

  overview:
    "A distributed chat system designed as a modular backend rather than fine-grained microservices. The system separates connection management, message routing, persistence, and delivery acknowledgements while remaining operationally simple. It is tightly integrated with Flarebit but independently scalable.",

  architecture:
    "Storm Relay handles persistent WebSocket connections and client fanout. Messages are published asynchronously to RabbitMQ, which acts as the backbone for message routing, delivery retries, and ordering guarantees. Backend workers consume messages for persistence, delivery acknowledgements, and offline handling, enabling loose coupling between real-time and durable components.",

  designHighlights: [
    "Used Storm Relay for efficient WebSocket fanout and connection management.",
    "Decoupled real-time message delivery from persistence using RabbitMQ.",
    "Designed asynchronous delivery pipelines to avoid blocking user-facing connections.",
    "Kept a modular monolith structure to reduce operational overhead while remaining distributed.",
  ],

  keyChallenges: [
    "Ensuring message ordering across distributed consumers.",
    "Handling offline users and delayed delivery without data loss.",
    "Balancing real-time responsiveness with durable message persistence.",
  ],

  stack: [
    "Java",
    "RabbitMQ",
    "Postgre",
    "WebSockets",
    "Redis",
  ],

  links: {
    github: "https://github.com/kagit00/chat-microservice",
  },

  year: 2025,
  category: "Distributed",
  description: "",
},


  "AI Resume Builder": {
    title: "AI Resume Builder",
    tagline:
      "AI-powered SaaS platform for generating job-specific resumes using modern LLM workflows.",

    role: "Full-stack developer (solo)",

    problemStatement:
      "Built to help job seekers tailor resumes to specific job descriptions automatically, reducing manual effort and improving interview shortlisting rates.",

    metrics: [
      { value: "50K+", label: "Users" },
      { value: "98%", label: "User Satisfaction" },
      { value: "Next.js", label: "Frontend" },
      { value: "Python", label: "Backend" },
    ],

    overview:
      "A SaaS platform that analyzes job descriptions and generates optimized resumes using LLM-based content generation, exposed through a clean and responsive web interface.",

    architecture:
      "Service-oriented architecture with a Next.js frontend, FastAPI-based backend for LLM orchestration, Redis for caching repeated prompts, and PostgreSQL for persistent user and document data. Deployed via Docker with CI/CD automation.",

    designHighlights: [
      "Separated LLM orchestration logic from API layer to allow future model swapping.",
      "Used Redis caching to reduce redundant LLM calls and control inference cost.",
      "Designed prompt templates to ensure deterministic and structured resume output.",
    ],

    keyChallenges: [
      "Managing LLM latency and cost under concurrent user load.",
      "Ensuring consistent output quality across diverse job descriptions.",
      "Securing user-uploaded resume data.",
    ],

    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Postgre",
      "Redis",
      "LLMs",
      "Docker",
    ],

    links: {
      github: "https://github.com/your-repo/ai-resume-builder",
    },
    year: 2024,
    category: "Full-Stack",
    description: ""
  },
};
