# <%= name %>

[![Beerpay](https://beerpay.io/<%= githubUsername %>/<%= name %>/badge.svg?style=beer-square)](https://beerpay.io/<%= githubUsername %>/<%= name %>)
[![Beerpay](https://beerpay.io/<%= githubUsername %>/<%= name %>/make-wish.svg?style=flat-square)](https://beerpay.io/<%= githubUsername %>/<%= name %>?focus=wish)
[![GitHub stars](https://img.shields.io/github/stars/<%= githubUsername %>/<%= name %>.svg?style=social&label=Stars)](<%= repository %>)

> <%= description %>

Please ★ this repo if you found it useful ★ ★ ★

<% if (features && features.length > 0) { %>
## Features
<% for (var i in features) { %>
* <%= features[i] %><% } %>
<% } %><% if (demo && demo.length > 0) { %>
## Demo

See a [demo](<%= demo %>)
<% } %>
<% if (installation && installation.length > 0) { %>
## Installation

```sh
<%= installation %>
```
<% } %>
<% if (dependencies && dependencies.length > 0) { %>
## Dependencies
<% for (var i in dependencies) { %>
* [<%= dependencies[i].name %>](<%= dependencies[i].url %>)<% } %>
<% } %>

## Usage

[Contribute](<%= repository %>/blob/master/CONTRIBUTING.md) usage docs


## Support

Submit an [issue](<%= repository %>/issues/new)


## Screenshots

[Contribute](<%= repository %>/blob/master/CONTRIBUTING.md) a screenshot


## Contributing

Review the [guidelines for contributing](<%= repository %>/blob/master/CONTRIBUTING.md)


## License

[<%= license %> License](<%= repository %>/blob/master/LICENSE)

[<%= authorName %>](<%= authorUrl %>) © <%= new Date().getFullYear() %>


## Changelog

Review the [changelog](<%= repository %>/blob/master/CHANGELOG.md)


## Credits

* [<%= authorName %>](<%= authorUrl %>) - Author


## Support on Beerpay (actually, I drink coffee)

A ridiculous amount of coffee ☕ ☕ ☕ was consumed in the process of building this project.

[Add some fuel](https://beerpay.io/<%= githubUsername %>/<%= name %>) if you'd like to keep me going!

[![Beerpay](https://beerpay.io/<%= githubUsername %>/<%= name %>/badge.svg?style=beer-square)](https://beerpay.io/<%= githubUsername %>/<%= name %>)
[![Beerpay](https://beerpay.io/<%= githubUsername %>/<%= name %>/make-wish.svg?style=flat-square)](https://beerpay.io/<%= githubUsername %>/<%= name %>?focus=wish)
