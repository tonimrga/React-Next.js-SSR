import React from 'react';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./header'));

class Post extends React.Component {
  static async getInitialProps({ query }) {
    const id = query.id;
    return {id};
  }
  render() {
    return (
      <div>
        <Header title={this.props.id} />
        <h1>This is a post with id: {this.props.id}</h1>
      </div>
    );
  }
}

export default Post;
