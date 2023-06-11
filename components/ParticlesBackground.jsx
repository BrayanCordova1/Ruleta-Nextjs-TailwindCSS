"use client";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { particlesConfig } from "./particles-config";
import { particlesConfeConfig } from "./particlesconfe-config";

export function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);
  return (
    <div>
      <Particles
        className='z-10 w-full h-full absolute'
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
      />
    </div>
  );
}

export function ParticlesBackgroundConfe() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);
  return (
    <div>
      <Particles
        className='z-50 w-full h-full absolute'
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfeConfig}
      />
    </div>
  );
}
