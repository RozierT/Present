import BioSection from "./BioSection";
import IconBand from "./IconBand";





const ProfileHeader = ({profile}) => {

    return (
        <div>
        <BioSection profile={profile}/>
        <IconBand data={profile.latestPosts} />
        </div>
    )
    }


export default ProfileHeader;