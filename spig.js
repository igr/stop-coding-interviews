const { Spig } = require('spignite');

Spig.hello();

Spig
  .on('/**/*.{md,njk}')
  ._('INIT')
  .pageMeta()
  .pageLinks()
  ._('RENDER')
  .render()
  .applyTemplate()
  .htmlMinify()
;


// IMAGES

Spig
  .on('/**/*.{png,jpg,gif}')
  ._('INIT')
  .assetLinks()
  ._('IMG')
  .imageMinify()
;

Spig.run();
