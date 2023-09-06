const reviews = [
    {
        id:1,
        name:"John",
        job:"Web Developer",
        img: "images/pic1.jpg",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis libero ducimus optio modi rerum vel voluptatibus fugit dolorum, animi, impedit, quas quisquam molestiae nesciunt."
    },
    {
        id:2,
        name:"Mary",
        job:"Web Designer",
        img: "images/pic2.jpg",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis libero ducimus optio modi rerum vel voluptatibus fugit dolorum, animi, impedit, quas quisquam molestiae nesciunt."
    },
    {
        id:3,
        name:"Rex",
        job:"Gamer",
        img: "images/pic3.jpg",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis libero ducimus optio modi rerum vel voluptatibus fugit dolorum, animi, impedit, quas quisquam molestiae nesciunt."
    },
    {
        id:4,
        name:"Emma",
        job:"Instructor",
        img: "images/pic4.jpg",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis libero ducimus optio modi rerum vel voluptatibus fugit dolorum, animi, impedit, quas quisquam molestiae nesciunt."
    },

]


const customerImg = document.getElementById('customer-img')
const customerName = document.getElementById('customer-name')
const customerJob = document.getElementById('job')
const customerText = document.getElementById('customer-text')

const prevBtn = document.getElementById('left')
const nxtBtn = document.getElementById('right')

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
    // console.log('show');
    show(currentItem)
})

function show(person){
    const item = reviews[person]
    // console.log(customerImg)
    customerImg.src = item.img
    customerName.textContent = item.name
    customerJob.textContent = item.job
    customerText.textContent = item.text
}

nxtBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0
    }
    show(currentItem)

})


prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    show(currentItem)
})