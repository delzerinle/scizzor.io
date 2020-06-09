import React from 'react';

const ImageDragNDrop = () => {
  return (
    <div className="py-5 px-4 border border-alt-2 border-dashed bg-gray-100 h-88">
      <p className="text-secondary flex">
        <svg
          className="h-8 w-8 fill-current mr-4 flex-shrink-0"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity=".3"
            d="M26.183 0H0v32h32V5.818.001L26.183 0zm-1.455 4.364a2.91 2.91 0 11.153 5.818 2.91 2.91 0 01-.153-5.818zM2.909 26.182l10.182-14.546 5.862 8.376L21.82 16l7.273 10.182H2.909z"
          />
        </svg>
        <span className="text-sm leading-4">
          Recomended Image Size <br />
          1920px by 1080px
        </span>
      </p>
      <div className="text-center pt-16">
        <svg
          className="w-10 h-10 text-primary fill-current mx-auto mb-2 md:mb-4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.75 16.5a9.75 9.75 0 109.75 9.75 9.762 9.762 0 00-9.75-9.75zm3.675 9.326a.75.75 0 01-.675.424h-1.314a.188.188 0 00-.186.181v4.319a1.5 1.5 0 11-3 0v-4.313a.19.19 0 00-.186-.187H6.75a.75.75 0 01-.586-1.218l3-3.75a.774.774 0 011.172 0l3 3.75a.75.75 0 01.089.794z" />
          <path
            opacity=".3"
            d="M19.78 10.545a2.24 2.24 0 10.018-4.48 2.24 2.24 0 00-.018 4.48z"
          />
          <path
            opacity=".3"
            d="M35.123 4.5L31.5.877A3 3 0 0029.379 0H12a3 3 0 00-3 3v10.912a.372.372 0 00.363.375c.549.011 1.557.051 2.228.123A.367.367 0 0012 14.04V3.75a.75.75 0 01.75-.75h16.319a.75.75 0 01.529.219l3.183 3.183a.75.75 0 01.219.53V27a.75.75 0 01-.75.75H21.963a.366.366 0 00-.361.315 11.901 11.901 0 01-.547 2.187.366.366 0 00.343.497H33a3 3 0 003-3V6.62a3 3 0 00-.877-2.121z"
          />
          <path
            opacity=".3"
            d="M30.715 19.35a.28.28 0 00-.009-.284l-4.854-7.762a.56.56 0 00-.95 0l-2.714 4.35a.28.28 0 01-.476 0l-.966-1.554a.561.561 0 00-.95 0l-1.868 2.99a.367.367 0 00.063.463 12.04 12.04 0 011.566 1.797.36.36 0 00.3.15h10.618a.278.278 0 00.24-.15z"
          />
        </svg>

        <p className="font-medium md:hidden">
          <span className="text-primary">Browse</span> to choose file
        </p>
        <p className="font-medium hidden md:block md:leading-5 md:text-base">
          Drag and drop an image <br />
          <span className="font-light md:text-sm">
            or <span className="text-primary">browse</span> to choose file
          </span>
        </p>
      </div>
    </div>
  );
};

export default ImageDragNDrop;
