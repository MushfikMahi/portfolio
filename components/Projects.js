import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const projects = [
  {
    title: "Artistry in Glass & Paper",
    description:
      "Artistry in Glass & Paper is an online platform for showcasing and managing glass and paper crafts. Users can browse a curated gallery, upload their creations, and update listings easily. Built with React.js, Node.js, Express.js, and MongoDB, this project offers a seamless and engaging experience for craft enthusiasts.",
    image: "/artistri.png",
    link: "https://artistry-in-glass-and-paper.web.app/",
    futures: [
      "Craft Upload and Management: Users can easily upload new crafts, update existing listings, and manage their portfolio of glass and paper creations with an intuitive interface.",
      "Customizable Craft Listings: Each craft listing includes detailed descriptions, high-quality images, and customization options, allowing users to showcase the unique features of their creations.",
      "Category-Based Browsing: Visitors can browse crafts by categories such as Card Making, Scrapbooking, and Glass Painting, making it simple to find specific types of crafts and discover new inspirations.",
    ],
    clientCode:
      "https://github.com/MushfikMahi/artistry-in-glass-and-paper-client",
    serverCode:
      "https://github.com/MushfikMahi/artistry-in-glass-and-paper-server",
  },
  {
    title: "SwiftTasker",
    description:
      "Swift Tasker is a micro-tasking platform enabling users to complete small tasks for rewards, managed through distinct roles for task creators, workers, and admins.",
    image: "/swifttasker.png",
    link: "https://swift-tasker.web.app",
    futures: [
      "Role-based Task Management: Swift Tasker supports distinct roles such as Workers, Task-Creators, and Admins, each with tailored functionalities for efficient task creation, completion, and platform administration.",
      "Reward System: Users earn rewards by completing tasks, fostering engagement and incentivizing participation within the platform.",
      "Secure Transactions: The platform ensures secure transactions and data handling, maintaining user trust and confidentiality throughout task interactions.",
    ],
    clientCode: "https://github.com/MushfikMahi/Swift-Tasker-client",
    serverCode: "https://github.com/MushfikMahi/Swift-Tasker-server",
  },
  {
    title: "StudyBuddyCircle",
    description:
      "StudyBuddyCircle is an online platform designed to enhance collaborative learning among friends. It allows users to create and share assignments, collaborate on tasks, and provide feedback to each other. The platform supports organizing study groups, sharing resources, and tracking academic progress, fostering a supportive and interactive learning environment.",
    image: "/studybuddy.png",
    link: "https://study-buddy-circle.web.app",
    futures: [
      "Collaborative Assignment Creation: Users can create, share, and manage assignments within their study groups, making it easy to work on tasks together and track progress.",
      "Real-Time Feedback: Users can provide and receive instant feedback on assignments from their friends, helping to improve understanding and academic performance.",
      "Resource Sharing: The platform allows users to share study materials and resources effortlessly, ensuring everyone has access to the necessary information for their studies.",
    ],
    clientCode: "https://github.com/MushfikMahi/Study-Buddy-Circle-client",
    serverCode: "https://github.com/MushfikMahi/study-buddy-circle-server",
  },
];

const Projects = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  return (
    <motion.section
      ref={sectionRef}
      id="projects"
      className="container mx-auto py-20 px-4 md:px-0"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
    >
      <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative flex glasseffect shadow-xl cursor-pointer w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <figure className="flex items-center flex-1 justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-all duration-300"
                loading="lazy"
              />
            </figure>
            <div className="card-body p-4 flex-1 gap-4">
              <h2 className="card-title text-white">{project.title}</h2>
              <p className="text-white">{project.description}</p>
              <p className="font-bold">Futures of this project :</p>
              {project.futures.map((future, index) => (
                <li className="list-disc" key={index}>
                  {future}
                </li>
              ))}
              <p className="font-bold">
                Used Technologies : Tailwind CSS, Firebase Authentication,
                MongoDB, Node.js, Express.js, React.js{" "}
              </p>
              {/* <p className="font-bold">Links :</p> */}
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <motion.a
                  href={project.link}
                  className="btn-glow flex items-center justify-center glasseffect"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaArrowRight className="mr-2" /> Live Site
                </motion.a>
                <motion.a
                  href={project.clientCode}
                  className="btn-glow flex items-center justify-center glasseffect"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaGithub className="mr-2" /> Client Code
                </motion.a>
                <motion.a
                  href={project.serverCode}
                  className="btn-glow flex items-center justify-center glasseffect"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaGithub className="mr-2" /> Server Code
                </motion.a>
              </div>

              {/* <div className="card-actions justify-end">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  View Project
                </motion.a>
              </div> */}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
