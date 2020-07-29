import React from "react";

type TitleProps = {
  children: React.ReactNode;
};



const Title: React.FC<TitleProps> = (props) => {
  return <h1 className="title">{props.children}</h1>;
};

export default Title