//define the variables
let storeSong= ["Harder, Better, Faster, Stronger", 
                "Happy"];
let storeArtist= ["Daft Punk","Pharrel Williams"];  
let storeLength= [226, 240];  
let storeLink = ["https://www.youtube.com/watch?v=yydNF8tuVmU&ab_channel=DaftPunk",
                 "https://www.youtube.com/watch?v=ZbZSe6N_BXs"];
let storeImage=["https://media.pitchfork.com/photos/6033fa293221fafe5fc2d1ad/2:1/w_2914,h_1457,c_limit/Daft-Punk.jpg",
                "https://m.media-amazon.com/images/I/71XV4iaETAL._SS500_.jpg"]

for(let Song of storeSong){
  $("#songs").append(`<p>${Song}</p>`);
  
}
for (let Artist of storeArtist){
  $("#artist").append(`<p>${Artist}</p>`);
}

for(let Length of storeLength){
  $("#length").append(`<p>${Length}</p>`);
  
}

for (let Image of storeImage){
  $("#image").append(` <img src="${Image}">`);
}

for(let Link of storeLink){
  $("#link").append(`<p><a href ="${Link}">Link here </a></p>`);
  
}