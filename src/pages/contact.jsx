import Image from "next/image";
import React from "react";
import ContactHero from "@/Assets/svgs/ContactHeroImg.svg";
import FeedbackForm from "@/components/FeedbackForm";
import Underline from "@/Assets/svgs/Underline.svg";
import Newsletter from "@/components/Newsletter";
import tradeIndia from "@/Assets/partners/tradeindia.png";
import exportIndia from "@/Assets/partners/exportindia.png";
import justDial from "@/Assets/partners/justdial.png";
import youtube from "@/Assets/images/YoutubeIcon.png";
import insta from "@/Assets/images/InstaIcon.png";
import fb from "@/Assets/images/FBIcon.png";
import twitter from "@/Assets/images/XIcon.png";
import Head from "next/head";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Send inquiries, Get Help, or Give Feedback</title>
        <meta
          name="description"
          content="We'd love to hear from you! Whether you have inquiries about our products, partnership opportunities, or just want to say hello, feel free to reach out."
        />
        <link
          rel="canonical"
          href={`https://www.oxygrowagrotech.com/contact`}
          key="canonical"
        />
      </Head>
      <section className="container mx-auto">
        <div className="flex-row-reverse items-center justify-between p-8 lg:flex">
          <div className="lg:w-[50%] text-center">
            <h1 className="primary-text">Get in Touch with Us </h1>
            <p className="secondary-text">
              Your Questions and Feedback Matter!
            </p>
          </div>

          <div className="lg:w-[50%] my-10">
            <Image src={ContactHero} alt="contact-us-icon" />
          </div>
        </div>

        <div className="p-8">
          <div className="flex flex-col items-center justify-center mb-10">
            <h2 className="text-2xl font-semibold text-center md:text-4xl">
              Let&apos;s start a conversation
            </h2>
            <div>
              <Image src={Underline} alt="underline-svg" />
            </div>
          </div>
          <div className="items-center justify-between lg:flex">
            <div className="lg:w-[50%] lg:pr-20">
              <h3 className="mb-3 text-lg font-semibold md:text-3xl">
                Contacting Us Made Easy – <br /> Reach Out Anytime
              </h3>
              <ul className="md:text-lg ">
                <li>
                  {" "}
                  — Personalized Assistance: Tailored support for your specific
                  needs.
                </li>
                <li>
                  {" "}
                  — Timely Responses: Swift and efficient communication
                  turnaround.
                </li>
                <li>
                  {" "}
                  — Expert Guidance: Knowledgeable team providing reliable
                  advice.
                </li>
                <li>
                  — Customer-Centric Approach: Your satisfaction is our
                  priority.
                </li>
                <li>
                  — Problem Resolution: Contact us for quick solutions to any
                  issues.
                </li>
                <li>
                  — information and Inquiries: Quick, clear responses to your
                  questions.
                </li>
              </ul>
            </div>

            <div className="lg:w-[50%]">
              <FeedbackForm />
            </div>
          </div>
        </div>

        <div className="flex-row-reverse items-center justify-between p-8 lg:flex">
          <div className="text-center md:text-left lg:pl-16">
            <h2 className="mb-5 text-xl font-semibold md:text-4xl">
              Oxygrow Agro Tech Pvt Ltd
            </h2>
            <p className="description-text">
              Come see us at our office! We&apos;re located at Etawah. Whether
              you have questions, want to explore our offerings, or just say
              hello, we&apos;re here and ready to welcome you. Our doors are
              open – visit us today!
            </p>
            <h3 className="text-lg font-semibold">Address:</h3>
            <p className="description-text">
              Parvati Utsav Garden,
              <br /> CivilLines, Agro Road,
              <br /> Etawah(206001), <br />
              Uttar Pradesh,
              <br /> India
            </p>
          </div>
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14246.115491406863!2d78.9932378!3d26.7912838!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3975df524eb5bb09%3A0x4fff0b4adf586dcd!2sOxygrow%20Agro%20Tech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1704179010616!5m2!1sen!2sin"
              width={"100%"}
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <Newsletter />

        <div className="p-8 my-16 text-center">
          <h1 className="mb-16 font-semibold secondary-text">
            Checkout and Follow, <br /> All our social platforms
          </h1>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-3 place-items-center lg:gap-10">
            <div>
              <a
                href="https://www.tradeindia.com/oxygrow-agro-tech-private-limited-30729341/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={tradeIndia} alt="trade-india-icon" />
              </a>
            </div>
            <div>
              <a
                href="https://www.exportersindia.com/oxygrow-agro-tech-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={exportIndia} alt="exportIndia-icon" />
              </a>
            </div>
            <div>
              <a
                href="https://jsdl.in/RSL-RYL1704196682"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={justDial} alt="justDial-icon" />
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/Oxygrowagro2016/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={fb} alt="facebook-icon" />
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/oxygrow/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={insta} alt="insta-icon" />
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/oxygrowetawah"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={twitter} alt="twitter-icon" />
              </a>
            </div>
            <div className="lg:col-span-3">
              <a
                href="https://www.youtube.com/@Oxygrow-sk6zo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={youtube} alt="youtube-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default contact;
