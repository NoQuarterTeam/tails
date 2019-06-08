tails
=====

CLI for generating TypeGraphql backend code

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/tails.svg)](https://npmjs.org/package/tails)
[![CircleCI](https://circleci.com/gh/NoQuarter/tails/tree/master.svg?style=shield)](https://circleci.com/gh/NoQuarter/tails/tree/master)
[![Codecov](https://codecov.io/gh/NoQuarter/tails/branch/master/graph/badge.svg)](https://codecov.io/gh/NoQuarter/tails)
[![Downloads/week](https://img.shields.io/npm/dw/tails.svg)](https://npmjs.org/package/tails)
[![License](https://img.shields.io/npm/l/tails.svg)](https://github.com/NoQuarter/tails/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g tails
$ tails COMMAND
running command...
$ tails (-v|--version|version)
tails/0.0.0 darwin-x64 node-v12.1.0
$ tails --help [COMMAND]
USAGE
  $ tails COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`tails hello [FILE]`](#tails-hello-file)
* [`tails help [COMMAND]`](#tails-help-command)

## `tails hello [FILE]`

describe the command here

```
USAGE
  $ tails hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ tails hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/NoQuarter/tails/blob/v0.0.0/src/commands/hello.ts)_

## `tails help [COMMAND]`

display help for tails

```
USAGE
  $ tails help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src/commands/help.ts)_
<!-- commandsstop -->
