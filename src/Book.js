const Book = (props) => {
  const { author, title, imageSource } = props;
  const children = props.children;

  const clickHandler = () => {
    alert(`You have clicked the 'Alert!' button for '${title}'`);
  };

  const logTitle = (title) => {
    console.log(`Clicked on ${title}`);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        logTitle(title);
      }}
    >
      <img
        className="image"
        src={imageSource}
        alt=""
        height="210"
        width="180"
      />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <blockquote>{children}</blockquote>
      <button type="button" onClick={clickHandler}>
        Alert!
      </button>
      <br></br>
      <button type="button" onClick={() => logTitle(title)}>
        Log Title
      </button>
    </article>
  );
};


export default Book;