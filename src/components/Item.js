import React, { Component } from 'react'
import { connect } from 'react-redux';
import { SELECT_ITEM } from '../actions/type'


class Item extends Component {

    render() {

        const { nama, desc, img_1 } = this.props.produk;
        return (
            <div className="col-md-4 turunin">
                <a href={`/detail?nama=` + nama}>
                    <div className="card mb-4 shadow-sm">
                        <img className="card-img-top" alt="Refer [100%x225]" style={{ height: '225px', width: '100%', display: 'block' }} src={img_1} data-holder-rendered="true" />
                        <div className="card-body">
                            <h4 className="card-text">{nama}</h4>
                            <p className="card-text">{desc}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <small className="text-muted">9 mins</small>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}
export default connect(null, { SELECT_ITEM })(Item)
