import React from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className="my-12" id="contact">
      <h2 className="text-xl text-center text-secondary">Contact Me</h2>
      <h2 className="text-4xl font-semibold  text-center w-[60%] mx-auto">
        I Want to Hear from You
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
        <div className="border p-8 rounded-xl">
          <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Email"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="Phone"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <input
                  class="appearance-none block bg-none w-full bg-gray-200 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  
                  type="text"
                  placeholder="Subject"
                />
              </div>
            </div>

            <div className="-mx-3 mb-6">
              <textarea
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                placeholder="Write your message here.."
              />
            </div>

            <button className="py-3 px-5 rounded-3xl bg-secondary">Submit Now</button>
          </form>
        </div>

        <div className="my-auto">
            <div className="flex items-center my-6">
                <FiMapPin className="text-6xl p-4 bg-secondary text-white rounded-full"></FiMapPin>
                <div className="ml-5">
                    <h2 className="text-4xl font-bold">Address</h2>
                    <p className="text-xl">Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className="flex items-center my-6">
                <FiMail className="text-6xl p-4 bg-secondary text-white rounded-full"></FiMail>
                <div className="ml-5">
                    <h2 className="text-4xl font-bold">Email</h2>
                    <p className="text-md md:text-xl">mdrakibul.developer@gmail.com</p>
                </div>
            </div>
            <div className="flex items-center my-6">
                <FiPhone className="text-6xl p-4 bg-secondary text-white rounded-full"></FiPhone>
                <div className="ml-5">
                    <h2 className="text-4xl font-bold">Phone</h2>
                    <p className="text-xl">+8801870028843</p>
                </div>
            </div>
            <div className="grid grid-cols-4 md:w-[80%]">
              <div>
                <a href="https://web.facebook.com/profile.php?id=100017740156035">
                <FaFacebook className="text-6xl p-4 bg-secondary text-white rounded-full"></FaFacebook>
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/mdrakib44854/">
                <FaInstagram className="text-6xl p-4 bg-secondary text-white rounded-full"></FaInstagram>
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/rakibmd4485/">
                <FaLinkedin className="text-6xl p-4 bg-secondary text-white rounded-full"></FaLinkedin>
                </a>
              </div>
              <div>
                <a href="https://github.com/rakib4485">
                <FaGithub className="text-6xl p-4 bg-secondary text-white rounded-full"></FaGithub>
                </a>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
