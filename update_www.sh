#!/bin/bash

# make the new shit
fontcustom compile ./svg

# copy the font files over
cp -rf prepared/boundless-icon-font/* ../www/vendor/assets/fonts/boundless-icon-font/

# update the scss
ruby update_scss.rb

# copy the updated font file over
cp -f prepared/_boundless-icon-font-rails.scss ../www/app/assets/stylesheets/global/common