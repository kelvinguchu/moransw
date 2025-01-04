"use client";
import { FC, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Space_Grotesk } from "next/font/google";
import emailjs from "@emailjs/browser";
import { IconMail, IconCheck, IconX } from "@tabler/icons-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const ContactVisual: FC = () => (
  <div className='relative w-full h-full rounded-xl overflow-hidden bg-black border border-white/[0.08]'>
    {/* Premium Gradient Backgrounds */}
    <div className='absolute inset-0'>
      <div className='absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-indigo-500/10' />
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(124,58,237,0.15),transparent_50%)]' />
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(99,102,241,0.15),transparent_50%)]' />
    </div>

    {/* Glow Effects */}
    <div className='absolute inset-0'>
      <div className='absolute -left-40 -top-40 w-80 h-80 bg-violet-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob' />
      <div className='absolute -right-40 -bottom-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000' />
    </div>

    <div className='absolute inset-0'>
      <div className='h-full flex flex-col'>
        {/* Code Editor Header */}
        <div className='flex items-center justify-between px-4 py-2 bg-black/50 border-b border-white/[0.08] backdrop-blur-sm'>
          <div className='flex items-center space-x-4'>
            <div className='flex space-x-2'>
              <div className='w-3 h-3 rounded-full bg-[#FF5F56]'></div>
              <div className='w-3 h-3 rounded-full bg-[#FFBD2E]'></div>
              <div className='w-3 h-3 rounded-full bg-[#27C93F]'></div>
            </div>
            <div className='text-sm text-gray-400 font-mono'>contact.tsx</div>
          </div>
        </div>

        {/* Editor Content */}
        <div className='relative flex-1 p-6 font-mono text-sm'>
          <div className='relative z-10'>
            {/* Contact Information */}
            <div className='mt-2'>
              <span className='text-violet-400'>const</span>{" "}
              <span className='text-indigo-400'>contact</span>{" "}
              <span className='text-white'>=</span>{" "}
              <span className='text-violet-400'>{`{`}</span>
            </div>
            <div className='ml-4'>
              <span className='text-pink-400'>email:</span>{" "}
              <span className='text-emerald-400'>
                &quot;astraquesoftwares@gmail.com&quot;
              </span>
              <span className='text-white'>,</span>
              <br />
              <span className='text-pink-400'>phone1:</span>{" "}
              <span className='text-emerald-400'>
                &quot;+254 792 554525&quot;
              </span>
              <span className='text-white'>,</span>
              <br />
              <span className='text-pink-400'>phone2:</span>{" "}
              <span className='text-emerald-400'>
                &quot;+254 792 194217&quot;
              </span>
            </div>
            <div>
              <span className='text-violet-400'>{`};`}</span>
            </div>

            {/* Let's Connect */}
            <div className='mt-2'>
              <span className='text-violet-400'>const</span>{" "}
              <span className='text-indigo-400'>message</span>{" "}
              <span className='text-white'>=</span>{" "}
              <span className='text-emerald-400'>
                &quot;Send us a message...&quot;
              </span>
              <span className='text-white'>;</span>
            </div>
          </div>

          {/* Glowing dots */}
          <div className='absolute top-1/4 right-12 w-2 h-2 rounded-full bg-violet-500/80 animate-pulse'>
            <div className='absolute inset-0 rounded-full bg-violet-500 blur-sm animate-pulse'></div>
          </div>
          <div className='absolute top-2/4 right-24 w-2 h-2 rounded-full bg-indigo-500/80 animate-pulse delay-150'>
            <div className='absolute inset-0 rounded-full bg-indigo-500 blur-sm animate-pulse delay-150'></div>
          </div>
          <div className='absolute bottom-1/4 right-16 w-2 h-2 rounded-full bg-violet-500/80 animate-pulse delay-300'>
            <div className='absolute inset-0 rounded-full bg-violet-500 blur-sm animate-pulse delay-300'></div>
          </div>
        </div>
      </div>
    </div>

    {/* Premium Gradient Lines */}
    <div className='absolute inset-0 pointer-events-none'>
      <div className='absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent' />
      <div className='absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent' />
      <div className='absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent' />
    </div>

    {/* Vignette Effect */}
    <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50' />
    <div className='absolute inset-0 bg-gradient-to-r from-black via-transparent to-black' />
  </div>
);

