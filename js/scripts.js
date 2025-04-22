// https://assets.codepen.io/16425/Spring-2025-Roster.json

const dataSource = 'https://assets.codepen.io/16425/Spring-2025-Roster.json';

// Get the container
const container = document.querySelector('.grid ul');

// Fetch the data
fetch(dataSource)
  .then(res => res.json())
  .then(students => {
    console.log(students[3].name); // sanity check

    students.forEach(student => {
      const template = `
        <li style="
          background-color: ${student.favoriteColor};
          border: 4px dotted #000;
          border-radius: 12px;
          padding: 1rem;
          text-align: left;
          color: black;
        ">
          <img src="${student.imageUrl}" alt="${student.name}" style="max-width: 100%; border-radius: 20px;" />
          <h2>${student.name}</h2>
          <p><strong>Favorite Band:</strong> ${student.favoriteBand}</p>
          <p><strong>Talent:</strong> ${student.talent}</p>
          <em>${student.favoriteSong}</em>
        </li>
      `;

      container.insertAdjacentHTML('beforeend', template);
    });
  
  
  
  
  
  
  
  });

