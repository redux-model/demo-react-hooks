import webpackGenius from 'webpack-genius';

export default webpackGenius(3000, (genius) => {
  genius.devtool('source-map');
});
