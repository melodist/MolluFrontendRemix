import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center">
        <div className="grid justify-items-center content-center">
          <div>
            <button
              type="button"
              className="object-center px-1 py-1 flex justify-center items-center size-12 text-sm font-semibold rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
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
              <span className="size-12 block bg-gray-200 rounded-full dark:bg-neutral-700"></span>
            </div>
            <div>
              <span className="size-12 block bg-gray-200 rounded-full dark:bg-neutral-700"></span>
            </div>
            <div>
              <span className="size-12 block bg-gray-200 rounded-full dark:bg-neutral-700"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
