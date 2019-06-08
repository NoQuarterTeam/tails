# tails

CLI for generating TypeGraphQL + TypeORM backend code

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/tails-cli.svg)](https://npmjs.org/package/tails-cli)
[![CircleCI](https://circleci.com/gh/NoQuarterTeam/tails/tree/master.svg?style=shield)](https://circleci.com/gh/NoQuarterTeam/tails/tree/master)
[![Codecov](https://codecov.io/gh/NoQuarterTeam/tails/branch/master/graph/badge.svg)](https://codecov.io/gh/NoQuarterTeam/tails)
[![Downloads/week](https://img.shields.io/npm/dw/tails-cli.svg)](https://npmjs.org/package/tails-cli)
[![License](https://img.shields.io/npm/l/tails.svg)](https://github.com/NoQuarterTeam/tails/blob/master/package.json)

<!-- toc -->

- [Install](#install)
- [Commands](#commands)
  <!-- tocstop -->

# Install

<!-- install -->

```sh-session
$ yarn global add tails-cli
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`tails help [COMMAND]`](#tails-help-command)
- [`tails scaffold`](#tails-scaffold)

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
