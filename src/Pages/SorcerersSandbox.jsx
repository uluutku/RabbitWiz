import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoBeaker, GoLightBulb, GoRocket } from "react-icons/go";
import { TbBrain, TbRobot } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";
import "./SorcerersSandbox.css";

function SorcerersSandbox() {
  const [activeTab, setActiveTab] = useState("llm");

  const tabs = [
    { id: "llm", label: "LLM Projects", icon: <TbRobot /> },
    { id: "ai", label: "AI & ML", icon: <TbBrain /> },
    { id: "experimental", label: "Tech Experiments", icon: <GoLightBulb /> },
  ];

  const projects = {
    llm: [
      {
        title: "DeepSeek Explorer",
        description: "A sophisticated frontend for the DeepSeek-R1 model running locally via Ollama. Features advanced prompt engineering, RAG capabilities, and multi-turn refinement for enhanced AI interactions.",
        status: "Active Development",
        tech: ["React", "Node.js", "Ollama", "DeepSeek-R1"],
        github: "coming-soon",
      },
      {
        title: "RAG Enhancement Suite",
        description: "Tools and interfaces for improving Retrieval-Augmented Generation. Experimenting with different embedding models and retrieval strategies.",
        status: "In Progress",
        tech: ["Python", "LangChain", "FastAPI", "Vector DBs"],
      },
      {
        title: "Prompt Laboratory",
        description: "A testing ground for advanced prompt engineering techniques. Includes automated prompt refinement and performance measurement tools.",
        status: "Experimental",
        tech: ["Python", "LLMs", "Evaluation Metrics"],
      }
    ],
    ai: [
      {
        title: "Neural Snake Arena",
        description: "A quantum-dots-network based snake game where neural networks learn and evolve. Watch as the snake develops survival strategies through self-learning mechanisms.",
        status: "Active Development",
        tech: ["Python", "PyTorch", "QDN", "Pygame"],
        github: "https://github.com/yourusername/neural-snake",
      },
      {
        title: "Snake Battle Royale",
        description: "Multiple AI snakes competing for resources in a confined space. Each snake uses different neural network architectures to develop unique survival strategies.",
        status: "In Progress",
        tech: ["Python", "TensorFlow", "NEAT", "Pygame"],
      },
      {
        title: "NEAT Evolution Playground",
        description: "Experimenting with NeuroEvolution of Augmenting Topologies (NEAT) to create and evolve neural networks that solve increasingly complex tasks.",
        status: "Research Phase",
        tech: ["Python", "NEAT-Python", "NumPy"],
      },
      {
        title: "Lora Training Lab",
        description: "A playground for training and experimenting with Stable Diffusion LoRA models. Creating specialized image generation models for unique artistic styles.",
        status: "Active",
        tech: ["Python", "PyTorch", "Stable Diffusion", "LoRA"],
      }
    ],
    experimental: [
      {
        title: "AI Model Performance Metrics",
        description: "Building tools to measure and compare performance of different AI models running locally, focusing on speed, memory usage, and output quality.",
        status: "Planning",
        tech: ["Python", "Docker", "Prometheus", "Grafana"],
      },
      {
        title: "Neural Network Visualizer",
        description: "An interactive tool to visualize neural network architectures and their decision-making processes in real-time.",
        status: "Concept",
        tech: ["React", "D3.js", "TensorFlow.js"],
      }
    ]
  };

  const renderGithubLink = (github) => {
    if (!github) return null;
    
    if (github === "coming-soon") {
      return (
        <span className="github-link disabled">
          <span>
            <AiFillGithub /> View on GitHub
          </span>
        </span>
      );
    }

    return (
      <a href={github} className="github-link" target="_blank" rel="noopener noreferrer">
        <AiFillGithub /> View on GitHub
      </a>
    );
  };

  return (
    <div className="sorcerers-sandbox">
      <div className="sandbox-intro">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sorcerer's Sandbox
        </motion.h1>
        <motion.p 
          className="sandbox-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to my AI research laboratory! Here, I'm deeply immersed in exploring the 
          frontiers of artificial intelligence, from neural networks to large language models. 
          Currently, I'm focused on developing sophisticated interfaces for local LLMs like 
          DeepSeek-R1, while also creating self-learning systems through projects like QDN-based 
          snake games and NEAT evolution experiments.
        </motion.p>
        <motion.p 
          className="sandbox-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          These projects represent my journey into understanding AI at a fundamental level. 
          While they may be more technical in nature, each experiment brings me closer to 
          integrating advanced AI capabilities into more accessible and playful experiences.
        </motion.p>
      </div>

      <div className="tabs-container">
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="projects-grid"
          >
            {projects[activeTab].map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-status">
                  Status: <span className={`status-${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
                <div className="tech-stack">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                {renderGithubLink(project.github)}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default SorcerersSandbox; 