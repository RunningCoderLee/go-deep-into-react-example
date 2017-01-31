import React from 'react';

const ChapterThree = ({ children }) => (
  <div>{children}</div>
);

ChapterThree.propTypes = {
  children: React.PropTypes.node,
};

export default ChapterThree;
