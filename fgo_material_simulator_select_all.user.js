// ==UserScript==
// @name         FGO Material Simulator Select All Servants
// @namespace    https://github.com/Hoithmach/fgo-material-simulator-select-all-servants
// @version      1.0
// @description  Adds a "Select All" button to the inventory dialogue
// @author       Hoithmach
// @match        http://fgosimulator.webcrow.jp/Material/
// @match		 http://fgosim.github.io/Material/
// @icon         https://www.webcrow.jp/images/common/favicon.ico
// ==/UserScript==


function selectAll() {

    var chaldeaServant = document.getElementById("chaldea_servant");

    var selectClass = chaldeaServant.getElementsByClassName("select-class")[0];

    var classList = selectClass.getElementsByTagName("input");

    const classListLen = classList.length - 1;

    for (var i = 0; i < classListLen; i++) {

        classList[i].click();

        var chaldeaSlide = document.getElementsByClassName("chaldea-slide")[0];

        var rarityRows = chaldeaSlide.children;

        const rarityRowsLen = rarityRows.length;

        for (var n = 0; n < rarityRowsLen; n++) {

            var servantButtons = rarityRows[n].getElementsByClassName("input_chaldea");

            var servantButtonsArray = Array.prototype.slice.call(servantButtons, 0)

            servantButtonsArray.reverse()

            const servantListLen = servantButtonsArray.length;

            for (var k = 0; k < servantListLen; k++) {

                servantButtonsArray[k].click();

            };
        };
    };
};



(function() {

    var servantSelectMenu = document.getElementById("chaldea_servant");
    var classSelectBar = servantSelectMenu.getElementsByClassName("select-class")[0]

    var selectAllButtonDiv = document.createElement("div");

    selectAllButtonDiv.className = "selectAllButton";
    selectAllButtonDiv.style.display = "flex";
    selectAllButtonDiv.style.flexDirection = "row";
    selectAllButtonDiv.style.alignItems = "center";
    selectAllButtonDiv.style.flex = "initial";

    var selectAllButton = document.createElement("input");

    selectAllButton.id = "selectAllButton";
    selectAllButton.type = "button";
    selectAllButton.value = "Select All";
    selectAllButton.style.display = "flex";

    selectAllButton.onclick = selectAll;


    selectAllButtonDiv.appendChild(selectAllButton);
    classSelectBar.appendChild(selectAllButtonDiv);

})();
