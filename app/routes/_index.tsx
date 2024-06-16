import type { MetaFunction } from "@remix-run/node";
import Correct from "~/components/correct";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const play = () => {
  const audio = new Audio("sounds/example.ogg");
  audio.play();
};

export default function Index() {
  const [showResults, setShowResults] = useState<boolean>(false);
  const successPopup = () => {
    setShowResults(true);
    setTimeout(() => setShowResults(false), 500);
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center">
        <div className="box-border content-center h-screen relative">
          <div className="grid gap-2 p-4 border-2 border-b-cyan-500 justify-items-center content-center">
            <div>
              <button
                type="button"
                className="object-center px-1 py-1 flex justify-center items-center size-12 text-sm font-semibold rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                onClick={play}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                  />
                </svg>
              </button>
            </div>
            <div className="columns-3">
              <div>
                <button
                  type="button"
                  className="size-40 text-sm font-semibold rounded-full border border-transparent text-white bg-cover hover:ring hover:ring-blue-400 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  style={{
                    backgroundImage: `url("images/portrait/example_1.png")`,
                  }}
                />
              </div>
              <div>
                <button
                  type="button"
                  className="size-40 text-sm font-semibold rounded-full border border-transparent text-white bg-cover hover:ring hover:ring-blue-400 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  style={{
                    backgroundImage: `url("images/portrait/example_2.png")`,
                  }}
                  onClick={() => {
                    successPopup();
                  }}
                />
              </div>
              <div>
                <button
                  type="button"
                  className="size-40 text-sm font-semibold rounded-full border border-transparent text-white bg-cover hover:ring hover:ring-blue-400 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  style={{
                    backgroundImage: `url("images/portrait/example_3.png")`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {showResults ? <Correct /> : null}
      </div>
    </div>
  );
}
