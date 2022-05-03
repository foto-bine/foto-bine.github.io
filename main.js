function getinpt(){
  let text = document.getElementById("passcode").innerHTML;
  var passs = parseInt(text)



if (passs == 5){
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
  
  
  var inputval = document.getElementById("inpt").value;
  let answer = inputval.split(",")

  const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/6270ec11bca21f053e90378f"
  );  

  store
    .append("Sheet1", [
      {
        date_added: dateTime,
        name: answer[0],
        additional: answer[1],
        cost: answer[2]
      }
    ])
    .then(res => {
      console.log(res);
    });
    alert("Mal əlavə olundu!")
}
else{
  alert("basqa vaxt yoxlayin")
}

}


function search(){
  var inputval = document.getElementById("inpt").value;

            
  const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/6270ec11bca21f053e90378f"
  );  


             store.read("Sheet1", { search: { name: inputval } }).then(data => {
     console.log(data);
     document.getElementById("name").innerHTML = JSON.stringify(data, null, 3);
   });

   

}


function password(){
  let text = document.getElementById("passcode").innerHTML;
  var textint = parseInt(text)
  document.getElementById("passcode").innerHTML = textint+1;
  
}

