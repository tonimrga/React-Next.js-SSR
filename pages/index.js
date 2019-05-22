import dynamic from 'next/dynamic';
import Link from 'next/link';

const Header = dynamic(() => import('./header'));

function IndexPage() {
  return (
    <div>
      <Header title="This is index" />
      <h1>Hello this is a home page.</h1>
      <Link href="/about">
        <a>Go to about page</a>
      </Link>{' '}

      <br/>
      <h3>Posts - routes with params</h3>
      <Link href="/post?title=title1" as="post/title1">
        <a>Post 1</a>
      </Link>
      <br/>
      <Link href="/post?title=title2" as="post/title2">
        <a>Post 2</a>
      </Link>

    </div>
  );
}

export default IndexPage;
