const Mouse = require("./Mouse");

function Cat(){
    this.stomach =[];
    this.dead = false;
}
Cat.prototype.eat = function(){
    this.stomach.push(mouse);
};
module.exports = Cat;