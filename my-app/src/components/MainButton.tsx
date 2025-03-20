"use client"
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isActive: boolean;
};

const MainButton = (props: Props) => {
  const { children, isActive } = props;

  return (
    <div>
      <button
        className={`py-3 px-6 rounded-[10px] hover:scale-105 hover:opacity-70 mb-3 w-[100px]
        ${
          isActive ? "bg-blue-800" : ""
        } drop-shadow-[0_5px_5px_rgba(0,0,0,0.50)] text-white`}
      >
        {children}
      </button>
    </div>
  );
};

export default MainButton;
