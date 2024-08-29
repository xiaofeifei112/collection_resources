TIME_DATE=$(date +%Y%m%d.%H%M%S);
IMAGE_TAG=web_game:v$TIME_DATE;
echo "$IMAGE_TAG"
docker rmi "$IMAGE_TAG"
docker build --no-cache -f ./Dockerfile  -t "$IMAGE_TAG" ./
docker run -p 80:80 -d IMAGE_TAG
