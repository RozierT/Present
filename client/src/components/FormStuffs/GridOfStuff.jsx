// this is going to be a grid that take in props for the number of columns and the number of rows and then renders a grid of that size
// it will also take in a prop for the content of each cell

const GridOfStuff = ({ columns, arrayOfHtml }) => {

    let gridCols = `repeat(${columns}, 1fr)`; // Set the number of columns using CSS Grid's repeat function

    return (
      <div className={`justify-center grid`} style={{ gridTemplateColumns: gridCols, gap: '4px' }}>
        {arrayOfHtml}
      </div>
    );
  };
  
  export default GridOfStuff;
  

//   const visualTags = [
//     { tag: "food", image: placeHoldImage},
//     { tag: "sports", image: placeHoldImage},
//     { tag: "lifestyle", image: placeHoldImage},
//     { tag: "news", image: placeHoldImage},
//     { tag: "music", image: placeHoldImage},
//     { tag: "movies", image: placeHoldImage},
//     { tag: "gaming", image: placeHoldImage},
//     { tag: "funny", image: placeHoldImage},
//     { tag: "animals", image: placeHoldImage},
//     { tag: "science", image: placeHoldImage},
//     { tag: "technology", image: placeHoldImage},
//     { tag: "art", image: placeHoldImage},
//     { tag: "books", image: placeHoldImage},
//     { tag: "travel", image: placeHoldImage},
//     { tag: "photography", image: placeHoldImage}
// ]


//   const tagElements = visualTags.map((tag, index) => (
//     <div className='p-2' key={index}>
//       <ImageIcon content={tag.image} size={"small"} shape={"circle"} bordered={true}/>
//     </div>
//   ));

//   <GridOfStuff columns={"3"} arrayOfHtml={tagElements} />