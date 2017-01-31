import React from 'react';

const ChapterTwo = ({ children }) => (
  <div>{children}</div>
);

ChapterTwo.propTypes = {
  children: React.PropTypes.node,
};

export default ChapterTwo;
