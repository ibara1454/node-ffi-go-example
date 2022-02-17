DEST          = dist
SOURCE        = $(wildcard src/*.go)
OBJS          = lib.so

build:        $(OBJS)

.PHONY: clean
clean:
	rm -rf $(DEST)

$(OBJS):      $(SOURCE)
	go build -buildmode=c-shared -o $(DEST)/$(OBJS) $(SOURCE)
