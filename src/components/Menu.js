import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Loading } from './loading';

function RenderMenuItem ({dish}) {
   
        return (
            <Card>
                <Link to={`/menu/${dish.id}`}>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
                </Link>
            </Card>
        );
    }

const Menu = (props) => {
    if (props.dishes.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.dishes.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else{

        const menu = props.dishes.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1"  key={dish.id}>
                    <RenderMenuItem dish={dish}/>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link active>Menu</Link></BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h4>Menu</h4>
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}
export default Menu;