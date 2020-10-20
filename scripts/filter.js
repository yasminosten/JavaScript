let selectionButtons = document.querySelectorAll("button.selection");

// selectionButtons = [ "item1"]

let allImages = document.querySelectorAll(".main .image-selections .images");

let filterSearch; // select the input from the user

let filterButton; // selectable button for the users input

function toggleActiveClass(active) {

    selectionButtons.forEach(function(item) {
        item.classList.remove("active");
    })
    active.classList.add("active");
}

function toggleImages(dataClass) {
    if(dataClass === "all") {

        allImages.forEach(function(image) {

            image.style.display = "block";


        });

    } else {

        allImages.forEach(function (image) {

            /*
            if ( image.data.class === dataClass ) {

                image.style.display = "block";

            } else {

                image.style.display = "none";

            }

            */

            image.dataset.class === dataClass ? image.style.display = "block" : image.style.display = "none"; // Ternary

        });

    }

}


selectionButtons.forEach(function(item) {

    item.addEventListener("click", function() {

        toggleActiveClass(item);

        toggleImages(item.dataset.class);

    });

});