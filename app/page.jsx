"use client";
import { useState, useEffect } from "react";
import { ParticlesBackground } from "@/components/ParticlesBackground";

export default function Home() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const storedList = localStorage.getItem("list");
    if (storedList) {
      setList(JSON.parse(storedList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setList((prevList) => [...prevList, inputValue]);
      setInputValue("");
    }
  };

  const handleDelete = (index) => {
    setList((prevList) => prevList.filter((_, i) => i !== index));
  };

  const getItemColor = (index) => {
    const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#C0C0C0"];
    return colors[index % colors.length];
  };

  return (
    <div>
      <ParticlesBackground />
      <div className='absolute z-0 h-full 2xl:w-2/5 xl:w-4/12  bg-neutral-950 bg-opacity-90 rounded-xl'>
        <h1 className='text-center 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-xl font-bold mt-10'>Editar ruleta</h1>
        <form className='mt-4' onSubmit={handleSubmit}>
          <input type='text' className='mx-3 px-2 py-1 text-black' value={inputValue} onChange={handleInputChange} />
          <button type='submit' className='px-4 py-1 bg-blue-700'>
            A
          </button>
        </form>
        <ul className='mt-6 mx-4 text-sm'>
          {list.map((item, index) => (
            <li
              key={index}
              className='flex bg-neutral-900 items-center text-center justify-between px-2 py-1 mb-2 rounded-lg'>
              <div className='w-4 h-4 mr-2' style={{ backgroundColor: getItemColor(index) }}></div>
              <div>
                <span className='mx-2'>{item}</span>
              </div>
              <div>
                <button className='px-2 py-1 rounded-lg bg-blue-700 mr-2' onClick={() => handleDelete(index)}>
                  Editar
                </button>
                <button className='px-2 py-1 rounded-lg bg-red-700' onClick={() => handleDelete(index)}>
                  Borrar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className='absolute w-16 h-16 bg-white rounded-full text-black justify-center'>Girar</div>
      </div>
    </div>
  );
}
