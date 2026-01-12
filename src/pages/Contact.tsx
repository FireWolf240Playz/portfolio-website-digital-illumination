// src/pages/Contact.tsx
import React, { useEffect, useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //todo: make it work and send the message
    console.log('Form Data:', formData);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-cinema-black px-6 pb-20 pt-32 text-white md:px-20 md:pt-40">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-32">
        {/* --- LEFT COLUMN: INFO --- */}
        <div>
          <h1 className="mb-8 font-heading text-5xl uppercase leading-none md:text-7xl">
            Let's Start <br /> <span className="text-red-600">A Project</span>
          </h1>

          <p className="mb-12 max-w-md text-lg font-light leading-relaxed text-gray-400">
            Have a vision in mind? Whether it's a commercial, a music video, or
            a 3D animation, we are ready to architect the light for your story.
          </p>

          <div className="space-y-8">
            <div>
              <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-red-600">
                Call Us
              </span>
              <a
                href="tel:+359888123456"
                className="font-heading text-3xl transition-colors hover:text-gray-300 md:text-4xl"
              >
                +359 888 123 456
              </a>
            </div>

            <div>
              <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-red-600">
                Email
              </span>
              <a
                href="mailto:hello@digitalillumination.com"
                className="font-sans text-xl transition-colors hover:text-gray-300"
              >
                hello@digitalillumination.com
              </a>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: FORM --- */}
        <div>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="mt-4 space-y-10 md:mt-0">
              {/* Name Input */}
              <div className="group">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b border-white/20 bg-transparent py-4 text-xl text-white placeholder-gray-600 transition-colors duration-300 focus:border-red-600 focus:outline-none"
                />
              </div>

              {/* Email Input */}
              <div className="group">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-white/20 bg-transparent py-4 text-xl text-white placeholder-gray-600 transition-colors duration-300 focus:border-red-600 focus:outline-none"
                />
              </div>

              {/* Message Input */}
              <div className="group">
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your idea..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none border-b border-white/20 bg-transparent py-4 text-xl text-white placeholder-gray-600 transition-colors duration-300 focus:border-red-600 focus:outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-8 rounded-full border border-white/20 px-10 py-4 font-bold uppercase tracking-widest transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white"
              >
                Send Message
              </button>
            </form>
          ) : (
            // SUCCESS MESSAGE STATE
            <div className="animate-fade-in flex h-full flex-col items-start justify-center">
              <h3 className="mb-4 font-heading text-4xl text-white">
                Message Sent.
              </h3>
              <p className="text-lg text-gray-400">
                Thank you for reaching out. We will get back to you within 24
                hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-sm font-bold uppercase tracking-widest text-red-600 transition-colors hover:text-white"
              >
                Send another message
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
