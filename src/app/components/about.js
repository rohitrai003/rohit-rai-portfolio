import React from 'react'

export default function About() {
  const skills = [
    {
      "skill": "Flutter",
      "bg": "bg-sky-400",
      "textColor": "text-black"
    },
    {
      "skill": "ReactJs",
      "bg": "bg-zinc-800",
      "textColor": "text-white"
    },
    {
      "skill": "ExpressJs",
      "bg": "bg-yellow-400",
      "textColor": "text-black"
    }
  ];
  return (
    <section id="about" className="py-16 px-8 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src="your-photo.jpg" alt="Your Photo" className="rounded-full w-48 mx-auto" />
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4">I’m a passionate and creative flutter and web developer with experience in creating stunning and functional app and websites. I specialize in Flutter, React.js, Expressjs, and React Native</p>
          <div>
            <h2 className="font-semibold">Skills:</h2>
            <ul className="flex space-x-4 mt-4">
              {skills.map((e) => <li key={e}><span className={`${e.bg} ${e.textColor} px-5 py-3 rounded`}>{e.skill}</span></li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
