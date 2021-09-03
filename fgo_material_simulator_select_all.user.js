// ==UserScript==
// @name         FGO Material Simulator Select All Servants
// @namespace    https://github.com/Hoithmach/fgo-material-simulator-select-all-servants
// @version      0.1
// @description  Adds a "Select All" button to the inventory dialogue
// @author       Hoithmach
// @match        http://fgosimulator.webcrow.jp/Material/
// @icon         https://www.webcrow.jp/images/common/favicon.ico
// ==/UserScript==


function selectAll() {

    document.getElementById("chaldea_select15").click();

    var chaldeaSlide = document.getElementsByClassName("chaldea-slide")[0];

    var servantButtons = chaldeaSlide.getElementsByClassName("input_chaldea");

    const servantListLen = servantButtons.length;

    for (var i = 0; i < servantListLen; i++) {

        servantButtons[0].click();

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
