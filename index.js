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
    if($('.js-number-of-images').val() > 0 && $('.js-number-of-images').val() <= 50){
      getDogImage();
    }
    else {
      alert("Please input a number from 1 to 50");
    }
  });
};

$(function() {
  console.log('App Loaded');
  handleForm();
});