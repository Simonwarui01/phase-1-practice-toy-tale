let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const toyCollection = document.querySelector("#toy-collection");
  const form = document.querySelector(".add-toy-form");

  // 1. Toggle the form display
  addBtn.addEventListener("click", () => {
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  // 2. Sample toy data (your JSON)
  const toys = [
    {
      id: 1,
      name: "Woody",
      image: "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
      likes: 5
    },
    {
      id: 2,
      name: "Buzz Lightyear",
      image: "http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png",
      likes: 8
    },
    {
      id: 3,
      name: "Mr. Potato Head",
      image: "https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/d/d8/Mr-potato-head-toy-story.gif/revision/latest?cb=20151129131217",
      likes: 3
    },
    {
      id: 4,
      name: "Slinky Dog",
      image: "https://www.freeiconspng.com/uploads/slinky-png-transparent-1.png",
      likes: 4
    },
    {
      id: 5,
      name: "Rex",
      image: "https://static.wikia.nocookie.net/disney/images/5/56/Profile_-_Rex.jpeg/revision/latest?cb=20190313050619",
      likes: 1
    },
    {
      id: 6,
      name: "Bo Peep",
      image: "http://4.bp.blogspot.com/_OZHbJ8c71OM/Sog43CMFX2I/AAAAAAAADEs/0AKX0XslD4g/s400/bo.png",
      likes: 2
    },
    {
      id: 7,
      name: "Hamm",
      image: "https://cdn140.picsart.com/244090226021212.png?r1024x1024",
      likes: 0
    },
    {
      id: 8,
      name: "Little Green Men",
      image: "http://www.pngmart.com/files/3/Toy-Story-Alien-PNG-File.png",
      likes: 1
    }
  ];

  // 3. Function to render a toy card
  function renderToy(toy) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h2>${toy.name}</h2>
      <img src="${toy.image}" class="toy-avatar" />
      <p>${toy.likes} Likes</p>
      <button class="like-btn">Like ❤️</button>
    `;

    // Optional: Add like button functionality
    const likeBtn = card.querySelector(".like-btn");
    likeBtn.addEventListener("click", () => {
      toy.likes++;
      card.querySelector("p").textContent = `${toy.likes} Likes`;
    });

    toyCollection.appendChild(card);
  }

  // 4. Load all existing toys
  toys.forEach(renderToy);

  // 5. Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;

    if (name && image) {
      const newToy = {
        id: toys.length + 1,
        name,
        image,
        likes: 0
      };
      toys.push(newToy);
      renderToy(newToy);
      form.reset();
    }
  });
});
