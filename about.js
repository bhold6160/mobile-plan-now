var photosNames = ['BrandonsFace', 'KennysFace','IxsFace',];
var photoArr = [];
var BioArr = [];


function Bio(name){
  this.name= name;
  this.path = 'images/' + name + '.jpg';
  photoArr.push(this);
}

(function(){
  for(var i =0; i < photosNames.length; i++){
    new Bio(photosNames[i]);
  }
})();

var tracker= {
  imageOneEl: document.getElementById('imageOne'),
  imageContainerEl: document.getElementById('imageContainer'),
  textConetentEl: document.getElementById('B'),

  getRandomIndex: function() {
    return Math.floor(Math.random()*photoArr.length);
  },
  displayImages: function() {
    this.imageOneEl.src= photoArr[this.getRandomIndex()].path;

  }
};


tracker.imageContainerEl.addEventListener('click',function(e){
  tracker.displayImages();

});


tracker.displayImages();
