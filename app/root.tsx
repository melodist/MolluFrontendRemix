import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";
import styles from "./tailwind.css?url";
import { type IStaticMethods } from "preline/preline";
import { useEffect } from "react";
import path from "path";

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

if (typeof window !== "undefined") {
  import("preline/preline");
}

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  useEffect(() => {
    if (document.readyState === "complete") {
      window.HSStaticMethods.autoInit();
    }
  }, [path]);

  return <Outlet />;
}
