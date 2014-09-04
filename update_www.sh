#!/bin/bash

# copy the font files over
cp -rf prepared/boundless-icon-font/* ../www/vendor/assets/fonts/boundless-icon-font/

# copy the updated scss file over
cp -f prepared/_boundless-icon-font.scss ../www/app/assets/stylesheets/global/common
