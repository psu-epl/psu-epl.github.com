LESS=assets/less/style.less
CSS=assets/style.css
proofOpts=--allow-hash-href --assume-extension --empty-alt-ignore #--disable-external
proofFile=proofReport.txt

# As part of the bundler package ruby creates a local environment
exec=bundle exec

all: site

site:
	$(exec) jekyll build

preview:
	$(exec) jekyll serve --watch --incremental

host:
	$(exec) jekyll serve --watch --incremental -H $(shell hostname)

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
