const empdata: any[] = [["0", "hardip", "rajkot ", "2023-3-12"], ["1", "savan", "Mumbai ", " 2003-4-23"], ["2", "ankit", " amdavad", "1974-8-1"], ["3", "jaydev", " vadodara ", "1989-11-15"], ["4", "vishal", " Mumbai ", "2024-6-17"]];

var tdata = new Date();




function sbtn() {
    const empid = document.getElementById("in1") as HTMLInputElement | null;
    var fempid: any = empid?.value;

    var newempdata = empdata.map(function (v, i) {
        if (i == fempid) {
            console.log(empdata[i]);



        }



    });



    for (let i = 0; i < empdata.length; i++) {

        var a = empdata[i][3].toString();
        var v = empdata[i][2];
        var aftersplt = a.split("-")
        var eyear = aftersplt[0];



        let cdata: Date = new Date();
        cdata.setFullYear(2020)
        var fyear = cdata.getFullYear();

        let s = "Mumbai";

       


        if (eyear < fyear) {
            console.log(eyear);

            console.log("employe who joined befor 2020");

        }
        else if (eyear > fyear) {

            if (v == s) {
                console.log(empdata[i]);


                console.log("this person stay in mumbai");

            }
            else {

                console.log("condition false");

            }
            console.log(eyear);

            console.log("employe who joined after 2020");



        };




    }



};











































// var mdata=tdata.getMonth();
// var m1data=mdata.toString();
// var ddata=tdata.getDate();
// var d1data=ddata.toString();
// var ydata=tdata.getFullYear();
// var y1data=ydata.toString();
