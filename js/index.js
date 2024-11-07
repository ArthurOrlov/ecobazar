document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.nav__link').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tab-content').forEach(function (tabContent) {
        tabContent.classList.remove('tab-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
    })
  })
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.assortment__menu-item').forEach(function (tabsClick) {
    tabsClick.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.assortment__menu-item').forEach(function (tabContent) {
        tabContent.classList.remove('assortment__menu-item-active')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('assortment__menu-item-active');
    })
  })
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.filter').forEach(function (tabs) {
    tabs.addEventListener('click', function (evnt) {
      const filter = evnt.currentTarget.dataset.filter

      document.querySelectorAll('.filter').forEach(function (tabList) {
        tabList.classList.remove('filter-active')
      })
      document.querySelector(`[data-filter="${filter}"]`).classList.add('filter-active');
    })
  })
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.rent-contacts__menu-item').forEach(function (tabsClick) {
    tabsClick.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.rent-contacts__menu-item').forEach(function (tabContent) {
        tabContent.classList.remove('rent-contacts__menu-item-active')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('rent-contacts__menu-item-active');
    })
  })
});

let fakeinput = document.querySelectorAll('.fakeinput');
let hold = document.querySelectorAll('.holder');

for (let i = 0; i < fakeinput.length; i++) {
  fakeinput[i].addEventListener('input', function () {
    hold[i].style.display = (this.value == "") ? 'inline' : 'none';
  });
}

const btsFilter = Array.from(document.querySelectorAll('[data-filter]'))

const colors = ['beef', 'delicacies', 'fish', 'vegetables', 'fruits', 'berries', 'birds', /*, .... */]
const map = colors.reduce((a, e) => {
  const bt = btsFilter.find((btel) => btel.dataset.filter === e)
  const els = Array.from(document.querySelectorAll(`.item.${e}`))
  let hide = false
  a.set(e, (fl, reset) => {
    if (fl) {
      reset || bt.classList.add('selected')
      if (!hide) return
      hide = false
      els.forEach((e) => e.classList.remove('hide'))
    } else {
      bt.classList.remove('selected')
      if (hide) return
      hide = true
      els.forEach((e) => e.classList.add('hide'))
    }
  })
  return a
}, new Map())
map.set('reset', (fl) => fl && colors.forEach((e) => map.get(e)(fl, true)))

btsFilter.forEach((i) => i.addEventListener('click', ({ target: { dataset: { filter } } }) => {
  for (let [key, show] of map.entries()) {
    show(filter === key)
  }
}));



var button = document.getElementById("show-more");
var list = document.getElementById("list");
var items = list.getElementsByClassName("item");
var visibleItemCount = 8; // количество элементов, которые отображаются изначально
var hiddenItemCount = items.length - visibleItemCount; // количество скрытых элементов

// Скрыть все элементы, кроме первых visibleItemCount
for (var i = visibleItemCount; i < items.length; i++) {
  items[i].style.display = "none";
}

button.onclick = function () {
  // Отобразить следующие hiddenItemCount элементов
  for (var i = visibleItemCount; i < visibleItemCount + hiddenItemCount; i++) {
    if (items[i]) {
      items[i].style.display = "flex";
    }
  }

  // Если все элементы отображены, скрыть кнопку
  if (visibleItemCount + hiddenItemCount >= items.length) {
    button.style.display = "none";
  }

  visibleItemCount += hiddenItemCount;
};
