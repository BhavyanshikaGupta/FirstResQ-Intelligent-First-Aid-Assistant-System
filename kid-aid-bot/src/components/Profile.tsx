import { useUser } from "./context/UserContext"; 

const Profile = () => {
   const { user } = useUser();
    if (!user) return <h2 className="p-8 text-center">Not logged in</h2>;
     
     return ( <div className="max-w-lg mx-auto mt-20 p-6 rounded-xl shadow-md">
       <h1 className="text-2xl font-bold mb-4">Profile</h1> 
       <p><strong>Name:</strong> {user.name}</p>
        <p className="mt-2"><strong>Email:</strong> {user.email}</p> 
        </div> 
        );
       };
       
export default Profile;