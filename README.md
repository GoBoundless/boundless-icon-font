# Boundless Icon Font

This is an automated system to develop an icon webfont from all .svg files present in the "svg" folder.

It depends on [FontCustom](https://github.com/FontCustom/fontcustom).

## Design Guidelines

- All colors will be rendered identically — including white fills.
- Make transparent colors solid. SVGs with transparency will be skipped.
- For greater precision, prefer fills to strokes (especially if your icon includes curves).
- Keep your icon within a square viewBox. Font Custom scales each SVG to fit a 512x512 canvas with a baseline at 448.
- Setting autowidth to true trims horizontal white space from each glyph. This can be much easier than centering dozens of SVGs by hand.
- See screenshot for .svg export specs. Imprortant: export all SVGs as same size (512x512)

## Installation

```bash
$ brew install fontforge eot-utils ttfautohint
$ gem install fontcustom
```

## Usage

1. Add, or remove .svg files to/from the svg folder
2. run `fontcustom compile` from this directory
3. Visit the styleguide folder to preview your font in the browser.
4. Assuming your www repo is in the same directory as boundless-icon-font, simply run `./update_www.sh`.
5. Commit and push changes to this repo or the next person to alter boundless-icon-font will create conflicts!


### Notes
- Config file is `fontcustom.yml`. These config settings will only be loaded if the fontcustom command is run while in this directory.
