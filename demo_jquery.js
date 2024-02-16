//  List of countries
const countries = ["India", "America", "England", "Japan", "Canada"];

// list of states
const states = [
  {
    state: "Gujarat",
    country: "India",
  },
  {
    state: "Delhi",
    country: "India",
  },
  {
    state: "Madhya Pradesh",
    country: "India",
  },
  {
    state: "Rajasthan",
    country: "India",
  },
  {
    state: "Maharastra",
    country: "India",
  },
  {
    state: "California",
    country: "America",
  },
  {
    state: "Texas",
    country: "America",
  },
  {
    state: "London",
    country: "England",
  },
  {
    state: "North West",
    country: "England",
  },
  {
    state: "Kanto",
    country: "Japan",
  },
  {
    state: "Kansai",
    country: "Japan",
  },
  {
    state: "Ontario",
    country: "Canada",
  },
  {
    state: "Manitoba",
    country: "Canada",
  },
];

// List of Cities
const cities = [
  {
    cityname: "Surat",
    state: "Gujarat",
  },
  {
    cityname: "Vadodara",
    state: "Gujarat",
  },
  {
    cityname: "New Delhi",
    state: "Delhi",
  },
  {
    cityname: "Shergarh",
    state: "Delhi",
  },
  {
    cityname: "Mumbai",
    state: "Maharastra",
  },
  {
    cityname: "Pune",
    state: "Maharastra",
  },
  {
    cityname: "Jaipur",
    state: "Rajasthan",
  },
  {
    cityname: "Udaypur",
    state: "Rajasthan",
  },
  {
    cityname: "Bhopal",
    state: "Madhya Pradesh",
  },
  {
    cityname: "Ujjain",
    state: "Madhya Pradesh",
  },
  {
    cityname: "Los Angles",
    state: "California",
  },
  {
    cityname: "San Diego",
    state: "California",
  },
  {
    cityname: "Houston",
    state: "Texas",
  },
  {
    cityname: "Dallas",
    state: "Texas",
  },
  {
    cityname: "Wembley",
    state: "London",
  },
  {
    cityname: "Southwark",
    state: "London",
  },
  {
    cityname: "Liverpool",
    state: "North West",
  },
  {
    cityname: "Manchester",
    state: "North West",
  },
  {
    cityname: "Saitama",
    state: "Kanto",
  },
  {
    cityname: "Tokyo",
    state: "Kanto",
  },
  {
    cityname: "Kyoto",
    state: "Kansai",
  },
  {
    cityname: "Osaka",
    state: "Kansai",
  },
  {
    cityname: "Toronto",
    state: "Ontario",
  },
  {
    cityname: "Ottawa",
    state: "Ontario",
  },
  {
    cityname: "Thompson",
    state: "Manitoba",
  },
  {
    cityname: "Winnipeng",
    state: "Manitoba",
  },
];

const persons = [
  {
    id: 1,
    name: "tagline",
    email: "abc@gmail.com",
    gender: "Female",
    hobbies: ["Reading", "Music"],
    dob: "2005-03-01",
    Age: "18",
    country: "India",
    state: "Gujarat",
    city: "Surat",
    created_at: "12/02/2024, 10:15:25",
    updated_at: "Not updated",
  },
  {
    id: 2,
    name: "XYZ",
    email: "xyz@gmail.com",
    gender: "Male",
    hobbies: ["Music"],
    dob: "2002-08-10",
    Age: "21",
    country: "India",
    state: "Rajasthan",
    city: "Jaipur",
    created_at: "12/02/2024, 10:16:50",
    updated_at: "Not updated",
  },
  {
    id: 3,
    name: "nidhi",
    email: "nidhi@gmail.com",
    gender: "Female",
    hobbies: ["Reading", "Travelling"],
    dob: "2003-01-01",
    Age: "21",
    country: "America",
    state: "Texas",
    city: "Dallas",
    created_at: "12/02/2024, 10:18:35",
    updated_at: "Not updated",
  },
];

// Countries Dropdown
for (const country of countries) {
  $('select[name="country"]').append(
    $("<option/>").attr("value", country).text(country)
  );
}

// States Dropdown
function countryChange() {
  $('select[name="state"]').html('<option value="select">Select</option>');
  const countrySelect = $('select[name="country"]').val();
  for (const state of states) {
    if (countrySelect === state.country) {
      $('select[name="state"]').append(
        $("<option/>").attr("value", state.state).text(state.state)
      );
    }
  }
  stateChange();
}

