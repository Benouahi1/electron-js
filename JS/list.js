const getData=()=>{
    fetch('http://localhost:8000/api/data/Liste'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        const html = data.data.map(user => {
            return `
            <th scope="row">${user._id}</th>
            <td>${user.Name}</td>
            <td>${user.Type}</td>
            <td>${user.detalle}</td>
            <td>${user.Number}</td>
            `;
        }).join("");
        console.log(html);
        document.querySelector('#data')
        .insertAdjacentHTML("afterbegin", html)
    
      });
  }
  

  console.log(getData());












url = "http://localhost:8000/api/data/Liste"
 
function fetchData() {
   fetch(url)
        .then(response => {
            console.log(res)
            if (!response.ok)  {
                throw Error("ERROR");
            }
            $(document).ready(function() {
                $.ajax({url}).then(function(data) {
                return console.log(csvJSON(data));
        })
    })
})
        .then(data => {
            console.log(data);
            const html = data.data.map(user => {
                return `
                 
                <div class="user">
                <p>Date:${user.Date}</p>
                <p>Email:${user.Email} </p>
                <p>BounceType:${user.BounceType}</p>
                </div>
                `;
            }).join("");
            console.log(html);
            document.querySelector('#app')
            .insertAdjacentHTML("afterbegin", html)
        })
            .catch(error => {
                console.log(error);
        });
    }
 
     
    fetchData();