import { SEO, Auth, BrandSignUpForm } from '../components';

const Home = () => (
  <>
    <SEO title="Title" description="description" />
    <Auth>
      <>
        <p className="text-center font-medium md:hidden">
          Create a Brand account
        </p>
        <h3 className="hidden mb-3 md:block">Create a Brand account</h3>
        <p className="text-center text-sm leading-relaxed mb-8 md:text-left md:max-w-xs">
          Create your scizzor brand account to Increase your instore
          appointments
        </p>
        <BrandSignUpForm />
      </>
      {/* <div className="p-4 shadow rounded bg-white">
        <h1 className="text-primary">Scizzor</h1>
        <h2 className="text-secondary">Scizzor</h2>
        <h3 className="text-tertiary">Scizzor</h3>
        <h4 className="text-alt-1">Scizzor</h4>
        <p className="p-lg text-alt-2">Scizzor</p>
        <p>Scizzor</p>
        <p className="p-sm">Scizzor</p>

        <button className="btn-lg">Button</button>
        <button className="btn-sm ml-2">Button</button>
      </div> */}
    </Auth>
  </>
);

export default Home;
