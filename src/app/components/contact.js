import React from 'react'

export default function Contact() {
  return (
    <section id="contact" class="py-16 bg-white">
  <div class="max-w-4xl mx-auto text-center">
    <h2 class="text-3xl font-bold mb-8">Get in Touch</h2>
    <form class="space-y-4">
      <input type="text" placeholder="Your Name" class="w-full px-4 py-2 border rounded"/>
      <input type="email" placeholder="Your Email" class="w-full px-4 py-2 border rounded"/>
      <textarea placeholder="Your Message" class="w-full px-4 py-2 border rounded"></textarea>
      <button class="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Send Message</button>
    </form>
    <div class="mt-8">
      <a href="https://linkedin.com" class="text-gray-600 hover:text-blue-600 mx-2">LinkedIn</a>
      <a href="https://github.com" class="text-gray-600 hover:text-black mx-2">GitHub</a>
    </div>
  </div>
</section>

  )
}
