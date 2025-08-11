.PHONY: help install dev build start test lint clean docker-build docker-run docker-stop docker-clean

# Default target
help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-15s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install dependencies
	npm install

dev: ## Start development server
	npm run dev

build: ## Build for production
	npm run build

start: ## Start production server
	npm start

test: ## Run tests
	npm test

lint: ## Run linting
	npm run lint

clean: ## Clean build artifacts
	rm -rf .next
	rm -rf out
	rm -rf node_modules

# Docker commands
docker-build: ## Build Docker image
	docker build -t nikhil-portfolio .

docker-run: ## Run Docker container
	docker run -p 3000:3000 nikhil-portfolio

docker-stop: ## Stop Docker container
	docker stop $$(docker ps -q --filter ancestor=nikhil-portfolio)

docker-clean: ## Clean Docker images
	docker rmi nikhil-portfolio

# Docker Compose commands
docker-compose-up: ## Start services with Docker Compose
	docker-compose up -d

docker-compose-down: ## Stop services with Docker Compose
	docker-compose down

docker-compose-dev: ## Start development service
	docker-compose --profile dev up portfolio-dev

# Production deployment
deploy: build ## Deploy to production
	@echo "Deploying to production..."
	# Add your deployment commands here

# Development setup
setup: install ## Setup development environment
	@echo "Setting up development environment..."
	@echo "Run 'make dev' to start the development server"

# Quick start for new developers
quickstart: setup dev ## Quick start for new developers
	@echo "Development server is running at http://localhost:3000"
