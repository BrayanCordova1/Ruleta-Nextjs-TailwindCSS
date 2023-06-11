"use client";
import { useState, useEffect } from "react";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import dynamic from "next/dynamic";
import { BsGithub, BsTwitter, BsTwitch } from "react-icons/bs";

const Wheel = dynamic(() => import("react-custom-roulette").then((mod) => mod.Wheel), { ssr: false });

export default function Home() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  try {
    window;
  } catch (err) {
    console.log("Oops, `window` is not defined");
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedList = localStorage.getItem("list");
      if (storedList) {
        setList(JSON.parse(storedList));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("list", JSON.stringify(list));
    }
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
    if (list.length <= 2) {
      return;
    }
    setList((prevList) => prevList.filter((_, i) => i !== index));
  };

  const getItemColor = (index) => {
    const colors = [
      "#FF0000",
      "#1ffc4e",
      "#0000FF",
      "#dada08",
      "#FF00FF",
      "#00eded",
      "#C0C0C0",
      "#93c47d",
      "#674ea7",
      "#e69138",
      "#3d85c6",
      "#134f5c",
      "#674ea7",
      "#990000",
      "#ea9999",
      "#ffe599",
      "#b6d7a8",
      "#9fc5e8",
      "#274e13",
      "#bf9000",
      "#5b5b5b",
      "#444444",
      "#bcbcbc",
      "#000000",
      "#741b47",
      "#4c1130",
    ];
    return colors[index % colors.length];
  };

  const data = list.map((item, index) => ({
    option: item,
    style: {
      backgroundColor: getItemColor(index),
      textColor: "#FFFFFF",
    },
  }));

  if (data.length === 0 || data.length === 1) {
    data.push(
      {
        option: "Bailar",
        style: {
          backgroundColor: getItemColor(0),
          textColor: "#FFFFFF",
        },
      },
      {
        option: "Cantar",
        style: {
          backgroundColor: getItemColor(0),
          textColor: "#FFFFFF",
        },
        optionSize: 40,
      },
    );
    setList((prevList) => [...prevList, "Bailar"]);
    setList((prevList) => [...prevList, "Cantar"]);
  }

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <div className='overflow-hidden'>
      <ParticlesBackground />

      <div className='absolute h-full 2xl:w-2/5 xl:w-4/12 bg-neutral-950 bg-opacity-90 rounded-xl z-40 overflow-auto'>
        <h1 className='text-center 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-xl font-bold mt-10'>Editar ruleta</h1>
        <form className='mt-4' onSubmit={handleSubmit}>
          <input
            type='text'
            className='mx-3 px-2 py-1 text-black'
            value={inputValue}
            maxLength={35}
            onChange={handleInputChange}
          />
          <button type='submit' className='px-4 py-1 bg-blue-700'>
            Agregar
          </button>
        </form>
        <ul className='mt-6 mx-4 text-sm'>
          {list.map((item, index) => (
            <li
              key={index}
              className='flex bg-neutral-900 items-center text-center justify-between px-2 py-1 mb-2 rounded-lg'>
              <div
                className='triangle'
                style={{
                  width: "0",
                  height: "0",
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderRight: `20px solid ${getItemColor(index)}`,
                }}></div>

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
      <div className='absolute w-8/12 right-0 self-center flex h-screen justify-center items-center bg-green-30'>
        <div className='absolute z-50 mx-auto'>
          <Wheel
            mustStartSpinning={mustSpin}
            className='z-50'
            prizeNumber={prizeNumber}
            perpendicularText={true}
            fontSize={15}
            data={data}
            onStopSpinning={() => {
              setMustSpin(false);
            }}
          />
        </div>
        <div className='absolute z-50 bottom-0 mb-10'>
          <button onClick={handleSpinClick} className='mx-auto mt-4 bg-blue-600 px-3 py-2 z-50'>
            Girar la ruleta
          </button>
        </div>
        <div className='absolute bottom-0  right-0 mr-6 mb-2 z-50'>
          <div>
            <h1>Programador:</h1>
            <a className='relative' href='https://twitter.com/GuniX41_' target='_blank' rel='noopener noreferrer'>
              <span className='inline-block align-middle mr-2'>
                <BsTwitter />
              </span>
              Twitter
            </a>
            <a
              className='relative ml-3'
              href='https://github.com/BrayanCordova1/Daarick-Ruleta-Nextjs-TailwindCSS.git'
              target='_blank'
              rel='noopener noreferrer'>
              <span className='inline-block align-middle mr-2'>
                <BsGithub />
              </span>
              Github
            </a>
          </div>
          <div>
            <h1>Streamer:</h1>
            <a className='relative' href='https://twitter.com/TheDaarick28' target='_blank' rel='noopener noreferrer'>
              <span className='inline-block align-middle mr-2'>
                <BsTwitter />
              </span>
              Twitter
            </a>
            <a
              className='relative ml-3'
              href='https://www.twitch.tv/thedaarick28'
              target='_blank'
              rel='noopener noreferrer'>
              <span className='inline-block align-middle mr-2'>
                <BsTwitch />
              </span>
              Twitch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
