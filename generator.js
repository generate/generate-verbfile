'use strict';

var isValid = require('is-valid-app');

module.exports = function(app) {
  if (!isValid(app, 'generate-verbfile')) return;

  /**
   * Generate a `verbfile.js` file to the current working directory.
   *
   * ```sh
   * $ gen verbfile
   * $ gen verbfile --dest ./docs
   * ```
   * @name verbfile
   * @api public
   */

  app.task('default', ['verbfile']);
  app.task('verbfile', function(cb) {
    return app.src('templates/verbfile.js', {cwd: __dirname})
      .pipe(app.conflicts(app.cwd))
      .pipe(app.dest(app.cwd));
  });
};
