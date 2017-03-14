  var photosNames = ['bag', 'banana','bathroom',];
  var photoArr = [];

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

  getRandomIndex: function(){
    return Math.floor(Math.random()*photoArr.length);
  },
  displayImages: function(){
    this.imageOneEl.src= photoArr[this.getRandomIndex()].path;
  }
};

tracker.imageContainerEl.addEventListener('click',function(e){
    tracker.displayImages();

});
tracker.displayImages();
