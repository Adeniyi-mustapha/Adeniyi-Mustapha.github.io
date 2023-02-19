
document.querySelector('.button').addEventListener
('click',function(e){
    console.log('learn  is clicked');

    const target = e.target;
    if(target.matches('li'))  {
        target.style.backgroundColor = 'yellow'
        }
        })
        document.querySelector('.button').addEventListener
('click',function(e){
    console.log('learn  is clicked');

    const target = e.target;
    if(target.matches('input'))  {
        target.style.backgroundColor = 'yellow'
        }
        })
       