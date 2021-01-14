import path from 'path';

export default function About({ filePath }) {
  return (
    <div>
      <h1>About This Site</h1>
      <p>{filePath}</p>
    </div>
  );
}

export function getStaticProps() {
  const filePath = path.join('test', 'directory', 'file.js');

  return {
    props: {
      filePath,
      layout: 'page',
    },
  };
}
