import { useRouter } from 'next/router';
import Image from 'next/image';

export default function BlogPost({ name, image }) {
  const router = useRouter();

  return router.isFallback ? (
    <p>loading...</p>
  ) : (
    <div>
      <h1>Viewing {name}</h1>
      <Image
        src={image}
        alt={name}
        layout="responsive"
        width={300}
        height={300}
      />
    </div>
  );
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  const data = await fetch(
    `https://rickandmortyapi.com/api/character/${slug}`,
  ).then((res) => res.json());

  return {
    props: {
      ...data,
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: '1',
        },
      },
      {
        params: {
          slug: '2',
        },
      },
      {
        params: {
          slug: '3',
        },
      },
    ],
    fallback: 'blocking',
  };
}
