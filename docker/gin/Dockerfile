FROM golang:1.22-alpine

ENV WORKDIR /go/src
WORKDIR $WORKDIR

COPY src/go.mod go.mod
COPY src/go.sum go.sum

RUN go install github.com/cosmtrek/air@latest

ENTRYPOINT ["sh", "start.sh"]
