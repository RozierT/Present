import ImageIcon from "../profile/ImageIcon";
import placeholdIcon from '../../assets/images/placeholdIcon.png';


const PostContent = ({ content, tags }) => {
  return (
    <div style={{ position: 'relative' }}>
      <ImageIcon
        size="fill"
        bordered={false}
        shape="square"
        imageSrc={content}
        alt=""
        linked={false}
        actionable={false}
      />
      <div className='flex justify-end bg-transparent' style={{ position: 'absolute', bottom: '0', right: '0' }}>
        <div className='flex'>
          {tags.map((item, index) => (
            <div className='p-1'>
              <ImageIcon size={"small"} imageSrc={placeholdIcon} shape={"circle"} bordered={true} linked={false} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostContent;
