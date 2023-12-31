import { BsGithub, BsTwitter, BsTwitch } from "react-icons/bs";

export const Redes = () => {
  return (
    <div className='absolute bottom-0 right-0 mr-6 mb-2 z-50 2xl:text-lg xl:text-base lg:text-sm md:text-xs sm:text-xs'>
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
          href='https://github.com/BrayanCordova1/Ruleta-Nextjs-TailwindCSS.git'
          target='_blank'
          rel='noopener noreferrer'>
          <span className='inline-block align-middle mr-2'>
            <BsGithub />
          </span>
          Github
        </a>
      </div>
    </div>
  );
};
