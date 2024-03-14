const buttonAddBuckets = document.getElementById("add_buckets");
const inputTitle = document.getElementById("title_of_buckets");
const addInput = document.getElementById("input_title");
const svgAddInput = document.getElementById("svg_add_title");
const alertMessage = document.getElementById("alert_message");
const tableBuckets = document.getElementById("box_buckets");

let buckets = JSON.parse(localStorage.getItem("titles")) || [];

const generateId = () => {
  return Math.round(
    Math.random() * Math.random() * Math.pow(12, 13)
  ).toString();
};
const saveToLocalStorage = () => {
  localStorage.setItem("titles", JSON.stringify(buckets));
};

const displayBuckets = (data) => {
  const bucketsList = data || buckets;
  tableBuckets.innerHTML = "";
  bucketsList.forEach((buckets) => {
    tableBuckets.innerHTML += `
 <div class="table_buckets">
  <div><table>
  <thead class="t_head"><tr><th class="title">${
    buckets.nameTitle
  }</th><tr><thead>
  <tbody class="t_body"><tr><td class="tasks">${
    buckets.task || "No task found!"
  }</td></tr><tbody>
  </table>
  <p class="end_buckets"</p>
  </div></div>`;
  });
};
const addBucketsHandler = () => {
  buttonAddBuckets.style.display = "none";
  inputTitle.style.display = "block";
};
const addtitleHandler = () => {
  const task = addInput.value;
  const title = {
    id: generateId(),
    nameTitle: task,
  };
  if (title.nameTitle !== "") {
    buckets.push(title);
    tableBuckets.innerHTML;
    saveToLocalStorage();
    addInput.value = "";
    inputTitle.style.display = "none";
    showalert("title added successfully", "success");
    displayBuckets();
  } else {
    showalert("please enter a title!", "error");
  }
};
const showalert = (message, type) => {
  alertMessage.innerHTML = "";
  const alert = document.createElement("p");
  alert.innerText = message;
  alert.classList.add("alert");
  alert.classList.add(`alert_${type}`);
  alertMessage.append(alert);
  setTimeout(() => {
    alert.style.display = "none";
  }, 2000);
};

svgAddInput.addEventListener("click", addtitleHandler);
buttonAddBuckets.addEventListener("click", addBucketsHandler);
