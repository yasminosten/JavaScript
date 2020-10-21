let selectionButtons = document.querySelectorAll("button.selection");

// selectionButtons = [ "item1"]

let allImages = document.querySelectorAll(".main .image-selections .images");

let filterSearch = document.querySelector("input[name='filter']");

let filterButton = document.querySelector(".filter-button");

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


filterButton.addEventListener("click", () => {

    let inputValue = filterSearch.value;
    let searchItem = inputValue.toLowerCase();
    toggleImages(searchItem);

    selectionButtons.forEach( (item) => {

        let dataClass = item.getAttribute("data-class");

        dataClass === searchItem ? item.classList.add("active") : item.classList.remove("active");

        filterSearch.value = "";

    } );

});
