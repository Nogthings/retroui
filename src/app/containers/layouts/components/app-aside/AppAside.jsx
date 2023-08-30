import AppAsideLink from "../app-aside-link/AppAsideLink";
import { createBrowserHistory } from "history"; // Importa la librería de historia

const history = createBrowserHistory();

const AppAside = () => {

  const isRouteActive = (path) => history.location.pathname === path;

  return (
    <aside>
      {/* <!-- Navigation Toggle --> */}
      <button
        type="button"
        className="text-gray-500 hover:text-gray-600"
        data-hs-overlay="#docs-sidebar"
        aria-controls="docs-sidebar"
        aria-label="Toggle navigation"
      >
        <span className="sr-only">Toggle Navigation</span>
        <svg
          className="w-5 h-5"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
      {/* <!-- End Navigation Toggle --> */}

      <div
        id="docs-sidebar"
        className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="px-6">
          <a
            className="flex-none text-xl font-semibold dark:text-white"
            href="javascript:;"
            aria-label="Brand"
          >
            Retroui ❤️
          </a>
        </div>
        <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap">
          <ul className="space-y-1.5">

            <li>
                <AppAsideLink
                    name="Dashboard"
                    to="/"
                    isActive={isRouteActive("/")}/>
            </li>
            <li>
                <AppAsideLink
                    icon="notifications"
                    name="Alerts"
                    to="/alerts"/>
            </li>

 
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default AppAside;
