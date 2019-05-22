import React from 'react';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./header'));

class Post extends React.Component {
  static async getInitialProps({ query }) {
    const title = query.title;
    return {title};
  }
  render() {
    return (
      <div>
        <Header title={this.props.title} />
        <h1>This is a post with id: {this.props.title}</h1>
      </div>
    );
  }
}

export default Post;
