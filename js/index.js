const buttonAddBuckets = document.getElementById("add_buckets");
const inputTitle = document.getElementById("title_of_buckets");
const addInput = document.getElementById("input_title");
const svgAddInput = document.getElementById("svg_add_title");
const alertMessage = document.getElementById("alert_message");
const tableBuckets = document.getElementById("box_buckets");

const generateNumber = () => {
  return Math.round(
    Math.random() * Math.random() * Math.random(1, 1000) * 1000 * 100000
  );
};
const generateId = () => {
  return Math.round(
    Math.random() * Math.random() * Math.pow(12, 13)
  ).toString();
};
const loadFromLocalStorage = (default_key = "page_data") => {

  return JSON.parse(localStorage.getItem(default_key)) || [] ;
};
const saveToLocalStorage = (buckets, default_key = "page_data") => {
  localStorage.setItem(default_key, JSON.stringify(buckets));
};

let buckets = loadFromLocalStorage();

console.log(buckets);
const inputTasksHandler = (event) => {
  const value_task = event.target.value;
  const current_bucket_id = event.srcElement.getAttribute("data-id");

  buckets.map((bucket) => {
    if (bucket.id === current_bucket_id) {
      if (!bucket.tasks) {
        bucket.tasks = [];
      }
      const new_task = {
        task_id: generateId(),
        bucket_id: bucket.id,
        name: value_task,}
        bucket.tasks.push(new_task);
        saveToLocalStorage(buckets);
        event.target.value = "";
        loadHandler();
      

    }
  });
};
const addInputHandler = () => {};
const displayBuckets = () => {
  tableBuckets.innerHTML = "";
  buckets.forEach((bucket) => {
    const divTabel = document.createElement("div");
    divTabel.classList.add("table_buckets");
    tableBuckets.append(divTabel);
    const div2 = document.createElement("div");
    divTabel.append(div2);
    const table = document.createElement("table");
    div2.append(table);
    const thead = document.createElement("thead");
    thead.classList.add("t_head");
    table.append(thead);
    const tr = document.createElement("tr");
    thead.append(tr);
    const th = document.createElement("th");
    th.classList.add("title");
    tr.append(th);
    th.innerHTML = `${bucket.nameTitle}`;
    const tbody = document.createElement("tbody");
    tbody.classList.add("t_body");
    table.append(tbody);
    const tr1 = document.createElement("tr");
    tbody.append(tr1);
    if(bucket.tasks){
    bucket.tasks.map((bucket_task) => {
      const task = document.createElement("td");
      task.classList.add("task");
      task.innerHTML = bucket_task.name;
      tr1.appendChild(task);
    });}
      const task_input = document.createElement("input");
      task_input.classList.add("input_tasks");
      task_input.setAttribute("data-id", bucket.id);
      task_input.placeholder = "Enter a new task ...";
      task_input.onchange = inputTasksHandler;
      div2.appendChild(task_input);
      const p2 = document.createElement("p");
      p2.classList.add("end_buckets");
      div2.append(p2);
    

  });
  const divTabel2 = document.createElement("div");
    divTabel2.classList.add("table_buckets");
    tableBuckets.append(divTabel2);
    const div2 = document.createElement("div");
    divTabel2.append(div2);
    const table = document.createElement("table");
    div2.append(table);
    const thead = document.createElement("thead");
    thead.classList.add("t_head");
    table.append(thead);
    const tr = document.createElement("tr");
    thead.append(tr);
    const input_title = document.createElement("input");
    input_title.classList.add("input_title_2");
    input_title.placeholder = "Enter a new title ...";
    input_title.onchange = addTitleHandler2; 
    tr.appendChild(input_title)
};
const addTitleHandler2 = (event) => {
  const new_title = event.target.value;
  const page_data = {
    id: generateId(),
    nameTitle: new_title,

  };
  if (page_data.nameTitle !== "") {
    buckets.push(page_data);
    tableBuckets.innerHTML;
    saveToLocalStorage(buckets);
    event.target.value = "";
    loadHandler();
  }

}
const addBucketsHandler = () => {
  buttonAddBuckets.style.display = "none";
  inputTitle.style.display = "block";
};

const addTitleHandler = () => {
  const task = addInput.value;
  const page_data = {
    id: generateId(),
    nameTitle: task,
  };
  if (page_data.nameTitle !== "") {
    buckets.push(page_data);
    tableBuckets.innerHTML;
    saveToLocalStorage(buckets);
    addInput.value = "";
    inputTitle.style.display = "none";
    showalert("title added successfully", "success");
    displayBuckets();
    loadFromLocalStorage();
  } else {
    showalert("please enter a title!", "error");
  }
};
const loadHandler = () => {
  if (buckets.length >= 1) {
    buttonAddBuckets.style.display = "none";
    displayBuckets();
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
window.addEventListener("load", loadHandler);
svgAddInput.addEventListener("click", addTitleHandler);
buttonAddBuckets.addEventListener("click", addBucketsHandler);
