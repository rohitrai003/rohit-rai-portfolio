import React from 'react'

export default function ProjectCard() {
  return (
    <section id="portfolio" class="py-16 bg-gray-100">
    <div class="max-w-6xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-8">Portfolio</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white shadow rounded p-4">
          <img src="project-thumbnail.jpg" alt="Project 1" class="w-full rounded mb-4"/>
          <h3 class="font-bold mb-2">Project Title</h3>
          <p class="text-sm mb-4">Short project description...</p>
          <a href="live-demo-link" class="text-blue-600 hover:underline">Live Demo</a>
          <a href="github-link" class="ml-4 text-gray-600 hover:underline">GitHub</a>
        </div>
      
      </div>
    </div>
  </section>
  )
}
