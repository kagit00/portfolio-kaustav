"use client"

import Link from "next/link"
import { ExternalLink, Mail, Phone, MapPin } from "lucide-react"

export function ResumeSection() {
  return (
    <section id="resume" className="mx-auto max-w-5xl px-10 py-14 md:py-20 text-left">
      <header className="mb-6 md:mb-10">
        <h2 className="text-3xl font-light tracking-tight md:text-5xl">Resume</h2>
        <p className="mt-2 text-muted-foreground">
          Snapshot of experience, projects, and impact. Full PDF available on request.
        </p>
      </header>

      <div className="rounded-2xl border border-border p-6 md:p-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Left column: contact, links, skills */}
          <aside className="space-y-6 md:col-span-1">
            {/* Contact & Header Info */}
            <div>
              <h3 className="text-2xl md:text-3xl font-light mb-4">Kaustav Manna</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:kaustavofficial09@gmail.com">kaustavofficial09@gmail.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +91 77183 89537
                </li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="https://github.com/kagit00" className="flex items-center gap-2 underline underline-offset-4 hover:text-primary">
                    <ExternalLink className="w-3 h-3" />
                    github.com/kagit00
                  </Link>
                </li>
                <li>
                  <Link href="https://portfolio-kaustav-three.vercel.app/" className="flex items-center gap-2 underline underline-offset-4 hover:text-primary">
                    <ExternalLink className="w-3 h-3" />
                    portfolio.kaustav.manna
                  </Link>
                </li>
                <li>
                  <Link href="https://leetcode.com/u/kaustavofficial09/" className="flex items-center gap-2 underline underline-offset-4 hover:text-primary">
                    <ExternalLink className="w-3 h-3" />
                    leetcode.com/u/kaustavofficial09
                  </Link>
                </li>
              </ul>
            </div>

            {/* Skills Split Columns */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 md:col-span-1">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Technical Skills</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><strong>Stack:</strong> Java 11/17, Spring Boot, MyBatis, Hazelcast</li>
                  <li><strong>Data:</strong> Kafka, Redis, PostgreSQL, Oracle, Parquet, LMDB</li>
                  <li><strong>Infra:</strong> Docker, GitLab CI/CD, System Design, Concurrency</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Engineering Focus</h3>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                  <li>Fault-tolerant backend systems</li>
                  <li>High-throughput processing</li>
                  <li>Distributed systems reasoning</li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Right column: summary, experience, education, etc. */}
          <div className="md:col-span-2 space-y-10">
            {/* Summary */}
            <section>
              <h3 className="text-base font-semibold tracking-tight mb-3">Summary</h3>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                Backend Engineer specializing in high-performance architecture and data-intensive systems. Proven ability to architect scalable backend systems and offline pipelines, including a matching engine handling millions of operations using Java 17, Kafka, and Parquet. Experienced in optimizing financial APIs for latency and translating complex, ambiguous requirements into production-grade solutions.
              </p>
            </section>

            {/* Experience */}
            <section>
              <h3 className="text-base font-semibold tracking-tight mb-4">Experience</h3>
              <div className="space-y-10">
                {/* Independent Role */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                    <p className="font-medium">Backend Engineer (Systems) | Full-Time</p>
                    <p className="text-sm text-muted-foreground">Mar 2024 – Present | Remote</p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Dedicated full-time work on designing, benchmarking, and validating production-grade backend systems for large-scale data matching.
                  </p>

                  {/* Projects under Independent */}
                  <div className="space-y-6 ml-4">
                    {/* ScheduleX */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                        <h4 className="font-semibold">ScheduleX — Graph-Based Matching Engine</h4>
                        <Link
                          href="https://tinyurl.com/ss9jzyce"
                          className="text-xs underline underline-offset-2 hover:text-primary flex items-center gap-1"
                        >
                          <ExternalLink className="w-3 h-3" />
                          System Design & Implementation
                        </Link>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Engineered a multi-stage matching pipeline generating <strong>7M+</strong> per cycle matches for <strong>20k+</strong> entities.</li>
                        <li>Leveraged <strong>LSH</strong> and <strong>LMDB</strong> streaming to eliminate <strong>O(n²)</strong> complexity and enable memory-efficient <strong>Top-K Weighted Greedy</strong> refinement.</li>
                        <li>Designed support for both <strong>symmetric</strong> and <strong>bipartite</strong> matching models within the same matching pipeline.</li>
                      </ul>
                      <p className="text-xs italic text-muted-foreground mt-2">
                        <strong>Tech Stack:</strong> Java 17, Spring Boot, Kafka, Redis, Docker, PostgreSQL, Parquet
                      </p>
                    </div>

                    {/* FlairBit */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                        <h4 className="font-semibold">FlairBit — A Reels First Dating Platform</h4>
                        <Link
                          href="https://tinyurl.com/ss9jzyce"
                          className="text-xs underline underline-offset-2 hover:text-primary flex items-center gap-1"
                        >
                          <ExternalLink className="w-3 h-3" />
                          System Design & Implementation
                        </Link>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Built FlairBit as a consumer-facing platform on top of the <strong>ScheduleX</strong> matching engine, separating real-time UX workflows from batch and graph-heavy matching computation.</li>
                        <li>Implemented a <strong>progressive profiling workflow</strong> for multi-persona user journeys and personalized media feeds, achieving <strong>~40% latency reduction</strong> via tiered caching.</li>
                        <li>Designed an <strong>event-driven architecture</strong> for profile synchronization, match delivery, and secure passwordless authentication, using retries, rate limiting, fraud prevention, and the Outbox Pattern to ensure reliable, at-least-once message delivery under load.</li>
                      </ul>
                      <p className="text-xs italic text-muted-foreground mt-2">
                        <strong>Tech Stack:</strong> Java 17, Spring Boot, Kafka, MinIO, Redis, Docker, PostgreSQL, Parquet
                      </p>
                    </div>
                  </div>
                </div>

                {/* TechBulls Role */}
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                    <p className="font-medium">Software Developer | Full-Time</p>
                    <p className="text-sm text-muted-foreground">Jun 2022 – Dec 2023 | Pune (Hybrid)</p>
                  </div>
                  <p className="text-sm font-semibold text-primary/90 mb-3">TechBulls SoftTech Pvt. Ltd</p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>Built and evolved standards-compliant financial APIs aligned with RBI Account Aggregator and FCC Sanctions Screening specifications, contributing to <strong>20% faster feature delivery</strong> by enabling product teams to iterate safely within sprint-based GitLab workflows.</li>
                    <li>Owned backend improvements across FIU APIs and sanctions screening pipelines, driving <strong>15–25% performance gains</strong> through profiling, validation, and iterative optimization of distributed components.</li>
                    <li>Worked closely with QA, DevOps, and dependent teams to define API contracts, error handling, and validation rules, reducing release friction and improving production stability through structured defect tracking and fix validation.</li>
                    <li>Documented requirement changes, technical decisions, and system tradeoffs in tickets and lightweight design notes, supporting predictable delivery under evolving regulatory and operational constraints.</li>
                  </ul>
                  <p className="text-xs italic text-muted-foreground mt-3">
                    <strong>Tech Stack:</strong> Java 8, Spring Framework, Redis, AngularJS, PostgreSQL, Oracle, Highcharts, Hazelcast, SQL, HTML, CSS, LESS, JSON, MyBatis, Liquibase
                  </p>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-base font-semibold tracking-tight mb-3">Education</h3>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <p className="font-medium">Master of Computer Applications (MCA)</p>
                <p className="text-sm text-muted-foreground">2019 – 2022</p>
              </div>
              <p className="text-sm text-muted-foreground">KIIT University, Bhubaneswar</p>
              <p className="text-sm text-muted-foreground mt-1">
                CGPA: 8.34/10 | Relevant coursework: Distributed Systems, Algorithms, DBMS
              </p>
            </section>

            {/* Certifications */}
            <section>
              <h3 className="text-base font-semibold tracking-tight mb-3">Certifications & Achievements</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>
                  LeetCode 300+ (Graphs, DP, Sliding Window) —{" "}
                  <Link href="https://leetcode.com/u/kaustavofficial09/" className="underline underline-offset-2 hover:text-primary">
                    kaustav.manna/leetcode
                  </Link>
                </li>
              </ul>
            </section>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="https://drive.google.com/file/d/1Us-IxLrzi8hZvvkYcmDPQmKAVHySLTV9/view?usp=sharing" 
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}