const Contact: FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus("loading");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      );
      setStatus("success");
      setMessage("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      setStatus("error");
      setMessage("Failed to send message. Please try again.");
    }

    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 3000);
  };

  return (
    <section
      id='contact'
      className={cn(
        "min-h-screen py-32 relative overflow-hidden flex items-center",
        spaceGrotesk.variable
      )}>
      <div className='w-full'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          {/* Section Header */}
          <div className='text-center mb-16'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='flex flex-col items-center'>
              <div className='inline-block mb-4'>
                <div className='flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm'>
                  <div className='w-1 h-1 rounded-full bg-violet-500'></div>
                  <span className='text-[0.9375rem] font-light tracking-wide text-white/70'>
                    Get in Touch
                  </span>
                  <div className='w-1 h-1 rounded-full bg-indigo-500'></div>
                </div>
              </div>
              <h2 className='text-4xl sm:text-5xl font-semibold text-white/95 mb-4 tracking-tight leading-[1.15]'>
                Contact Us
              </h2>
              <p className='max-w-2xl mx-auto text-base text-gray-400 font-light'>
                Have a project in mind? Let's discuss how we can help bring your
                vision to life.
              </p>
              <div className='mt-6 flex items-center gap-2'>
                <div className='w-8 h-px bg-gradient-to-r from-transparent to-violet-500/50'></div>
                <div className='w-20 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full'></div>
                <div className='w-8 h-px bg-gradient-to-l from-transparent to-indigo-500/50'></div>
              </div>
            </motion.div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch'>
            {/* Visual Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className='relative h-[420px]'>
              <ContactVisual />
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className='relative'>
              <form
                ref={form}
                onSubmit={sendEmail}
                className='space-y-6 relative'>
                {/* Name Input */}
                <div>
                  <label
                    htmlFor='user_name'
                    className='block text-sm font-medium text-white/90 mb-2'>
                    Name
                  </label>
                  <input
                    type='text'
                    name='user_name'
                    id='user_name'
                    required
                    disabled={status === "loading"}
                    className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none text-white/90 placeholder-white/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                    placeholder='Your name'
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor='user_email'
                    className='block text-sm font-medium text-white/90 mb-2'>
                    Email
                  </label>
                  <input
                    type='email'
                    name='user_email'
                    id='user_email'
                    required
                    disabled={status === "loading"}
                    className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none text-white/90 placeholder-white/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                    placeholder='your.email@example.com'
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-white/90 mb-2'>
                    Message
                  </label>
                  <textarea
                    name='message'
                    id='message'
                    required
                    disabled={status === "loading"}
                    rows={4}
                    className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none text-white/90 placeholder-white/30 resize-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                    placeholder='Tell us about your project and include your phone number for faster communication...'
                  />
                </div>

                {/* Submit Button */}
                <HoverBorderGradient
                  as='div'
                  containerClassName='rounded-xl w-full overflow-hidden'
                  className='w-full relative group'
                  duration={1}
                  clockwise>
                  <button
                    type='submit'
                    disabled={status === "loading"}
                    className='w-full flex items-center justify-center space-x-2 py-3 px-4 text-sm font-medium relative bg-black transition-transform duration-200 hover:-translate-y-[2px]'>
                    {status === "loading" ? (
                      <>
                        <div className='w-4 h-4 border-2 border-white/20 border-t-white/90 rounded-full animate-spin' />
                        <span className='text-white/90'>Sending...</span>
                      </>
                    ) : status === "success" ? (
                      <>
                        <IconCheck className='w-4 h-4 text-emerald-500' />
                        <span className='text-emerald-500'>Sent!</span>
                      </>
                    ) : status === "error" ? (
                      <>
                        <IconX className='w-4 h-4 text-red-500' />
                        <span className='text-red-500'>Failed</span>
                      </>
                    ) : (
                      <>
                        <IconMail className='w-4 h-4 text-white/90' />
                        <span className='text-white/90'>Send Message</span>
                      </>
                    )}
                  </button>
                </HoverBorderGradient>

                {/* Status Message */}
                {message && (
                  <div
                    className={cn(
                      "text-sm text-center font-medium",
                      status === "success" ? "text-emerald-500" : "text-red-500"
                    )}>
                    {message}
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
