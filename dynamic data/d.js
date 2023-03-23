fetch("https://gorest.co.in/public/v2/users")
    .then(function (apidata) {
    return apidata.json();
})
    .then(function (objectdata) {
    console.log(objectdata[0].id);
    var tabledata = "";
    objectdata.map(function (newdata) {
        tabledata += "<tr>\n        <td>".concat(newdata.id, "</td>\n        <td>").concat(newdata.name, "</td>\n        <td>").concat(newdata.email, "</td>\n        </tr>");
    });
    // document.getElementById("in1").innerHTML=tabledata;
    var a = document.getElementById("in1");
    var t1 = document.createElement("tbody");
    t1.innerHTML = tabledata;
    a === null || a === void 0 ? void 0 : a.append(t1);
})
    .catch(function (error) { return console.log('error', error); });
