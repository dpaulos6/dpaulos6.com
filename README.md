# Portfolio

This is a repo where I store the source code of my personal portfolio, so I can then deploy to [Vercel](https://vercel.com/) and make it publicly available, using my custom domain - [https://dpaulos6.xyz/](https://dpaulos6.xyz).

## Inspiration / Meaning

This website is an attempt to describe who I am as a person, using a color palette I truly find relaxing. All of the content included and design of the website is as much unique as my creativity allows, trying to reflect my style and vibe.

<!-- The works included were made by me, some of them were projects of my own ideas, some of them were internship or real client projects. -->

## Development

This project was built using NextJS + TypeScript, and below are the steps to run it locally on your system.

### Warn: Install PNPM

You will be required to have pnpm to install the modules, if you don't have it follow the instructions on their [documentation](https://pnpm.io/installation).

### Install dependencies

This step is mandatory because the modules folder is not included in the repository, and this command will install every module locally on your project's root folder.

```bash
pnpm install
```

### Run the development server

This command will run a local server to host the project, which allows you to preview and see changes with auto refresh.

```bash
pnpm run dev
```

### Formatting

This project has a package called Prettier, which formats code in the entire project. There will be two files related to this package, which `.prettierrc` holds configuration to how the formatter should behave and `.prettierignore` defines files or folders that the formatter wont apply changes.

If you have made changes and want to stay within the format i've set, you can do so by running:

```bash
pnpm exec prettier --write .
```

You can also setup a custom script to run this, by adding the following to `package.json`:

```json
"scripts": {
  //...
  "format": "prettier --write ."
},
```

And then running:

```bash
pnpm run format
```

### Errors during setup

If any errors occur to you during the setup, please research about the errors or refer to [Pnpm](https://pnpm.io/) or [Next](https://nextjs.org/).

If you've researched about the errors but it seems to be related with the repo itself, create an issue on this repository and I will do my best to help you.

## Contributing

This is a special project, as it will reflect my person on a website, but if you have a suggestion or can help me improve something about the website, please see my [contacts](#contacts) and talk directly with me before attempting pull requests.

Alternatively, you can create an issue and include `Contributing:` at the start of the title.

## Contacts

In general, my @ is always **dpaulos6** on all social medias, but here is a list of the ones I most use:

- [Instagram](https://www.instagram.com/dpaulos6/)
- [LinkedIn](https://www.linkedin.com/in/dpaulos6/)
- [GitHub](https://www.github.com/dpaulos6/)
- [Discord Server](https://discord.gg/Y7ujpKmmma)
