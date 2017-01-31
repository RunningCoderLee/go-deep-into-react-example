import React from 'react';

const ChapterEight = ({ children }) => (
  <div>{children}</div>
);

ChapterEight.propTypes = {
  children: React.PropTypes.node,
};

export default ChapterEight;
