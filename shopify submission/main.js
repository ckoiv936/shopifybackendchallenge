//Chad Koivuneva Shopify Submission for backend developer intern 2022


document.addEventListener('DOMContentLoaded', function () {

    const items = [];

    const addbutton = document.querySelector("#addbutton");
    const viewbutton = document.querySelector("#viewbutton");
    const removebutton = document.querySelector("#removebutton");
    const editbutton = document.querySelector("#editbutton");
    const downloadbutton = document.querySelector("#downloadbutton");

    addbutton.addEventListener("click", function () {
        additem();
    });
    viewbutton.addEventListener("click", function () {
        viewitems();
    });

    removebutton.addEventListener("click", function () {
        removeitem();
    });


    editbutton.addEventListener("click", function () {
        edititem();
    });

    downloadbutton.addEventListener("click", function () {

        let csvContent = "data:text/csv;charset=utf-8,";
        var itemsString = items.join(",");
         csvContent += itemsString;

        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);

        link.setAttribute("download", "items");
        document.body.appendChild(link);
        link.click();

    });



    function additem() {
        var item = prompt("Enter the item to add");
        items.push(item);
    }

    function removeitem() {
        var item_remove = prompt("Enter the item to remove");
        if (items.includes(item_remove)) {
            let index = items.indexOf(item_remove);
            items.splice(index,1);
        }
        else {
            alert("item not found");
        }

    }
    function edititem() {
        var item_edit = prompt("Enter the item to edit");

        if (items.includes(item_edit)) {
            var description = prompt("Enter new item change");
            var index = items.indexOf(item_edit);
            items[index] = description;
        }

        else {
            alert("item not found");
        }
    }

    function viewitems() {
        let item_view = document.querySelector("items");
        item_view.innerHTML = "";

        for (i of items) {
            let item_entry = document.createElement("h3");
            item_entry.textContent = i;
            item_view.appendChild(item_entry);
        }
    }

});