# generate-verbfile docs

- [CLI Usage](#cli-usage)
  * [Running tasks](#running-tasks)
  * [Available tasks](#available-tasks)
- [API usage](#api-usage)
  * [Install locally](#install-locally)
  * [Use as a plugin](#use-as-a-plugin)
  * [Register as a generator](#register-as-a-generator)
- [Running multiple generators](#running-multiple-generators)
  * [generate-install](#generate-install)
  * [generate-dest](#generate-dest)
- [Customization](#customization)
  * [Destination directory](#destination-directory)
  * [Overriding templates](#overriding-templates)

## CLI Usage

### Running tasks

Tasks on `generate-verbfile` are run by passing the name of the task to run after the generator name, delimited by a comma:

```sh
$ gen verbfile:foo
       ^       ^
generator     task
```

**Example**

The following will run generator `foo`, task `bar`:

```sh
$ gen foo:bar
```

**Default task**

When a task name is not explicitly passed on the command line, Generate's CLI will run the [default](#default) task.

### Available tasks

#### [verbfile](generator.js#L19)

Generate a `verbfile.js` file to the current working directory.

**Example**

```sh
$ gen verbfile
$ gen verbfile --dest ./docs
```

Visit Generate's [documentation for tasks](https://github.com/generate/generate/blob/master/docs/tasks.md).

## API usage

Use `generate-verbfile` as a [plugin](https://github.com/generate/generate/blob/master/docs/plugins.md) in your own [generator](https://github.com/generate/generate/blob/master/docs/generators.md).

### Install locally

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save generate-verbfile
```

### Use as a plugin

When used as a plugin, tasks from `generate-verbfile` are added to your generator's instance.

```js
module.exports = function(app) {
  app.use(require('generate-verbfile'));
  // do generator stuff
};
```

**Running tasks**

You can now run any tasks from `generate-verbfile` as if they were part of your own generator.

```js
module.exports = function(app) {
  app.use(require('generate-verbfile'));

  app.task('foo', function(cb) {
    // do task stuff
    cb();
  });

  // run the `mit` task from `generate-verbfile`
  app.task('default', ['foo', 'mit']);
};
```

### Register as a generator

When registered as a generator, tasks from `generate-verbfile` are added to the "namespace" you give to the generator.

```js
module.exports = function(app) {
  app.register('foo', require('generate-verbfile'));
  // generate
};
```

**Running tasks**

Pass the names of one or more tasks to run to the `.generate` method, prefixed with the namespace of the sub-generator (`foo`, in our example):

**Examples**

Run the `bar` task from generator `foo`:

```js
module.exports = function(app) {
  app.register('foo', require('generate-verbfile'));

  app.generate('foo:bar', function(err) {
    if (err) console.log(err);
  });
};
```

Wrap the call to `.generate` in a task, so it can be called on demand:

```js
module.exports = function(app) {
  app.register('foo', require('generate-verbfile'));

  app.task('bar', function(cb) {
    app.generate('foo:bar', cb);
  });
};
```

**More information**

Visit the [generator docs](https://github.com/generate/generate/blob/master/docs/generators.md) to learn more about creating, installing, using and publishing generators.

## Running multiple generators

Generate supports running multiple generators at once. Here are some examples of other generators that work well with `generate-verbfile`.

### generate-install

Run [generate-install](https://github.com/generate/generate-install) **after** this generator to prompt to install any `dependencies` or `devDependencies` necessary for the generated files.

**Example**

![generate-verbfile generate-install example](https://raw.githubusercontent.com/generate/generate-verbfile/master/docs/demo-install.gif)

### generate-dest

Run [generate-dest](https://github.com/generate/generate-dest) **before** this generator to prompt for the destination directory to use for generated files.

**Example**

![generate-verbfile generate-dest example](https://raw.githubusercontent.com/generate/generate-verbfile/master/docs/demo-dest.gif)

## Customization

The following instructions can be used to override settings in `generate-verbfile`. Visit the [Generate documentation](https://github.com/generate/generate/blob/master/docs/overriding-defaults.md) to learn about other ways to override defaults.

### Destination directory

To customize the destination directory, install [generate-dest](https://github.com/generate/generate-dest) globally, then in the command line prefix `dest` before any other generator names.

For example, the following will prompt you for the destination path to use, then pass the result to `generate-verbfile`:

```sh
$ gen dest verbfile
```

### Overriding templates

You can override a template by adding a template of the same name to the `templates` directory in user home.

For example, to override the `foo.tmp` template, add a template at the following path `~/generate/generate-verbfile/templates/foo.tmpl`, where `~/` is the user-home directory that `os.homedir()` resolves to on your system.