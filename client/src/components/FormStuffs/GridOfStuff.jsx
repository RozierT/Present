// this is going to be a grid that take in props for the number of columns and the number of rows and then renders a grid of that size
// it will also take in a prop for the content of each cell

const GridOfStuff = ({ columns, content }) => {

    let gridCols = `grid-cols-${columns}`
    return (
      <div className={`grid ${gridCols} gap-4`}>
{content}
      </div>
    );
  };
  
  export default GridOfStuff;
  