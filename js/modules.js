var imageModule = (function () {

    // These are the images we are looping through

    return {
        carImages: {
            car1: "http://codingfaculty.com",
            car2: "http://codingfaculty.com",
            car3: "http://codingfaculty.com",
            car4: "http://codingfaculty.com",
            car5: "http://codingfaculty.com",
            car6: "http://codingfaculty.com",
            car7: "http://codingfaculty.com",
            car8: "http://codingfaculty.com"
        },

        //This method inserts object

        insertImages: function () {
            var myArguments = "." + arguments[0]
            var imagesContainer = document.querySelector(myArguments)
            var output = "<div>"

            for (var key in this.carImages) {
                console.log(key)
                console.log(this.carImages[key])
            }
        }
    }
})()