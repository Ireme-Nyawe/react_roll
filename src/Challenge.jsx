import Contacts from "./components/Contact";

export default function Challenge() {
  return (
    <div className="contact-container">
      <Contacts 
      img="./src/assets/react.svg" 
      name="react-logo" 
      phone="+67876546567" 
      email="contact@react.com"
      />
      <Contacts 
      img="./src/assets/bike.jpg" 
      name="great-Bike" 
      phone="+123456876543" 
      email="contact@bike.com"
      />
      <Contacts 
      img="./src/assets/flower.jpg" 
      name="rwandan-flower" 
      phone="+25078654535" 
      email="contact@flower.com"
      />
      <Contacts 
      img="./src/assets/teacher.png" 
      name="teacher-move" 
      phone="+13404040595" 
      email="contact@teacher.com"
      />
    </div>
  );
}
