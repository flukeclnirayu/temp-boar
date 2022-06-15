i = 0;
var farmName, lotNo, gender;

function changeGenderTitle(oldTitle) {
    if (oldTitle == "male") {
        return "[M] สุกรเพศผู้";
    }
}

function fetchNewData() {
    console.log(i);
    console.log(allData.length);
    if (i < allData.length) {
        fetch("../data/BoarData.json")
        .then(response => {
            // console.log(response);
           return response.json();
        })
        .then(data => {
            // console.log(data);
            allData = data["Farm1-BoarTaint"];
            // console.log(allData);
            // console.log(allData.length);
            // console.log(data["Farm1-BoarTaint"][i]);
            currentData = allData[i];
            i += 1;
            console.log(currentData);
            document.getElementById("no").innerHTML = currentData.number + "/" + allData.length;
            document.getElementById("farmName").innerHTML = currentData.farmname;
            document.getElementById("lotNo").innerHTML = currentData.lot;
            document.getElementById("pigGender").innerHTML = changeGenderTitle(currentData.gender);
        }) 
    } else {
        // console.log('out')
        document.getElementById('acceptButton').setAttribute("disabled", "");
        document.getElementById('declineButton').setAttribute("disabled", "");
        document.getElementById('acceptButton').style.backgroundColor = "gray";
        document.getElementById('declineButton').style.backgroundColor = "gray";
    }
}

fetch("../data/BoarData.json")
.then(response => {
    console.log(response);
   return response.json();
})
.then(data => {
    console.log(data);
    allData = data["Farm1-BoarTaint"];
    console.log(allData);
    console.log(allData.length);
    // console.log(data["Farm1-BoarTaint"][i]);
    currentData = allData[i];
    i += 1;
    console.log(currentData);
    document.getElementById("no").innerHTML = currentData.number + "/" + allData.length;
    document.getElementById("farmName").innerHTML = currentData.farmname;
    document.getElementById("lotNo").innerHTML = currentData.lot;
    document.getElementById("pigGender").innerHTML = changeGenderTitle(currentData.gender);
})