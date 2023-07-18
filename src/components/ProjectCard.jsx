import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, technicals, description, imgUrl }) => {
    return (
        <Col size={12} sm={12} md={6}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="" />
                <h4>{title}</h4>
                <div className="proj-txtx">
                    <h4>{description}</h4>
                    <span>{technicals}</span>
                </div>
            </div>
        </Col>
    );
};