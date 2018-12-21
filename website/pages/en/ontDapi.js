const React = require('react');

class OntDapi extends React.Component {
  render() {
    return (
      <iframe
        frameBorder={'0'}
        width={'100%'}
        height={'100%'}
        src='https://ontdapidocs.o3.network'
      />
    );
  }
}

module.exports = OntDapi;
