

fetch("https://gorest.co.in/public/v2/users")
  .then((apidata) =>{
    return apidata.json();
  })
  .then((objectdata) => {
    console.log(objectdata[0].id);

    let tabledata="";

    objectdata.map((newdata)=>{
        tabledata+=`<tr>
        <td>${newdata.id}</td>
        <td>${newdata.name}</td>
        <td>${newdata.email}</td>
        </tr>`
    })
    // document.getElementById("in1").innerHTML=tabledata;
    const a=document.getElementById("in1");
    const t1=document.createElement("tbody")
    t1.innerHTML=tabledata;
    a?.append(t1);
    
  })
  .catch(error => console.log('error', error));