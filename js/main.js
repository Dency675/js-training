const request = fetch("https://api.msigma.in/btech/v2/branches/");

const courseSet = document.querySelector(".course-container");

request
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    for (let i = 0; i < 10; i++) {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

      const colors = `rgb(${r},${g},${b})`;

      const div1 = document.createElement("div");
      div1.classList.add("div-class1");
      const h41 = document.createElement("h4");
      h41.style.color = colors;
      const p1 = document.createElement("p");
      p1.classList.add("p1-class");

      const applybutton1 = document.createElement("button");
      applybutton1.classList.add("button-class");
      applybutton1.style.color = colors;
      applybutton1.style.backgroundColor = `rgba(${r},${g},${b},0.05)`;
      applybutton1.style.borderBlockColor = colors;

      const p12 = document.createElement("p");
      p12.classList.add("p-class");

      h41.textContent = data.branches[i].short;
      p1.textContent = data.branches[i].name;
      applybutton1.textContent = "Apply Now";
      p12.textContent = "Fee starting at ₹799 per subject";

      div1.appendChild(h41);
      div1.appendChild(p1);
      div1.appendChild(applybutton1);
      div1.appendChild(p12);

      courseSet.appendChild(div1);
    }
  })
  .catch((error) => console.log(error.message));
