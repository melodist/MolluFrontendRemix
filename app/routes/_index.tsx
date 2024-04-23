import type {MetaFunction} from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        {title: "New Remix App"},
        {name: "description", content: "Welcome to Remix!"},
    ];
};

export default function Index() {
    return (
        <div class="container mx-auto">
            <div class="grid size-40 justify-items-center items-center">
                <div>
                    <button type="button"
                            className="object-center py-3 px-4 flex justify-center items-center size-[46px] text-sm font-semibold rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"/>
                        </svg>
                    </button>
                </div>
                <div class="columns-3">
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
    )
        ;
}
