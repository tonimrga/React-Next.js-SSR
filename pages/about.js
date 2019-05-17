import Head from 'next/head';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Header = dynamic(() => import('./header'));

function IndexPage() {
  return (
    <div>
      <Header title="This is about" />
      <h1>Hello this is about page.</h1>
      <Link href="/">
        <a>Back to Home page</a>
      </Link>{' '}
    </div>
  );
}

export default IndexPage;
