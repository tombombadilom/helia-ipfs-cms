import React, { useState } from "react";
import { HslaColorPicker, HslaColor } from 'react-colorful';


interface MyPaletteProps {
  mycolor: HslaColor;
}

const MyPalette: React.FC<MyPaletteProps> = ({ mycolor }) => {
  const [color, setColor] = useState<HslaColor>(mycolor);
  return (
    <div>
      <h2>Generate your color palette</h2>
      <HslaColorPicker color={color} onChange={setColor} />
    </div>
  );
};

const Profile: React.FC = () => {
  return (
    <div>
      <div>
        <MyPalette mycolor={{ h: 0, s: 0, l: 100, a: 1 }} />
      </div>
    </div>
  );
};

export default Profile;