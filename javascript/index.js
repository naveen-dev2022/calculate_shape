const circle = document.querySelector(".circle");
const triangle = document.querySelector(".triangle");
const square = document.querySelector(".square");
const btn = document.querySelectorAll("button");
const input = document.querySelector("input");
const pages = document.querySelectorAll("section");
const shapeInputHeading = document.querySelector(".input-heading");
const choosedShape = document.querySelector(".shape-name");
const findShape = document.querySelector(".find-shape");
const circleRadius = document.querySelector(".shape-value1");
const circleArea = document.querySelector(".shape-value2");
const circlePerimeter = document.querySelector(".shape-value3");
var radiusOrSideTag = document.createElement("p");
var areaTag = document.createElement("p");
var perimeterTag = document.createElement("p");
var formulaTag1 = document.createElement("p");
var formulaTag2 = document.createElement("p");
var formulaTag3 = document.createElement("p");
var calculatedValueTag1 = document.createElement("p");
var calculatedValueTag2 = document.createElement("p");
var calculatedValueTag3 = document.createElement("p");

const shape = {
  circle: {
    unit: "cm",
    radius: "RADIUS",
    area: "AREA",
    perimeter: "PERIMETER",
    radiusFormula: "r",
    areaFormula: "πr<sup>2</sup>",
    perimeterFormula: "2πr",
    radiusCalculation: function (value) {
      circleRadius.innerText = "";
      radiusOrSideTag.setAttribute("class", "unit");
      radiusOrSideTag.innerText = this.radius;
      formulaTag1.setAttribute("class", "formula");
      formulaTag1.innerText = this.radiusFormula;
      calculatedValueTag1.setAttribute("class", "unit");
      calculatedValueTag1.innerText = `${value} ${this.unit}`;
      circleRadius.append(radiusOrSideTag, formulaTag1, calculatedValueTag1);
    },
    areaCalculation: function (value) {
      area = (Math.PI * Math.pow(value, 2)).toPrecision(5);
      circleArea.innerText = "";
      areaTag.setAttribute("class", "unit");
      areaTag.innerText = this.area;
      formulaTag2.setAttribute("class", "formula");
      formulaTag2.innerHTML = this.areaFormula;
      calculatedValueTag2.setAttribute("class", "unit");
      calculatedValueTag2.innerText = `${area} sq ${this.unit}`;
      circleArea.append(areaTag, formulaTag2, calculatedValueTag2);
    },
    perimeterCalculation: function (value) {
      perimeter = (2 * Math.PI * value).toPrecision(5);
      circlePerimeter.innerText = "";
      perimeterTag.setAttribute("class", "unit");
      perimeterTag.innerText = this.perimeter;
      formulaTag3.setAttribute("class", "formula");
      formulaTag3.innerText = this.perimeterFormula;
      calculatedValueTag3.setAttribute("class", "unit");
      calculatedValueTag3.innerText = `${perimeter} ${this.unit}`;
      circlePerimeter.append(perimeterTag, formulaTag3, calculatedValueTag3);
    },
  },
  triangle: {
    unit: "cm",
    side: "SIDE",
    area: "AREA",
    perimeter: "PERIMETER",
    sideFormula: "s",
    areaFormula: "0.433<sup>*</sup>s<sup>*</sup>s",
    perimeterFormula: "3<sup>*</sup>s",
    sideCalculation: function (value) {
      circleRadius.innerText = "";
      radiusOrSideTag.setAttribute("class", "unit");
      radiusOrSideTag.innerText = this.side;
      formulaTag1.setAttribute("class", "formula");
      formulaTag1.innerText = this.sideFormula;
      calculatedValueTag1.setAttribute("class", "unit");
      calculatedValueTag1.innerText = `${value} ${this.unit}`;
      circleRadius.append(radiusOrSideTag, formulaTag1, calculatedValueTag1);
    },
    areaCalculation: function (value) {
      let area = (0.433 * value * value).toPrecision(5);
      circleArea.innerText = "";
      areaTag.setAttribute("class", "unit");
      areaTag.innerText = this.area;
      formulaTag2.setAttribute("class", "formula");
      formulaTag2.innerHTML = this.areaFormula;
      calculatedValueTag2.setAttribute("class", "unit");
      calculatedValueTag2.innerText = `${area} sq ${this.unit}`;
      circleArea.append(areaTag, formulaTag2, calculatedValueTag2);
    },
    perimeterCalculation: function (value) {
      let perimeter = (3 * value).toPrecision(5);
      circlePerimeter.innerText = "";
      perimeterTag.setAttribute("class", "unit");
      perimeterTag.innerText = this.perimeter;
      formulaTag3.setAttribute("class", "formula");
      formulaTag3.innerHTML = this.perimeterFormula;
      calculatedValueTag3.setAttribute("class", "unit");
      calculatedValueTag3.innerText = `${perimeter} ${this.unit}`;
      circlePerimeter.append(perimeterTag, formulaTag3, calculatedValueTag3);
    },
  },
  square: {
    unit: "cm",
    side: "SIDE",
    area: "AREA",
    perimeter: "PERIMETER",
    radiusFormula: "s",
    areaFormula: "s<sup>*</sup>s",
    perimeterFormula: "4<sup>*</sup>s",
    sideCalculation: function (value) {
      circleRadius.innerText = "";
      radiusOrSideTag.setAttribute("class", "unit");
      radiusOrSideTag.innerText = this.side;
      formulaTag1.setAttribute("class", "formula");
      formulaTag1.innerText = this.radiusFormula;
      calculatedValueTag1.setAttribute("class", "unit");
      calculatedValueTag1.innerText = `${value} ${this.unit}`;
      circleRadius.append(radiusOrSideTag, formulaTag1, calculatedValueTag1);
    },
    areaCalculation: function (value) {
      circleArea.innerText = "";
      let area = value * value;
      areaTag.setAttribute("class", "unit");
      areaTag.innerText = this.area;
      formulaTag2.setAttribute("class", "formula");
      formulaTag2.innerHTML = this.areaFormula;
      calculatedValueTag2.setAttribute("class", "unit");
      calculatedValueTag2.innerText = `${area} sq ${this.unit}`;
      circleArea.append(areaTag, formulaTag2, calculatedValueTag2);
    },
    perimeterCalculation: function (value) {
      circlePerimeter.innerText = "";
      let perimeter = 4 * value;
      perimeterTag.setAttribute("class", "unit");
      perimeterTag.innerText = this.perimeter;
      formulaTag3.setAttribute("class", "formula");
      formulaTag3.innerHTML = this.perimeterFormula;
      calculatedValueTag3.setAttribute("class", "unit");
      calculatedValueTag3.innerText = `${perimeter} ${this.unit}`;
      circlePerimeter.append(perimeterTag, formulaTag3, calculatedValueTag3);
    },
  },
};

