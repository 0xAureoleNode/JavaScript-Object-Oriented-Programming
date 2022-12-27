//
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  };
}

const circle = new Circle(10);

// adding properties
circle.location = { x: 1, y: 1 };

// another access properties
// 持有特殊字符的时候，用这个访问方法比较好
const propertyName = 'location';
circle['location'] = { x: 1 };

// delete properties
delete circle['location'];
