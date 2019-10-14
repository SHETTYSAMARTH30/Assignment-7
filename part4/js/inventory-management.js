/*eslint-env browser*/

function displayMenu() {
    "use strict";
    window.console.log("Welcome to the Product Inventory Management System.");
    window.console.log("\n");
    window.console.log("COMMAND MENU");
    window.console.log("show - show all products ordered by sku number.");
    window.console.log("update - update quantity of a product in inventory.");
    window.console.log("exit - exit the program");
}

function display(inventory) {
    "use strict";
    var i;
    for (i = 0; i < inventory.length; i += 1) {
        window.console.log(inventory[i][0] + " " + inventory[i][1] + " (" + inventory[i][2] + ") $" + inventory[i][3]);
    }
    window.console.log("");
}

function update(inventory) {
    "use strict";
    var skuNum, quntity, i, result = "";
    inventory.forEach(function (product) {
        result += product[0] + "\n";
    });
    skuNum = Number(window.prompt("Enter sku number of the product you want to update from the list below:\n" + result));
    quntity = Number(window.prompt("Enter stock quantity"));
    for (i = 0; i < inventory.length; i += 1) {
        if (inventory[i][0] === skuNum) {
            inventory[i][2] = quntity;
        }
    }
    window.console.log("");
}

function main() {
    "use strict";
    var inventory, command;
    displayMenu();
    inventory = [[4824, "Shirt", 10, 15.99], [6343, "Jeans", 22, 39.99], [3223, "Socks", 36, 9.99], [2233, "Hat", 12, 14.99], [9382, "Jacket", 5, 49.99]];
    while (true) {
        command = window.prompt("Enter Command");
        if (command !== null) {
            if (command === "show") {
                display(inventory);
            } else if (command === "update") {
                update(inventory);

            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command");
            }

        } else {
            break;
        }
    }
    window.console.log("Program terminated");

}

main();