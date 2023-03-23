var employeedata = [];
employeedata.push(["001", "hardip", "101 rajkot gujarat", "10000000"], ["002", "savan", "102 jamnagar gujarat", "2000000"], ["003", "ankit", "103 amdavad gujarat", "3000000"], ["004", "jaydev", "104 vadodara gujarat", "4000000"], ["005", "vishal", "105 surat gujarat", "5000000"]);
var emp1 = [
    ["2002", "Sariya"], ["2001", "Tilara"], ["2003", "trivedi"], ["2004", "jagda"], ["2005", "VADODARIYA "]
];
var a = employeedata.concat(emp1);
function btn1() {
    // ######### input value from user ############3
    var input = document.getElementById("in1");
    var finalin = input === null || input === void 0 ? void 0 : input.value;
    // ####################### show input value
    console.log(finalin);
    // ###################### show full name
    console.log(employeedata[finalin][1] + "  " + emp1[finalin][1]);
    // #################### combine all value in one variyable
    var fullname = employeedata[finalin][1] + "  " + emp1[finalin][1];
    // ######################select divition where to print
    var fname = document.getElementById("fullname1");
    // ###################create HTML eliment
    var disfullname = document.createElement("p");
    // ####################  dispplaye in html 
    disfullname.innerHTML = "Full name of EMP_ID" + " " + finalin + " " + "is" + " " + fullname;
    // ########################3   append to html page to show
    fname === null || fname === void 0 ? void 0 : fname.append(disfullname);
    // ################### show split addres
    var str = employeedata[finalin][2];
    console.log(str);
    var aftersplit = str.split(" ", 3);
    console.log(aftersplit);
    var spl1 = document.getElementById("spl");
    var dissplitadd = document.createElement("p");
    dissplitadd.innerHTML = "Address after splited " + " " + "is" + " " + aftersplit;
    spl1 === null || spl1 === void 0 ? void 0 : spl1.append(dissplitadd);
    //###################  show how many year emp worked
    var pf = 2023 - emp1[finalin][0];
    console.log(pf);
    //############# show total PF
    var salery = employeedata[finalin][3];
    var finalpf = (pf * ((salery * 12) / 100));
    console.log("pf is " + finalpf);
    var pf11 = document.getElementById("pf1");
    var totalpf = document.createElement("p");
    totalpf.innerHTML = fullname + "'s" + " " + "total PF is  " + " " + finalpf;
    pf11 === null || pf11 === void 0 ? void 0 : pf11.append(totalpf);
}
