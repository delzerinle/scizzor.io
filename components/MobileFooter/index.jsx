import { Accordion } from '@components';

const MobileFooter = () => (
  <div className="px-5 py-10 md:hidden">
    <Accordion>
      <ul label="Explore">
        <span className="block mt-2">
          <a className="text-sm font-light" href="#">
            How Scizzor works
          </a>
        </span>

        <span className="block mt-2">
          <a className="text-sm font-light" href="#">
            Scizzor Shop
          </a>
        </span>

        <span className="block mt-2">
          <a className="text-sm font-light" href="#">
            Join as a Brand
          </a>
        </span>
      </ul>

      <ul label="Let us Help you">
        <span className="block mt-2">
          <a className="text-sm font-light" href="#">
            Help Center & FAQs
          </a>
        </span>

        <span className="block mt-2">
          <a className="text-sm font-light" href="#">
            Return Policy
          </a>
        </span>

        <span className="block mt-2">
          <a className="text-sm font-light" href="#">
            Track my order
          </a>
        </span>

        <span className="block mt-2">
          <a className="text-sm font-light" href="#">
            Get in Touch
          </a>
        </span>
      </ul>
      <ul label="About">
        <span className="block mt-2">
          <a className="text-sm font-light" href="#">
            Scizzor Group
          </a>
        </span>

        <span className="block mt-2">
          <a className="text-sm font-light" href="#">
            Careers
          </a>
        </span>

        <span className="block mt-2">
          <a className="text-sm font-light" href="#">
            About us
          </a>
        </span>
      </ul>
    </Accordion>

    <div className="flex justify-between items-center pt-5">
      <a href="#" className="hover:text-primary">
        <svg
          className="h-5 w-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.5 0c2.309 0 2.598.01 3.505.051.904.041 1.522.185 2.063.395a4.166 4.166 0 011.505.98c.473.473.764.947.98 1.506.21.54.355 1.159.396 2.063.041.907.051 1.197.051 3.505 0 2.309-.01 2.598-.051 3.505-.041.904-.185 1.522-.395 2.063a4.167 4.167 0 01-.98 1.505 4.167 4.167 0 01-1.506.98c-.54.21-1.159.355-2.063.396-.907.041-1.197.051-3.505.051s-2.598-.01-3.505-.051c-.904-.041-1.522-.185-2.063-.395a4.167 4.167 0 01-1.505-.98 4.166 4.166 0 01-.98-1.506c-.21-.54-.355-1.159-.396-2.063C.01 11.098 0 10.808 0 8.5s.01-2.598.051-3.505c.041-.904.185-1.522.395-2.063a4.166 4.166 0 01.98-1.505 4.166 4.166 0 011.506-.98C3.472.236 4.091.091 4.995.05 5.902.01 6.192 0 8.5 0zm0 1.417c-2.307 0-2.58.008-3.491.05-.843.038-1.3.18-1.605.298a2.676 2.676 0 00-.993.646c-.303.302-.49.59-.646.993-.119.305-.26.762-.298 1.605-.042.91-.05 1.184-.05 3.491 0 2.307.008 2.58.05 3.491.038.843.18 1.3.298 1.605.156.403.344.69.646.993.302.303.59.49.993.646.305.119.762.26 1.605.298.91.042 1.184.05 3.491.05 2.307 0 2.58-.008 3.491-.05.843-.038 1.3-.18 1.605-.297.403-.157.69-.345.993-.647.303-.302.49-.59.646-.993.119-.305.26-.762.298-1.605.042-.91.05-1.184.05-3.491 0-2.307-.008-2.58-.05-3.491-.038-.843-.18-1.3-.297-1.605a2.677 2.677 0 00-.647-.993 2.676 2.676 0 00-.993-.646c-.305-.119-.762-.26-1.605-.298-.91-.042-1.184-.05-3.491-.05zm0 2.833a4.25 4.25 0 110 8.5 4.25 4.25 0 010-8.5zm0 7.083a2.833 2.833 0 100-5.666 2.833 2.833 0 000 5.666zm5.667-7.437a1.063 1.063 0 11-2.125 0 1.063 1.063 0 012.125 0z" />
        </svg>
      </a>

      <a href="#" className="hover:text-primary">
        <svg
          className="h-5 w-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.4 2.013a8.175 8.175 0 01-2.403.675 4.282 4.282 0 001.84-2.374 8.243 8.243 0 01-2.66 1.04A4.127 4.127 0 0014.124 0C11.813 0 9.94 1.922 9.94 4.291c0 .337.035.663.107.978C6.57 5.089 3.486 3.383 1.42.783a4.37 4.37 0 00-.566 2.16 4.32 4.32 0 001.862 3.572A4.11 4.11 0 01.819 5.98v.053c0 2.08 1.443 3.815 3.359 4.208-.351.1-.721.15-1.103.15-.27 0-.533-.025-.788-.076.533 1.705 2.077 2.946 3.91 2.98A8.264 8.264 0 010 15.072 11.653 11.653 0 006.416 17c7.699 0 11.908-6.539 11.908-12.21 0-.187-.004-.373-.011-.556A8.589 8.589 0 0020.4 2.013z" />
        </svg>
      </a>

      <a href="#" className="hover:text-primary">
        <svg
          className="h-5 w-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.08 17H.938A.938.938 0 010 16.062V.938C0 .42.42 0 .938 0h15.124c.518 0 .938.42.938.938v15.124c0 .518-.42.938-.938.938H11.73v-6.583h2.21l.33-2.566h-2.54V6.213c0-.743.206-1.249 1.271-1.249h1.359V2.668a18.16 18.16 0 00-1.98-.101c-1.959 0-3.3 1.195-3.3 3.39v1.893H6.865v2.566H9.08V17z" />
        </svg>
      </a>

      <a href="#" className="hover:text-primary">
        <svg
          className="h-5 w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 12V5l6 3.512L10 12zm13.76-8.333s-.235-1.665-.954-2.399C21.893.305 20.87.301 20.401.245 17.043 0 12.005 0 12.005 0h-.01S6.957 0 3.599.245c-.47.056-1.492.06-2.406 1.023-.719.734-.953 2.4-.953 2.4S0 5.622 0 7.577v1.835c0 1.956.24 3.912.24 3.912s.234 1.665.953 2.399c.914.962 2.113.932 2.647 1.033C5.76 16.943 12 17 12 17s5.043-.008 8.401-.252c.47-.057 1.492-.062 2.405-1.025.72-.733.954-2.398.954-2.398s.24-1.956.24-3.912V7.579c0-1.956-.24-3.912-.24-3.912z" />
        </svg>
      </a>

      <a href="#" className="hover:text-primary">
        <svg
          className="h-5 w-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.5 0a8.5 8.5 0 00-3.412 16.285c-.023-.592-.003-1.306.148-1.952.164-.69 1.093-4.631 1.093-4.631s-.27-.543-.27-1.345c0-1.26.73-2.2 1.639-2.2.773 0 1.146.58 1.146 1.276 0 .777-.495 1.94-.75 3.016-.213.902.451 1.637 1.341 1.637 1.61 0 2.695-2.068 2.695-4.52 0-1.861-1.255-3.256-3.537-3.256-2.577 0-4.184 1.922-4.184 4.07 0 .741.218 1.263.56 1.667.158.187.179.26.122.475-.04.155-.134.532-.173.681-.057.215-.23.293-.425.213-1.188-.485-1.741-1.785-1.741-3.247 0-2.414 2.036-5.311 6.074-5.311 3.246 0 5.382 2.35 5.382 4.87 0 3.334-1.853 5.825-4.587 5.825-.917 0-1.78-.495-2.076-1.058 0 0-.494 1.958-.598 2.336-.18.655-.533 1.31-.856 1.82A8.5 8.5 0 0017 8.501 8.5 8.5 0 008.5 0z" />
        </svg>
      </a>
    </div>
  </div>
);

export default MobileFooter;
