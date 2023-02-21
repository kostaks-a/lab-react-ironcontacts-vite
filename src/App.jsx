import { useState } from "react"
import './App.css'
import contacts from './contacts.json'

function App() {
  const [firstSeven, setFirstSeven] = useState(contacts.slice(0, 7))
  const [remainingContacts, setRemainingContacts] = useState(contacts.slice(7))
 


 //const random = remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
  //console.log(random)

 function addRandomContact() {
  if (remainingContacts.length > 0) {
  const random = Math.floor(Math.random() * remainingContacts.length);
  const pickedContact = remainingContacts.splice(random, 1)[0];
  setFirstSeven([...firstSeven, pickedContact])
  console.log(remainingContacts.length)
  }else{
    alert("No more contacts")
  }
 }

 function sortContactsByName() {
  setFirstSeven([...firstSeven.sort((a, b) => a.name.localeCompare(b.name))])
 }

 function sortContactsByPopularity() {
  setFirstSeven([...firstSeven.sort((a, b) => b.popularity - a.popularity)])
 }

 function deleteContact(id) {
  const contactsRemaining = firstSeven.filter(contact => contact.id!== id)
  setFirstSeven(contactsRemaining)
  console.log(firstSeven)
 }

  return (
  <div className='App'>
    <h1>Ironcontacts</h1>
    <button onClick={addRandomContact}>Press to add contact</button>
    <button onClick={sortContactsByName}>Sort by Name</button>
    <button onClick={sortContactsByPopularity}>Sort by Popularity</button>
    <table className='table'>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
          {firstSeven.map((contact) => (
            <tr key={contact.id} >
              <td> <img src={contact.pictureUrl} className="image" alt="profile"></img></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              {contact.wonEmmy ? <td><img src='/public/trophy.png' ></img></td> : <td></td>}
              {contact.wonOscar ? <td><img src='/public/trophy.png' ></img></td> : <td></td>}
              <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
        </tr>
          ))}
          
       </tbody>
    </table>

  </div>
  )
}
export default App
