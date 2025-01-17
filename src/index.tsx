import { render } from "preact";
import { Suspense, lazy } from "preact/compat";
import { LoadSuspense } from "https://raw.githubusercontent.com/klthemathnerd8/Nebula/main/./LoadSuspense";
import { Helmet } from "react-helmet";
import Meta from "https://raw.githubusercontent.com/klthemathnerd8/Nebula/main/./components/Meta";

const Routes = lazy(() => import("./routes"));

const theme = localStorage.getItem("theme") || "main";

export default function App() {
  return (
    <div>
      {window.location.origin === "https://nebulaproxy.io" && <Meta />}
      {/* {window.location.origin === "http://localhost:8080" && <Meta />} */}
      <Helmet>
        <link rel="stylesheet" href={"https://raw.githubusercontent.com/klthemathnerd8/Nebula/main/themes/" + theme + ".css"}></link>
        <link rel="stylesheet" href="https://raw.githubusercontent.com/klthemathnerd8/Nebula/main/themes/main.css"></link>
      </Helmet>
      <Suspense fallback={<LoadSuspense />}>
        <div>
          <Routes />
        </div>
      </Suspense>
    </div>
  );
}

render(<App />, document.getElementById("app"));
