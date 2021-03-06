# Blank

Minimal, Device agnostic & responsive barebone framework.

The main principles behind this are:

* Reusable
* Maintainable
* Predictable
* Scalable

## Installation

### Bower

```shell
$ bower install --save blank-css
```

### NPM _WIP_

Then you can import the components like so: __The order is important, especially for the config & helpers__

```scss
// Config
@import 'bower_components/blank-css-config/config';
@import 'bower_components/blank-css-rem/rem';
@import 'bower_components/blank-css-mq/mq';

// Global
@import 'bower_components/blank-css-base/base';
@import 'bower_components/blank-css-typography/typography';
@import 'bower_components/blank-css-links/links';
@import 'bower_components/blank-css-lists/lists';
@import 'bower_components/blank-css-media/media';
@import 'bower_components/blank-css-tables/tables';
@import 'bower_components/blank-css-forms/forms';

// Layout & Grid
@import 'bower_components/blank-css-grid/grid';
@import 'bower_components/blank-css-unit/unit';
@import 'bower_components/blank-css-sizes/sizes';

// Components
@import 'bower_components/blank-css-alerts/alerts';
@import 'bower_components/blank-css-badges/badges';
@import 'bower_components/blank-css-box/box';
@import 'bower_components/blank-css-breadcrumbs/breadcrumbs';
@import 'bower_components/blank-css-buttons/buttons';
@import 'bower_components/blank-css-media-object/media-object';
@import 'bower_components/blank-css-nav/nav';
@import 'bower_components/blank-css-pagination/pagination';
@import 'bower_components/blank-css-flag/flag';

// Helper
@import 'bower_components/blank-css-clearfix/clearfix';

```

## Components

All components are available as separate individual components that you can use alone in your projects.

List of components available:
* [blank-css-config](http://github.com/ahmedelgabri/blank-config)
* [blank-css-rem](http://github.com/ahmedelgabri/blank-utilities-rem)
* [blank-css-mq](http://github.com/ahmedelgabri/blank-utilities-mq)
* [blank-css-base](http://github.com/ahmedelgabri/blank-global-base)
* [blank-css-typography](http://github.com/ahmedelgabri/blank-global-typography)
* [blank-css-links](http://github.com/ahmedelgabri/blank-global-links)
* [blank-css-lists](http://github.com/ahmedelgabri/blank-global-lists)
* [blank-css-media](http://github.com/ahmedelgabri/blank-global-media)
* [blank-css-tables](http://github.com/ahmedelgabri/blank-global-tables)
* [blank-css-forms](http://github.com/ahmedelgabri/blank-global-forms)
* [blank-css-grid](http://github.com/ahmedelgabri/blank-layout-grid)
* [blank-css-unit](http://github.com/ahmedelgabri/blank-layout-unit)
* [blank-css-sizes](http://github.com/ahmedelgabri/blank-layout-sizes)
* [blank-css-alerts](http://github.com/ahmedelgabri/blank-component-alerts)
* [blank-css-badges](http://github.com/ahmedelgabri/blank-component-badges)
* [blank-css-box](http://github.com/ahmedelgabri/blank-component-box)
* [blank-css-breadcrumbs](http://github.com/ahmedelgabri/blank-component-breadcrumbs)
* [blank-css-buttons](http://github.com/ahmedelgabri/blank-component-buttons)
* [blank-css-nav](http://github.com/ahmedelgabri/blank-component-nav)
* [blank-css-pagination](http://github.com/ahmedelgabri/blank-component-pagination)
* [blank-css-flag](http://github.com/ahmedelgabri/blank-component-flag)
* [blank-css-media-object](http://github.com/ahmedelgabri/blank-component-media-object)
* [blank-css-clearfix](http://github.com/ahmedelgabri/blank-helper-clearfix)


### NOTE:
blank assumes that you use [Autoprefixer](https://github.com/postcss/autoprefixer) in your workflow.

---
### Browser support

* IE 9+
* Firefox
* Safari 6+
* Chrome
* Opera

##### Built on top of these methodologies
* [OOCSS](https://github.com/stubbornella/oocss)
* [BEM](http://bem.info/method/)
* [Namespacing](http://gabri.me/2013/08/global-scope-namespacing-css/)

##### Inspired by the work of
* [Nicolas Gallagher](https://twitter.com/necolas)
* [Nicole Sullivan](https://twitter.com/stubbornella)
* [Jonathan Snook](https://twitter.com/snookca)
* [Harry Roberts](https://twitter.com/csswizardry)

### LICENSE & COPYRIGHT
The source code and documentation for Blank is licensed under the incredibly permissive [MIT License](http://opensource.org/licenses/MIT).

Copyright © [Ahmed El Gabri](http://gabri.me) | [@ahmedelgabri](https://twitter.com/ahmedelgabri)
