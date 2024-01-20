import React, { FC, memo } from 'react';

// Constantes et fonctions utilisées par les composants
const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const iterate = (count: number, fn: (i: number) => JSX.Element) => Array.from({ length: count }, (_, i) => fn(i));
const ORB_COUNT = 25;

type OrbProps = {
  hue: number;
  width?: string;
  height?: string;
};

const Orb: FC<OrbProps> = ({ hue, width = '10%', height = '10%' }) => {
  // Convertir la chaîne de pourcentage en nombre pour le calcul
  const radius = Math.min(parseInt(width), parseInt(height)) / 2;

  return (
    <circle cx="50%" cy="50%" r={`${radius}%`} fill={`hsl(${hue}, 50%, 50%)`} />
  );
};

const Orbs: FC<{ hue: number, width: string, height: string }> = memo(({ hue, width, height }) => {
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio='xMinYMin slice'>
      {iterate(ORB_COUNT, i => (
        <Orb key={i} hue={hue} width={width} height={height} />
      ))}
    </svg>
  );
});

type JumboProps = {
  width?: string; // width est optionnel et a une valeur par défaut de '100%'
  height?: string; // height est aussi optionnel et a une valeur par défaut de '100%'
  hue?: number; // hue est optionnel et a une valeur par défaut aléatoire
};

const Jumbo: FC<JumboProps> = ({ width = '100%', height = '100%', hue = random(0, 360) }) => {
  return <Orbs hue={hue} width={width} height={height} />;
};

export default Jumbo;