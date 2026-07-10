"use client";

import { motion } from "framer-motion";
import { Calendar, Building2, Briefcase, Star, ArrowUpRight, Link2 } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardFade = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

type TestimonialsSectionProps = {
  items: Testimonial[];
  upworkUrl: string;
  linkedinUrl: string;
};

function RatingStars({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  return (
    <div className="inline-flex items-center gap-1 text-accent">
      {Array.from({ length: 5 }).map((_, index) => {
        const filled = index < fullStars || (index === fullStars && hasHalf);
        return (
          <Star
            key={index}
            className={`h-3.5 w-3.5 ${filled ? "fill-current" : "opacity-30"}`}
          />
        );
      })}
      <span className="ml-1 text-xs font-semibold text-white">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function TestimonialsSection({
  items,
  upworkUrl,
  linkedinUrl,
}: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="border-y border-line bg-panel/60">
      <div className="section">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fade}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="badge">Testimonials</span>
          <h2 className="mt-5 font-display font-semibold heading-section">
            What clients and collaborators say
          </h2>
          <p className="mt-4 text-base leading-7 text-mute">
            Premium feedback from Upwork clients and LinkedIn recommendations.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item) => (
            <motion.article
              key={item.id}
              variants={cardFade}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col rounded-2xl border border-line bg-ink p-7"
            >
              <div className="flex flex-wrap items-center gap-2">
                {item.source && (
                  <span
                    className={`rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${
                      item.source === "Upwork"
                        ? "bg-accent/15 text-accent"
                        : "bg-brand/20 text-brandSoft"
                    }`}
                  >
                    {item.source}
                  </span>
                )}
                {typeof item.rating === "number" && <RatingStars rating={item.rating} />}
              </div>

              {item.projectTitle && (
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-brandSoft">
                  {item.projectTitle}
                </p>
              )}

              <h3 className="mt-3 font-display text-lg font-semibold leading-snug">
                {item.clientName}
              </h3>

              <div className="mt-2 space-y-2 text-sm leading-6 text-mute">
                {item.position && (
                  <p className="flex items-start gap-3">
                    <Briefcase className="mt-1 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>{item.position}</span>
                  </p>
                )}
                {item.company && (
                  <p className="flex items-start gap-3">
                    <Building2 className="mt-1 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>{item.company}</span>
                  </p>
                )}
                {item.date && (
                  <p className="flex items-center gap-3 text-xs">
                    <Calendar className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    <span>{item.date}</span>
                  </p>
                )}
              </div>

              <p className="mt-5 flex-1 text-sm italic leading-7 text-mute">
                &ldquo;{item.comment}&rdquo;
              </p>

              {item.tags && item.tags.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line bg-panel px-3 py-1 text-xs font-medium text-mute"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {item.linkedinUrl && (
                <a
                  href={item.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brandSoft transition hover:text-white"
                >
                  <Link2 className="h-4 w-4" />
                  LinkedIn profile
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
          <a
            href={upworkUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brandSoft transition hover:text-white"
          >
            More on Upwork <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brandSoft transition hover:text-white"
          >
            LinkedIn recommendations <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
