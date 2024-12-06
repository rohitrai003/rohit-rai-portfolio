import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
  <div className="max-w-4xl mx-auto text-center w-1/3">
    <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
    <form className="space-y-4">
      <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded"/>
      <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded"/>
      <textarea placeholder="Your Message" className="w-full px-4 py-2 border rounded"></textarea>
      <button className="bg-violet-600 text-white px-6 py-3 rounded hover:bg-violet-700">Send Message</button>
    </form>
    <div className="mt-8">
      <a href="https://linkedin.com" className="text-gray-600 hover:text-black mx-2">LinkedIn</a>
      <a href="https://github.com" className="text-gray-600 hover:text-black mx-2">GitHub</a>
    </div>
  </div>
</section>

  )
}
