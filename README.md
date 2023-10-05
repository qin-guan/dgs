# `dgs`

Singapore's national open data collection.

This workspace uses [nx](https://nx.dev). It's recommended to install `nx` globally:

```shell
npm i -g nx # or
pnpm i -g nx
```

The NX Cloud access token used by default is `read-only`.

To configure a `read-write` token, create `nx-cloud.env` with the following content:

```env
NX_CLOUD_ACCESS_TOKEN=your_token
```

## Generate code

If you happen to use Nx plugins, you can leverage code generators that might come with it.

Run `nx list` to get a list of available plugins and whether they have generators. Then run `nx list <plugin-name>` to see what generators are available.

Learn more about [Nx generators on the docs](https://nx.dev/plugin-features/use-code-generators).

## Running tasks

To execute tasks with Nx use the following syntax:

```shell
nx <target> <project> <...options>
```

You can also run multiple targets:

```shell
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```shell
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

## Development

Scripts are added for commonly used tasks.

Starting the development servers:

```shell
pnpm dev
```

Building all projects:

```shell
pnpm build
```

Linting all projects:

```shell
pnpm lint
pnpm lint:fix 
```

Run tests for all projects:

```shell
pnpm test
```
