import React from 'react';
import Card from './Card';



const Cardlist = ({ robots }) => {
    const Cardpack = robots.map((user,i)  => {
        return <Card key = {robots[i].id} id={ robots[i].id } name={ robots[i].name} username={ robots[i].username } email = { robots[i].email}/>;
    })
    return (
        <div>
       {Cardpack}
       </div>
    );
}
export default Cardlist;