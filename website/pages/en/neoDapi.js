const React = require('react');

class NeoDapi extends React.Component {
  render() {
    return (
      <iframe
        frameBorder={'0'}
        width={'100%'}
        height={'100%'}
        src='https://neodapidocs.o3.network'
      />
    );
  }
}

module.exports = NeoDapi;
