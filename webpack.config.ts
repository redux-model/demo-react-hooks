import webpackGenius from 'webpack-genius';

export default webpackGenius(8080, (genius) => {
  genius
    .entry('./src/entries/index.tsx')
    .devtool('source-map')
    .pluginHtml((plugin) => {
      plugin.setTemplate('./src/entries/index.html');
    })
});
