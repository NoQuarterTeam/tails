# tails

CLI for generating TypeGraphQL + TypeORM backend code

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/tails.svg)](https://npmjs.org/package/tails)
[![CircleCI](https://circleci.com/gh/NoQuarterTeam/tails/tree/master.svg?style=shield)](https://circleci.com/gh/NoQuarterTeam/tails/tree/master)
[![Codecov](https://codecov.io/gh/NoQuarterTeam/tails/branch/master/graph/badge.svg)](https://codecov.io/gh/NoQuarterTeam/tails)
[![Downloads/week](https://img.shields.io/npm/dw/tails.svg)](https://npmjs.org/package/tails)
[![License](https://img.shields.io/npm/l/tails.svg)](https://github.com/NoQuarterTeam/tails/blob/master/package.json)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
  <!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g tails

$ tails COMMAND
running command...

$ tails (-v|--version|version)
tails/0.0.0 darwin-x64 node-v12.1.0
```

<!-- usagestop -->

# Commands

<!-- commands -->

## `tails scaffold`

If `user` is supplied to the first prompt, it will generate these files in src/modules

```
modules/
  user.entity.ts
  user.resolver.ts
  user.service.ts
  user.repository.ts
  inputs/
    createUser.input.ts
    updateUser.input.ts
```

It provides basic CRUD actions broken up into organized services.

If `firstName:string lastName:string` is supplied to the second prompt, these fields will be added to the entity and input files along with their types.

```
USAGE
  $ tails scaffold
```

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
