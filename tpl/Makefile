PATH  := node_modules/.bin:$(PATH)
branch := $(GIT_BRANCH_FOR_MAKE)
now := $(shell date '+%Y%m%d%H%M%S')
EMPTY :=

configFile := config
processFile := process
mochaFile := mocha_config.js

ifeq ($(branch),$(EMPTY))
	branch := test
endif
	
ifeq ("$(branch)", "master")
	configFile := test.$(configFile)
	processFile := test.$(processFile)
	mochaFile := src/test/config/test.$(mochaFile)
else
	configFile := $(branch).$(configFile)
	processFile := $(branch).$(processFile)
	mochaFile := src/test/config/$(branch).$(mochaFile)
endif

ifdef APP_START_UP_TYPE
	configFile := $(configFile).$(APP_START_UP_TYPE).json
	processFile := $(processFile).$(APP_START_UP_TYPE).json
else 
	configFile := $(configFile).json
	processFile := $(processFile).json
endif

# SPACE := $(EMPTY) $(EMPTY)
# CONFIG_FILE = $(subst $(SPACE),,$(configFile))
# PROCESS_FILE = $(subst $(SPACE),,$(processFile))


#.RECIPEPREFIX +=

all: tag pull run

mocha-config:
	cp -f $(mochaFile) src/test/mocha_config.js

config:mocha-config
	cp -f deploy/$(configFile) config.json && cp -f deploy/$(processFile) process.json

check:
	@echo $(processFile)

tag:check
	git tag bak_$(now)

install:check
	cnpm install

pull:check
	git pull origin $(branch)

test:check mocha-config
	npm run test

run:check install
	pm2 startOrReload process.json --env production

clean:
	rm -rf ./node_modules

grace:tag pull install test run
	@echo "grace reload finished."

config-grace:tag pull config install test run
	@echo "re-config and grace load finished"


.PHONY: check install pull test run clean grace config mocha-config
