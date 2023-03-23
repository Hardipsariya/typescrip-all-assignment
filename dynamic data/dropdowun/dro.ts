

fetch("https://gorest.co.in/public/v2/users")
  .then((apidata) => {
    return apidata.json();
  })
  .then((objectdata) => {
    console.log(objectdata[0].name);
    let fistops="";
    let tabledata = "";
    
    objectdata.map((newdata) => {
      fistops=`<option>please select</option>`
      tabledata += `
      
      <option>${newdata.name}</option>
      
      
      `
    })
    let final=fistops+tabledata;
    // document.getElementById("in1").innerHTML=tabledata;
    const a = document.getElementById("s1");
    // const t1 = document.createElement("select")
    a.innerHTML = final;
    a?.append(a);

  })
  .catch(error => console.log('error', error));