"use client"

import Link from "next/link"
import { ExternalLink } from "lucide-react"

type Cert = {
  title: string
  issuer: string
  year: string
  url?: string
  credentialId?: string
  highlights: string[]
}

export function CertificationsMinimal() {
  const certs: Cert[] = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2024",
      url: "https://aws.amazon.com/verification/",
      highlights: [
        "Core AWS services (EC2, S3, VPC, IAM, Lambda)",
        "Cloud architecture best practices and shared responsibility model",
        "Basic pricing, billing, and cost optimization strategies",
        "Security fundamentals and compliance overview",
      ],
    },
    {
      title: "LeetCode 300+ Problems Solved",
      issuer: "LeetCode",
      year: "Ongoing (2023–Present)",
      url: "https://leetcode.com/u/kaustavofficial09/",
      highlights: [
        "Strong proficiency in Graphs, Dynamic Programming, and Sliding Window techniques",
        "Consistent problem-solving across Easy, Medium, and Hard difficulties",
        "Focus on optimal time/space complexity and clean, readable solutions",
        "Active participation in contests and daily challenges",
      ],
    },
  ]

  return (
    <section
      id="certifications"
      aria-labelledby="certs-title"
      className="mx-auto w-full max-w-5xl px-4 md:px-10 py-16 md:py-20 text-left"
    >
      <header className="mb-8">
        <h2 id="certs-title" className="text-balance text-2xl md:text-5xl font-light tracking-tight text-foreground">
          Certifications & Achievements
        </h2>
        <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
          Professional certifications and competitive programming milestones that reinforce algorithmic and systems thinking.
        </p>
      </header>

      <div className="space-y-12">
        {certs.map((c, i) => (
          <article key={i} className="group">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <h3 className="text-pretty text-lg md:text-xl font-medium text-foreground">
                  {c.url ? (
                    <Link
                      href={c.url}
                      className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline focus:outline-none focus:underline-offset-4"
                    >
                      {c.title}
                      <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ) : (
                    c.title
                  )}
                </h3>
                <p className="mt-1 text-sm md:text-base text-muted-foreground">
                  {c.issuer} · {c.year}
                  {c.credentialId && (
                    <>
                      {" · "}
                      <span className="font-mono text-xs">{c.credentialId}</span>
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* Key Learnings / Highlights */}
            <ul className="mt-4 space-y-2 text-sm md:text-base text-muted-foreground list-disc list-inside ml-4">
              {c.highlights.map((highlight, idx) => (
                <li key={idx} className="leading-relaxed">
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}