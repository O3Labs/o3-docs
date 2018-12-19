const React = require('react');

class NeoDapi extends React.Component {
  render() {
    return (
      <iframe
        frameBorder={'0'}
        width={'100%'}
        height={'100%'}
        src='http://network.o3.docs.neodapi.s3-website-ap-northeast-1.amazonaws.com'
      />
    );
  }
}

module.exports = NeoDapi;
