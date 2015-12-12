BASE_IMAGE := partyrooms/web
MAIN_IMAGE := partyrooms_web
PORT := 3000

PROVIDER := virtualbox
DINGHY_FORMULA := --HEAD https://github.com/codekitchen/dinghy/raw/master/dinghy.rb

build:
	npm run build
start:
	npm start
test:
	npm test
tdd:
	nf start

setup:
	@echo 'installing dinghy...'
	brew install $(DINGHY_FORMULA)
	dinghy create --provider $(PROVIDER)
	gulp favicon:generate

docker-build:
	@echo 'building base image...'
	docker build -t $(BASE_IMAGE) .

docker-rebuild:
	docker rmi $(MAIN_IMAGE)
	docker rmi $(BASE_IMAGE)
	docker build -t $(BASE_IMAGE) .

up:
	dinghy up
	eval "$(docker-machine env dinghy)"
	docker-compose up -d
	open http://$(docker-machine ip dinghy):$(PORT)

halt:
	docker-compose stop
	dinghy halt

.PHONY: start test build tdd
	setup docker-build
	docker-rebuild
	docker-up docker-halt
