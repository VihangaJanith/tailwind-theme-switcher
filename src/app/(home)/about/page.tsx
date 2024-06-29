"use client";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { useTheme } from "../../context/ThemeContext";

export default function About() {
  // const color_theme = 'theme-red'
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={twMerge(
        clsx("bg-skin-secondary rounded-md w-full min-h-screen p-4", theme)
      )}
    >
      <div className="font-bold text-skin-base text-5xl mb-4">About Page</div>
      <div className="font-bold text-skin-base text-lg mb-4">
        This is Heading
      </div>

      <button className="bg-skin-btn hover:bg-skin-btn-hover text-white font-bold py-2 px-4 rounded">
        This is Button
      </button>

      <div className="flex mt-5 gap-3 bg-white max-w-fit p-4">
        <p className="text-skin-base">Change Theme:</p>
        <button
          className="bg-skin-btn hover:bg-skin-btn-hover text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setTheme("theme-red")}
        >
          Set Red Theme
        </button>
        <button
          className="bg-skin-btn hover:bg-skin-btn-hover text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setTheme("theme-green")}
        >
          Set Green Theme
        </button>
        <button
          className="bg-skin-btn hover:bg-skin-btn-hover text-white font-bold py-2 px-4 rounded-full"
          onClick={() => setTheme("")}
        >
          Set Blue Theme
        </button>
      </div>
    </div>
  );
}
