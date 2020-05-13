import React from "react";
import formatDate from '../utils/formatDate';

class Contact extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <article data-testid="contact" key={data.id} className="contact">
        <span className="contact__avatar">
          <img src={data.avatar} alt={data.name} />
        </span>
        <span className="contact__data">{data.name}</span>
        <span className="contact__data">{data.phone}</span>
        <span className="contact__data">{data.country}</span>
        <span className="contact__data">
          {formatDate(data.admissionDate)}
        </span>
        <span className="contact__data">{data.company}</span>
        <span className="contact__data">{data.department}</span>
      </article>
    );
  }
}

export default Contact;