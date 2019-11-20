

const inputElement = document.getElementById("filePicker");

const handleFiles = function() {
  const fileList = this.files;
  let postRequest = new XMLHttpRequest();
  postRequest.open('POST', 'http://localhost:3000/data2', true);
  postRequest.send(fileList);

}

inputElement.addEventListener("change", handleFiles, false);

// let postRequest = new XMLHttpRequest();
// postRequest.open('POST', 'http://localhost:3000/test');
// postRequest.send(document.getElementById("input").value);


// $.ajax({
//   url: 'http://localhost:3000/data',
//   method: 'GET',
//   success: (data) => {
//     console.log(data)
//   }
// })

// $.ajax({
//   url: 'http://localhost:3000/data',
//   method: 'POST',
//   data: data,
//   success: (data) => {
//     console.log(data)
//   }
// })
