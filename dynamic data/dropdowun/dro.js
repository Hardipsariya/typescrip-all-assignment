fetch("https://gorest.co.in/public/v2/users")
    .then(function (apidata) {
    return apidata.json();
})
    .then(function (objectdata) {
    console.log(objectdata[0].name);
    var fistops = "";
    var tabledata = "";
    objectdata.map(function (newdata) {
        fistops = "<option>please select</option>";
        tabledata += "\n      \n      <option>".concat(newdata.name, "</option>\n      \n      \n      ");
    });
    var final = fistops + tabledata;
    // document.getElementById("in1").innerHTML=tabledata;
    var a = document.getElementById("s1");
    // const t1 = document.createElement("select")
    a.innerHTML = final;
    a === null || a === void 0 ? void 0 : a.append(a);
})
    .catch(function (error) { return console.log('error', error); });
