import { SEO } from '../components';

const Home = () => (
  <>
    <SEO title="Title" description="description" />
    <div className="p-4 shadow rounded bg-white">
      <h1 className="text-primary">Scizzor</h1>
      <h2 className="text-secondary">Scizzor</h2>
      <h3 className="text-tertiary">Scizzor</h3>
      <h4 className="text-alt-1">Scizzor</h4>
      <p className="p-lg text-alt-2">Scizzor</p>
      <p>Scizzor</p>
      <p className="p-sm">Scizzor</p>

      <button className="btn btn-lg">Button</button>
      <button className="btn btn-sm ml-2">Button</button>
    </div>
  </>
);

export default Home;
