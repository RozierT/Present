import ImageIcon from "../profile/ImageIcon";
import placeholdIcon from "../../assets/images/placeholdIcon.png";

// const tagIcons = [
//   {
//     tag: 'food',
//     imageSrc: 'PlaceholderIcon.png'
//   },
//   {
//     tag: 'science',
//     imageSrc: 'PlaceholderIcon.png'
//   },
//   {
//     tag: 'art',
//     imageSrc: 'PlaceholderIcon.png'
//   },
//   {
//     tag: 'music',
//     imageSrc: 'PlaceholderIcon.png'
//   },
//   {
//     tag: 'travel',
//     imageSrc: 'PlaceholderIcon.png'
//   },
//   {
//     tag: 'sports',
//     imageSrc: 'PlaceholderIcon.png'
//   },
//   {
//     tag: 'games',
//     imageSrc: 'PlaceholderIcon.png'
//   },
//   {
//     tag: 'fashion',
//     imageSrc: 'PlaceholderIcon.png'
//   },
//   {
//     tag: 'technology',
//     imageSrc: 'PlaceholderIcon.png'
//   },
//   {
//     tag: 'health',
//     imageSrc: 'PlaceholderIcon.png'
//   },
//   {
//     tag: 'education',
//     imageSrc: 'PlaceholderIcon.png'
//   },
//   {
//     tag: 'politics',
//     imageSrc: 'PlaceholderIcon.png'
//   },
//   {
//     tag: 'religion',
//     imageSrc: 'PlaceholderIcon.png'
//   },
//   {
//     tag: 'news',
//     imageSrc: 'PlaceholderIcon.png'
//   },
//   {
//     tag: 'books',
//     imageSrc: 'PlaceholderIcon.png'
//    }
// ];
// *REMOVE/REPLACE Placeholders with actual icons when the are created

const PostContent = ({ content, tags }) => {
  return (
    <div style={{ position: "relative" }}>
      <ImageIcon
        size="fill"
        bordered={false}
        shape="square"
        imageSrc={content}
        alt=""
        linked={false}
        actionable={false}
      />
      <div
        className="flex justify-end bg-transparent"
        style={{ position: "absolute", bottom: "0", right: "0" }}
      >
        <div className="flex">
          {tags.map((item, index) => (
            <div className="p-1">
              {/*(tag => {
                // Find matching icon
                const tagIcon = tagIcons.find(icon => icon.tag === item.tag);
                if (tagIcon) {
                  return <img src={tagIcon.imageSrc} alt={tagIcon.tag} />;
                } else {
                  return null;
                }
              })*/}
              <ImageIcon
                size={"small"}
                imageSrc={placeholdIcon}
                shape={"circle"}
                bordered={true}
                linked={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostContent;
