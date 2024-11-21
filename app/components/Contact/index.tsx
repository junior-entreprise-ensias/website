"use client";

import BlurFade from "@/app/magicui/ui/blur-fade";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { AiOutlineUser, AiOutlineMail, AiOutlineMessage } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

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
        alert("Message sent successfully!");
      })
      .catch(() => {
        setSending(false);
        setError(true);
        alert("Failed to send message!");
      });
  };
  return (
    <div id="contact">
      <div className="mx-auto my-10 px-5 sm:px-24 py-5 sm:py-20">
        <BlurFade inView={true}>
          <div className="section-title text-center relative pb-5 mb-10">
            <h5 className="text-xl md:text-2xl font-medium text-cinnabar-600 uppercase mb-2">
              Contact Us
            </h5>
            <h1 className="text-2xl md:text-4xl mb-0">Get In Touch With Us</h1>
          </div>
          <div className="mx-auto max-w-2xl lg:max-w-7xl bg-cinnabar-800 rounded-3xl">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 lg:grid-cols-2 xl:gap-x-8">
              {/* COLUMN-1 */}
              <div className="hidden lg:block">
                <div className="h-full">
                  <Image
                    src={"/assets/contact/contact.svg"}
                    alt="contactimg"
                    width={588}
                    height={334}
                  />
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
                      className="bg-midred text-white font-medium py-2 px-4 rounded-2xl cursor-not-allowed"
                      disabled
                    >
                      Sending...
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="bg-midred text-white font-medium py-2 px-4 rounded-2xl"
                    >
                      Send Message <FiSend className="inline-block ml-2" />
                    </button>
                  )}
                  {success && (
                    <div className="bg-cinnabar-300 text-white text-center p-2 text-sm rounded-2xl">
                      Message sent successfully!
                    </div>
                  )}
                  {error && (
                    <div className="bg-cinnabar-300 text-red text-center p-2 text-sm rounded-2xl">
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
