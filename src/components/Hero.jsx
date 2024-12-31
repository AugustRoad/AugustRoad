import React from "react";
import profilepic from "../assets/IMG_2310.jpg";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiPython,
  DiJava,
  DiAngularSimple

} from "react-icons/di";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
        
        <div className="grid md:grid-cols-2 place-items-center gap-8">
            <motion.img 
                src={profilepic}
                className="w-[300px] md:w-[450px] rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            />
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            >
                <TypeAnimation
                    sequence={[
                        "Fullstack Dev",
                        1000,
                        "Student",
                        1000,
                        "Sleep Enjoyer",
                        1000
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
                />

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
                >
                    HEY, I AM <br/>
                    <span className="text-green-500">Kevin Ma</span>
                </motion.p>

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
                >
                    I am a passionate student with experience in full development.
                </motion.p>

                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex flex-row items-center gap-6 my-4 md:mb-0"
                >
                    

                    <div className="flex gap-6 flex-row text-4xl md:text-6xl text-green-400 z-20">
                        <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/AugustRoad" target="_blank">
                            <AiOutlineGithub/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="#" target="_blank">
                            <AiOutlineLinkedin/>
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>


            
        </div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
        >
            <p className="text-gray-200 mr-6">My Tech Stack</p>

            <DiPython className="text-blue-500 mx-2" />
            <DiJava className="text-sky-500 mx-2" />
            <DiAngularSimple className="text-red-500 mx-2" />
            <DiReact className="text-blue-500 mx-2" />
            <DiJavascript1 className="text-yellow-500 mx-2" />
            <DiNodejsSmall className="text-green-500 mx-2" />


        </motion.div>

        <div className="absolute inset-0 hidden md:block">
            <ShinyEffect left={0} top={0} size={1400} />
        </div>
        
    </div>
    
  )
}

export default Hero