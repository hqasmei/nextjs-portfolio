import * as React from "react";

interface HeadshotProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  width?: number;
  height?: number;
}

const Headshot = (props: HeadshotProps) => {
  const { width = 750, height = 750, ...rest } = props;

  return (
    <img
      src="https://img.mytsi.org/i/f9eg114.png"
      alt="Headshot"
      width={width}
      height={height}
      {...rest}
    />
  );
};

export default Headshot;
