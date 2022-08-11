var response;
var output;
var xhr=new XMLHttpRequest();
xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4){
        response = JSON.parse(xhr.responseText)
        output=document.querySelector('#people');
    for(var i=0;i<response.length;i++)
    {
               output.innerHTML+=`<div class="card-cont">
               <img src="Assets/person_img.png" class="img-per">
               <span class="user">${response[i].username}</span>
               <div class="cont">
                   <span>Name : <span class="name">${response[i].name}</span></span>
                   <span>Email : <span class="email">${response[i].email}</span></span>
                   <hr class="line">
                   <div class="address-div">
                   <span class="address-title" style="font-weight: bold;">Address</span>
                   <span >Street : <span class="street">${response[i].address.street}<span > , Suite : <span class="suite"> ${response[i].address.suite}</span></span><span> , City : <span class="city">${response[i].address.city}</span></span></span></div>
               </div>
               <span>Zipcode : <span>${response[i].address.zipcode}</span></span>
               <hr class="line">
               <div class="geo-div">
                   <span style="font-weight: bold;">Geo</span>
                   <span class="lat">Lat : <span>${response[i].address.geo.lat}</span><span> , Long<span class="long">${response[i].address.geo.long}</span></span></span>
               </div>
               <hr class="line">
               <span>Phone : <span>${response[i].phone}</span></span>
               <span>Website : <span>${response[i].website}</span>      
               <div class="com-div">
                   <span style="font-weight: bold;">Company</span>
                   <span class="lat">Name : <span>${response[i].company.name}</span><span> , Catch Pharase<span class="long">${response[i].company.catchPhrase}</span></span><span> , bs : <span class"bs">${response[i].company.bs}</span></span></span>
               </div>
           </div>`
   }
}

}
xhr.open("GET","https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09",true );
xhr.send();

document.querySelector('#input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById("person").scrollIntoView();
        var input=document.getElementById("input");
        var c=0;
        output.innerHTML=``;
        for(var i=0;i<response.length;i++)
        {
            if((input.value).toLowerCase()==(response[i].username).toLowerCase())
            {
                c=1;
                output.innerHTML+=`<div class="card-cont">
               <img src="Assets/person_img.png" class="img-per">
               <span class="user">${response[i].username}</span>
               <div class="cont">
                   <span>Name : <span class="name">${response[i].name}</span></span>
                   <span>Email : <span class="email">${response[i].email}</span></span>
                   <hr class="line">
                   <div class="address-div">
                   <span class="address-title" style="font-weight: bold;">Address</span>
                   <span >Street : <span class="street">${response[i].address.street}<span > , Suite : <span class="suite"> ${response[i].address.suite}</span></span><span> , City : <span class="city">${response[i].address.city}</span></span></span></div>
               </div>
               <span>Zipcode : <span>${response[i].address.zipcode}</span></span>
               <hr class="line">
               <div class="geo-div">
                   <span style="font-weight: bold;">Geo</span>
                   <span class="lat">Lat : <span>${response[i].address.geo.lat}</span><span> , Long<span class="long">${response[i].address.geo.long}</span></span></span>
               </div>
               <hr class="line">
               <span>Phone : <span>${response[i].phone}</span></span>
               <span>Website : <span>${response[i].website}</span>      
               <div class="com-div">
                   <span style="font-weight: bold;">Company</span>
                   <span class="lat">Name : <span>${response[i].company.name}</span><span> , Catch Pharase<span class="long">${response[i].company.catchPhrase}</span></span><span> , bs : <span class"bs">${response[i].company.bs}</span></span></span>
               </div>
           </div>`;
            }
        }if(c==0)
        {
            
            alert("ERROR : USER NOT FOUND");
            document.getElementById("input").value="";
        }
    }
    document.getElementById("input").addEventListener('focusout', (event) => {

        if(document.getElementById("input").value=="")
        {
            output.innerHTML=``;
            for(var i=0;i<response.length;i++)
    {
               output.innerHTML+=`<div class="card-cont">
               <img src="Assets/person_img.png" class="img-per">
               <span class="user">${response[i].username}</span>
               <div class="cont">
                   <span>Name : <span class="name">${response[i].name}</span></span>
                   <span>Email : <span class="email">${response[i].email}</span></span>
                   <hr class="line">
                   <div class="address-div">
                   <span class="address-title" style="font-weight: bold;">Address</span>
                   <span >Street : <span class="street">${response[i].address.street}<span > , Suite : <span class="suite"> ${response[i].address.suite}</span></span><span> , City : <span class="city">${response[i].address.city}</span></span></span></div>
               </div>
               <span>Zipcode : <span>${response[i].address.zipcode}</span></span>
               <hr class="line">
               <div class="geo-div">
                   <span style="font-weight: bold;">Geo</span>
                   <span class="lat">Lat : <span>${response[i].address.geo.lat}</span><span> , Long<span class="long">${response[i].address.geo.long}</span></span></span>
               </div>
               <hr class="line">
               <span>Phone : <span>${response[i].phone}</span></span>
               <span>Website : <span>${response[i].website}</span>      
               <div class="com-div">
                   <span style="font-weight: bold;">Company</span>
                   <span class="lat">Name : <span>${response[i].company.name}</span><span> , Catch Pharase<span class="long">${response[i].company.catchPhrase}</span></span><span> , bs : <span class"bs">${response[i].company.bs}</span></span></span>
               </div>
           </div>`
   }
        }
      });


});