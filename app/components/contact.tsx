"use client";
import React from "react";
import { IoIosSend } from "react-icons/io";
import { motion } from "framer-motion";
import { SendData } from "./send_email";
import { useFormStatus } from "react-dom";
import { toast } from 'react-toastify';

const SubmitButton = () => {
  const {pending} = useFormStatus();
  return (
    <button
    disabled={pending}
    type="submit"
    className="w-20 h-10 mr-auto bg-blue-500 p-2 rounded-full text-white"
  >
    {pending ? (
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-5 w-5 border-t-4 border-white border-solid"></div>
      </div>
    ) : (
      <p className="flex justify-center items-center gap-1">
        Send
        <span>
          <IoIosSend />
        </span>
      </p>
    )}
  </button>
  )
}

const Contact = () => {
  return (
    <>
      <motion.section
        id="contact"
        className="mb-32 w-11/12 sm:w-[30rem] p-3 scroll-mt-28"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <h1 className="text-3xl text-center mb-6 font-bold">Contact me</h1>
        <form
          action={async (formData) => {
            const response = await SendData(formData);
            if(response.message){
              toast.success(response.message);
            }else if(response.error){
              toast.error(response.error);
            }
          }
          }
          className="flex flex-col gap-3 dark:gap-5 justify-evenly items-center mt-14"
        >
          <input
            type="email"
            name="SenderEmail"
            required
            maxLength={40}
            className="w-full h-[2.8rem] text-gray-950 rounded-md border-2 border-gray-200 dark:border-none dark:outline dark:outline-offset-2 dark:outline-blue-500 placeholder:italic p-2 outline-none"
            placeholder="Your Email"
          />
          <textarea
            name="Message"
            required
            maxLength={5000}
            className="w-full h-[11rem] text-gray-950  rounded-md border-2 border-gray-200 dark:border-none dark:outline dark:outline-offset-2 dark:outline-blue-500 placeholder:italic placeholder:start-0 p-2 outline-none"
            placeholder="Message..."
          />
          <SubmitButton/>
        </form>
      </motion.section>
    </>
  );
};

export default Contact;
