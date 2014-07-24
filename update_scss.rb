#!/usr/bin/ruby

data = File.read("prepared/_boundless-icon-font-rails.scss") 
data.gsub!('       font-url("boundless-icon-font/boundless-icon-font.svg#boundless-icon-font") format("svg");','       font-url("boundless-icon-font/boundless-icon-font.svg#boundless-icon-font") format("svg"),
       asset-data-url("boundless-icon-font/boundless-icon-font.woff") format("woff");')
File.open("prepared/_boundless-icon-font-rails.scss","w") do |file|
  file.puts data
end