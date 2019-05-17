import Head from 'next/head';
import React from 'react';

class Header extends React.Component {

  static async getInitialProps({ req }) {
    const title = req ? req.headers['title'] : navigator.title;
    return { title };
  }
  render(){
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <meta property="og:title" content={this.props.title} />
        </Head>
      </div>
    );
  }
}

export default Header;
