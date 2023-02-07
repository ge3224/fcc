let funModule = (function() {
  return {
    isCuteMixin: (obj) => {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: (obj) => {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }
})();

function Duck(name, color) {
  let _name = name;
  let _color = color;

  this.getName = () => _name;
  this.setName = (name) => {
    _name = name;
  }

  this.getColor = () => _color;
  this.setColor = (color) => {
    _color = color;
  }

}

function oopTestHandler() {
  const daffy = new Duck("daffy", "black");
  console.log(`Duck instance with\nname: ${daffy.getName()}\ncolor: ${daffy.getColor()}`);
  daffy.setName("Daffy Duck");
  console.log(`After setting a new\nname: ${daffy.getName()}\ncolor: ${daffy.getColor()}`);

  funModule.singMixin(daffy);
  daffy.sing();

  funModule.isCuteMixin(daffy);
  console.log(daffy.isCute());
}

(() => {
  const el = document.getElementById("021");
  if (el !== null && el !== undefined && el !== void 0) {
    el.addEventListener("click", oopTestHandler);
  }
})();
