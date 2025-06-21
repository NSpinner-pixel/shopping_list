// Initialize empty list
let myList = [];

// Display a message to the user
function showMessage(text) {
  const msg = document.getElementById('message');
  msg.textContent = text;
  setTimeout(() => {
    msg.textContent = '';
  }, 3000);
}

// Add item only if not already in the list (case-insensitive)
function addNewItem() {
  const inputField = document.getElementById('newItemInput');
  const item = inputField.value.trim();
  if (!item) {
    showMessage("Please enter something before adding.");
    return;
  }
  
  const itemExists = myList.some(
    (existing) => existing.toLowerCase() === item.toLowerCase()
  );
  
  if (itemExists) {
    showMessage("That item is already in your list.");
  } else {
    myList.push(item);
    updateListDisplay();
    inputField.value = '';
    inputField.focus();
  }
}

// Remove last item from list
function removeLastEntry() {
  if (myList.length === 0) {
    showMessage("List is already empty.");
    return;
  }
  myList.pop();
  updateListDisplay();
}

// Clear all items
function clearEntireList() {
  if (myList.length === 0) {
    showMessage("List is already empty.");
    return;
  }
  myList = [];
  updateListDisplay();
}

// Update the displayed list in the browser
function updateListDisplay() {
  const listElement = document.getElementById('itemsContainer');
  listElement.innerHTML = '';

  myList.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    listElement.appendChild(li);
  });
}

// Bonus: Search function (can be tested in console)
function searchList(term) {
  return myList.filter((item) =>
    item.toLowerCase().includes(term.toLowerCase())
  );
}

