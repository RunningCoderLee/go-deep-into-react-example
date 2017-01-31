import React from 'react';
import App from './Content';
import Example from '../chapter1';

const Repo = ({ params }) => (
  <div>
    <h2>{params.repoName}</h2>
    { (params.repoName === 'react') ? <Example /> : <App /> }
  </div>
);

Repo.propTypes = {
  params: React.PropTypes.shape({
    repoName: React.PropTypes.string,
  }),
};

export default Repo;
