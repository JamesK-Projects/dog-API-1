

function getDogImage(){
    const inputNumber = $('.js-number-of-images').val();
    let url = `https://dog.ceo/api/breeds/image/random/${inputNumber}`;
    const options = {method: 'GET'};
    fetch(url, options)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson));
};

function handleForm(){
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
};

$(function() {
  console.log('App Loaded');
  handleForm();
});