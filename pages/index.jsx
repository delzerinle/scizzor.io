import { SEO, Auth } from '@components';

const Home = () => (
  <>
    <SEO title="Home" description="description" />
    <Auth title="Join Scizzor & Increase Your Instore Appointments">
      <div className="p-4 shadow rounded bg-white">
        <h1 className="text-primary">Scizzor</h1>
        <h2 className="text-secondary">Scizzor</h2>
        <h3 className="text-tertiary">Scizzor</h3>
        <h4 className="text-alt-1">Scizzor</h4>
        <p className="p-lg text-alt-2">Scizzor</p>
        <p>Scizzor</p>
        <p className="p-sm">Scizzor</p>

        <button className="btn-lg">Button</button>
        <button className="btn-sm ml-2">Button</button>
      </div>
    </Auth>
  </>
);

export default Home;
