// יצירת אלמנט 
const head = document.createElement("h2")
head.textContent = "HelloWorld"
head.style.color = "green"
document.body.appendChild(head)

console.log("njnihb");

// הסרת אבר
 head.remove()

// האזנה ללחיצה
 const tach = document.getElementById("element")
 tach.addEventListener("click",() =>{document.getElementById("Hello").textContent = "Hello World", Hello.style.color = "red"})

// חילוץ ערכים ושמירתם במשתנים
 const list = [15, "Yes", true]
 const[number,string ,bool ] = list
 console.log(number)
 console.log(string)
 console.log(bool)
//  דוגמא נוספת
const students = {
    name: "Jony",
        grade:{css:100, xml:95}
    }
    const{name, grade}= students
    console.log(name, grade)

    const{css,xml}= grade
    console.log(css,grade)


//Spread (התיחסות לרשימה כפרמטרים רגילם)
const arry = [ 3, 4, 5, 6]
const newArry = [0, 1, 2, ...arry, 7]
console.log(newArry)
//דוגמאר נוספת
const pepole = {name:"Joni", age:21}
const update = {...pepole, age:21.5}
console.log(update)


// Rest (התייחסות לפרמטר כרשימה)
function food (...f){
    for(i=0; i< f.length; i++){
        console.log(f[i])
    }
}
console.log(food("appel","beard","orange"))


// foreach פונקצייה שרצה עבור כל אבר ברשימה
const numbers = [1, 2, 3, 4, 5]
numbers.forEach(num => console.log(num))


// map פונקצייה שמחזירה רשימה חדשה עם הפעולה שנתבקשה לעשות על הרשימה
const nums = [1,2,3,4]
const a = nums.map(n => n*2)
console.log(a)


// filter פונקצייה שמחזירה מערך רק של הדברים שעמדו בתנאי
const drinks = ["Fanta", "Koka", "Fanta", "FuzeTea"]
const b = drinks.filter( d => d == "Fanta")
console.log(b)


// reduce פונקצייה סכימה
const int = [10, 50, 80, 90]
sum = int.reduce((a,b)=>{
    return a+b},0)
    console.log(sum)


//פירוק מערך 

const listt = [1,[1, 2, 3, 4],5].flat()
console.log(listt);












//////////1



function filterAndSortEvenNumbers(num){
        const arrFilter = num.filter(nums => {return nums % 2 == 0})
        const arrNew = arrFilter.sort()
        return arrNew;
    
}

console.log(filterAndSortEvenNumbers([1,8,9,1,6,2 ]));


///2
function removeDuplicates(list){
    let arryNew = [];
    for(i = 0; i <list.length; i++){
        for(x = 0; x <list.length -1 ; x++){
            if (i != x ){
                continue;
            }
            else{
                arryNew.push(list[i])
            }
        }
        
    }
    return arryNew;
}

console.log(removeDuplicates([1, 3, 7, 4, 5, 1, ]));



//3

function capitalizeFirstLetter(s) {
    const a = s.split(".")
    if (a) {s[0].capitalizeFirstLetter()
    }
    return a
}

console.log(capitalizeFirstLetter("bbobihbvyivu"))






