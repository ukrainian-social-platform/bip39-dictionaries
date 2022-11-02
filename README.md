# Support Ukraine <img alt="ukraine" height="32" width="32" src="https://github.githubassets.com/images/icons/emoji/unicode/1f1fa-1f1e6.png">

While you're reading this text we're suffering from russia's bombs. Please help us to stand against russia's invasion and prevent World War III. It's pretty easy with **[UNITED24 fundraising platform](https://u24.gov.ua/)**. Thank you!

## Ukrainian Social Platform BIP39 dictionaries

[![License][license_badge]][license] [![Runtime][runtime_badge]][runtime] [![Node.js version][runtime_version_badge]][runtime]  
[![Build][build_badge]][build_action] [![GitHub release][release_badge]][releases] [![NPM release][npm_version_badge]][npm_link]

[license_badge]: https://img.shields.io/github/license/ukrainian-social-platform/bip39-dictionaries?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSIjRkZENzAwIj48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTMgNmwzIDFtMCAwbC0zIDlhNS4wMDIgNS4wMDIgMCAwMDYuMDAxIDBNNiA3bDMgOU02IDdsNi0ybTYgMmwzLTFtLTMgMWwtMyA5YTUuMDAyIDUuMDAyIDAgMDA2LjAwMSAwTTE4IDdsMyA5bS0zLTlsLTYtMm0wLTJ2Mm0wIDE2VjVtMCAxNkg5bTMgMGgzIi8%2BPC9zdmc%2BCg%3D%3D&label=License&style=flat-square
[runtime_badge]: https://img.shields.io/badge/Runtime-Node.js-339933?logo=nodedotjs&logoColor=339933&style=flat-square
[runtime_version_badge]: https://img.shields.io/badge/dynamic/json?label=Node.js%20version&query=%24.engines.node&url=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2F%40ukrainian-social-platform%2Fbip39-dictionaries%2Fpackage.json&color=339933&logo=nodedotjs&logoColor=339933&style=flat-square
[build_badge]: https://img.shields.io/github/workflow/status/ukrainian-social-platform/bip39-dictionaries/Node.js%20Package?style=flat-square&label=Build&logo=github
[release_badge]: https://img.shields.io/github/v/release/ukrainian-social-platform/bip39-dictionaries?label=GitHub%20release&logo=github&style=flat-square
[npm_version_badge]: https://img.shields.io/npm/v/%40ukrainian-social-platform%2Fbip39-dictionaries?color=cb3837&label=NPM%20release&logo=npm&style=flat-square

[license]: https://github.com/ukrainian-social-platform/bip39-dictionaries/blob/master/LICENSE
[runtime]: https://nodejs.org/
[build_action]: https://github.com/ukrainian-social-platform/bip39-dictionaries/actions/workflows/package.yml
[releases]: https://github.com/ukrainian-social-platform/bip39-dictionaries/releases
[npm_link]: https://www.npmjs.com/package/%40ukrainian-social-platform%2Fbip39-dictionaries


A set of BIP39 dictionaries for Ukrainian Social Platform that's compiled to JS with lazy loading.  
Chunked by languages to make only needed data be fetched.  
Builds itself using [tsup](https://tsup.egoist.dev).

### Available dictionaries

| Language            | Source/Author                                                                 | License                    |
|---------------------|-------------------------------------------------------------------------------|----------------------------|
| Chinese Simplified  | [bitcoinjs/bip39][chinese_simplified]                                         | [ISC][bitcoinjs/bip39/ISC] |
| Chinese Traditional | [bitcoinjs/bip39][chinese_traditional]                                        | [ISC][bitcoinjs/bip39/ISC] |
| Czech               | [bitcoinjs/bip39][czech]                                                      | [ISC][bitcoinjs/bip39/ISC] |
| English             | [bitcoinjs/bip39][english]                                                    | [ISC][bitcoinjs/bip39/ISC] |
| French              | [bitcoinjs/bip39][french]                                                     | [ISC][bitcoinjs/bip39/ISC] |
| Italian             | [bitcoinjs/bip39][italian]                                                    | [ISC][bitcoinjs/bip39/ISC] |
| Japanese            | [bitcoinjs/bip39][japanese]                                                   | [ISC][bitcoinjs/bip39/ISC] |
| Korean              | [bitcoinjs/bip39][korean]                                                     | [ISC][bitcoinjs/bip39/ISC] |
| Polish              | [Karol Trzeszczkowski][KarolTrzeszczkowski] in [bitcoin/bips#1037][polish_pr] | Unlicensed                 |
| Portuguese          | [bitcoinjs/bip39][portuguese]                                                 | [ISC][bitcoinjs/bip39/ISC] |
| Spanish             | [bitcoinjs/bip39][spanish]                                                    | [ISC][bitcoinjs/bip39/ISC] |
| Ukrainian           | [Bohdat][Bohdat] in [bitcoin/bips#442][ukrainian_pr]                          | Unlicensed                 |


[bitcoinjs/bip39/ISC]: https://github.com/bitcoinjs/bip39/blob/master/LICENSE

[chinese_simplified]: https://github.com/bitcoinjs/bip39/blob/master/src/wordlists/chinese_simplified.json
[chinese_traditional]: https://github.com/bitcoinjs/bip39/blob/master/src/wordlists/chinese_traditional.json
[czech]: https://github.com/bitcoinjs/bip39/blob/master/src/wordlists/czech.json
[english]: https://github.com/bitcoinjs/bip39/blob/master/src/wordlists/english.json
[french]: https://github.com/bitcoinjs/bip39/blob/master/src/wordlists/french.json
[italian]: https://github.com/bitcoinjs/bip39/blob/master/src/wordlists/italian.json
[japanese]: https://github.com/bitcoinjs/bip39/blob/master/src/wordlists/japanese.json
[korean]: https://github.com/bitcoinjs/bip39/blob/master/src/wordlists/korean.json
[portuguese]: https://github.com/bitcoinjs/bip39/blob/master/src/wordlists/portuguese.json
[spanish]: https://github.com/bitcoinjs/bip39/blob/master/src/wordlists/spanish.json

[polish_pr]: https://github.com/bitcoin/bips/pull/1037
[KarolTrzeszczkowski]: https://github.com/KarolTrzeszczkowski

[ukrainian_pr]: https://github.com/bitcoin/bips/pull/442
[Bohdat]: https://github.com/Bohdat
