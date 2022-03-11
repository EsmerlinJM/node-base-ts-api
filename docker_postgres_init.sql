CREATE USER docker WITH PASSWORD 'password' CREATEDB;

CREATE DATABASE node_api_base_development
WITH OWNER = docker
CONNECTION LIMIT = -1;

CREATE DATABASE node_api_base_test
WITH OWNER = docker
CONNECTION LIMIT = -1;