let base_1 = {
    name: 'base_1',
    method() {
        alert(this.name)
    }
}

let base_2 = {
    name: 'base_2',
    method() {
        alert(this.name)
    }
}

let a = base_1.method()
