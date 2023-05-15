//დავალება 1

function sum(num1,num2,...args){
        let namravli = 1
        for (const n of args){
            namravli *= n
        }
        let newArr = [num1+num2, namravli]
        console.log(newArr)
    }


sum(2,3,5,7,11)


//დავალება 2

const user = { banks : [ {address:{city:'tbilisi'}}, {address:{city:'batumi'}}, {address:{city:'kutaisi'}} ]}

function destr(obj){
    const { banks:[ , , {address:{ city = {}}}]} = obj
    return city
}

console.log(destr(user))


//დავალება 3

const obj1 = {
    name: 'James',
    lastName: 'Bond',
    profile: {
        username: '007',
        age: '40',
    }
}


const obj2 = {
    name: 'James',
    lastName: 'Rodrigez'
}

function copy(obj){
    if ( obj.hasOwnProperty(obj.profile)){

        const objCopy = {
            ...obj,
            profile: {
                ...obj.profile
            }
        }
        console.log(objCopy)
    }
    else{

        const objCopy = {
            ...obj
        }
        console.log(objCopy)
    }

}

copy(obj1)
copy(obj2)



