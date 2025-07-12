// @flow strict
import { certificate } from "@/utils/data/certificates";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import lottieFile from '../../../assets/lottie/certificates.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Certificate() {
  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certificates
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="flex w-full py-4">
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-2">
          <div className="flex justify-center items-start">
            <div className="w-11/12 h-auto">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">

              {
                certificate.map(certificate => (
                  <GlowCard key={certificate.id} identifier={`certificate-${certificate.id}`}>
                    <div className="p-3 w-full  text-white">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex items-center gap-x-4 px-3 py-5">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={24} />
                        </div>
                        <div className="flex flex-1 items-center">
                          <p className="text-sm font-medium uppercase">
                            {certificate.title}
                          </p>

                        </div>
                      </div>

                      <div className="flex-grow w-full justify-center items-center">
                        <img className="w-80 h-52" src=
                          {certificate.certificate}
                          alt="" />
                      </div>

                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;