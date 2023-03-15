
import links from "./links.json"
import data from "./data.json"

const linkButton = (name: string, desc: string, link: string) => {
  return (
    <a href={link} className="bg-purple-400 rounded-full p-2 m-2 shadow-2xl hover:bg-purple-300 hover:animate-pulse">
      <h1 className="text-3xl p-1 text-white text-center">{name}</h1>
      <p className="text-xl p-1 text-slate-100 text-center">{desc}</p>
    </a>
  )
}

const linksArray = () => {
  return links.map(elem => {
    return linkButton(elem.name, elem.desc, elem.link)
  })
}



function App() {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-pink-500 min-h-screen w-screen">
      <div className="flex flex-col mx-8">
        <h1 className="text-6xl font-bold drop-shadow-md text-slate-100 p-5 mx-auto"> {data.name} </h1>
        <p className="text-xl font-bold drop-shadow-sm text-slate-200 p-3 mx-auto">
          {data.desc}
        </p>
      </div>
      <div className="flex flex-col mx-8">
        {linksArray()}
      </div>
    </div>
  );
}

export default App;
