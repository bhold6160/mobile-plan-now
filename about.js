  var photosNames = ['BrandonsFace', 'KennysFace','IxsFace',];
  var photoArr = [];
  var bioArr=[];
// note to self: capitalizse constructor functiosn//
function Bio(name){
  this.name= name;
  this.path = 'images/' + name + '.jpg';
  photoArr.push(this);
}
// IIFE builds image, add p tag latter//
(function(){
  for(var i =0; i < photosNames.length; i++){
    new Bio(photosNames[i]);
  }
})();

var tracker= {
  imageOneEl: document.getElementById('imageOne'),
  imageContainerEl: document.getElementById('imageContainer'),
  textConetentEl: document.getElementById('bioText')

  getRandomIndex: function(){
    return Math.floor(Math.random()*photoArr.length);
  },
  displayImages: function(){
    this.imageOneEl.src= photoArr[this.getRandomIndex()].path;
  }
};
  displayText: function(){

  }

tracker.imageContainerEl.addEventListener('click',function(e){
    tracker.displayImages();

});





tracker.displayImages();
