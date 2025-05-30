"use client";

import BlurFade from "@/app/magicui/ui/blur-fade";
import { FormEvent, useState } from "react";
import { AiOutlineUser, AiOutlineMail, AiOutlineMessage } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { MdOutlineBusinessCenter } from "react-icons/md";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setSuccess(false);
    setError(false);
    setSending(true);
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        setSending(false);
        setSuccess(true);
      })
      .catch(() => {
        setSending(false);
        setError(true);
      });
  };
  return (
    <div id="contact">
      <div className="mx-auto px-5 sm:px-24 py-20">
        <span className="opacity-0">.</span>
        <BlurFade inView={true}>
          <div className="section-title text-center relative pb-5 mb-10">
            <h5 className="text-xl md:text-2xl font-medium text-cinnabar-800 uppercase mb-2">
              Contact Us
            </h5>
            <h1 className="text-2xl md:text-4xl mb-0">Get In Touch With Us</h1>
          </div>
          <div className="mx-auto max-w-2xl lg:max-w-7xl bg-gradient-to-r from-cinnabar-950 to-cinnabar-500 rounded-3xl">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xl:gap-x-8">
              {/* COLUMN-1 */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="h-full w-full p-5">
                  <div className="h-full w-full rounded-2xl overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=ensias+(ENSIAS%20Junior%20Entreprise)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* COLUMN-2 */}
              <div className="p-10 flex flex-col justify-center">
                <h3 className="text-4xl md:text-5xl font-semibold mb-3 text-white">
                  Do You Have Any Questions?
                </h3>
                <h4 className="text-base font-normal mb-7 text-white">
                  We are here to help you. If you have any questions or need
                  assistance, feel free to contact us.
                </h4>
                <form
                  className="flex flex-col gap-4"
                  onSubmit={handleFormSubmit}
                  data-netlify="true"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="flex items-center gap-4 bg-white rounded-2xl px-4 py-2">
                    <MdOutlineBusinessCenter className="text-cinnabar-700" />
                    <input
                      type="text"
                      name="company"
                      placeholder="Company"
                      className="w-full bg-transparent outline-none"
                      required
                    />
                  </div>
                  <div className="flex items-center gap-4 bg-white rounded-2xl px-4 py-2">
                    <AiOutlineUser className="text-cinnabar-700" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="w-full bg-transparent outline-none"
                      required
                    />
                  </div>
                  <div className="flex items-center gap-4 bg-white rounded-2xl px-4 py-2">
                    <AiOutlineMail className="text-cinnabar-700" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full bg-transparent outline-none"
                      required
                    />
                  </div>
                  <div className="flex items-start gap-4 bg-white rounded-2xl px-4 py-2">
                    <AiOutlineMessage className="text-cinnabar-700 mt-1" />
                    <textarea
                      name="message"
                      placeholder="Message"
                      className="w-full bg-transparent outline-none"
                      rows={5}
                      required
                    />
                  </div>
                  {sending ? (
                    <button
                      type="button"
                      className="bg-transparent border border-white border-[2px] text-white font-medium py-2 px-4 rounded-2xl cursor-not-allowed"
                      disabled
                    >
                      Sending...
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="bg-transparent border border-white border-[2px] text-white font-medium py-2 px-4 rounded-2xl"
                    >
                      Send Message <FiSend className="inline-block ml-2" />
                    </button>
                  )}
                  {success && (
                    <div className="text-white text-center border border-white border-dashed p-2 text-sm rounded-2xl">
                      Message sent successfully!
                    </div>
                  )}
                  {error && (
                    <div className="text-white text-center border border-white border-dashed p-2 text-sm rounded-2xl">
                      Failed to send message!
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default Contact;
