package main

import (
    "C"
    "fmt"
)

//export sayHelloG
func sayHelloG(name string) {
    fmt.Printf("Hello, %s!\n", name)
}

//export sayHelloC
func sayHelloC(name *C.char) {
    cname := C.GoString(name)
    fmt.Printf("Hello, %s!\n", cname)
}


func main() {
}