//on click choose the shape 

circle.addEventListener("click", () => {
  circle.firstElementChild.style.display = "block";
  triangle.firstElementChild.style.display = "none";
  square.firstElementChild.style.display = "none";
  btn[0].style.display = "block";
});

triangle.addEventListener("click", () => {
  circle.firstElementChild.style.display = "none";
  triangle.firstElementChild.style.display = "block";
  square.firstElementChild.style.display = "none";
  btn[0].style.display = "block";
});

square.addEventListener("click", () => {
  circle.firstElementChild.style.display = "none";
  triangle.firstElementChild.style.display = "none";
  square.firstElementChild.style.display = "block";
  btn[0].style.display = "block";
});

// on click go to 2nd section with choosed data

btn[0].addEventListener("click", () => {
  if (circle.firstElementChild.style.display === "block") {
    choosedShape.innerText = "Circle";
    shapeInputHeading.innerText = "2. Enter Radius";
  }

  if (triangle.firstElementChild.style.display === "block") {
    choosedShape.innerText = "Equilateral Triangle";
    shapeInputHeading.innerText = "2. Enter Side(Base & Height)";
  }

  if (square.firstElementChild.style.display === "block") {
    choosedShape.innerText = "Square";
    shapeInputHeading.innerText = "2. Enter Side";
  }

  pages[0].style.display = "none";
  pages[1].style.display = "block";
  btn[1].style.display = "block";
});

// on click Calculate the shape data and show 3rd section

btn[1].addEventListener("click", () => {
  if (input.value) {
    console.log(`value---->>>${input.value}`);
    console.log(`value---->>>${circle.firstElementChild.style.display}`);
    if (circle.firstElementChild.style.display === "block") {
      findShape.setAttribute("class", "circle");

      shape.circle.radiusCalculation(input.value);
      shape.circle.areaCalculation(input.value);
      shape.circle.perimeterCalculation(input.value);
      input.value = "";

      pages[1].style.display = "none";
      pages[2].style.display = "block";
      btn[2].style.display = "block";
    }

    if (triangle.firstElementChild.style.display === "block") {
      findShape.setAttribute("class", "triangle1");

      shape.triangle.sideCalculation(input.value);
      shape.triangle.areaCalculation(input.value);
      shape.triangle.perimeterCalculation(input.value);
      input.value = "";

      pages[1].style.display = "none";
      pages[2].style.display = "block";
      btn[2].style.display = "block";
    }

    if (square.firstElementChild.style.display === "block") {
      findShape.setAttribute("class", "square");
      shape.square.sideCalculation(input.value);
      shape.square.areaCalculation(input.value);
      shape.square.perimeterCalculation(input.value);
      input.value = "";

      pages[1].style.display = "none";
      pages[2].style.display = "block";
      btn[2].style.display = "block";
    }
  } else {
    alert("Please Enter some value");
  }
});

btn[2].addEventListener("click", () => {
  pages[0].style.display = "block";
  pages[1].style.display = "none";
  pages[2].style.display = "none";
  circle.firstElementChild.style.display = "none";
  triangle.firstElementChild.style.display = "none";
  square.firstElementChild.style.display = "none";
  btn[0].style.display = "none";
});
