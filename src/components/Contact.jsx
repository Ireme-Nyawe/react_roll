export default function Contacts({img,name,phone,email}){
    return(
        <div className="contact-card">
            <img className="contact-image" src={img} />
            <h2>react-logo</h2>
            <div className="telephone">
                <img src="" alt="" />
                <span>{phone}</span>
            </div>
            <div className="email">
                <img src="" alt="" />
                <span>{email}</span>
            </div>
        </div>
    );
}