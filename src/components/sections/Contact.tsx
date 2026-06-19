"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { personalInfo } from "@/lib/data";

const contactLinks = [
  {
    label: "Email",
    value: "tejaskalal2002@gmail.com",
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/tejaskalal/",
    href: personalInfo.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "https://github.com/tejaskalal",
    href: personalInfo.github,
    icon: Github,
  },
  {
    label: "Location",
    value: "Maharashtra, India",
    href: null,
    icon: MapPin,
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!form.name || !form.email || !form.message) return;

  setLoading(true);

  try {
    const response = await fetch(
      // "https://api.web3forms.com/submit",
      "https://formspree.io/f/mjgdnbpz",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject || "New Portfolio Enquiry",
          message: form.message,
        }),
      }
    );

    const result = await response.json();

    if (result.ok) {
      setSent(true);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSent(false), 4000);
    } else {
      alert("Failed to send message. Please try again.");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};
  return (
    <section id="contact" className="section-padding bg-[#050709] px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="// get in touch"
          title="Let's Work Together"
          description="Open to full-time roles, freelance projects, and DevOps/cloud consulting. Let's build something great."
        />

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 mt-12 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            {contactLinks.map(({ label, value, href, icon: Icon }) => {
              const inner = (
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[rgba(79,142,247,0.08)] rounded-lg text-[#4f8ef7]">
                    <Icon size={17} />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[#4a5568] mb-0.5">
                      {label}
                    </div>
                    <div className="text-sm text-[#e8edf5]">{value}</div>
                  </div>
                </div>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block p-4 bg-[#0a0d14] border border-[rgba(79,142,247,0.12)] rounded-xl hover:border-[rgba(79,142,247,0.35)] hover:translate-x-1 transition-all duration-200"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={label}
                  className="p-4 bg-[#0a0d14] border border-[rgba(79,142,247,0.12)] rounded-xl"
                >
                  {inner}
                </div>
              );
            })}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {[
              { name: "name", label: "Name", type: "text", placeholder: "Your name" },
              { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
              { name: "subject", label: "Subject", type: "text", placeholder: "Project inquiry / Job opportunity" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block font-mono text-[10px] uppercase tracking-widest text-[#4a5568] mb-1.5">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name as keyof typeof form]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required={field.name !== "subject"}
                  className="w-full px-4 py-3 bg-[#0a0d14] border border-[rgba(79,142,247,0.15)] rounded-lg text-[#e8edf5] text-sm placeholder:text-[#4a5568] outline-none focus:border-[#4f8ef7] transition-colors font-sans"
                />
              </div>
            ))}

            <div>
              <label className="block font-mono text-[10px] uppercase tracking-widest text-[#4a5568] mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                required
                rows={5}
                className="w-full px-4 py-3 bg-[#0a0d14] border border-[rgba(79,142,247,0.15)] rounded-lg text-[#e8edf5] text-sm placeholder:text-[#4a5568] outline-none focus:border-[#4f8ef7] transition-colors resize-y font-sans"
              />
            </div>

            <button
              type="submit"
              disabled={loading || sent}
              className="w-full flex items-center justify-center gap-2 py-3.5 font-mono text-sm font-bold tracking-widest uppercase rounded-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: sent ? "#06d6a0" : "#4f8ef7",
                color: "#050709",
              }}
            >
              {sent ? (
                <>
                  <CheckCircle2 size={16} />
                  Message Sent!
                </>
              ) : loading ? (
                "Sending..."
              ) : (
                <>
                  <Send size={15} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
