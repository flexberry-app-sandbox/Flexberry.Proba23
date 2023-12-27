docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proba2-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t proba2-java/app ../../..
