const buttonAddBuckets = document.getElementById("add_buckets");
const title = document.getElementById("title_of_buckets");
const addInput = document.getElementById("input_title");
const svgAddInput = document.getElementById("svg_add_title");
const alertMessage = document.getElementById("alert_message");
const buckets = document.getElementById("buckets");

let titles = JSON.parse(localStorage.getItem("titles")) || [];

const generateId = () => {
  return Math.round(
    Math.random() * Math.random() * Math.pow(12, 13)
  ).toString();
};
const saveToLocalStorage = () => {
  localStorage.setItem("titles", JSON.stringify(titles));
};

const addBucketsHandler = () => {
  buttonAddBuckets.style.display = "none";
  title.style.display = "block";
};
const addtitleHandler = () => {
  const task = addInput.value;
  const title = {
    id: generateId(),
    tasktitle: task,
  };
  if (title.tasktitle !== "" ) {
    titles.push(title);
    saveToLocalStorage();
    addInput.value = "";
    // title.style.display = "none"
    // buckets.style.display = "block";

    showalert("title added successfully", "success");
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