// Cities Dropdown
function stateChange() {
  $('select[name="city"]').html('<option value="select">Select</option>');
  const stateSelect = $('select[name="state"]').val();
  for (const city of cities) {
    if (stateSelect === city.state) {
      $('select[name="city"]').append(
        $("<option/>").attr("value", city.cityname).text(city.cityname)
      );
    }
  }
}

// DOB limit to today
function DobLimit() {
  let today = new Date().toISOString().split("T")[0];
  return today;
}
$("#dob").attr("max", DobLimit());

// display person array data in table
function displayData() {
  $("#table_body").html("");

  for (let person of persons) {
    let tBody = $("#table_body");
    let row = $("<tr/>").appendTo(tBody);
    for (let property in person) {
      if (property !== "id" && property !== "dob") {
        row.append($("<td/>").text(person[property]));
      }
    }
    // Edit Button
    row.append(
      $("<td/>").append(
        $("<button/>")
          .attr("name", "edit-btn")
          .text("Edit")
          .click(() => editData(person.id))
      )
    );
    // Delete Button
    row.append(
      $("<td/>").append(
        $("<button/>")
          .attr("name", "delete-btn")
          .text("Delete")
          .click(() => deleteData(person.id))
      )
    );
  }
}
displayData();

// hobbies checkbox validation
function checkboxValidation() {
  let hobbyErr = $("#hobbyErr");
  hobbyErr.html("");
  let hobbies = $('input[name="hobby[]"]');
  let error = true;
  for (hobby of hobbies) {
    if (hobby.checked) {
      error = false;
    }
  }
  if (error) {
    hobbyErr.html("Select at least one hobby.").css("display", "block");
    return false;
  } else {
    return true;
  }
}

// form validation function
function validateForm() {
  let errName = $("#nameErr");
  errName.html("");
  let name = $('input[name="name"]').val();
  let error = false;
  if (name == "") {
    errName.html("Enter your name.").css("display", "block");
    error = true;
  }

  let errEmail = $("#emailErr");
  errEmail.html("");
  let email = $('input[name="email"]').val();
  if (email == "") {
    errEmail.html("Enter your email.").css("display", "block");
    error = true;
  }

  let errGen = $("#genderErr");
  errGen.html("");
  let male = $("#male");
  let female = $("#female");
  if (!male.is(":checked") && !female.is(":checked")) {
    errGen.html("Select your gender!");
    errGen.css("display", "block");
    error = true;
  }

  if (!checkboxValidation()) {
    error = true;
  }

  let errDob = $("#dobErr");
  errDob.html("");
  let dob = $('input[name="dob"]').val();
  if (dob == "") {
    errDob.html("Enter your DOB.").css("display", "block");
    error = true;
  }

  let errCountry = $("#countryErr");
  errCountry.html("");
  let country = $('select[name="country"]').val();
  if (country == "select") {
    errCountry.html("Select country.").css("display", "block");
    error = true;
  }

  let errState = $("#stateErr");
  errState.html("");
  let state = $('select[name="state"]').val();
  if (state == "select") {
    errState.html("Select state.").css("display", "block");
    error = true;
  }

  let errCity = $("#cityErr");
  errCity.html("");
  let city = $('select[name="city"]').val();
  if (city == "select") {
    errCity.html("Select city.").css("display", "block");
    error = true;
  }

  if (error) {
    return false;
  } else {
    return true;
  }
}

// function to generate unique ID
function generateNewID() {
  let newID = 1;
  while (persons.some((person) => person.id === newID)) {
    newID++;
  }
  return newID;
}

// calculate age from Dob
function dobToAge() {
  let today = new Date();
  let DOB = new Date($('input[name="dob"]').val());
  let age = today.getFullYear() - DOB.getFullYear();
  let m = today.getMonth() - DOB.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < DOB.getDate())) {
    age--;
  }
  return age;
}

// Add new data from form values
function addData() {
  let hobbiesChecked = [];
  let hobbies = $('input[name="hobby[]"]');
  for (hobby of hobbies) {
    if (hobby.checked) {
      hobbiesChecked.push(hobby.value);
    }
  }

  if (validateForm()) {
    let cTime = new Date().toLocaleString();
    let newID = generateNewID();
    let newData = {
      id: newID,
      name: $('input[name="name"]').val(),
      email: $('input[name="email"]').val(),
      gender: $('input[name="Gender"]:checked').val(),
      hobbies: hobbiesChecked,
      dob: $('input[name="dob"]').val(),
      Age: dobToAge(),
      country: $('select[name="country"]').val(),
      state: $('select[name="state"]').val(),
      city: $('select[name="city"]').val(),
      created_at: cTime,
      updated_at: "Not updated",
    };
    persons.push(newData);
    sortData();
    displayData();
    clearForm();
  }
}

