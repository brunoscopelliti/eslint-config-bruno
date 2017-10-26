# eslint-config-bruno

An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) for JavaScript that makes [Bruno](https://brunoscopelliti.com/) happy.

It's a fork of [StandardJS](https://standardjs.com).

## Differences from StandardJS

This configuration extends StandardJS, and diverges from it in the following aspects:

* [semi](https://eslint.org/docs/rules/semi#always): Semicolons always, but no [extra semicolons](https://eslint.org/docs/rules/no-extra-semi).

* [quotes](https://eslint.org/docs/rules/quotes#double): Double quotes.

* [curly](https://eslint.org/docs/rules/curly#all): Always use curly braces after `if`, `while`, `for`...

## Install

```bash
npm install eslint-config-bruno
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

Then, add this to your .eslintrc file:

```
{
  "extends": "bruno"
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.
