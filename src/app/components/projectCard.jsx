import React from 'react'

export default function ProjectCard() {
  return (
    <section id="portfolio" className="py-16 bg-gray-100">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow rounded p-4">
          <img src="project-thumbnail.jpg" alt="Project 1" className="w-full rounded mb-4"/>
          <h3 className="font-bold mb-2">Project Title</h3>
          <p className="text-sm mb-4">Short project description...</p>
          <a href="live-demo-link" className="text-blue-600 hover:underline">Live Demo</a>
          <a href="github-link" className="ml-4 text-gray-600 hover:underline">GitHub</a>
        </div>
      
      </div>
    </div>
  </section>
  )
}