// delete data from table
function deleteData(dID) {
  let index = persons.findIndex((person) => dID === person.id);
  persons.splice(index, 1);
  displayData();
  clearForm();
}

// functionality after clicking edit button
function editData(edID) {
  $(".errMessage").hide();
  let fetchPerson = persons.find((person) => person.id === edID);

  $("#pid").val(fetchPerson.id);
  $("#name").val(fetchPerson.name);
  $("#email").val(fetchPerson.email);
  if (fetchPerson.gender == "Male") {
    $("#male").prop("checked", "true");
  } else if (fetchPerson.gender == "Female") {
    $("#female").prop("checked", "true");
  }
  uncheckHobby();
  fetchPerson.hobbies.forEach((hobby) => {
    $("#" + hobby).prop("checked", "true");
  });
  $("#dob").val(fetchPerson.dob);
  $("#country").val(fetchPerson.country);
  countryChange();
  $("#state").val(fetchPerson.state);
  stateChange();
  $("#city").val(fetchPerson.city);

  $("#submitbtn").hide();
  $("#updatebtn")
    .show()
    .attr("onclick", "updateData(" + fetchPerson.id + ")");
  $("#cancelbtn").show();
  $("button[name='delete-btn']").attr("disabled", "true");
  $("button[name='edit-btn']").attr("disabled", "true");
}

// uncheck radio button
function uncheckGender() {
  $("#male").prop("checked", false);
  $("#female").prop("checked", false);
}

// uncheck  all checkboxes in Hobby
function uncheckHobby() {
  let hobbies = $('input[name="hobby[]"]');
  for (hobby of hobbies) {
    hobby.checked = false;
  }
}

function clearForm() {
  $("#pid").val("");
  $('input[name="name"]').val("");
  $('input[name="email"]').val("");
  uncheckGender();
  uncheckHobby();
  $('input[name="dob"]').val("");
  $('select[name="country"]').val("select");
  $('select[name="state"]').val("select");
  $('select[name="city"]').val("select");

  $("#submitbtn").show();
  $("#updatebtn").hide();
  $("#cancelbtn").hide();
  $(".errMessage").hide();
}

// Cancle button to clear form record
function cancelButton() {
  displayData();
  clearForm();
}

// Update data in table
function updateData(uID) {
  const fIndex = persons.findIndex((person) => person.id === uID);
  let hobbiesChecked = [];
  let hobbies = $('input[name="hobby[]"]');
  for (hobby of hobbies) {
    if (hobby.checked) {
      hobbiesChecked.push(hobby.value);
    }
  }

  if (validateForm()) {
    persons[fIndex].name = $("#name").val();
    persons[fIndex].email = $("#email").val();
    persons[fIndex].gender = $('input[name="Gender"]:checked').val();
    persons[fIndex].hobbies = hobbiesChecked;
    persons[fIndex].dob = $("#dob").val();
    persons[fIndex].Age = dobToAge();
    persons[fIndex].country = $("#country").val();
    persons[fIndex].state = $("#state").val();
    persons[fIndex].city = $("#city").val();
    persons[fIndex].updated_at = new Date().toLocaleString();

    sortData();
    displayData();
    clearForm();
  }
}

// Search bar function where check if input value is in name or email column and show matched results
function filterData() {
  let searchData = $("#searchbar").val().toLowerCase();
  let rows = $("#data_table>tbody tr");
  for (let i = 0; i < rows.length; i++) {
    const cells = $(rows[i]).find("td");
    const dataName = $(cells[0]).text().toLowerCase();
    const dataEmail = $(cells[1]).text().toLowerCase();
    if (dataName.includes(searchData) || dataEmail.includes(searchData)) {
      $(rows[i]).show();
    } else {
      $(rows[i]).hide();
    }
  }
}

// Sorting ascending or descending
function sortData() {
  let order = $("#sorting_order").val();
  if (order == "ascend") {
    persons.sort((s1, s2) => s1.name.localeCompare(s2.name));
  } else if (order == "descend") {
    persons.sort((s1, s2) => s1.name.localeCompare(s2.name)).reverse();
  }
  displayData();
}
