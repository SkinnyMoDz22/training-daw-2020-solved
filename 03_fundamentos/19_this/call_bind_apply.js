const test = {
    prop: 42,
    func: function() {
        console.log(this.prop)
    },
  };


const printProp = function() {
    console.log(`Prop value ${this.prop}`)
}

printProp()
let printPropBinded = printProp.bind(test)
printPropBinded()

printProp.call(test)
printProp.apply(test)

let max = Math.max(1,2,3,4,5)
console.log(`Max value ${max}`)

max = Math.max([1,2,3,4,5])
console.log(`Max value ${max}`)

max = Math.max.apply(null, [1,2,3,4,5])
console.log(`Max value ${max}`)

max = Math.max.apply(Math, [1,2,3,4,5])
console.log(`Max value ${max}`)