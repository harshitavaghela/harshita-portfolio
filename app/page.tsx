"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Home() {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-gray-900 to-black text-white py-20 border-b"
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl"
            >
              <Image
                src="https://media.licdn.com/dms/image/v2/D5603AQEFP2WbA43Vwg/profile-displayphoto-shrink_400_400/B56ZUncoFyGQAg-/0/1740123571867?e=1746662400&v=beta&t=nJcbnln-Uuq-tVac3B-08xN3JxhP4S4vPh-q_jUfBac"
                alt="Harshita Vaghela"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Text Content */}
            <div className="text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="text-6xl font-black tracking-tight"
              >
                Harshita Vaghela
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-2xl mt-4 font-bold text-gray-200"
              >
                CS Major | Full-Stack Developer | Web3
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 flex flex-wrap justify-center md:justify-start gap-4"
              >
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 text-lg font-semibold px-8 py-6 shadow-lg"
                >
                  <a
                    href="mailto:harshitavaghela.work@gmail.com"
                    className="flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    Email Me
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="bg-[#0077B5] text-white hover:bg-[#006399] text-lg font-semibold px-8 py-6 shadow-lg"
                >
                  <a
                    href="https://www.linkedin.com/in/harshitavaghela-122679274"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-black mb-8 tracking-tight">
              About Me
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              I'm a{" "}
              <span className="font-bold text-black">
                Computer Science sophomore
              </span>{" "}
              passionate about
              <span className="font-bold text-black"> Web3</span> and its
              potential. I'm eager to explore opportunities in the{" "}
              <span className="font-bold text-black">blockchain</span> and
              <span className="font-bold text-black"> AI</span> industry.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mt-4">
              I am actively seeking internships and projects that will allow me
              to apply my programming and problem-solving skills to the Web3
              space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-black mb-12 tracking-tight">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Web3", description: "Blockchain Development" },
                { title: "Blockchain", description: "Smart Contracts & DApps" },
                { title: "AI", description: "Artificial Intelligence" },
                {
                  title: "Languages",
                  description: "English (Professional), Hindi (Native)",
                },
                {
                  title: "Frontend",
                  description: "React, Next.js, Web Development",
                },
                { title: "Full Stack", description: "End-to-end Development" },
              ].map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white border-2 border-gray-200 hover:border-black transition-colors shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-black mb-3">
                        {skill.title}
                      </h3>
                      <p className="text-lg text-gray-600">
                        {skill.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-black mb-12 tracking-tight">
              Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Frontend Developer",
                  company: "Synquic",
                  period: "February 2025 - Present",
                  duration: "2 months",
                },
                {
                  title: "Scholar",
                  company: "SheFi",
                  period: "February 2025 - Present",
                  duration: "2 months",
                },
                {
                  title: "Content Writer",
                  company: "Kshitiksha Foundation",
                  period: "December 2024 - January 2025",
                  duration: "2 months",
                },
                {
                  title: "Volunteer",
                  company: "IAF",
                  period: "August 2024 - September 2024",
                  duration: "2 months",
                },
              ].map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white border-2 border-gray-200 hover:border-black transition-colors shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl font-black">
                        {exp.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xl font-semibold text-gray-800">
                        {exp.company}
                      </p>
                      <p className="text-lg text-gray-600 mt-2">
                        {exp.period} ({exp.duration})
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-black mb-12 tracking-tight">
              Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Accenture UK - Introduction to Technology Apprenticeship Job Simulation",
                "Webflow 101",
                "Netclan Quiz",
                "Certificate of Participation of Folonite Winter Internship Contest 2024",
                "Goldman Sachs - Software Engineering Job Simulation",
              ].map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white border-2 border-gray-200 hover:border-black transition-colors shadow-lg">
                    <CardContent className="p-6">
                      <p className="text-lg text-gray-700">{cert}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-black mb-12 tracking-tight">
              Education
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  school:
                    "Prestige Institute of Engineering Management & Research (PIEMR)",
                  degree: "Bachelor of Technology - BTech, Computer Science",
                  period: "September 2023 - May 2027",
                },
                {
                  school: "Cyfrin Updraft",
                  period: "December 2024",
                },
              ].map((edu, index) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white border-2 border-gray-200 hover:border-black transition-colors shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl font-black">
                        {edu.school}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {edu.degree && (
                        <p className="text-xl font-semibold text-gray-800">
                          {edu.degree}
                        </p>
                      )}
                      <p className="text-lg text-gray-600 mt-2">{edu.period}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black mb-8 tracking-tight">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Feel free to reach out for collaborations or questions!
            </p>
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-900 text-white text-lg font-semibold"
              >
                <a href="mailto:harshitavaghela.work@gmail.com">Email Me</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-black border-black hover:bg-black hover:text-white text-lg font-semibold"
              >
                <a
                  href="https://www.linkedin.com/in/harshitavaghela-122679274"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-500 text-center py-6 border-t">
        <p className="text-lg">
          &copy; 2025 Harshita Vaghela. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
