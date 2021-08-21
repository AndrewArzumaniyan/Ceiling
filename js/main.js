window.addEventListener('DOMContentLoaded', function () {
  let columnColor = document.querySelectorAll('.column__color');
  let columnColor1 = document.querySelectorAll('.column__color_1');
  let columnColor2 = document.querySelectorAll('.column__color_2');
  let columnColor3 = document.querySelectorAll('.column__color_3');
  let colorBlock = document.querySelector('.choice__background');
  let colorIndent = document.querySelector('.column__fig');

  let tabName = document.querySelectorAll('.column__item');

  for (let i = 0; i < tabName.length; i++) {
    for (let c = 0; c < columnColor.length; c++) {
      columnColor[c].style.backgroundColor = columnColor[c].dataset.color;
    }

    document.querySelector('.column__facture').innerHTML = document.querySelector('.column__item.active').dataset.facture;


    tabName[i].addEventListener('click', function (event) {


      tabName.forEach(function (item) {
        item.classList.remove('active');
      })
      tabName[i].classList.add('active');

      document.querySelector('.column__facture').innerHTML = document.querySelector('.column__item.active').dataset.facture;

      const tab = event.currentTarget.dataset.tab;

      document.querySelectorAll('.column__colors').forEach(function (content) {
        content.classList.remove('active');
      });

      document.querySelector(`[data-target="${tab}"]`).classList.add('active');

      document.querySelectorAll('.choice__img').forEach(function (content) {
        content.classList.remove('active');
      });

      document.querySelector(`[data-img="${tab}"]`).classList.add('active');




      if (document.querySelector('.column__colors_2').classList.contains('active') === true) {
        colorBlock.style.backgroundColor = document.querySelector('.column__color_2.active').dataset.color;
        colorIndent.style.backgroundColor = document.querySelector('.column__color_2.active').dataset.color;
        document.querySelector('.column__color-name').innerHTML = document.querySelector('.column__color_2.active').dataset.colorname;

        for (let c = 0; c < columnColor2.length; c++) {
          columnColor2[c].addEventListener('click', function () {
            colorBlock.style.backgroundColor = columnColor2[c].dataset.color;
            colorIndent.style.backgroundColor = columnColor2[c].dataset.color;
            document.querySelector('.column__color-name').innerHTML = columnColor2[c].dataset.colorname;

            columnColor2.forEach(function (color2) {
              color2.classList.remove('active');
            });

            columnColor2[c].classList.add('active');


          });
        }
      }

      if (document.querySelector('.column__colors_3').classList.contains('active') === true) {
        colorBlock.style.backgroundColor = document.querySelector('.column__color_3.active').dataset.color;
        colorIndent.style.backgroundColor = document.querySelector('.column__color_3.active').dataset.color;
        document.querySelector('.column__color-name').innerHTML = document.querySelector('.column__color_3.active').dataset.colorname;

        for (let c = 0; c < columnColor3.length; c++) {
          columnColor3[c].addEventListener('click', function () {
            colorBlock.style.backgroundColor = columnColor3[c].dataset.color;
            colorIndent.style.backgroundColor = columnColor3[c].dataset.color;
            document.querySelector('.column__color-name').innerHTML = columnColor3[c].dataset.colorname;

            columnColor3.forEach(function (color3) {
              color3.classList.remove('active');
            });

            columnColor3[c].classList.add('active');


          });
        }
      }

      if (document.querySelector('.column__colors_1').classList.contains('active') === true) {
        colorBlock.style.backgroundColor = document.querySelector('.column__color_1.active').dataset.color;
        colorIndent.style.backgroundColor = document.querySelector('.column__color_1.active').dataset.color;
        document.querySelector('.column__color-name').innerHTML = document.querySelector('.column__color_1.active').dataset.colorname;
      }
    });

    if (document.querySelector('.column__colors_1').classList.contains('active') === true) {

      for (let c = 0; c < columnColor1.length; c++) {
        columnColor1[c].addEventListener('click', function () {
          colorBlock.style.backgroundColor = columnColor1[c].dataset.color;
          colorIndent.style.backgroundColor = columnColor1[c].dataset.color;
          document.querySelector('.column__color-name').innerHTML = columnColor1[c].dataset.colorname;

          columnColor1.forEach(function (color1) {
            color1.classList.remove('active');
          });

          columnColor1[c].classList.add('active');


        });
      }
    }
  };
});
