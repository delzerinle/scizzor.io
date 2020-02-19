import Link from 'next/link';

const BrandsLayout = ({ children }) => (
  <div className="w-full flex max-w-screen-xl min-h-screen mx-auto bg-alt-3 md:bg-gray-200">
    <div className="hidden w-48 flex-shrink-0 px-5 pt-12 h-screen sticky top-0 md:block">
      <ul>
        <li className="text-alt-3 mb-2">
          <Link href="/brands/outfits">
            <a className="text-sm font-medium p-2 -mx-2 block bg-secondary">
              <span className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.53 3.333c.327 1.01 1.757 1.771 3.47 1.771 1.713 0 3.143-.76 3.47-1.77h.924a.831.831 0 01.182 0h.007c.251 0 .476.11.63.286l3.612 2.086c.399.23.535.74.305 1.138l-1.38 2.39a.833.833 0 01-1.139.306l-1.194-.69v7.816c0 .46-.373.834-.834.834H5.417a.833.833 0 01-.834-.834V8.85l-1.194.69a.833.833 0 01-1.138-.306l-1.38-2.39a.833.833 0 01.305-1.138l3.61-2.085a.831.831 0 01.63-.288h.009a.832.832 0 01.182 0h.922z" />
                </svg>
                Outfits
              </span>
            </a>
          </Link>
        </li>
        <li className="text-secondary hover:text-alt-3 mb-2">
          <Link href="/brands/measurements">
            <a className="text-sm font-light p-2 -mx-2 block hover:bg-secondary">
              <span className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.055 14.66a3.221 3.221 0 00-3.26 1.09l-.75-1.886a.204.204 0 01.078-.246 11.789 11.789 0 005.544-9.73c0-.868-.105-1.731-.314-2.573a.417.417 0 00-.779-.083l-5.386 11.042a.209.209 0 01-.375 0L4.425 1.234a.417.417 0 00-.78.083c-.207.841-.311 1.704-.312 2.57a11.788 11.788 0 005.545 9.735.205.205 0 01.079.246l-.75 1.887A3.215 3.215 0 105.714 21a3.261 3.261 0 002.934-1.855L10 15.75l1.377 3.45a3.229 3.229 0 105.192-3.69 3.198 3.198 0 00-1.514-.85zm-7.793 3.465l-.138.345a1.568 1.568 0 01-2.27.602 1.547 1.547 0 112.408-1.287v.34zm7.024 1.208a1.558 1.558 0 01-1.385-.804l-.167-.41v-.333a1.548 1.548 0 111.552 1.547z" />
                </svg>
                Measurements
              </span>
            </a>
          </Link>
        </li>
        <li className="text-secondary hover:text-alt-3">
          <Link href="/brands/settings">
            <a className="text-sm font-light p-2 -mx-2 block hover:bg-secondary">
              <span className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.75 7.917h-1.552a7.46 7.46 0 00-.636-1.534l1.098-1.096a1.25 1.25 0 000-1.769l-1.18-1.177a1.25 1.25 0 00-1.767 0l-1.098 1.097a7.422 7.422 0 00-1.532-.635V1.25A1.25 1.25 0 0010.833 0H9.167a1.25 1.25 0 00-1.25 1.25v1.553a7.474 7.474 0 00-1.533.635L5.286 2.341a1.25 1.25 0 00-1.768 0L2.34 3.519a1.25 1.25 0 000 1.768l1.099 1.098a7.398 7.398 0 00-.636 1.532H1.25A1.25 1.25 0 000 9.167v1.666a1.25 1.25 0 001.25 1.25h1.552c.153.533.367 1.047.635 1.533l-1.099 1.099a1.25 1.25 0 000 1.768l1.179 1.178a1.287 1.287 0 001.768 0l1.098-1.098c.486.269 1 .482 1.534.637v1.55A1.25 1.25 0 009.167 20h1.666a1.25 1.25 0 001.25-1.25V17.2a7.469 7.469 0 001.533-.636l1.098 1.098a1.25 1.25 0 001.768 0l1.178-1.179a1.25 1.25 0 000-1.767l-1.098-1.098c.27-.485.482-1 .636-1.533h1.552A1.25 1.25 0 0020 10.833V9.167a1.25 1.25 0 00-1.25-1.25zM10 14.167a4.167 4.167 0 110-8.334 4.167 4.167 0 010 8.334z" />
                </svg>
                Settings
              </span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
    <div className="flex-1 flex flex-col">
      <div className="h-20 flex-shrink-0 flex justify-between items-center px-3 md:h-12 md:pl-0">
        <button className="p-1 mt-5 text-black focus:outline-none hover:text-primary focus:text-primary md:hidden">
          <svg
            className="h-4 w-4 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.084h16M1 6.093h16M1 11.103h16"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <p className="text-center font-normal leading-snug md:hidden">
          <small className="text-secondary text-xs font-light">Brand</small>
          <br />
          Eleventy
        </p>
        <p className="hidden font-normal leading-snug md:block">
          <small className="text-secondary text-xs">Brand:</small> Eleventy
        </p>
        <button className="p-1 focus:outline-none md:flex md:items-center">
          <img
            className="h-10 w-10 object-cover rounded-full md:border-alt-3 md:border-2 md:h-8 md:w-8"
            src="/images/avatar.jpg"
            alt="avatar"
          />
          <p className="hidden md:block ml-2 text-sm">Olusesan Peter</p>
        </button>
      </div>
      <div className="flex-1 md:bg-alt-3 md:p-5 md:shadow-custom pb-16 md:pb-16">
        {children}
      </div>
    </div>
  </div>
);

export default BrandsLayout;
