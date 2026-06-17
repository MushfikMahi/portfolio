"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { type FormEvent, useState } from "react";
import { profile, socialLinks } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative bg-onyx/40 py-28 sm:py-36">
      <div className="container-luxe">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow="Let's Connect"
              title="Have a project in mind? Let's build something exceptional."
              description="Whether you're a founder looking for a technical partner, or a company exploring a collaboration — I'd love to hear about it."
            />

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-6">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest2 text-smoke">
                    Email
                  </p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="mt-2 inline-flex items-center gap-2 font-display text-2xl text-ivory transition-colors hover:text-gold"
                  >
                    {profile.email}
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest2 text-smoke">
                    Phone
                  </p>
                  <a
                    href={`tel:${profile.phone}`}
                    className="mt-2 inline-flex items-center gap-2 font-display text-xl text-ivory transition-colors hover:text-gold"
                  >
                    {profile.phone}
                  </a>
                </div>

                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest2 text-smoke">
                    Based in
                  </p>
                  <p className="mt-2 font-display text-xl text-ivory">{profile.location}</p>
                </div>

                <div>
                  <p className="mb-3 font-mono text-[11px] uppercase tracking-widest2 text-smoke">
                    Elsewhere
                  </p>
                  <div className="flex gap-4">
                    {socialLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                          aria-label={link.label}
                          className="flex h-11 w-11 items-center justify-center border border-gold/20 text-smoke transition-all duration-300 ease-luxe hover:border-gold hover:text-gold"
                        >
                          <Icon size={18} strokeWidth={1.5} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.15}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <Field
                label="Your Name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
              />
              <Field
                label="Email Address"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <Field
                label="Message"
                name="message"
                as="textarea"
                value={form.message}
                onChange={handleChange}
                required
              />

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileTap={{ scale: 0.98 }}
                className="shimmer-sweep mt-2 inline-flex items-center justify-center gap-2 bg-gold-gradient px-8 py-4 font-mono text-[11px] uppercase tracking-widest2 text-obsidian transition-opacity duration-300 disabled:opacity-60"
              >
                {status === "loading" && <Loader2 size={14} className="animate-spin" />}
                {status === "loading" ? "Sending..." : "Send Message"}
              </motion.button>

              {status === "success" && (
                <p className="font-mono text-[11px] uppercase tracking-widest2 text-gold">
                  Message sent — I&rsquo;ll be in touch shortly.
                </p>
              )}
              {status === "error" && (
                <p className="font-mono text-[11px] uppercase tracking-widest2 text-red-400/80">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  as?: "input" | "textarea";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
}

function Field({ label, name, type = "text", as = "input", value, onChange, required }: FieldProps) {
  const sharedClasses =
    "w-full border-b border-gold/20 bg-transparent pb-3 text-lg text-ivory outline-none transition-colors duration-300 placeholder:text-smoke/40 focus:border-gold";

  return (
    <label className="flex flex-col gap-3">
      <span className="font-mono text-[11px] uppercase tracking-widest2 text-smoke">{label}</span>
      {as === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          rows={4}
          className={`${sharedClasses} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={sharedClasses}
        />
      )}
    </label>
  );
}
