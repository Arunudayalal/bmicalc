function calculate() {
    umale = document.getElementById('male')
    ufmale = document.getElementById('female')
    uage = age.value
    uweight = weight.value
    uheight = height.value


    if (uage == "" || uweight == "" || uheight == "" || (!male.checked && !female.checked)) {
        alert("Enter all details")

    }
    else if (uage < 2) {
        alert("Enter an age greater than 2 ")
    }
    else if (uweight <= 0) {
        alert("Enter valid weight ")
    }
    else if (uheight <= 0) {
        alert("Enter valid height ")
    }
    else {
        bmicalculate()
    }
}

function bmicalculate() {

    uweight = weight.value
    uheight = height.value

    const bmi = (uweight / ((uheight * uheight) / 10000)).toFixed(2);

    if (bmi < 25) {
       
        bmidis.innerHTML = `<h1 class="text-danger ">Oh Oh! You are underweight <img src="https://th.bing.com/th/id/R.3add0d2e0801e17861ea2cafb9a81aa8?rik=da8VqwIM97la2A&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fsad-emoji-transparent-background%2fsad-emoji-transparent-background-7.png&ehk=SQnvaDLWo%2bnwgql9J4%2ffl%2byXcO9hmaLBhVeHTPSz32I%3d&risl=&pid=ImgRaw&r=0" width="37px" alt=""></h1>
        <p class="text-light text-justify">Eating nutritious foods that are high in calories is a good way to gain weight. It's also important to understand the reason why you're underweight.

Being underweight can be defined in a couple of ways. It can mean low weight for a person's height, defined as a body mass index (BMI) of less than 18.5. It also could be weight that is 15 to 20% below the typical weight for a person's age.

There are many reasons you may not be at your goal weight. Recovering from an illness or losing weight as you age are two examples. It's also common for athletes to want to gain weight as muscle.

It is best to see your health care provider if you lost weight unexpectedly. Your provider or a dietitian can help you gain weight in a healthy way. Together, you can create a plan based on your needs.</p>
`

} 
else if (bmi >= 25 && bmi < 30) {
       
        bmidis.innerHTML = `<h1 class="text-success ">Wow! You are a healthy weight <img src="https://pngimg.com/uploads/smiley/smiley_PNG43.png" width="37px" alt=""></h1>
        <p class="text-light text-justify">Consuming a healthy diet throughout the life-course helps to prevent malnutrition in all its forms as well as a range of noncommunicable diseases (NCDs) and conditions. However, increased production of processed foods, rapid urbanization and changing lifestyles have led to a shift in dietary patterns. People are now consuming more foods high in energy, fats, free sugars and salt/sodium, and many people do not eat enough fruit, vegetables and other dietary fibre such as whole grains.</p>`
    } else {
        
         bmidis.innerHTML = `<h1 class="text-danger ">Oh Oh ! You are over weight  <img src="https://th.bing.com/th/id/R.7ff47417bfca51132f51618d231e89af?rik=Mefmo0DNAuHMqg&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fgoogle%2fnoto-emoji-smileys%2f1024%2f10044-unamused-face-icon.png&ehk=x5MTVraYUB9Uv6132%2fN8QAoE07UifACIHguvOUU0uZw%3d&risl=&pid=ImgRaw&r=0" width="37px" alt=""></h1>
        
        <p class="text-light text-justify">If you need to lose weight, work with a health care professional to set a weight-loss goal and time frame that will work best for you. For example, losing 5% of your body weight over a period of 6 months may be a good initial goal.34 If you weigh 200 pounds, this would mean losing 10 pounds.

Losing excess weight may help lower your chances of developing health problems related to overweight and obesity. If you already have weight-related health problems, such as high blood pressure or diabetes, losing weight may help improve your health.</p> `
        
    }
}