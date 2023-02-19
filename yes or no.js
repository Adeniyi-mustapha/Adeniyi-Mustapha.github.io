
document.querySelector('#yes').addEventListener
('click',function(e){
    console.log('yes is clicked');

    const target = e.target;
    if(target.matches('li'))  {
        target.style.backgroundColor = 'yellow'
        }
        })
        document.querySelector('#no').addEventListener
('click',function(e){
    console.log('no is clicked');

    const target = e.target;
    if(target.matches('li'))  {
        target.style.backgroundColor = 'yellow'
        }
        })
       