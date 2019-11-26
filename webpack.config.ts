import webpackGenius from 'webpack-genius';

export default webpackGenius(8080, (genius) => {
  genius
    .entry('./src/entries/index.tsx')
    .pluginHtml((html) => {
      html.setTemplate('./src/entries/index.html');
    });
});
