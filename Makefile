LESS=assets/less/style.less
CSS=assets/style.css
proofOpts=--allow-hash-href --assume-extension --empty-alt-ignore #--disable-external
proofFile=proofReport.txt

all: site

site:
	jekyll build

preview:
	jekyll serve --watch --incremental

theme:
	lessc --clean-css $(LESS) > assets/style.css

themedev: # an alias for make assets/style.css
	make $(CSS)

$(CSS): $(LESS)
	lessc $(LESS) > assets/style.css

full: theme site

proof:
	# This checks for broken links and such.
	# This requires you have the html-proofer gem installed.
	htmlproofer _site $(proofOpts) 2>&1 | tee $(proofFile)

clean:
	rm -rf _site
