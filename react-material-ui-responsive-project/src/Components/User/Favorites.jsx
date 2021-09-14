import { Redirect } from "react-router-dom";

const Favorites = ({ authorized }) => {
  if (!authorized) {
    return <Redirect to="/Login" />;
  }
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quo
      voluptate sed amet, nesciunt iusto harum architecto aspernatur
      perspiciatis veniam accusantium molestias reiciendis ea repellendus
      numquam odio ducimus omnis sapiente. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Ea distinctio rerum, molestiae adipisci
      eaque nemo accusamus, aliquid dignissimos dolorem veritatis dolores
      temporibus excepturi vitae sapiente odit? Velit magni mollitia ut.
    </div>
  );
};

export default Favorites;
