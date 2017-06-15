# Liesbeth Aerts - Online Home

## Build Translations

### English
ng build --aot

### Dutch
ng xi18n --out-file=locale/messages.nl.xlf --locale=nl --i18n-format=xlf

(then translate file at src/locale/messages.nl.xlf)

ng build --i18n-file=src/locale/messages.nl.xlf --locale=nl --i18n-format=xlf --aot

When placing the localized app in subdirectory on domain (eg. website.com/nl), this needs to be reflected in paths to scripts in index.html
