# generate-verbfile [![NPM version](https://img.shields.io/npm/v/generate-verbfile.svg?style=flat)](https://www.npmjs.com/package/generate-verbfile) [![NPM downloads](https://img.shields.io/npm/dm/generate-verbfile.svg?style=flat)](https://npmjs.org/package/generate-verbfile) [![Build Status](https://img.shields.io/travis/generate/generate-verbfile.svg?style=flat)](https://travis-ci.org/generate/generate-verbfile)

> Generate a verbfile.js in the current working directory or specified `--dest`.

![generate-verbfile demo](https://raw.githubusercontent.com/generate/generate-verbfile/master/demo.gif)

## Table of Contents

- [What is "Generate"?](#what-is-generate)
- [Command line usage](#command-line-usage)
  * [Install](#install)
  * [Run](#run)
  * [Help](#help)
- [Next steps](#next-steps)
- [About](#about)

_(TOC generated by [verb](https://github.com/verbose/verb) using [markdown-toc](https://github.com/jonschlinkert/markdown-toc))_

## What is "Generate"?

Generate is a command line tool and developer framework for scaffolding out new GitHub projects using [generators](https://github.com/generate/generate/blob/master/docs/generators.md) and [tasks](https://github.com/generate/generate/blob/master/docs/tasks.md). Answers to prompts and the user's environment can be used to determine the templates, directories, files and contents to build. Support for [gulp](http://gulpjs.com), [base](https://github.com/node-base/base) and [assemble](https://github.com/assemble/assemble) plugins, and much more.

For more information about Generate:

* Visit the [generate project](https://github.com/generate/generate)
* Visit the [generate documentation](https://github.com/generate/generate/blob/master/docs/)
* Find [generators on npm](https://www.npmjs.com/browse/keyword/generate-generator) (help us [author generators](https://github.com/generate/generate/blob/master/docs/micro-generators.md))

<br>

## Command line usage

### Install

**Installing the CLI**

To run the `verbfile` generator from the command line, you'll need to install [generate](https://github.com/generate/generate) globally first. You can do that now with the following command:

```sh
$ npm install --global generate
```

This adds the `gen` command to your system path, allowing it to be run from any directory.

**Install generate-verbfile**

You may now install this module with the following command:

```sh
$ npm install --global generate-verbfile
```

### Run

You should now be able to run `generate-verbfile` with the following command:

```sh
$ gen verbfile
```

**What will happen?**

Running `$ gen verbfile` will run the generator's [default task](#default), which will:

1. prompt you for any information that's missing
2. render the necessary template(s) using your answers
3. write [the resulting files](#available-tasks) to the current working directory

**What you should see in the terminal**

If completed successfully, you should see both `starting` and `finished` events in the terminal, like the following:

```sh
[00:44:21] starting ...
...
[00:44:22] finished ✔
```

If you do not see one or both of those events, please [let us know about it](../../issues).

### Help

To see a general help menu and available commands for Generate's CLI, run:

```sh
$ gen help
```

<br>

## Next steps

* [docs.md](docs.md): additional documentation for this generator
* [Generate documentation](https://github.com/generate/generate/blob/master/docs/): visit the Generate docs
* [Generate repo](https://github.com/generate/generate): visit the Generate repository

## About

### Related projects

* [assemble](https://www.npmjs.com/package/assemble): Get the rocks out of your socks! Assemble makes you fast at creating web projects… [more](https://github.com/assemble/assemble) | [homepage](https://github.com/assemble/assemble "Get the rocks out of your socks! Assemble makes you fast at creating web projects. Assemble is used by thousands of projects for rapid prototyping, creating themes, scaffolds, boilerplates, e-books, UI components, API documentation, blogs, building websit")
* [generate](https://www.npmjs.com/package/generate): Command line tool and developer framework for scaffolding out new GitHub projects. Generate offers the… [more](https://github.com/generate/generate) | [homepage](https://github.com/generate/generate "Command line tool and developer framework for scaffolding out new GitHub projects. Generate offers the robustness and configurability of Yeoman, the expressiveness and simplicity of Slush, and more powerful flow control and composability than either.")
* [update](https://www.npmjs.com/package/update): Be scalable! Update is a new, open source developer framework and CLI for automating updates… [more](https://github.com/update/update) | [homepage](https://github.com/update/update "Be scalable! Update is a new, open source developer framework and CLI for automating updates of any kind in code projects.")
* [verb](https://www.npmjs.com/package/verb): Documentation generator for GitHub projects. Verb is extremely powerful, easy to use, and is used… [more](https://github.com/verbose/verb) | [homepage](https://github.com/verbose/verb "Documentation generator for GitHub projects. Verb is extremely powerful, easy to use, and is used on hundreds of projects of all sizes to generate everything from API docs to readmes.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

### License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/generate/generate-verbfile/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on July 15, 2016._