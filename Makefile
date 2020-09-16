##
## OWNPAAS, 2020
## Makefile
## File description:
## Run API migrations
##


CONTAINER_NAME  =       ownpass-api

# Run migrations (Create tables in the database)
run             :
						@echo 'Starting migration...'
						@docker exec -it $(CONTAINER_NAME) node ace migration:run --force && echo 'Migration finished.'

# Seed database (Create fake user, add default content in the database...)
seed            :
						@echo 'Seeding database...'
						@docker exec -it $(CONTAINER_NAME) node ace db:seed && echo 'Database seeded.'

# Remove last migrations
rollback        :
						@echo 'Rollback migration to latest batch or to a specific batch number...'
						@docker exec -it $(CONTAINER_NAME) node ace migration:rollback --force && echo 'Undoing the last migration performed.'

