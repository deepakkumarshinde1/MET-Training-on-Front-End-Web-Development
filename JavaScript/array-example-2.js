let brandName = document.querySelector("#brandName");
let siteLink = document.querySelector("#siteLink");
let save = document.querySelector("#save");
let siteList = document.querySelector("#siteList");
let siteType = document.querySelector("#siteType");
let site_online = document.querySelector("#site_online");
let site_offline = document.querySelector("#site_offline");

let checkArray = ["buy", "search", "download", "watch-video", "chat-online"];
let list = [];

function getCheckData() {
  let checkList = [];
  checkArray.forEach((value, index) => {
    let element = document.querySelector("#" + value);
    if (element.checked === true) {
      checkList.push(element.value);
    }
  });
  return checkList;
}
save.addEventListener("click", () => {
  // console.log(site_online.checked, site_online.value);
  // console.log(site_offline.checked, site_offline.value);

  let brand = brandName.value;
  let link = siteLink.value;
  let type = siteType.value;

  if (brand === "") {
    alert("Enter Brand Name");
    return false;
  }

  if (link === "") {
    alert("Enter Site Link");
    return false;
  }

  if (type === "") {
    alert("Select a site type");
    return false;
  }

  if (site_online.checked === false && site_offline.checked === false) {
    alert("Select Site Status");
  }
  let checkedList = getCheckData();

  if (checkedList.length === 0) {
    alert("Select a Site use for ");
    return false;
  }

  let siteStatus =
    site_online.checked === true ? site_online.value : site_offline.value;

  list.push({
    brand,
    link,
    type,
    status: siteStatus,
    siteUse: checkedList,
  });

  let _list = list.map((value, index) => {
    return `<tr>
              <td>${index + 1}</td>
              <td>${value.brand}</td>
              <td><a href="${value.link}" target="_blank">LINK</a></td>
              <td>${value.type}</td>
              <td>${value.status}</td>
              <td>${value.siteUse.join(", ")}</td>
            </tr>`;
  });
  let lis = _list.join("");
  siteList.innerHTML = lis;
  brandName.value = siteLink.value = siteType.value = "";
  site_online.checked = site_offline.checked = false;

  checkArray.forEach((value, index) => {
    document.querySelector("#" + value).checked = false;
  });
});
