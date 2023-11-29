import ImageIcon from "../profile/ImageIcon";
import placeholdIcon from "../../assets/images/placeholdIcon.png";

import animals from '../../assets/images/animals.png';
import art from '../../assets/images/art.png';
import books from '../../assets/images/books.png';
import food from '../../assets/images/food.png';
import funny from '../../assets/images/funny.png';
import gaming from '../../assets/images/gaming.png';
import lifestyle from '../../assets/images/lifestyle.png';
import movies from '../../assets/images/movies.png';
import music from '../../assets/images/music.png';
import news from '../../assets/images/news.png';
import photography from '../../assets/images/photography.png';
import science from '../../assets/images/science.png';
import sports from '../../assets/images/sports.png';
import technology from '../../assets/images/tech.png';
import travel from '../../assets/images/travel.png';

const visualTags = [
  { tag: "food", image: food},
  { tag: "sports", image: sports},
  { tag: "lifestyle", image: lifestyle},
  { tag: "news", image: news},
  { tag: "music", image: music},
  { tag: "movies", image: movies},
  { tag: "gaming", image: gaming},
  { tag: "funny", image: funny},
  { tag: "animals", image: animals},
  { tag: "science", image: science},
  { tag: "technology", image: technology},
  { tag: "art", image: art},
  { tag: "books", image: books},
  { tag: "travel", image: travel},
  { tag: "photography", image: photography}
]

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
 <div className="p-1"  key={index}>
      {visualTags.map((tag) => {
        if (tag.tag === item) {
          return (
             <ImageIcon
               key={tag.tag}
               size={"small"}
               imageSrc={tag.image}
               shape={"circle"}
               bordered={true}
               linked={false}
             />
          );
        } else {
          return null;
        }
      })}
    </div>
  ))}
        </div>
      </div>
    </div>
  );
};

export default PostContent;
